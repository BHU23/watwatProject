import React, { useState } from 'react';
import {
BrowserRouter as Router,
Routes,
Route,
Link,
} from "react-router-dom";

import {
  Space,
  Button,
  Col,
  Row,
  Divider,
  Form,
  Input,
  Card,
  message,
} from "antd";
// import { IoIosAdd } from "react-icons/io";
// import '../../../../css/createEventRequest.css';
// import SubmitButton from '../../../../component/bnt/submitButton';

import { EventsInterface } from "../../../../interfaces/IEvent";
import { CreateEvent } from "../../../../services/https/event";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

function CreateEventRequest() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = async (values: EventsInterface) => {
    let res = await CreateEvent(values);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        navigate("/customer");
      }, 2000);
    } else {
      console.log(res);
    }
  };
  return (
    <div>
      {contextHolder}
      <>
        <h2> เพิ่มข้อมูล ผู้ดูแลระบบ</h2>
        <Divider />
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
              <Form.Item
                label="ชื่อจริง"
                name="FirstName"
                rules={[
                  {
                    required: true,
                    message: "กรุณากรอกชื่อ !",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
              <Form.Item
                label="นามกสุล"
                name="LastName"
                rules={[
                  {
                    required: true,
                    message: "กรุณากรอกนามสกุล !",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
              <Form.Item
                label="อีเมล"
                name="Email"
                rules={[
                  {
                    type: "email",
                    message: "รูปแบบอีเมลไม่ถูกต้อง !",
                  },
                  {
                    required: true,
                    message: "กรุณากรอกอีเมล !",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
              <Form.Item
                label="เบอร์โทรศัพท์"
                name="Phone"
                rules={[
                  {
                    required: true,
                    message: "กรุณากรอกเบอร์โทรศัพท์ !",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="end">
            <Col style={{ marginTop: "40px" }}>
              <Form.Item>
                <Space>
                  <Button htmlType="button" style={{ marginRight: "10px" }}>
                    ยกเลิก
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<PlusOutlined />}
                  >
                    ยืนยัน
                  </Button>
                </Space>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </>
    </div>
    // <>
    //   <form className='warpper' onSubmit={onFinish}>
    //     <div className="heandcontantcreate">
    //       <div className="heandpage title">ขอจัดกิจกรรม</div>
    //       <div className='heandpage eventRequest'><Link to="../EventRequest">กิจกรรมที่แจ้งขอจัด</Link></div>
    //       <div className="formNameEvent">
    //         <input type="text" className="heandpage nameEvent" placeholder='กรอกชื่อกิจกรรม'/>
    //           <select name="eventType" id="eventType" className='selects' >
    //             <option value="/">ประเภท</option>
    //             <option value="merit">งานบุญ</option>
    //             <option value="ordinationCeremony">งานบวช</option>
    //             <option value="funeral">งานศพ</option>
    //             <option value="other">อื่นๆ</option>
    //           </select>
    //       </div>
    //     </div>
    //     <div className="dataEvent">
    //       <div className="data hosts">
    //           <div className='plusHost'>
    //             <label htmlFor="">รายนาม-เจ้าภาพ</label>
    //             <IoIosAdd className='icon plusHosts' />
    //           </div>
    //           <input type="text" name="" id="้host1" className="้host h1" placeholder='1.'/>
    //           <input type="text" name="" id="้host2" className="้host h2" placeholder='2.'/>
    //           <input type="text" name="" id="้host3" className="้host h3" placeholder='3.'/>
    //       </div>
    //       <div className="data dateTimeEvent">
    //           <label htmlFor="">ระยะเวลา<span className='more dateTime'> (วัน-เวลา หากมีมหรสพให้รวมไปด้วย)</span></label>
    //           <div className="dateTimeData">
    //             <label htmlFor="">วันเริ่มกิจกรรม</label>
    //             <label htmlFor="">ถึง</label>
    //               <input type="date" name="" id="" />
    //               <input type="date" name="" id="" />
    //             <label htmlFor="">เวลาเริ่มกิจกรรม</label>
    //             <label htmlFor="">ถึง</label>
    //             <input type="time" name="" id="" />
    //               <input type="time" name="" id="" />
    //           </div>
    //       </div>
    //       <div className="data tel">
    //           <label htmlFor="" className='item'>เบอร์โทรศัพท์</label>
    //           <input type="tel" name="" id="" placeholder='กรอกเบอร์โทร Ex.04444444444' className='item'/>
    //       </div>
    //       <div className="data place">
    //         <label htmlFor="">สถานที่จัดงาน (ในวัด)</label>
    //         <label htmlFor="">เลขที่การจองสถานที่</label>
    //         <label htmlFor=""></label>
    //         <select name="eventType" id="place" className='selects' >
    //             <option value="/">เลือกสถานที่</option>
    //             <option value="merit">งานบุญ</option>
    //             <option value="ordinationCeremony">งานบวช</option>
    //             <option value="funeral">งานศพ</option>
    //             <option value="other">อื่นๆ</option>
    //           </select>
    //           <input type="text" name="" id="" placeholder='เช่น. 1001' />
    //           <IoIosAdd className='icon entertrainment'></IoIosAdd>
    //         </div>
    //         <div className="placeOut">
    //           <label htmlFor="">สถานที่จัดงาน (นอกวัด)</label>
    //           <input type="" name="" id="" placeholder='กรอกที่ตั้ง เช่น 111/3 บ.สุรนารี ต.สุรนารี อ.เมืองนครราชสีมา จ.นครราชสีมา'/>
    //         </div>
    //       <div className="data entertrainment">
    //         <label htmlFor="">กิจกรรมนี้เป็นมหรสพใช่หรือไม่<span className='more'> (หากใช่กรุนากรอกเลขที่กิจกกรมที่เป็นกิจกรรมหลัก)</span></label>
    //         <div className='entertrainments'>
    //           <input type="radio" id="switch_left" name="switchToggle" value=""/> <label htmlFor="switch_left">ใช่</label>
    //           <input type="radio" id="switch_right" name="switchToggle" value="" /> <label htmlFor="switch_right">ไม่ใช่</label>
    //         </div>
    //         <input type="text" name="" id="" className='noEntertrainment' placeholder='เลขที่คำขอกิจกรรม'/>
    //       </div>
    //       <div className="data description">
    //         <label htmlFor="">คำอธิบายกิจกรรม</label>
    //         <textarea name="" id="description" ></textarea>
    //       </div>
    //       <div className='submitEventRequest'>
    //         <SubmitButton/>
    //         </div>
    //       </div>
    //   </form>
    // </>
  );
}

export default CreateEventRequest;
