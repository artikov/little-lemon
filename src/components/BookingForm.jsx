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

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // form validation
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const errors = {};

    // Date Validation
    const selectedDate = new Date(date);
    const currentDate = new Date();
    console.log(selectedDate, currentDate);
    if (selectedDate < currentDate) {
      errors.date = "Please select a future date";
    }

    // Time Validation
    if (!formData.time) {
      errors.time = "Please select a time slot";
    }

    // Guests Validation
    const guests = parseInt(formData.guests);
    if (isNaN(guests) || guests < 1 || guests > 10) {
      errors.guests = "Please enter a number between 1 and 10";
    }

    // Occasion Validation
    if (!formData.occasion) {
      errors.occasion = "Please select an occasion";
    }

    setErrors(errors);
    console.log(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Submit the form
      submitAPI(formData);
      navigate("/confirmation");
    }
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

        {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        >
          {times}
        </select>

        {errors.time && <p style={{ color: "red" }}>{errors.time}</p>}

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

        {errors.guests && <p style={{ color: "red" }}>{errors.guests}</p>}

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

        {errors.occasion && <p style={{ color: "red" }}>{errors.occasion}</p>}

        <button type="submit">Make Your reservation</button>
      </form>
    </>
  );
};

export default BookingForm;
