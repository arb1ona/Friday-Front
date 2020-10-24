import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import "./Articles.css";
import hub3 from "../images/hub3.png";
import Bovilla2 from "../images/Bovilla2.jpg";
import Festival5 from "../images/Festival5.png";

import Interior from "../images/Interior.gif";
import Flatmate from "../images/Flatmate.gif";
import Exterior3 from "../images/Exterior3.gif";
import AutoPlay from "./AutoPlay";

export default function Articles() {
  return (
    <>
      <div className="services">
        <h1>Our Services</h1>
        <p>
          When it comes to Renting and Flatmates, we're here every step of the
          way.
        </p>
      </div>

      <div className="articles__section">
        <Link to="/listing">
          <Cart
            src={Exterior3}
            // src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
            title="Houses for Rent"
            description="Find appartments with a stunning view of the Youth Park."
            price="£130/night"
          />
        </Link>

        <Link to="/flatmates">
          <Cart
            src={Flatmate}
            title="Looking for a Flatmate?"
            description="Find your perfect partner to share a flat with."
            price="£350/night"
          />
        </Link>
      </div>

      <div style={{ backgroundColor: "#244682" }}>
        <div className="culture">
          <h1>Blog Posts</h1>
          <p>Enjoy the Best Things You Can Do And See In Tirana.</p>
        </div>
        <div className="article__section">
          <Cart
            src={hub3}
            title="Innovation Hubs"
            description="Public Centers for Start Ups."
          />
          <Cart
            src={Festival5}
            // src="https://images.unsplash.com/photo-1492754877382-516dc956fccc?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=60"
            title="Youth Arts Festivals"
            description="Series of Festive events in Tirana."
          />
          <Cart
            src={Bovilla2}
            title="Daily Escapes in Nature"
            description="
                        Lake Bovilla, wonderful outdoor day trip."
          />
        </div>
      </div>

      <div className="services">
        <h1>Our Partners</h1>
        <p>They Will Talk About Us.</p>
        <AutoPlay />
      </div>
    </>
  );
}
