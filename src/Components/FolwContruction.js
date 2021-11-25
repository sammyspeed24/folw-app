import React, { Component } from "react";
import "../Components/folwContruction.css";
import uba from "../folwImages/uba.png";
import instrument from "../folwImages/instrument1.jpg";
import constructionsite from "../folwImages/constructionsite.jpg";
import WOW from "wowjs";
import Footer from "../Components/Footer";

class FolwContruction extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div className="DonatePage">
        <div className="DonatePage-Wrapper  wow fadeInDown" data-wow-delay="1s" data-wow-duration="2s">
          <p
            className=" DonateScripture">
            Go up to the hills and bring wood and build the house, that I may
            take pleasure in it and that I may be glorified, says the Lord. <br /> <span className="DonatePage-p">
            <strong>Haggai 1:8 ESV</strong>
          </span>
          </p>
         
        </div>

        <div className="CarouselWrapper container">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner  mt-3 pt-3">
              <div class="carousel-item active">
                <img
                  src={constructionsite}
                  class="d-block w-100"
                  alt={constructionsite}
                />
              </div>
              <div class="carousel-item">
                <img src={instrument} class="d-block w-100" alt={instrument} />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="AccountNum justify-content-center container text-center">
          <h2>
            Bank : UBA
            <img src={uba} alt="uba" className="uba-img" />
          </h2>
          <h2> Account Number: 1011511907</h2>
        </div>

        <Footer />
      </div>
    );
  }
}

export default FolwContruction;
