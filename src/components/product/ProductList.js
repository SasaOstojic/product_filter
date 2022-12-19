import React, { useState, useEffect } from "react";
import "./ProductList.css";
import Search from "../search/Search";
import Categories from "../categories/Categories";
import Product from "./Product";
import { products as productData } from "../../products-data";

const allCategories = [
  "All",
  ...new Set(
    productData.map((product) => {
      return product.category;
    })
  ),
];

const ProductList = () => {
  const [products, setProducts] = useState(productData);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState(allCategories);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const filterProducts = (category) => {
    if (category === "All") {
      setProducts(productData);
      return;
    }
    const newProduct = productData.filter((product) => {
      return product.category === category;
    });
    setProducts(newProduct);
  };

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, products]);

  return (
    <>
      <div className="header">
        <header className="container">
          <h1 className="--color-white --text-center">
            <span className="--color-danger">Product</span> Filter
          </h1>
          <div className="--flex-between --flex-dir-column --py">
            <Search inputValue={search} handler={searchHandler} />
            <Categories categories={categories} categoryItem={filterProducts}/>
          </div>
        </header>
      </div>
      <div className="product-container">
        <div className="products-container --grid-25 --py2">
          {filteredProducts.length === 0 ? (
            <h3>No Products found.</h3>
          ) : (
            filteredProducts.map((product) => {
              const { id, img, title, price } = product;
              return (
                <div key={id}>
                  <Product id={id} img={img} title={title} price={price} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
