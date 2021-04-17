package test

import (
	"log"
	"star_wars_clash/server/actions"
	"star_wars_clash/server/resources"
	"star_wars_clash/utils"
	"testing"
)

func TestLikeCharacter(t *testing.T) {

	charRef := uint64(1)
	charCmd := uint64(2)
	liked := charRef
	req := append(utils.Uint64ToBytes(charRef), utils.Uint64ToBytes(charCmd)...)
	req = append(req, utils.Uint64ToBytes(liked)...)

	_, err := actions.Like(resources.CHARACTER, req)
	if err != nil {
		log.Fatal(err)
	}
}
