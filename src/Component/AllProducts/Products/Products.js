import React from "react";

const products = (props) => {
  const { strYoutube, strMealThumb, strInstructions, strCategory } = props.product;

  return (
    <div className="col-lg-4">
      <div className="card p-2">
        <img src={strMealThumb} alt="" />
        <h4 className="text-start">{strCategory}</h4>
        <p className="text-start">{strInstructions.slice(0, 115)}...</p>
        <div className="d-flex justify-content-between">
          <button onClick={props.productsLength} className="btn btn-primary">
            Add To cart
          </button>
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default products;
