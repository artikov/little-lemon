import React, { useReducer } from "react";
import { fetchAPI } from "../reservationsAPI";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  const updateTimes = (date) => {
    return fetchAPI(date);
  };

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
};

export default BookingPage;
