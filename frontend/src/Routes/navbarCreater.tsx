import React from 'react'
import '../../css/navbar.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
    } from "react-router-dom";
export default function NavbarCreater() {
  return (
    <div className='horizontal-menu'>
        <ul>
            <li className='manu-1'><NavLink to="./main">หน้าหลัก</NavLink></li>
            <li className='manu-2'><NavLink to="./eventRequest">แจ้งจัดกิจกรรม</NavLink></li>
            <li className='manu-3'><NavLink to="./itemRequest">แจ้งใช้สถานที่</NavLink></li>
            <li className='manu-4'><NavLink to="./placeRequest">แจ้งใช้สิ่ง/คืนสิ่งของ</NavLink></li>
            <li className='manu-5'><NavLink to="./donate">สร้างข้อมูลวัด</NavLink></li>
        </ul>
    </div>
  )
}
