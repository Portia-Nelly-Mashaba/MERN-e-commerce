import React from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating';


function Product({product}) {
  return (
    <div >
      <div>
      <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
                <h1>{product.name}</h1>
                <img  src={product.image} className='img-fluid mb-3'/>
                <h1 className='product-h1 p-2'>{product.description}</h1>
                <Rating
                  style={{color:'orange'}}
                  initialRating={product.rating}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  readonly={true}
                />
                <h1 className='mb-2 mt-2'>Price : R {product.price}</h1>
            </Link>
                {/* <button className="btn btn-dark my-2 my-sm-0 mb-4" type="submit">ADD TO CART</button> */}
            </div>
    </div>
  )
}

export default Product
