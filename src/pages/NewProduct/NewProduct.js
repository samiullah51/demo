import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProductForm from "../../components/ProductForm/ProductForm";
import "./NewProduct.css";
function NewProduct({ mode }) {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* New Product */}
      {mode === "sell" ? (
        <h1 className="new__product__page__title">Add New Product To Sell</h1>
      ) : (
        <h1 className="new__product__page__title">Add Product To Exchange</h1>
      )}
      <div className="new__product">
        {/* form */}
        <div className="product__form">
          <ProductForm mode={mode} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewProduct;
