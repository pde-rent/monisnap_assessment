package ws

import (
	"log"
	"star_wars_clash/server/actions"

	"github.com/gofiber/websocket/v2"
)

var _v = struct{}{}

var CON_SET map[*websocket.Conn]struct{} = map[*websocket.Conn]struct{}{}

func MainWsHandler(c *websocket.Conn) {
	// c.Locals is added to the *websocket.Conn
	// can access c.Locals(""), c.Params(""), c.Query(""), c.Cookies("")
	var (
		messageType int
		msg         []byte
		err         error
		res         [][]byte // multipart message
	)
	// add the connection to our set
	CON_SET[c] = _v
	for {
		if messageType, msg, err = c.ReadMessage(); err != nil {
			wsCloseCallback(c, err)
			break
		}
		// TODO: this can be made a lot more generic / dynamic
		action, resource, _ := actions.TopicBytesToActionResource(msg[:4])
		body := msg[4:]
		switch action {
		case actions.GET:
			res, err = actions.Get(resource)
			if !write(c, messageType, res, true) {
				break
			}
		case actions.LIKE:
			res, err = actions.Like(resource, body)
			writeAll(messageType, res, false)
			//case actions.DISLIKE: res1, err = actions.Dislike(resource, body)
		}
	}
}

func wsCloseCallback(c *websocket.Conn, err error) {
	// TODO: implement a proper reconnection / log strategy
	// stop listening to the client after an error was encountered either on read / write side
	// a reconnecting strategy could be used here in order to deal with connection issues
	log.Printf("Closing connection %v: %v\n", c.RemoteAddr(), err)
	delete(CON_SET, c)
}

func write(c *websocket.Conn, messageType int, messages [][]byte, closeOnError bool) bool {

	for i := 0; i < len(messages); i++ {
		if err := c.WriteMessage(messageType, messages[i]); err != nil {
			log.Println(err)
			if closeOnError {
				wsCloseCallback(c, err)
				c.Close()
			}
			return false
		} else {
			log.Printf("%dkB to %v\n", len(messages[i])/1000, c.RemoteAddr())
		}
	}
	return true
}

// TODO: add a blacklist argument to exclude some clients from being delivered (i.e. initiators)
func writeAll(messageType int, messages [][]byte, closeOnError bool) int {

	consumers := 0
	for c, _ := range CON_SET {
		if write(c, messageType, messages, closeOnError) {
			consumers++
		}
	}
	return consumers
}
