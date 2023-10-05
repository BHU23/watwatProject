package controller

import (
	"net/http"

	"github.com/BHU23/watwatProject/entity"
	"github.com/gin-gonic/gin"
)

// GET /eventTypes
func ListEventTypes(c *gin.Context) {
	var eventTypes []entity.EventType
	if err := entity.DB().Raw("SELECT * FROM event_types").Scan(&eventTypes).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": eventTypes})
}
