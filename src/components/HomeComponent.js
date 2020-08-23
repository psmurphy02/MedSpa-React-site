import React from "react";
import Header from './HeaderComponent';

function Home(props) {
  return (
    <>
    <main className="wrapper">
    <Header />
      <section className="section parallax bg1">
        <h1>Plumas MedSpa</h1>
      </section>
      <section className="section static">
        <p className="mx-auto ">
          Welcome to the MedSpa at Plumas. Reno's premier area for your
          aesthetic needs. Enjoy our relaxed, welcoming atmosphere as you
          prepare to be indulged. Started in 2015, we have continually been
          ranked among the top medical spas in Northern Nevada. Our friendly and
          highly-trained staff are here to help you escape the hustle and bustle
          of the outside world while assisting you in realizing your aesthetic
          goals. Give us a call today to begin your escape.
        </p>
      </section>
      <section className="section parallax bg2">
        <h1>Services</h1>
      </section>
      <section className="section static">
        <p>
          We offer a full line of aesthetic services for you. Our experienced
          aestheticians perform facial, dermaplane, peels, microneedling, and
          lasers. Our expertly-trained nurses will set you up with injectables
          like Botox and Juvederm, as well as performing more aggressive laser
          resurfacing. Call us today for a free consultation to see what our
          skilled staff can do for you.{" "}
          <a href="services.html">Learn more about our Services</a>
        </p>
      </section>
      <section className="section parallax bg3">
        <h1>Products</h1>
      </section>
      <section className="section static">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."{" "}
          <a href="products.html.html">Learn more about our Products</a>
        </p>
      </section>
      <section className="section parallax bg4">
        <h1>About Us</h1>
      </section>
      <section className="section static">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."{" "}
          <a href="about.html">Meet our Staff!</a>
        </p>
      </section>
      <section className="section parallax bg5">
        <h1>Contact</h1>
      </section>
      <section className="section static" id="contactSection">
        <div className="container">
          <div className="row">
            <div className="col col-sm-3">
              <button
                type="button"
                className="btn btn-lg btn-danger"
                id="scheduleBtn"
              >
                Contact Us Today
              </button>
            </div>
            <div className="col text-center">
              <h5>1855 Plumas Street Suite 2</h5>
              <h5>Reno, NV 89509</h5>
              <h5>775.470.8300</h5>
            </div>
            <div className="col col-sm-3 text-center">
              <h5>Follow Us</h5>
              <a
                className="btn btn-social-icon btn-instagram"
                href="http://instagram.com/"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://facebook.com/"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export default Home;
