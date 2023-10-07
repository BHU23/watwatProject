package main

import (
	"github.com/BHU23/watwatProject/entity"
	"github.com/BHU23/watwatProject/controller"
	"github.com/gin-gonic/gin"
)

const PORT = "8080"

func main() {

	entity.SetupDatabease()
	r := gin.Default()
	r.Use(CORSMiddleware())
	// Events Routes
	r.GET("/events", controller.ListEvents)
	r.GET("/events/:id", controller.GetEvent)
	r.POST("/events", controller.CreateEvent)
	r.PATCH("/events", controller.UpdateEvent)
	r.DELETE("/events/:id", controller.DeleteEvent)
	// Gender Routes
	r.GET("/eventTypes", controller.ListEventTypes)
	// Status Routes
	r.GET("/statuses", controller.ListEventTypes)
	// Host Routes
	r.POST("/hosts", controller.CreateHost)
	
	r.Run()
	
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
