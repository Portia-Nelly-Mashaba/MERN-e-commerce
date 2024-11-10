import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/actions/productActions";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Success from "../../components/Success";


export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const addProductState = useSelector((state) => state.addProductReducer);
  const { loading, error, success } = addProductState;
  

  const handleAddProduct= (e) => {
    e.preventDefault();
    const product = {
      name: name,
      price: price,
      countInStock: countInStock,
      image: imageUrl,
      description: description,
      category,
    };
    dispatch(addProduct(product))
    
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 mt-2">
      <div className="row w-100">
        <div className="col-md-5 mx-auto mt-4 card p-4">
          <h1 className="text-center mb-4">Add Product</h1>
          
          {error && <Error error="An error occurred while adding the product" />}
          {loading && <Loader />}
          {success && <Success message="Product added successfully!" />}

          <form onSubmit={handleAddProduct} >
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
               {/* Category Select Dropdown */}
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
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
