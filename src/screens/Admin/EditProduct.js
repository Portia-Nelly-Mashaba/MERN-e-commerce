import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductForm({ onProductUpdated }) {
  const { id: productid } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Fetch product data for editing if productId is present
  useEffect(() => {
    if (productid) {
      axios
        .get(`http://localhost:5000/getproductbyid/${productid}`)
        .then((response) => {
          const product = response.data;
          setName(product.name);
          setPrice(product.price);
          setCountInStock(product.countInStock);
          setImageUrl(product.image);
          setCategory(product.category);
          setDescription(product.description);
        })
        .catch((err) => setError("Failed to fetch product details"));
    }
  }, [productid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); 
    setSuccess(false); 

    const product = { name, price, countInStock, image: imageUrl, description, category };
    const request = productid
      ? axios.put(`http://localhost:5000/updateproduct/${productid}`, { product })
      : axios.post("http://localhost:5000/addproduct", { product });

    request
      .then((res) => {
        setSuccess(true);
        setLoading(false);
        setError(null); // Ensure error is cleared if request is successful
        onProductUpdated();
      })
      .catch((err) => {
        setError("Failed to save product");
        setLoading(false);
        setSuccess(false); // Clear success if there is an error
      });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 mt-2">
      <div className="row w-100">
        <div className="col-md-5 mx-auto mt-4 card p-4">
          <h1 className="text-center mb-4">{productid ? "Edit" : "Add"} Product</h1>

          {error && <div className="alert alert-danger">{error}</div>}
          {loading && <div>Loading...</div>}
          {success && <div className="alert alert-success">Product saved successfully!</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Product Name"
              className="form-control mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Price"
              className="form-control mb-3"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Description"
              className="form-control mb-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              className="form-control mb-3"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
            <select
              className="form-control mb-3"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="fashion">Fashion</option>
              <option value="mobile">Mobile</option>
              <option value="electronics">Electronics</option>
            </select>
            <input
              type="text"
              placeholder="Count in Stock"
              className="form-control mb-3"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
              required
            />
            <div className="text-end">
              <button type="submit" className="btn btn-dark mt-3 mb-4">
                {productid ? "Update" : "Add"} Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
