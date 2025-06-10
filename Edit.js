import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(id);
        const response = await axios.get(`http://localhost:5000/product/${id}`);
        if (response.status === 200) {
          setProduct(response.data);
        } else {
          alert("Product not found");
        }
      } catch (err) {
        alert(`Error: ${err.message}`);
      }
    };
    fetchProduct();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("working sdjfnkjfnskfbksfbskfb");
      const response = await axios.put(
        `http://localhost:5000/product/edit/${id}`,
        product
      );
      if (response.status === 200) {
        alert("Product updated successfully");
        // navigate("")
      } else {
        alert("Error updating product");
      }
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <form className="abc" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          name="price"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
      </label>
      <label>
        Quantity:
        <input
          type="text"
          name="quantity"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
      </label>
      <button type="submit">Update</button>
    </form>
  );
};
export default Edit;
