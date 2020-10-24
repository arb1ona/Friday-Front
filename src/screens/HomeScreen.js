import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import Articles from "./Articles";
import Rating from "../components/Rating";
import BedRoom from "../assests/BedRooms.png";
import floorSpace from "../assests/floorSpace.png";
import guests from "../assests/guests.png";
import Bathrooms from "../assests/Bathrooms.png";
import star from "../assests/star.png";
import FooterScreen from "./FooterScreen";
import AutoPlay from "./AutoPlay";
// import AutoPlay from './AutoPlay';

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const category = props.match.params.id ? props.match.params.id : "";
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${require("./hero1.jpg")})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "650px",
          zIndex: "5000",
        }}
      ></div>

      <Articles />
      {/* <AutoPlay /> */}
      {/* <FooterScreen /> */}
      {/* <AutoPlay /> */}

      {/* {category && <h2>{category}</h2>}

            {
                loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                            <ul classNameName="products">
                                {products.map((product) => (
                                    <li key={product._id}>
                                        <div classNameName="product">

                                            <Link to={'/product/' + product._id}>
                                                <img
                                                    classNameName="product-image"
                                                    src={product.image}
                                                    alt="product"
                                                />
                                            </Link>
                                            <div classNameName="product-name">
                                                <Link to={'/product/' + product._id}>{product.name}</Link>
                                            </div>
                                            <div classNameName="product-address">{product.address},{product.city}</div>
                                            <div classNameName="product-icons">
                                                <span id="space">
                                                    <img src={guests} alt="guests" /> <span>{product.guests}</span>
                                                </span>
                                                <span id="space">
                                                    <img src={BedRoom} alt="bedroom" /> <span>{product.bedrooms}</span>
                                                </span>
                                                <span id="space">
                                                    <img src={Bathrooms} alt="bathrooms" /> <span>{product.bathrooms}</span>
                                                </span>
                                                <img src={floorSpace} alt="bedroom" /> <span>{product.floorSpace} m2</span>
                                            </div>

                                            <div classNameName="product-value">
                                                <span id="space">
                                                    <img src={star} alt="star" style={{ width: "2.5rem" }} />
                                                    <span classNameName="product-review">{product.rating}</span>
                                                </span>
                                                <span classNameName="product-price" id="space">All {product.price} <span>/month</span>
                                                </span>
                                            </div>

                                            <div classNameName="product-rating">

                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
            } */}
    </>
  );
}
export default HomeScreen;
