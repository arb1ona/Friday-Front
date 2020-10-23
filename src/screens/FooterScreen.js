import React from "react";
import { Row, Col } from "react-bootstrap";

const FooterScreen = () => (
    <footer>
        <section className="ft-main">
            <div className="ft-main-item">
                <h2 className="ft-title">ABOUT</h2>
                <ul>
                    <li><a href="#">How Appartner works</a></li>
                    <li><a href="#">Newsroom</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Customers</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>
            <div className="ft-main-item">
                <h2 className="ft-title">RESOURCES</h2>
                <ul>
                    <li><a href="#">Docs</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">eBooks</a></li>
                    <li><a href="#">Webinars</a></li>
                    <li><a href="#">Social Groups</a></li>

                </ul>
            </div>
            <div className="ft-main-item">
                <h2 className="ft-title">CONTACT</h2>
                <ul>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Host your home</a></li>
                    <li><a href="#">Host an Experience</a></li>
                    <li><a href="#">Open Homes</a></li>
                    <li><a href="#">Advertise</a></li>

                </ul>
            </div>
            <div className="ft-main-item">
                <h2 className="ft-title">STAY UPDATED</h2>
                <p>Subscribe to our newsletter to get our latest news.</p>
                <form>
                    <input type="email" name="email" placeholder="Enter email address" />
                    <input type="submit" value="Subscribe" />
                </form>
            </div>
        </section>

        {/* <!-- Footer legal --> */}
        <section className="ft-legal">
            <ul className="ft-legal-list">
                <li><a href="#">© 2020 Appartner, Inc. All rights reserved</a> · <a>Privacy</a> · <a>Terms</a> · <a>Sitemap</a></li>
                <span>
                    <li>
                        <a className="fa fa-facebook footer-icon"></a>
                        <a className="fa fa-instagram footer-icon"></a>
                        <a className="fa fa-twitter footer-icon"></a>
                        <a className="fa fa-youtube footer-icon"></a>
                        <a className="fa fa-linkedin footer-icon"></a>
                    </li>
                </span>

            </ul>
        </section>
    </footer >
);

export default FooterScreen;
