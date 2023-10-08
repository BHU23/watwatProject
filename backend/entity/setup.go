package entity

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func SetupDatabease(){
	database, err := gorm.Open(sqlite.Open("watwat.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect database")
	}

	database.AutoMigrate(
		// &AccountWat{},
		// &Donate{},
		// &DonateType{},
		// &Donate{},
		&Event{},
		&EventType{},
		&Host{},
		// &Item{},
		// &ItemLoan{},
		// &ItemLoanItem{},
		&Member{},
		// &MemberRequest{},
		// &Monk{},
		// &Place{},
		// &PlaceUse{},
		// &PlaceUsePlace{},
		&Request{},
		// &Role{},
		&Status{},
		&Wat{},
	)
	db = database

	// EventType Data
	eventType := []EventType{
		{EventTypeName: "บวช"},
		{EventTypeName: "เพวส"},
		{EventTypeName: "บุญ"},
		{EventTypeName: "ศพ"},
		{EventTypeName: "กฐิน"},
	}

	for _, event := range eventType {
		db.Create(&event) // Assuming 'db' is your GORM database instance
	}
	statuses := []Status{
		{StatusName: "รออนุมัติ"},
		{StatusName: "อนุมัติ"},
		{StatusName: "ไม่อนุมัติ"},
		{StatusName: "รอจัดงาน"},
		{StatusName: "จัดงานแล้ว"},
	}

	for _, statuses := range statuses {
		db.Create(&statuses) // Assuming 'db' is your GORM database instance
	}
	}