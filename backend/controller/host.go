package controller

import (
	"net/http"

	"github.com/BHU23/watwatProject/entity"
	"github.com/gin-gonic/gin"
)

// POST /Events
func CreateHost(c *gin.Context) {
	var host entity.Host
	// var event entity.Event

	// bind เข้าตัวแปร host
	if err := c.ShouldBindJSON(&host); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ค้นหา event ด้วย id
	// if tx := entity.DB().Where("id = ?", event.EventID).First(&event); tx.RowsAffected == 0 {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "event not found"})
	// 	return
	// }

	u := entity.Host{
		HostName:   host.HostName,
		// Event:   event,
	}
		// บันทึก
	if err := entity.DB().Create(&u).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// สร้าง event
}