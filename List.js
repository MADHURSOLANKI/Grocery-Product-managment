import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "./UserContext";
import { Link, useNavigate } from "react-router-dom";
function List() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(UserContext);
  const handleEdit = (e) => {
    alert(e);
  };
  const handledelete = (e) => {};
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/product/delete/${user}`
        );

        if (response.status === 200) {
          setProducts(response.data);
        }
      } catch (err) {
        alert("error");
      }
    };
    fetchProducts();
  });
  return (
    <div className="container">
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} className="product">
            <div className="product-content">
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
            <Link to={`/edit/${product.name}`}>
              <button>Edit</button>
            </Link>
            <button onClick={handledelete}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default List;
