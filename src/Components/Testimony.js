
import React from "react";
import testimony from "../folwImages/testimony.jfif";
import '../Components/Testimony.css'





function Testimony(){
  return (
<div className="TestimonyWrapper">
          
                <div className="TestimonyTitle wow tada" data-wow-offset="80" data-wow-delay="1s"> <h1>Testimonies</h1></div>
        
                
                    <div className="Testimony">
                     <p>And they overcame him by the Blood of the Lamb and by the Word of their testimony.</p>
                          <p className="Scripture2">Revelations 12:11</p>
                    </div>
        

          

    
   
  <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                {/*===indicators*/}
          
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          {/*===indicators*/}

    <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={testimony} alt="pix7"  className=" rounded-circle mx-auto d-block " />
             <div className="titleWrapper">
                <h5>Bro. Samuel Richard</h5>
              <p>Firstly I want to thank God for the salvation of my soul and that of my family.<br />
          I and my daughter will adding another to our lives this September.
          I want to thank God for his mercy, grace and protection and for keeping us up to this very day.</p>
            </div>
            </div>
          <div className="carousel-item">
              <img src={testimony} alt="pix7"  className="rounded-circle mx-auto d-block" />
              <div className="titleWrapper"> <h5>Bro. Ekene</h5>
              <p>Thank God for the salvation of his soul and also thank God for another birthday. </p>
            </div>
            </div>

      
          <div className="carousel-item">
             <img src={testimony} alt="pix7"  className=" rounded-circle mx-auto d-block" />
             <div className="titleWrapper"> <h5>Minister Austin Onu</h5>
              <p>Firstly I want to thank God for the salvation of my soul. And also want to thank God for restoring my health </p>
              </div>
            </div>
    </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
</div>

</div>

  );
}

export default Testimony;


