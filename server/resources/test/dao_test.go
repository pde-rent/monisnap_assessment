package test

import (
	"log"
	characterDao "star_wars_clash/datamodel/generated/dao/character"
	charCScoreDao "star_wars_clash/datamodel/generated/dao/character_cross_score"
	planetDao "star_wars_clash/datamodel/generated/dao/planet"
	planetCScoreDao "star_wars_clash/datamodel/generated/dao/planet_cross_score"
	speciesDao "star_wars_clash/datamodel/generated/dao/species"
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
