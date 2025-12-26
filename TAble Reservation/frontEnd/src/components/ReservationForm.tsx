import React, { useState, useEffect } from "react";
import "./ReservationForm.css";

const ReservationForm: React.FC = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [tablePreference, setTablePreference] = useState("");
  const [availableTables, setAvailableTables] = useState<string[]>([]);

  useEffect(() => {
    if (date && time && guestCount) {
      fetchAvailableTables();
    }
  }, [date, time, guestCount]);

  const fetchAvailableTables = async () => {
    try {
      const response = await fetch(`http://localhost:9000/tables`);
      const data = await response.json();
      setAvailableTables(data);
    } catch (error) {
      console.error("Error fetching available tables:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const reservationDetails = { date, time, guestCount, tablePreference };

    try {
      const response = await fetch("http://localhost:9000/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reservationDetails),
      });

      if (response.ok) {
        alert("Reservation successful!");
      } else {
        alert("Failed to make a reservation.");
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
    }
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <h2>Make a Reservation</h2>

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />

      <label htmlFor="guestCount">Guest Count:</label>
      <input
        type="number"
        id="guestCount"
        value={guestCount}
        onChange={(e) => setGuestCount(Number(e.target.value))}
        min="1"
        required
      />

      <label htmlFor="tablePreference">Table Preference:</label>
      <select
        id="tablePreference"
        value={tablePreference}
        onChange={(e) => setTablePreference(e.target.value)}
        required
      >
        <option value="">Select a table</option>
        {availableTables.map((table) => (
          <option key={table} value={table}>
            {table}
          </option>
        ))}
      </select>

      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;
