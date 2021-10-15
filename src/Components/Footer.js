import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faPhone,faEnvelopeSquare,faHome} from "@fortawesome/free-solid-svg-icons";
import { fab,faFacebook,faTwitter,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom";
import classes from '../Components/Footer.module.css'
import CopyRight from './CopyRight';

import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab, faCoffee,faFacebook,faTwitter,faYoutube,faInstagram,faHome,faEnvelopeSquare,faPhone)

function Footer(){
	return(
   
		<div className={classes.footerContainer}>

          <div className={classes.ThanksMessage}>
            <h1>THANK YOU FOR VISITING FOUNTAIN OF LIVING WATERS(RCCG.)</h1>
          </div>
     
     
          <div className={classes.container}>
            <div className={classes.row} > 
        <div className={classes.SocialMedia}>
              <div className={classes.LocateUs}>{/*==============col===================*/}
                <h5 className={classes.FollowUSH5}><strong>LOCATE US</strong></h5>
                <ul className={classes.followUS_ul}>
                <li>  <FontAwesomeIcon icon={faPhone} color="#abe2d0" />  +2348084669367</li>
                <li><FontAwesomeIcon icon={faEnvelopeSquare} color="#abe2d0" />folwrccgparish@gmail.com</li>
                <li><strong>FOLW Parish</strong> : 2B Thomas Olaniyan street, Anthony, Lagos. *</li> 
                <li><strong>Service Times</strong> : Tuesday Digging Deep. | Thusday Faith Clinic.     
                </li>
                </ul>                 
                </div>
              </div>{/*==============LocateUs===================*/}

              <div className={classes.SocialMedia}>
              <div className={classes.FollowUs}>{/*==============Start===================*/}
              <h5 className={classes.FollowUSH5}><strong>FOLLOW US</strong></h5>
              <ul className={classes.followUS_ul}>
              <li><a className={classes.follow_link} href="https://m.youtube.com/channel/UCA-KDXpSXtAPHbeV9ldiqQ"  target="_blank"><i className="fab fa-youtube"></i></a></li>
              <li><a className={classes.follow_link} href="https://www.instagram.com/rccgfolw/" target="_blank"><i className="fab fa-instagram"></i></a></li>
              <li><a className={classes.follow_link} href="https://free.facebook.com/rccgfolwlagos?_rcdc=1&_rdr" target="_blank"><i className="fab fa-facebook"></i></a></li>
              </ul>
              </div>
            </div>{/*==============End od FollowUs===================*/}

            <div className={classes.SocialMedia}>
            <div className={classes.Navigation}>{/*==============Start===================*/}
            <h5 className={classes.FollowUSH5}><strong>NAVIGATE</strong></h5>
           <ul className={classes.followUS_ul}>
           <li><Link className={classes.follow_link} to="/">Home</Link></li>
           <li><Link className={classes.follow_link}  to="/about">About</Link></li>
           <li><Link className={classes.follow_link}  to="/contact">Contact</Link></li>
          <li><Link className={classes.follow_link}  to="/giving">Give</Link></li>
               </ul>
               </div>
            </div>{/*==============End of Navigation===*/}
            
            <div className={classes.SocialMedia}>
            <div className={classes.MediaStore}>{/*==============Start===================*/}
          <h5 className={classes.FollowUSH5}><strong>MEDIA STORE</strong></h5>
          <ul className={classes.followUS_ul}>  
         <li><a  className={classes.follow_link} href="https://castbox.fm/channel/fountain-of-Living-Waters-RCCG-id1491591?country=gb" target="_blank"> 
              SUNDAY’S MESSAGES
              </a>
          </li>
         </ul>
         </div>
         </div>

           
                
   </div>{/*==============row ENDS HERE============================================================*/}
        </div>{/*==============CONTAINER ENDS HERE============================================================*/}
       <div className={classes.clearContainer}></div>
       <CopyRight />

            

	</div>

   
);  
     
}

export default Footer;




// <div className={classes.FollowUS}>{/*==============col===================*/}
                    
// <h5 className={classes.FollowUSH5}><strong>LOCATE US</strong></h5>
// <p>  <FontAwesomeIcon icon={faPhone} color="#abe2d0" />  +2348084669367</p>
// <p><FontAwesomeIcon icon={faEnvelopeSquare} color="#abe2d0" />  folwrccgparish@gmail.com</p><br/>
// <p><strong>FOLW(Parish)</strong><br />2B Thomas Olaniyan street,<br /> Anthony, Lagos.</p>
// <p><strong>Service Times</strong><br />
//   * Tuesday Digging Deep<br />
//   * Thusday Faith Clinic
// </p>
// </div>{/*==============col===================*/}

// <div className={classes.FollowUs}>{/*==============col===================*/}
// <h5 className={classes.FollowUSH5}><strong>FOLLOW US</strong></h5>
// <ul className={classes.followUS_ul}>
// <li><a className={classes.follow_link} href="https://m.youtube.com/channel/UCA-KDXpSXtAPHbeV9ldiqQ"  target="_blank"><i className="fab fa-youtube"></i></a></li>
// <li><a className={classes.follow_link} href="https://www.instagram.com/rccgfolw/" target="_blank"><i className="fab fa-instagram"></i></a></li>
// <li><a className={classes.follow_link} href="https://free.facebook.com/rccgfolwlagos?_rcdc=1&_rdr" target="_blank"><i className="fab fa-facebook"></i></a></li>
// </ul>
// </div>{/*==============col===================*/}


// <div className={classes.FollowUS}>{/*==============col===================*/}
// <h5 className={classes.FollowUSH5}><strong>NAVIGATE</strong></h5>
// <ul className={classes.followUS_ul}>
//           <li><Link className={classes.follow_link} to="/">Home</Link></li>
//           <li><Link className={classes.follow_link}  to="/about">About</Link></li>
//           <li><Link className={classes.follow_link}  to="/contact">Contact</Link></li>
//           <li><Link className={classes.follow_link}  to="/giving">Give</Link></li>
         
//       </ul>
// </div>{/*==============col===================*/}
// <div className={classes.FollowUs}>{/*==============col===================*/}
// <h5 className={classes.FollowUSH5}><strong>MEDIA STORE</strong></h5>
// <ul className={classes.followUS_ul}>  
//      <li><a  className={classes.follow_link} href="https://castbox.fm/channel/fountain-of-Living-Waters-RCCG-id1491591?country=gb" target="_blank"> 
//      SUNDAY’S MESSAGES</a></li>
       
//       </ul>
// </div>{/*==============col===================*/}
