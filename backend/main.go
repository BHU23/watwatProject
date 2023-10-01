package main

import (
	"github.com/BHU23/WATWAT/entity"
	"github.com/gin-gonic/gin"
)

const PORT = "8080"

func main() {

	entity.SetupDatabease()
	r := gin.Default()

	r.Run("localhhost: " + PORT)
}
