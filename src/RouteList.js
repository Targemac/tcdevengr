import { Routes, Route } from "react-router-dom";
import Signup from './Components/Signup';
import Home from "./Components/Home";
import Login from "./Components/Login";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  );
};

export default RouteList;
