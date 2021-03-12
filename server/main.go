package main

import (
	. "assessment"
	wsHandlers "assessment/server/handlers/ws"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/websocket/v2"
	"log"
	"strconv"
	"time"
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
	app.Static(GetStaticRoot(), STATIC_FOLDER_PATH, fiber.Static{
		Compress:      true,
		ByteRange:     true,
		Browse:        true,
		Index:         "index.html",
		CacheDuration: 10 * time.Second,
		MaxAge:        3600})
	log.Fatal(app.Listen(":" + strconv.Itoa(PORT)))
}
