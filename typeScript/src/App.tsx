import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PrivateCompo from "./components/PrivateCompo";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateCompo />}>
          <Route path="/register" element={<Signup />} />
        </Route>
        <Route element={<PrivateCompo />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
