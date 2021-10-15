import React from "react";
import Pastor from "../folwImages/4.jpg";
import Footer from '../Components/Footer';
import '../Components/About.css';
import birthday from "../folwImages/birthdays.jpg";
import sola from "../folwImages/sola.jpg";
import mumJ from  "../folwImages/mumJ.jpg";
import taiyo2  from "../folwImages/taiyo2.jpg";
import eight from "../folwImages/8.jpg";
import dance2 from "../folwImages/dance2.jpg";
import taiyo from "../folwImages/taiyo.jpg";
import ministerAustin from "../folwImages/ministerAustin.jpg";
import brotherD from "../folwImages/brotherD.jpg";
import youth2 from "../folwImages/youth2.jpg";
import baby from "../folwImages/baby.jpg";
import folwChildren3  from "../folwImages/folwChildren3.jpg";



function AboutPage(){
  return (
<div className="AboutPage">
  <section className="AboutSlider">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={ folwChildren3} alt="folwchildren" className="d-block w-100 slider" alt="pix1" />
        </div>
        <div className="carousel-item">
        <img src={birthday} alt="folwchildren" className="d-block w-100 slider" alt="birthday" />
        </div>
        <div className="carousel-item">
        <img src={sola} className="d-block w-100 slider" alt="sola" />
        </div>
      

        <div className="carousel-item">
        <img src={taiyo2} className="d-block w-100 slider" alt="taiyo1" />
        </div>
        <div className="carousel-item">
        <img src={eight} className="d-block w-100 slider" alt="pix1" />
        </div>

        <div className="carousel-item">
        <img src={mumJ} className="d-block w-100 slider" alt="mum3" />
        </div>
       
        <div className="carousel-item">
        <img src={ dance2} className="d-block w-100 slider" alt="pix1" />
        </div>
        <div className="carousel-item">
        <img src={taiyo} className="d-block w-100 slider" alt="taiyo" />
        </div>
       
        <div className="carousel-item">
        <img src={ministerAustin} alt="folwchildren" className="d-block w-100 slider" alt="austin" />
        </div>
        <div className="carousel-item">
        <img src={ brotherD} alt="folwchildren" className="d-block w-100 slider" alt="broD1" />
        </div>
        <div className="carousel-item">
        <img src={baby} className="d-block w-100 slider" alt="pix2 " />
        </div>
        <div className="carousel-item">
        <img src={youth2} className="d-block w-100 slider" alt="pix3" />
        </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 

<div className="About_banner">
<h1 className=" About_title">ABOUT</h1>
	</div>
  
</section>

        <div className="container Row">
            <div className="row">
              <div className=" col-lg-6">
                <div className="photo">
                   <img src={Pastor} className="pastorImage" alt="pixs1" />
                </div>
                </div>  {/* col ends here */}

                <div className=" col-lg-6">
                <div className="PastorText">
             <p>At Fountain Of Living Waters (FOLW), our prayer for you is that the God of all grace anoints you with fresh oil and His precious Spirit illuminates the word as you read.
           <br /> May He empower you to effectively communicate to others the vibrant hope that He has given you to persevere the struggles that you have overcome and continue to overcome.<br /> Furthermore to bring together the body of Christ, which is our hope and righteousness, and lift up ourselves in prayer and admonition, as commanded by Him.
          </p>
                 <div className="PastorName">
                <h4>PASTOR CONRAD MEMEH</h4>
               <p>FOUNTAIN OF LIVING WATERS(FOLW)</p>
                </div>
        
          </div>
            </div>
            </div>
            </div>
<Footer />

  </div>

  );
}

export default AboutPage;