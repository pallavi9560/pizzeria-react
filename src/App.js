import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Additem from "./Components/Additem";
import Contact from "./Components/Contact";
import Main from "./Components/Main"
import { Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Update from "./Components/Update";

function App() {
  return (
    <>
      <Main />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/additem" element={<Additem />} />
        <Route path="/update-item/:id" element={<Update />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App;