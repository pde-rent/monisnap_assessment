package actions

import (
	"assessment/datamodel/adapter"
	characterDao "assessment/datamodel/generated/dao/character"
	charAScoreDao "assessment/datamodel/generated/dao/character_absolute_score"
	charCScoreDao "assessment/datamodel/generated/dao/character_cross_score"
	planetDao "assessment/datamodel/generated/dao/planet"
	planetAScoreDao "assessment/datamodel/generated/dao/planet_absolute_score"
	planetCScoreDao "assessment/datamodel/generated/dao/planet_cross_score"
	speciesDao "assessment/datamodel/generated/dao/species"
	. "assessment/datamodel/generated/proto/entities"
	"assessment/server/resources"
	"assessment/utils"
	"errors"
	"github.com/golang/protobuf/proto"
	"log"
)

// max 999 actions
// max int.max / 1000 resources
const (
	GET     = 0
	LIKE    = 1
	DISLIKE = 2
	UPDATE  = 3
)

func TopicBytesToActionResource(msg []byte) (int32, int32, error) {
	topic := utils.BytesToInt32(msg[:4])
	resource := topic / 1000
	action := topic - resource * 1000
	return action, resource, nil
}

func ActionResourceToTopicBytes(action, resource int32) []byte {
	return utils.Int32ToBytes(action + resource * 1000)
}

func GetPlanetCrossScore(ref, cmp, liked uint64) *PlanetCrossScore {

	scores := planetCScoreDao.FromRows(
		adapter.Select(
			planetCScoreDao.TABLE_NAME,
			planetCScoreDao.COLUMNS_TO_UPDATE,
			[]string{planetCScoreDao.REF, planetCScoreDao.CMP},
			[]string{"=", "="},
			[]interface{}{ref, cmp}))
	var score *PlanetCrossScore
	if len(scores) > 0 {
		score = scores[0]
	} else {
		score = &PlanetCrossScore{
			Ref:      ref,
			Cmp:      cmp,
			RefLikes: 0,
			CmpLikes: 0}
	}
	if liked == ref { score.RefLikes++ } else { score.CmpLikes++ }
	return score
}

func GetPlanetAbsoluteScore(id uint64, isLiked bool) *PlanetAbsoluteScore {

	scores := planetAScoreDao.GetBy(planetAScoreDao.REF, id)
	var score *PlanetAbsoluteScore
	if len(scores) > 0 {
		score = scores[0]
	} else {
		score = &PlanetAbsoluteScore{
			Ref:      id,
			Likes:    0,
			Dislikes: 0}
	}
	if isLiked { score.Likes++ } else { score.Dislikes++ }
	return score
}

func GetCharCrossScore(ref, cmp, liked uint64) *CharacterCrossScore {

	scores := charCScoreDao.FromRows(
		adapter.Select(
			charCScoreDao.TABLE_NAME,
			charCScoreDao.COLUMNS_TO_UPDATE,
			[]string{charCScoreDao.REF, charCScoreDao.CMP},
			[]string{"=", "="},
			[]interface{}{ref, cmp}))
	var score *CharacterCrossScore
	if len(scores) > 0 {
		score = scores[0]
	} else {
		score = &CharacterCrossScore{
			Ref:      ref,
			Cmp:      cmp,
			RefLikes: 0,
			CmpLikes: 0}
	}
	if liked == ref { score.RefLikes++ } else { score.CmpLikes++ }
	return score
}

func GetCharAbsoluteScore(id uint64, isLiked bool) *CharacterAbsoluteScore {

	scores := charAScoreDao.GetBy(planetAScoreDao.REF, id)
	var score *CharacterAbsoluteScore
	if len(scores) > 0 {
		score = scores[0]
	} else {
		score = &CharacterAbsoluteScore{
			Ref:      id,
			Likes:    0,
			Dislikes: 0}
	}
	if isLiked { score.Likes++ } else { score.Dislikes++ }
	return score
}

