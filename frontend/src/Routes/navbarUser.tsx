import React from 'react'
import '../css/navbar.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
} from "react-router-dom";
    
// import Header from '../componant/header';
// import Footer from '../componant/footer';
// import Login from '../pages/login';
// import Search from '../pages/pagesUser/search';
// import Register from '../pages/register';
// import Main from '../pages/pagesUser/main';
// import EventRequest from '../pages/pagesUser/eventRequest';
// import CreateEventRequest from '../pages/pagesUser/eventRequest/createEventRequest';
// import LoanItemRequest from '../pages/pagesUser/loanItemRequest';
// import PlaceUseRequest from '../pages/pagesUser/placeUseRequest';
// import Donate from '../pages/pagesUser/donate';
export default function NavbarUser() {
    return (
        <>
            <div className='horizontal-menu'>
                <ul>
                    <li className='manu-1'><NavLink to="./main">หน้าหลัก</NavLink></li>
                    <li className='manu-2'><NavLink to="./eventRequest">ขอจัดกิจกรรม</NavLink></li>
                    <li className='manu-3'><NavLink to="./itemRequest">ขอใช้สถานที่</NavLink></li>
                    <li className='manu-4'><NavLink to="./placeRequest">ขอยืม/คืนสิ่งของ</NavLink></li>
                    <li className='manu-5'><NavLink to="./donate">บริจาค</NavLink></li>
                </ul>
            </div>
            {/* <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/search" element={<Search/>} />
                <Route path="/main" element={<Main/>} />
                <Route path="/eventRequest" element={<EventRequest />} />
                <Route path="/itemRequest" element={<LoanItemRequest />} />
                <Route path="/placeRequest" element={<PlaceUseRequest />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/eventRequest/createEventRequest" element={<CreateEventRequest />} />
            </Routes> */}
        </>      
  )
}