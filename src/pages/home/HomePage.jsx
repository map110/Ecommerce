import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components/Header";

import { ProductsGrid } from "./ProductsGrid";

import "./HomePage.css";
export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fecthHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    fecthHomeData();
  });

  return (
    <>
      <title>HomePage</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
