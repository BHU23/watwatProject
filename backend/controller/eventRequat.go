package controller

import (
	"net/http"

	"github.com/BHU23/watwatProject/entity"
	"github.com/gin-gonic/gin"
)

// POST /Events
func CreateEvent(c *gin.Context) {
	var event entity.Event
	var eventType entity.EventType
	// var eventMain entity.Event
	// var status entity.Status

	// bind เข้าตัวแปร Event
	if err := c.ShouldBindJSON(&event); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ค้นหา eventType ด้วย id
	if tx := entity.DB().Where("id = ?", event.EventTypeID).First(&eventType); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "eventType not found"})
		return
	}

	// // ค้นหา eventMain ด้วย id
	// if tx := entity.DB().Where("id = ?", event.EventID).First(&eventMain); tx.RowsAffected == 0 {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "eventType not found"})
	// 	return
	// }

	// // ค้นหา status ด้วย id
	// if tx := entity.DB().Where("id = ?", event.Status).First(&status); tx.RowsAffected == 0 {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "status not found"})
	// 	return
	// }

	// สร้าง event
	u := entity.Event{
		EventName:   event.EventName,
		DateBegin:   event.DateBegin,
		TimeOfBegin: event.TimeOfBegin,
		DateEnd:     event.DateEnd,
		TimeOfEnd:   event.TimeOfEnd,
		OutPlace:    event.OutPlace,
		UserTel:     event.UserTel,
		Description: event.Description,
		// ParentEvent: &eventMain,
		EventType: eventType,
		// Status:    	status,
	}

	// บันทึก
	if err := entity.DB().Create(&u).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": u})
}

// GET /event/:id
func GetEvent(c *gin.Context) {
	var event entity.Event
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM events WHERE id = ?", id).Scan(&event).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": event})
}

// GET /events
func ListEvents(c *gin.Context) {
	var events []entity.Event
	if err := entity.DB().Raw("SELECT * FROM events").Scan(&events).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": events})
}

// DELETE /events/:id
func DeleteEvent(c *gin.Context) {
	id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM events WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "event not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}

// PATCH /events
func UpdateEvent(c *gin.Context) {
	var event entity.Event
	if err := c.ShouldBindJSON(&event); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if tx := entity.DB().Where("id = ?", event.ID).First(&event); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "event not found"})
		return
	}

	if err := entity.DB().Save(&event).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": event})
}
