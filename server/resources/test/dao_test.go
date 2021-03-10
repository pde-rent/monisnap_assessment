package test

import (
	characterDao "assessment/datamodel/generated/dao/character"
	charCScoreDao "assessment/datamodel/generated/dao/character_cross_score"
	planetDao "assessment/datamodel/generated/dao/planet"
	planetCScoreDao "assessment/datamodel/generated/dao/planet_cross_score"
	speciesDao "assessment/datamodel/generated/dao/species"
	"log"
	"testing"
)

// TODO: test storage / updates

func TestFetchResources(t *testing.T) {

	planets := planetDao.FetchAll()
	species := speciesDao.FetchAll()
	characters := characterDao.FetchAll()

	planetCrossScores := planetCScoreDao.FetchAll()
	charCrossScores := charCScoreDao.FetchAll()

	log.Println("data:", planets, species, characters)
	log.Println("scores:", planetCrossScores, charCrossScores)
}
