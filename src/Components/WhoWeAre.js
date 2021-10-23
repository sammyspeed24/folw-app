import React, { Component } from "react";
import "../Components/WhoWeAre.css";
//  import '../App.css';
import WOW from "wowjs";

class WhoWeAre extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div className="WhoWeAre">
        <div
          className="title wow rollIn"
          data-wow-delay="1s"
          data-wow-duration="1s"
        >
          <div
            className=" wow shakeY"
            data-wow-delay="1s"
            data-wow-duration="1s"
          >
            <h1>WHO WE ARE</h1>
          </div>
        </div>

        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="3"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="4"
              aria-label="Slide 4"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <h3 className="carouselWrapper_title">2 Corinthians. 5:17</h3>
                <p className="carousel_para">
                  We are new <strong>CREATURES</strong>
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <div className="container">
                <h3 className="carouselWrapper_title">2 Cor. 5:21</h3>
                <p className="carousel_para">
                  We are the <strong>RIGHTEOUSNESS</strong> of God
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <div className="container">
                <h3 className="carouselWrapper_title">John 15:15 [ESV]</h3>
                <p className="carousel_para">
                  {" "}
                  We are NO more SERVANTS but FRIENDS because He has made
                  everything known to US
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <div className="container">
                <h3 className="carouselWrapper_title">Galatians 3:26 [ESV]</h3>
                <p className="carousel_para">
                  {" "}
                  For in Christ Jesus you are all sons of God, through faith.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <h3 className="carouselWrapper_title">1 Peter 2:19</h3>
                <p className="carousel_para">
                  WE are ROYALTIES, choosen to proclaim the excellencies of him
                  who called you out of darkness into his marvelous light.
                </p>
              </div>
            </div>
          </div>
          {/*end of carousel inner*/}

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <section className="Contents">
          <div className="rowjom">
            <h1 className="Content_title">WE LOVE GOD. WE LOVE PEOPLE. </h1>
            <p className="Content_para">
              We are passionate about leading people to a God who is for them
              and who will help them discover His purpose for their lives.
              <br /> That’s how we’re able to make a difference, and it’s the
              driving force behind everything we do.
              <br />
              We are intentional about helping people get plugged-in and
              experience the transformation that comes from a real relationship
              with Jesus.
            </p>
          </div>
        </section>
      </div>
    );
  }
}
export default WhoWeAre;
