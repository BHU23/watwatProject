import React from 'react';
import './App.css';
import {
BrowserRouter as Router,
Routes,
Route,
Link,
} from "react-router-dom";
import Header from './component/header';
import Footer from './component/footer';
import Login from './pages/login';
import Search from './pages/pagesUser/search';
import Register from './pages/register';
import Main from './pages/pagesUser/main';
import EventRequest from './pages/pagesUser/eventRequest';
import CreateEventRequest from './pages/pagesUser/eventRequest/createEventRequest';
import LoanItemRequest from './pages/pagesUser/loanItemRequest';
import PlaceUseRequest from './pages/pagesUser/placeUseRequest';
import Donate from './pages/pagesUser/donate';
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
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
      </Routes>
      <Footer></Footer>
    </Router>
  );
}
export default App;
