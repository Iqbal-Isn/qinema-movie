import "./App.css";
import Movie from "./component/Movie";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Detail from "./component/Detail";
import Service from "./component/Service";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Movie" element={<Movie />} />
        <Route path="About" element={<About />} />
        <Route path="Service" element={<Service />} />
        <Route path="detail/:movieTitle" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
