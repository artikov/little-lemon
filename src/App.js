import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
