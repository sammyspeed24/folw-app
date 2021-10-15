import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faCoffee,faEnvelope,faPrayingHands} from "@fortawesome/free-solid-svg-icons";
import { fab, faFacebook,faTwitter,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons'
import castbox from "../folwImages/castbox.png";
import House from "../folwImages/housefellow.jpeg";
import { library } from '@fortawesome/fontawesome-svg-core'
import {Col,Row,Container} from 'react-bootstrap'
import { Link} from "react-router-dom";
import ScrollTopButton from '../Components/ScrollTopButton';
import '../Components/Connect.css';
import Footer from './Footer';



library.add(fab, faCoffee, faEnvelope,faFacebook,faTwitter,faYoutube,faInstagram,faPrayingHands,faArrowUp)

function ConnectUs(){
  //<ScrollTopButton />
	return(
		<div className="ConnectUs">
       <div className="Connect-Wrapper">
          <div className="Connect_title">
          <h1>Connect With Us</h1>
          </div>
          <div className="connect-overlay"></div>
     
         {/*=============row here=================*/}
         <div className="Connect-container">
         
              <div className="Connect-Col">{/*=============col1 starts here=================*/}
                    <div className="PrayerWrapper">
                        <FontAwesomeIcon icon={faPrayingHands} className="prayingHandIMg" />
                         <h5>Prayer Requests</h5>
                          <p>Prayer is a conversation with God. When we pray, we grow in faith and can see God at work.</p>
                      
                          <div className="PrayerWrapper_btn">
                          <button type="button" className="btn btn-lg btn-outline-success">
                            <Link className="Link_Prayer" to="/request">Prayer Request</Link></button>
                            
                      </div>
                    </div>
                   
              </div>{/*=============col1 ends here=================*/}

              <div className="Connect-Col">{/*=============col2 starts here=================*/}
              <div className="CastWrapper">
              <img src={castbox} alt="castbox" />
              <h5>Listen To Messages</h5>
              <div className="castbox_btn">
                  <a href="https://castbox.fm/channel/fountain-of-Living-Waters-RCCG-id1491591?country=gb" target="_blank">  
                  <button type="button" className="btn btn-sm btn-outline-success">Click Here</button>
                  </a>
                </div>
                </div>
              </div>{/*=============col2 ends here=================*/}

              <div className="Connect-Col">{/*=============col3 start here=================*/}
              <div className="HouseWrapper">
                  <img src={House} alt="houseimg" />
                  <h5> Get Started by Joining a Group</h5>
                  <p>In good times and in bad times, groups are your source of friendship and support. 
                    We all need each other, and that’s why we have Small Groups. No matter who you are or what stage of life you’re in,
                    we have something for you. Check out the directory and connect with a Small Group today!</p>
                    </div>
              </div>{/*=============col3 ends here=================*/}
              </div>{/*=============row ends here=================*/}
 
    
   
 
 		
    </div>{/*=============ROWCONTAINER ends here=================*/}

    <Footer />
    </div>
		
);
			
}

export default ConnectUs;