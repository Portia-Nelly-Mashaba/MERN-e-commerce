import React from 'react';

function ProductCard() {
  return (
    <div className="row">
      <div className="col-12 col-sm-8">
        {/* Card */}
        <div className="card border-light">
          <img src="../../assets/img/shop/item-1.png" alt="product-image" className="card-img-top" />
          <div className="card-footer border-top border-light p-4">
            <a href="#" className="h5">
              Apple Watch Series 3
            </a>
            <h6 className="font-weight-light text-gray mt-2">
              Space Gray Aluminum Case with Black Sport Band
            </h6>
            <div className="d-flex mt-3">
              <i className="star fas fa-star text-warning mr-1"></i>
              <i className="star fas fa-star text-warning mr-1"></i>
              <i className="star fas fa-star text-warning mr-1"></i>
              <i className="star fas fa-star text-warning mr-1"></i>
              <i className="star fas fa-star text-warning"></i>
              <span className="badge badge-pill badge-gray ml-2">4.7</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="h5 mb-0 text-gray">$299.00</span>
              <a className="btn btn-xs btn-primary" href="#">
                <span className="fas fa-cart-plus mr-2"></span> Add to cart
              </a>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
    </div>
  );
}

export default ProductCard;
