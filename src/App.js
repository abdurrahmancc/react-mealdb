import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Navber from "./Component/Navber/Navber";
import AllProducts from "./Component/AllProducts/AllProducts";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const productsLength = (props) => {
    setCount(count + 1);
  };
  console.log(count);
  return (
    <div className="App">
      <Navber count={count}></Navber>
      <AllProducts productsLength={productsLength}></AllProducts>
    </div>
  );
}

export default App;
