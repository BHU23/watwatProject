import React from 'react'
import Navbar from '../navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer'
import './layouts.css';
export default function LoginLayout() {

  return (
    <>
        <header>
          <Navbar/>
        </header>
        <main >
          <Outlet/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </>
  )
}
