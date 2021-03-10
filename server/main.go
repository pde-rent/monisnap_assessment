package main

import (
	wsHandlers "assessment/server/handlers/ws"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/websocket/v2"
	"log"
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

	app.Get("/ws/v1/main", websocket.New(wsHandlers.MainWsHandler))
	app.Static("/", "./client/public")

	log.Fatal(app.Listen(":8081"))
}
