import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const avialableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function App() {
  const [times, setTimes] = useState(avialableTimes);

  const updateTimes = (time) => {
    console.log(time);
  };

  const initializeTimes = () => {
    setTimes(avialableTimes);
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/booking"
          element={<BookingPage times={times} setTimes={setTimes} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
