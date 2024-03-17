import React, { useState } from "react";
import "./Login.css";
import { axiosInsta } from "../instance/axios";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

interface UserData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<UserData[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleSubmit = (e: React.BaseSyntheticEvent) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const HandleDataLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(formData);
    axiosInsta
      .post("/login", { ...formData }, { withCredentials: true })
      .then((result) => {
        console.log(result.data.userDetail);
        localStorage.setItem('token',result.data.token)
        dispatch(signInSuccess(result.data.userDetail));
        navigate('/');
      });
  };

  return (
    <div className="signup-container">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="main">
        <div className="signup">
          <form onSubmit={HandleDataLogin}>
            <label htmlFor="chk" aria-hidden="true">
              Sign In
            </label>
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
            <button>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
