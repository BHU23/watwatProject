import React from 'react';
import '../../../css/requestEvent.css';
import EventRequestHistory from '../../../component/eventRequestHistory';
import {
BrowserRouter as Router,
Routes,
Route,
Link,
} from "react-router-dom";
import SidebarCreater from '../../../navbar/sidebarCreater';
function RequsetEvent() {
  return (
    <div className='warpperAddEvent'>
      <div className='sidebarCreater'>
        <SidebarCreater></SidebarCreater>
      </div>
      <div className="contantAddEvent">
        <div className="title"><span>คำขอจัดกิจกรรม</span>
          {/* <div className="filter">
            <div className="filter-item all">
              
            </div>
            <select className="filter-item">

            </select>
            <select className="filter-item">

            </select>
          </div> */}
        </div>
        {/* <table className="requestEvent ">
          <tr>
            <th className='title-name'><span>เลขที่คำขอ</span></th>
            <th className='title-name'><span>วันที่</span></th>
            <th className='title-name'><span>ชื่อผู้ขอจัดกิจกรรม</span></th>
            <th className='title-name'><span>รายละเอียด</span></th>
            <th className='title-name'><span>สถานะ</span></th>
            <th className='title-name'><span>สถานะการจัดงาน</span></th>
          </tr>
        </table> */}
        <div className="requestEvent">
          <div className="requestEvent-item th">
            <div className='title-name'><span>เลขที่คำขอ</span></div>
            <div className='title-name'><span>วันที่</span></div>
            <div className='title-name'><span>ชื่อผู้ขอจัดกิจกรรม</span></div>
            <div className='title-name'><span>รายละเอียด</span></div>
            <div className='title-name'><span>สถานะ</span></div>
            <div className='title-name'><span>สถานะการจัดงาน</span></div>
          </div>
          <div className="requestEvent-item data">
            <div className='dataEventRequestColunm'>
              <div className='dataItem'>
                <span>1001</span>
              </div>
              <div className='dataItem'>
                <span>1002</span>
              </div >
            </div>
            <div className='dataEventRequestColunm'>
              <div className='dataItem'>
                <span>22/04/2566</span>
              </div>
              <div className='dataItem'>
                <span>18/08/2566</span>
              </div >
            </div>
            <div className='dataEventRequestColunm'>
              <div className='dataItem'>
                <span>นายภูวดล ศรีธร</span>
              </div>
              <div className='dataItem'>
                <span>นายณฐพล ศักวิบูลเดชา</span>
              </div >
            </div>
            <div className='dataEventRequestColunm'>
              <div className='dataItem'>
                <Link to="./eventDetails"><span>คลิกดพื่อดูข้อมูล</span></Link>
              </div>
              <div className='dataItem'>
                <Link to="./eventDetails"><span>คลิกดพื่อดูข้อมูล</span></Link>
              </div >
            </div>
            <div className='dataEventRequestColunm'>
              <div className='dataItem'>
                <span>รออนุมัติ</span>
              </div>
              <div className='dataItem'>
                <span>อนุมัติ</span>
              </div >
            </div>
            <div className='dataEventRequestColunm'>
              <div className='dataItem'>
                <span>-</span>
              </div>
              <div className='dataItem'>
                <span>จัดแล้ว</span>
              </div >
            </div>
          </div>
        </div>
        <div>
          <div className="filterPage">
            <div className="filter">
            <div className="filter-item all">
              <span>ทั้งหมด</span>
            </div>
            <select className="filter-item">

            </select>
            <select className="filter-item">

            </select>
          </div> 
          <div className="paganav">เลื่อนหน้า</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequsetEvent;
