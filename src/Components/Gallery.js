import React, { Component } from "react";
import two from "../folwImages/2.jpg";
import three from "../folwImages/three.png";
import birthday from "../folwImages/birthdays.jpg";
import children2 from "../folwImages/children2.jpg";
import sola from "../folwImages/sola.jpg";
import taiyoWife from "../folwImages/taiyoWife.jpg";
import mumJ   from  "../folwImages/mumJ.jpg";
import taiyo2  from "../folwImages/taiyo2.jpg";
import eight from "../folwImages/8.jpg";
import dance2 from "../folwImages/dance2.jpg";
import taiyo from "../folwImages/taiyo.jpg";
import ekeneCake from "../folwImages/ekeneCake.jpg";
import ministerAustin from "../folwImages/ministerAustin.jpg";
import brotherD from "../folwImages/brotherD.jpg";
import youth2 from "../folwImages/youth2.jpg";
import baby from "../folwImages/baby.jpg";
import folwChildren3  from "../folwImages/folwChildren3.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from  "../Components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import '../Components/Gallery.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Gallery extends Component{
  render() {
    return (
      <div className="GalleryPage">
<div className="Our-gallary">
  <h1>FOLW GALLERY</h1>
</div>
        <div className="carousel-wrapper">
          

<OwlCarousel className='owl-theme' autoplay loop margin={5} nav>
    
<div className='item'>
    <img src={taiyo2} alt="taiyo2" />
        
    </div>
    <div className='item'>
    <img src={taiyo} alt="taiyo" />
        
    </div>
    
    <div className='item'>
    <img src={taiyoWife} alt="taiyowife" />
        
    </div>
    <div className='item'>
    <img src={mumJ} alt="mumj" />
        
    </div>
    <div className='item'>
    <img src={ekeneCake} alt="ekeneCake" />
      
    </div>
    <div className='item'>
    <img src={ folwChildren3} alt="folwchildren" />
      
    </div>
   
   
    <div className='item'>
    <img src={brotherD} alt="brotherD" />
      
    </div>
    <div className='item'>
    <img src={ministerAustin} alt="austin" />

      
    </div>
    <div className='item'>
    <img src={youth2} alt="youth" />
      
    </div>
    <div className='item'>
    <img src={dance2} alt="dance" />
      
    </div>
    <div className='item'>
    <img src={sola} alt="sola" />
        
    </div>
    <div className='item'>
    <img src={eight} alt="eight" />
        
    </div>

    <div className='item'>
    <img src={baby} alt="baby" />
        
    </div>
    <div className='item'>
    <img src={children2} alt="children" />
           </div>
    <div className='item'>
    <img src={two} alt="two" />
        
    </div>
    
    <div className='item'>
    <img src={three} alt="three" />
        
    </div>
    <div className='item'>
    <img src={birthday} alt="birth" />
        
    </div>
  
</OwlCarousel>


        </div>


<Footer />

        </div>
        
    );
}
}