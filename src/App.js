import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import { Routes, Route } from "react-router-dom";
import ConfirmationPage from "./components/ConfirmationPage";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
