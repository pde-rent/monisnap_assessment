package main

import (
	. "assessment"
	wsHandlers "assessment/server/handlers/ws"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/websocket/v2"
	"log"
	"strconv"
	"crypto/tls"
)

func main() {

	app := fiber.New()
	app.Use("/ws", func(c *fiber.Ctx) error {
		// IsWebSocketUpgrade returns true if the client
		// requested upgrade to the WebSocket protocol.
		if websocket.IsWebSocketUpgrade(c) {
			c.Locals("allowed", true)
				return c.Next()
		}
		return fiber.ErrUpgradeRequired
	})

	app.Get(GetWsRoot(), websocket.New(wsHandlers.MainWsHandler))
	//app.Static(GetStaticRoot(), STATIC_FOLDER_PATH)
	app.Static(GetStaticRoot(), STATIC_FOLDER_PATH)
	// Create tls certificate
	cer, err := tls.LoadX509KeyPair(
		"/etc/ssl/certs/drift.capital.pem",
		"/etc/ssl/private/drift.capital.key")
	if err != nil { log.Fatal(err) }
	config := &tls.Config{Certificates: []tls.Certificate{cer}}
	// Create custom listener
	listener, err := tls.Listen("tcp", ":" + strconv.Itoa(PORT), config)
	if err != nil { panic(err) }

	log.Fatal(app.Listener(listener))
}
