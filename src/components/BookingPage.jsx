import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = ({ times, setTimes }) => {
  return (
    <>
      <BookingForm times={times} setTimes={setTimes} />
    </>
  );
};

export default BookingPage;
