import { Outlet } from 'react-router-dom'
import Footer from '../component/footer'
import Header from '../component/header'
import './layouts.css';
export default function UserLayout() {

  return (
    <>
        <header>
          <Header />
        </header>
        <main>
          <Outlet/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </>
  )
}
