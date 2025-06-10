// src/pages/Home.js
import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import UserContext from "./UserContext";
import "./home.css";
function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    email: user,
  });
  const handleChange = async (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/product", product);
      setProduct({
        name: "",
        description: "",
        price: "",
        category: "",
        email: user.email,
      });
      if (res.data.success) {
        alert("Product Added succesfully");
      }
    } catch (err) {
      alert("Invalid credentials");
    }
  };
  return (
    <div>
      <form className="productt" onSubmit={handlesubmit}>
        <h1>Welcome to Grocery Inventory</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          value={product.price}
          placeholder="price"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="quantity"
          value={product.quantity}
          placeholder="Quantity"
          onChange={handleChange}
          required
        />
        <button type="submit">Add New Product</button>
        <Link to="product/list">Click Here</Link>
      </form>
    </div>
  );
}

export default Home;
