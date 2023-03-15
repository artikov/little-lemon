import React, { useState } from "react";
import { submitAPI } from "../reservationsAPI";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [formData, setFormData] = useState({
    guests: "",
    occasion: "",
  });

  const initDate = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(initDate);

  const [times, setTimes] = useState(
    availableTimes.map((time) => <option key={time}>{time}</option>)
  );

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    submitAPI(formData);
    navigate("/confirmation");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);

    const newDate = new Date(e.target.value);
    updateTimes(newDate);

    setTimes(availableTimes.map((times) => <option>{times}</option>));
  };

  return (
    <>
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={date}
          onChange={handleDateChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        >
          {times}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit">Make Your reservation</button>
      </form>
    </>
  );
};

export default BookingForm;
