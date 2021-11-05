import React, { Component } from 'react';
import waterfall from '../videos/folw-video.mp4';
import Testimony from "../Components/Testimony";
import WOW from 'wowjs';
import ChurchService from  "../Components/ChurchService";
import ChurchLocation from  "../Components/ChurchLocation";
import Footer from  "../Components/Footer";
import { faCoffee,faEnvelope,faPrayingHands,faSearch} from "@fortawesome/free-solid-svg-icons";
import { fab, faFacebook,faTwitter,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import WhoWeAre from "../Components/WhoWeAre";
import WelcomeSpech from './WelcomeSpech';
import classes  from '../Components/Home.module.css';

library.add(fab, faCoffee, faEnvelope,faFacebook,faTwitter,faYoutube,faInstagram,faPrayingHands,faSearch)



class Home extends Component{
  
  componentDidMount() {
    new WOW.WOW().init();
}
	render(){
		 return (
     
<div className="HomePage">
  
    <section className={classes.main_banner} id="main_banner">
                    <video autoPlay muted loop className={classes.Videostyle}>
            <source src ={waterfall} type="video/mp4" />
            </video>
    
        <div className={classes.overlay}></div>

{/**=================START OF RCCGPIX AND TITLE ======================*/} 


      <div className={classes.InnerWrapper} >
      <div className="inner_banner wow slideInRight" data-wow-delay="2s" data-wow-duration="1s">
          <p className={classes.InnerPara}><strong>With joy you will draw water<br />from the wells of salvation.</strong></p>
          <p className={classes.Scripture}> <strong>Isaiah 12:3</strong></p>
        </div>
        </div>    
      </section>	
{/**=================START OF SLIDERWRAPPER/ WELCOME SPEECH ======================*/}  
{/**=================END SECTION======================*/}
< WelcomeSpech /> 
{/**=================START OF SECTION ======================*/}
  <div className={classes.sectionThree}>
  <div className=" wow bounceIn "  data-wow-delay="1s" data-wow-duration="2s">
  <div className={classes.para}>
    <p>And let us not neglect our meeting together, as some people do, but encourage and warn each other,
     especially now that the day of His coming back again is drawing near.
  </p>
  <p className={classes.Scripture2}> <strong>Hebrew 10:25. [NLT]</strong></p>
  </div>
  </div>
 
</div>
{/**=================END OF SECTION ======================*/}
{/**=================START GUEST_WRAPPER ======================*/}
<section className={classes.GuestWrapper}>
<div className={classes.Covidwrapper}>
<div className={classes.covidPara}>
      <p>In light of the COVID-19 pandemic, we are joining global efforts to reduce the spread of the virus by adhering to the directives of health and
            government authorities to observe social distancing 
          and reduce the number of people gathered in the same space.</p>
      </div>
      
  </div> 

</section>
  <WhoWeAre />
<Testimony />
<ChurchService />
<ChurchLocation />
 <Footer />
  </div>
  );
}
	}
 
export default Home;