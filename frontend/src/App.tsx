import React from 'react';
import './App.css';
import {
BrowserRouter as Router,
Routes,
Route,
Link,
} from "react-router-dom";
// import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Login from './pages/login';
import Search from './pages/pagesUser/search';
import Register from './pages/register';

import MainUser from './pages/pagesUser/main';
import EventRequest from './pages/pagesUser/eventRequest';
import CreateEventRequest from './pages/pagesUser/eventRequest/createEventRequest';
import LoanItemRequest from './pages/pagesUser/loanItemRequest';
import PlaceUseRequest from './pages/pagesUser/placeUseRequest';
import Donate from './pages/pagesUser/donate';

import MainCreater from "./pages/pagesUser/main";
import AddEvent from "./pages/pagesCreater/addEvent";
import CreateEvent from "./pages/pagesCreater/addEvent/createEvent";
import AddPlaceUse from "./pages/pagesCreater/addPlaceUse";
import AddItemLoan from "./pages/pagesCreater/addItemLoan";
import CreateWatData from "./pages/pagesCreater/createWatData";

import RequsetEvent from './pages/pagesCreater/requestEvent';
import EventDetails from './pages/pagesCreater/requestEvent/eventDetails.tsx';

import UserLayout from "./layouts/userLayout"
import LoginLayout from "./layouts/loginLayout";
import AdminLayout from "./layouts/adminLayout";
import CreatorLayout from "./layouts/creatorLayout";
import Header from './component/header';
import Footer from './component/footer';
import SidebarCreater from './navbar/sidebarCreater';
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="" element={<LoginLayout/>}>
//         <Route index element={<Login/>}/>
//         <Route path="/register" element={<Register/>}/>
//       </Route>
//       <Route path="" element={<UserLayout/>}>
//         <Route path="/search" element={<Search/>} />
//         <Route path="/main" element={<MainUser/>} />
//         <Route path="/eventRequest" element={<EventRequest />} />
//         <Route path="/itemRequest" element={<LoanItemRequest />} />
//         <Route path="/placeRequest" element={<PlaceUseRequest />} />
//         <Route path="/donate" element={<Donate />} />
//         <Route path="/eventRequest/createEventRequest" element={<CreateEventRequest />} />
//       </Route>
//       <Route path="/admin" element={<AdminLayout/>}>
        
//       </Route>
//       <Route path="" element={<CreatorLayout/>}>
//         <Route path="/maincreater" element={<MainCreater/>} />
//         <Route path="/addEvent" element={<AddEvent />} />
//         <Route path="/addEvent/createEvent" element={<CreateEvent />} />
//         <Route path="/addItemLoan" element={<AddItemLoan />} />
//         <Route path="/addPlacUse" element={<AddPlaceUse />} />
//         <Route path="/ceratrWatData" element={<CreateWatData />} />
//       </Route>
//     </>
//   )
// )

function App() {
  return (
    // <RouterProvider router={router}/>
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/main" element={<MainUser/>} />
        <Route path="/eventRequest" element={<EventRequest />} />
        <Route path="/itemRequest" element={<LoanItemRequest />} />
        <Route path="/placeRequest" element={<PlaceUseRequest />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/eventRequest/createEventRequest" element={<CreateEventRequest />} />

        <Route path="/maincreater" element={<MainCreater/>} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/addEvent/createEvent" element={<CreateEvent />} />
        <Route path="/addItemLoan" element={<AddItemLoan />} />
        <Route path="/addPlacUse" element={<AddPlaceUse />} />
        <Route path="/ceratrWatData" element={<CreateWatData />} />

        <Route path="/requsetEvent" element={<RequsetEvent />} />
        <Route path="/requsetEvent/eventDetails" element={<EventDetails />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}
export default App;
