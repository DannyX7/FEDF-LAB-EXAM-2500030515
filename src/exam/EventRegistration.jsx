import React, { useState } from "react";
import "../styles/registration.css"
export default function EventRegistration() {

  const [eventUser, setEventUser] = useState({
    name: "",
    location : "",
    eventName: "",
    seats: "",
  });

  const handleChange = (e) => {
    setEventUser({ ...eventUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let registrations =
      JSON.parse(localStorage.getItem("eventRegistrations")) || [];

    registrations.push(eventUser);

    localStorage.setItem(
      "eventRegistrations",
      JSON.stringify(registrations)
    );

    alert("Event Registered Successfully 🎉");

    setEventUser({
      name: "",
      location: "",
      eventName: "",
      seats: "",
    });
  };

  return (
    <div>
      <h2>Event Registration</h2>

      <form onSubmit={handleSubmit}>

        <input type="text" name="name" placeholder="Name" value={eventUser.name} onChange={handleChange} />

        <input type="text" name="location" placeholder="Location" value={eventUser.location} onChange={handleChange} />

        <input type="text" name="eventName" placeholder="Event Name" value={eventUser.eventName} onChange={handleChange} />

        <input type="number" name="seats" placeholder="Number of Seats" value={eventUser.seats} onChange={handleChange} />

        <button type="submit">Register Event</button>

      </form>
    </div>
  );
}