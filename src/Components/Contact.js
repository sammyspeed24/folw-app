import React from "react";
import Footer from '../Components/Footer';
import '../Components/Contact.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelopeOpenText,faPhone} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee,faEnvelope,faPrayingHands,faHandPointLeft} from "@fortawesome/free-solid-svg-icons";
import { fab, faFacebook,faTwitter,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons'





library.add(fab, faCoffee, faEnvelope,faFacebook,faTwitter,faYoutube,faInstagram,faPrayingHands,faHandPointLeft)


function ContactPage(){
  return(
   <div className="ContactPage">
            <div className="ContactUs">
            <h1>CONTACT</h1>
            </div>

{/* 
      <div className=" row OutterRow container mt-4 "> */}
               
      <div className="row">            
    {/* <div className=" col-lg-6 HandOuterwrapper  container"> */}
    <div className=" col-lg-6 " id="col1">
          <div className="ClickMeWrapper">
            <Link className="Contact_Us" to="/sendmessage"><h5>CLICK TO SEND MESSAGE</h5></Link>
            <p>We will love to hear from you</p>
          </div>

            <div className="HandIcon">
            <FontAwesomeIcon icon={faHandPointLeft} className="Hand_pointLeft"/>
            </div> 
    </div>

      {/* <div className="col-lg-6 contact_add_row  container"> */}
            <div className="col-lg-6" id="col6">
                  <h1> Contact Fountain Of Living Waters Parish</h1>
                  <p>Mailing Address:<br />
                  2b Thomas Olaniye Street,<br />
                  Idiro Anthony,Lagos Nigeria.<br /><br />

               <FontAwesomeIcon icon={faPhone} /> :  07082483631<br />
               <FontAwesomeIcon icon={faEnvelopeOpenText} />: folwrccg@gmail.com</p>
            </div>
          {/*end col======================*/}
          

    {/*end col======================*/}
    </div>
    

     
     
         <div className="Contact_mapp  container">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.6660194070373!2d3.3655265644409917!3d6.563772695252807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dbceac82f4b%3A0x84829b1c33b48544!2sRCCG%20-%20Fountain%20of%20Living%20Waters!5e0!3m2!1sen!2sng!4v1601229303821!5m2!1sen!2sng" width="400" height="400" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
       </div>
   
       <Footer />
           </div>
  );

}

export default ContactPage;