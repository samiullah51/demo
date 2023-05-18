import React from "react";
import { useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";
import * as timeago from "timeago.js";
import "./Favorite.css";
function Favorite() {
  const fav = useSelector((state) => state.fav);

  return (
    <div className="favorite">
      {fav.length !== 0 ? (
        fav.map((product) => (
          <div className="recent__product">
            <img src={product?.details.photos[0]} />

            <div>
              <div className="title">
                <p>
                  {" "}
                  {product.details.title.length > 12
                    ? product.details.title.slice(0, 12) + "..."
                    : product.details.title}
                </p>
                <div className="titleviews">
                  Views {product.productViews.length}
                </div>
              </div>
              <p className="price">
                {currencyFormatter.format(product.details.price, { code: "" })}
                <span>(PKR)</span>
              </p>
            </div>
            <div className="product__from">
              <p>
                {product.details.location.length > 20
                  ? product.details.location.slice(0, 20) + "..."
                  : product.details.location}
              </p>
              <p>{timeago.format(product.details.createdAt)}</p>
            </div>
          </div>
        ))
      ) : (
        <h1>NONE</h1>
      )}
    </div>
  );
}

export default Favorite;
