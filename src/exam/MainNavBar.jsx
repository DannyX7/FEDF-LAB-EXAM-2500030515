import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ApiData from "./ApiData";
import ViewEvents from "./ViewEvents";
import EventRegistration from "./EventRegistration";
import "../styles/navbar.css"
export default function MainNavBar() {
  return (
    <div>

      <nav>
        <Link to="/">Home </Link>
        <Link to="/registration">Event Registration </Link>
        <Link to="/display">View Events </Link>
        <Link to="/api-data">API Data</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<EventRegistration />} />
          <Route path="/display" element={<ViewEvents />} />
          <Route path="/api-data" element={<ApiData />} />
        </Routes>
      </div>

    </div>
  );
}