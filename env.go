package assessment

import "strconv"

const (
	WS_PATH            = "/ws"
	WS_VERSION         = 1
	STATIC_FOLDER_PATH = "./client/public"
	ROOT_URL           = "/star-wars-clash"
	STATIC_PREFIX      = ""
	PORT               = 8081
)

func GetWsRoot() string {
	return ROOT_URL + WS_PATH + "/v" + strconv.Itoa(WS_VERSION)
}

func GetStaticRoot() string {
	return ROOT_URL + "/" + STATIC_PREFIX
}
