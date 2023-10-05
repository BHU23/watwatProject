import '../../../../css/createEventRequest.css';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {Form, message,} from "antd";
import { IoIosAdd } from "react-icons/io";
import SubmitButton from '../../../../component/bnt/submitButton';
import { EventsInterface } from "../../../../interfaces/IEvent";
import { CreateEvent } from "../../../../services/https/event";

function CreateEventRequest() {
  let navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [input, setInput] = useState({
      EventName: '',
      DateBegin: '',
      TimeOfBegin: '',
      DateEnd: '',
      TimeOfEnd: '',
      OutPlace: '',
      UserTel: '',
      Description: '',
      EventID: '',
      EventTypeID: '',
      StatusID: '',
    })

    const handleInput  = (e:any) => {
      setInput({
        ...input,[e.target.name]: e.target.value
      });
    }

    const handleSubmit  = async (values: EventsInterface) => {
      values.EventName = input.EventName
      values.DateBegin = input.DateBegin
      values.TimeOfBegin = input.TimeOfBegin
      values.DateEnd = input.DateEnd
      values.TimeOfEnd = input.TimeOfEnd
      values.OutPlace = input.OutPlace
      values.Description = input.Description
      values.EventID = 1
      values.EventTypeID = 1
      values.StatusID = 1
      
      let res = await CreateEvent(values);
      if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        navigate("/");
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
      });
    }
    }
  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        onFinish={handleSubmit}
        autoComplete="off"
        className='warpper' >
        <div className="heandcontantcreate">
          <div className="heandpage title">ขอจัดกิจกรรม</div>
          <div className='heandpage eventRequest'><Link to="../EventRequest">กิจกรรมที่แจ้งขอจัด</Link></div>
          <div className="formNameEvent">
            <input type="text"
              className="heandpage nameEvent"
              placeholder='กรอกชื่อกิจกรรม'
              name="EventName"
              onChange={handleInput}
              required 
            />
            <select
              id="eventType"
              className='selects'
              name="EventType"
              onChange={handleInput}
              required 
            >
                <option value="/">ประเภท</option>
                <option value="merit">งานบุญ</option>
                <option value="ordinationCeremony">งานบวช</option>
                <option value="funeral">งานศพ</option>
                <option value="other">อื่นๆ</option>
              </select>
          </div>
        </div>
        <div className="dataEvent">
          <div className="data hosts">
              <div className='plusHost'>
                <label htmlFor="">รายนาม-เจ้าภาพ</label>
                <IoIosAdd className='icon plusHosts' />
              </div>
              <input 
                type="text" 
                id="้host1" 
                className="้host h1" 
                placeholder='1.'
                name="HostName"
                // onChange={handleInput}
                // required 
                />
              {/* <input 
                type="text" 
                id="้host2" 
                className="้host h2" 
                placeholder='2.'
                name="Email"
                onChange={handleInput}
                required />
                
              <input 
                type="text" 
                id="้host3" 
                className="้host h3" 
                placeholder='3.'
                name="Email"
                onChange={handleInput}
                required 
              /> */}
          </div>
          <div className="data dateTimeEvent">
              <label htmlFor="">ระยะเวลา<span className='more dateTime'> (วัน-เวลา หากมีมหรสพให้รวมไปด้วย)</span></label>
              <div className="dateTimeData">
                <label htmlFor="">วันเริ่มกิจกรรม</label>
                <label htmlFor="">ถึง</label>
                <input
                  type="date"
                  id="" 
                  name="DateBegin"
                  onChange={handleInput}
                  required />
                <input
                  type="date"
                  id="" 
                  name="DateEnd"
                  onChange={handleInput}
                  required />
                <label htmlFor="">เวลาเริ่มกิจกรรม</label>
                <label htmlFor="">ถึง</label>
                <input
                  type="time"
                  id="" 
                  name="TimeOfBegin"
                  onChange={handleInput}
                  required />
                <input
                  type="time"
                  id="" 
                  name="TimeOfEnd"
                  onChange={handleInput}
                  required />
              </div>
          </div>
          <div className="data tel">
              <label htmlFor="" className='item'>เบอร์โทรศัพท์</label>
            <input type="tel" id="" placeholder='กรอกเบอร์โทร Ex.04444444444' className='item'
              name="UserTel"
              onChange={handleInput}
              required/>
          </div>
          {/* <div className="data place">
            <label htmlFor="">สถานที่จัดงาน (ในวัด)</label>
            <label htmlFor="">เลขที่การจองสถานที่</label>
            <label htmlFor=""></label>
            <select name="eventType" id="place" className='selects' >
                <option value="/">เลือกสถานที่</option>
                <option value="merit">งานบุญ</option>
                <option value="ordinationCeremony">งานบวช</option>
                <option value="funeral">งานศพ</option>
                <option value="other">อื่นๆ</option>
              </select>
              <input type="text" name="" id="" placeholder='เช่น. 1001' />
              <IoIosAdd className='icon entertrainment'></IoIosAdd>
            </div> */}
            <div className="placeOut">
              <label htmlFor="">สถานที่จัดงาน<span className='more'>(นอกวัด)</span></label>
            <input type="text" id="" placeholder='กรอกที่ตั้ง เช่น 111/3 บ.สุรนารี ต.สุรนารี อ.เมืองนครราชสีมา จ.นครราชสีมา'
              name="OutPlace"
              onChange={handleInput}
              required/>
            </div>
          <div className="data entertrainment">
            <label htmlFor="">กิจกรรมนี้เป็นมหรสพใช่หรือไม่<span className='more'> (หากใช่กรุนากรอกเลขที่กิจกกรมที่เป็นกิจกรรมหลัก)</span></label>
            <div className='entertrainments'>
              <input type="radio" id="switch_left" name="switchToggle" value=""/> <label htmlFor="switch_left">ใช่</label>
              <input type="radio" id="switch_right" name="switchToggle" value="" /> <label htmlFor="switch_right">ไม่ใช่</label>
            </div>
            <input type="number"  id="" className='noEntertrainment' placeholder='เลขที่คำขอกิจกรรม'
              name="EventID"
              onChange={handleInput}
              required/>
          </div>
          <div className="data description">
            <label htmlFor="">คำอธิบายกิจกรรม</label>
            <textarea
              id="description"
              name="Description"
              onChange={handleInput}
              required
            />
          </div>
          <div className='submitEventRequest'>
            <SubmitButton/>
            </div>
          </div>
      </Form>
    </>
  );
}

export default CreateEventRequest;
