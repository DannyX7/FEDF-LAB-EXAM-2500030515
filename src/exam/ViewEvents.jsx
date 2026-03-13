import React, { useEffect, useState } from "react";

export default function ViewEvents() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents =
      JSON.parse(localStorage.getItem("eventRegistrations")) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <div>

      <h2>Registered Events</h2>

      {events.length === 0 ? (
        <p>No event registrations yet</p>
      ) : (

        <table border="1">

          <thead>
            <tr>
              <th>Name</th>
              <th>Event Name</th>
              <th>Location</th>
              <th>Seats</th>
            </tr>
          </thead>

          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>{event.name}</td>
                <td>{event.eventName}</td>
                <td>{event.location}</td>
                <td>{event.seats}</td>
              </tr>
            ))}
          </tbody>

        </table>

      )}

    </div>
  );
}