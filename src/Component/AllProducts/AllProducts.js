import React, { useEffect, useState } from "react";
import Products from "./Products/Products";

const AllProducts = ({ productsLength }) => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then((res) => res.json())
      .then((data) => setAllProducts(data.meals));
  }, []);
  console.log(allProducts);
  return (
    <div>
      <h1>My mealDB Shop</h1>
      <div class="input-group mb-3 container w-50">
        <input
          type="text"
          id="input-mealDB"
          class="form-control"
          placeholder=""
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
        <button class="btn btn-outline-primary" type="button" id="button-addon1">
          Button
        </button>
      </div>
      <div className="container">
        <h1>products</h1>
        <div className="row g-5">
          {allProducts.map((product) => (
            <Products
              key={product.idMeal}
              productsLength={productsLength}
              product={product}
            ></Products>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
