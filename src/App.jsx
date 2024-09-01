
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Add from './components/Add'
import Navbar from './components/Navbar'
import "./App.css";

//Write missing code here

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />

      </Routes>
    </>
  );
}

export default App;