func Like(resource int32, body []byte) ([][]byte, error) {

	// TODO: genericize the scores to avoid duplication
	// decomplexify the DAO layer
	switch resource {

	case resources.PLANET:
		ref := utils.BytesToUint64(body[:8])
		cmp := utils.BytesToUint64(body[8:16])
		liked := utils.BytesToUint64(body[16:24])
		// scores[0] = ref, [1] = cmp
		refScore := GetPlanetAbsoluteScore(ref, liked == ref)
		cmpScore := GetPlanetAbsoluteScore(cmp, liked == cmp)
		crossScore := GetPlanetCrossScore(ref, cmp, liked)
		planetAScoreDao.UpdateOne(refScore)
		planetAScoreDao.UpdateOne(cmpScore)
		planetCScoreDao.UpdateOne(crossScore)
		aScoreUpdate, err2 := proto.Marshal(&PlanetAbsoluteScores{Values: []*PlanetAbsoluteScore{ refScore, cmpScore }})
		cScoreUpdate, err1 := proto.Marshal(&PlanetCrossScores{Values: []*PlanetCrossScore{ crossScore }})
		// TODO: better manage errors, breaking on the return statement here
		if err1 != nil || err2 != nil { log.Println(err1, err2) }
		aScoreUpdateTopic := ActionResourceToTopicBytes(UPDATE, resources.PLANET_ABSOLUTE_SCORE)
		cScoreUpdateTopic := ActionResourceToTopicBytes(UPDATE, resources.PLANET_CROSS_SCORE)
		return [][]byte{
			append(aScoreUpdateTopic, aScoreUpdate...),
			append(cScoreUpdateTopic, cScoreUpdate...) }, nil

	case resources.CHARACTER:
		ref := utils.BytesToUint64(body[:8])
		cmp := utils.BytesToUint64(body[8:16])
		liked := utils.BytesToUint64(body[16:24])
		// scores[0] = ref, [1] = cmp
		refScore := GetCharAbsoluteScore(ref, liked == ref)
		cmpScore := GetCharAbsoluteScore(cmp, liked == cmp)
		crossScore := GetCharCrossScore(ref, cmp, liked)
		charAScoreDao.UpdateOne(refScore)
		charAScoreDao.UpdateOne(cmpScore)
		charCScoreDao.UpdateOne(crossScore)
		aScoreUpdate, err2 := proto.Marshal(&CharacterAbsoluteScores{Values: []*CharacterAbsoluteScore{ refScore, cmpScore }})
		cScoreUpdate, err1 := proto.Marshal(&CharacterCrossScores{Values: []*CharacterCrossScore{ crossScore }})
		// TODO: better manage errors, breaking on the return statement here
		if err1 != nil || err2 != nil { log.Println(err1, err2) }
		aScoreUpdateTopic := ActionResourceToTopicBytes(UPDATE, resources.CHARACTER_ABSOLUTE_SCORE)
		cScoreUpdateTopic := ActionResourceToTopicBytes(UPDATE, resources.CHARACTER_CROSS_SCORE)
		return [][]byte{
			append(aScoreUpdateTopic, aScoreUpdate...),
			append(cScoreUpdateTopic, cScoreUpdate...) }, nil

	default: return nil, errors.New("unknown resource")
	}
}

func Dislike(resource int32, body []byte) ([]byte, error) {

	// TODO: implement? Should not be necessary
	return nil, errors.New("not implemented")
	//return nil, errors.New("Dislike failed")
}

func Get(resource int32) ([][]byte, error) {

	var body []byte
	var err error
	// TODO: genericize the retrieval and serialization with a function pointer map
	switch resource {
	case resources.PLANET: body, err = proto.Marshal(&Planets{Values: planetDao.FetchAll()})
	case resources.SPECIES: body, err = proto.Marshal(&SpeciesList{Values: speciesDao.FetchAll()})
	case resources.CHARACTER: body, err = proto.Marshal(&Characters{Values: characterDao.FetchAll()})
	case resources.PLANET_ABSOLUTE_SCORE: body, err = proto.Marshal(&PlanetAbsoluteScores{Values: planetAScoreDao.FetchAll()})
	case resources.PLANET_CROSS_SCORE: body, err = proto.Marshal(&PlanetCrossScores{Values: planetCScoreDao.FetchAll()})
	case resources.CHARACTER_ABSOLUTE_SCORE: body, err = proto.Marshal(&CharacterAbsoluteScores{Values: charAScoreDao.FetchAll()})
	case resources.CHARACTER_CROSS_SCORE: body, err = proto.Marshal(&CharacterCrossScores{Values: charCScoreDao.FetchAll()})
	default: return nil, errors.New("resource unknown")
	}
	if err == nil && body != nil {
		return [][]byte{ append(ActionResourceToTopicBytes(GET, resource), body...) }, nil
	}
	return nil, err
}
