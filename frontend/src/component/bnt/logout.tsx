import React from 'react'
import '../../css/btnLogout.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
    } from "react-router-dom";
export default function Logout() {
  return (
    <Link className="btn logout" to="/">ออกจากระบบ</Link>
  )
}
