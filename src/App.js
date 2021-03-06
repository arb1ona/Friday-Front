import React from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import "./App.css";
import "./screens/Footer.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import logo_3 from "./images/logo_3.png";
import FavsScreen from "./screens/FavsScreen";
import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ListingScreen from "./js/ListingScreen";
import Articles from "./screens/Articles";
import AutoPlay from "./screens/AutoPlay";
import FooterScreen from "./screens/FooterScreen";

function App() {
  const userSignin = useSelector((state) => state.userSignin); // added at mongodb part2 for signin
  const { userInfo } = userSignin; // added at mongodb part2 for signin

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <>
      <BrowserRouter>
        <div className="grid-container">
          <header className="header">
            {/* <div className="address">
              <button onClick={openMenu}>
                &#9776;
            </button>
            </div> */}
            <Link to="/">
              <Image className="logo" src={logo_3} />
            </Link>
            <div className="header-links">
              <Link to="/listing">Listing</Link>

              <Link to="/favourites">Favourites</Link>

              {userInfo ? (
                <Link to="/profile">{userInfo.name}</Link>
              ) : (
                <Link to="/signin">Sign In</Link>
              )}
            </div>
          </header>

          {/* <aside className="sidebar">
            <h3 style={{ color: "#707880" }}>SHOP BY CATEGORY</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul className="categories">
              <li>
                <Link to="/category/Tuxedos">Tuxedos</Link>
              </li>
              <li>
                <Link to="/category/ClassicShirts">Classic Shirts</Link>
              </li>
              <li>
                <Link to="/category/Ties">Ties</Link>
              </li>
              <li>
                <Link to="/category/Accessories">Accessories</Link>
              </li>
            </ul>
          </aside> */}
          <main className="main">
            <div className="content">
              <Route path="/signin" component={SigninScreen}></Route>
              <Route path="/register" component={RegisterScreen}></Route>
              <Route path="/listing" component={ListingScreen}></Route>
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/favs/:id?" component={FavsScreen} />
              <Route path="/category/:id" component={HomeScreen} />
              <Route path="/" exact={true} component={HomeScreen} />
            </div>
          </main>

          <FooterScreen />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
