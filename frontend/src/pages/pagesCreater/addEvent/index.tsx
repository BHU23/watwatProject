import React from 'react';
import '../../../css/eventRequest.css';
import '../../../css/requestEvent.css';
import EventRequestHistory from '../../../component/eventRequestHistory';
import {
BrowserRouter as Router,
Routes,
Route,
Link,
} from "react-router-dom";
import SidebarCreater from '../../../navbar/sidebarCreater';
function AddEvent() {
  return (
    <div className='warpperAddEvent'>
      <div className='sidebarCreater'>
        <SidebarCreater></SidebarCreater>
      </div>
      <div className="contantAddEvent addEvent">
        <div className='warpper'>
          <div className="contant">
            <div className="heandcontantdata">
              <div className="heandpagedata title">กิจกรรมที่แจ้งขอจัด</div>
              <div className='heandpagedata addEvent'><Link to="./createEvent">+ ขอจัดกิจกรรม</Link></div>
            </div>
            <div className="eventRequestHistory" >
              <EventRequestHistory />
              <EventRequestHistory />
              <EventRequestHistory />
              <EventRequestHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default AddEvent;
