import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import UserContext from "./UserContext";
function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", form);
      setUser(form.email);
      if (res.data.success) {
        navigate("/home");
      }
    } catch (err) {
      alert("Sign up failed");
    }
  };
  return (
    <form className="form" onSubmit={handlesubmit}>
      <h2>Signup</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handlechange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handlechange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handlechange}
        required
      />
      <button type="submit">Submit</button>
      <Link to="/Login">Already have an account?</Link>
    </form>
  );
}
export default Signup;
