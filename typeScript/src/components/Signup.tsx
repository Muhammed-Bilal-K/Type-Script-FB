import React, { useRef } from "react";
import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { axiosInsta } from "../instance/axios";

interface UserData {
  id?: string;
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<UserData[]>([]);
  const navigate = useNavigate();
  const Btnref = useRef<HTMLButtonElement>(null);
  const HandleSubmit = (e: React.BaseSyntheticEvent) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const HandleData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    Btnref.current?.focus();
    axiosInsta.post("/register", { ...formData }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="signup-container">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="main">
        <div className="signup">
          <form onSubmit={HandleData}>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              id="name"
              onChange={HandleSubmit}
              type="text"
              name="txt"
              placeholder="User name"
              required
            />
            <input
              id="email"
              onChange={HandleSubmit}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              id="password"
              onChange={HandleSubmit}
              type="password"
              name="pswd"
              placeholder="Password"
              required
            />
            <button ref={Btnref}>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
