import React from 'react';
import '../Components/Payments.css';
import tenpersent from "../folwImages/tenpersent.jpg";
import seed from "../folwImages/seed.png";
import seedOffering from "../folwImages/seedOffering.jpg";
import fcmb from "../folwImages/fcmb.png";
import uba from "../folwImages/uba.png";
import '../Components/Cards.css';

 
 const Cards = () =>{
return(

<div className="Cards_section">
  
<div className="Giving_banner">
         <div className="row justify-content-center">
           <h1>GIVE</h1>
           <p>In giving to the work of God's Kingdom, you contribute to advancing it here on earth.
                Your financial involvement could also be the greatest investment you make in the lives of others.
                Your generosity helps spread Christ’s message of hope and healing.</p>
        </div>
  </div>{/* end Give-banner*/}
    
<div className="container">
  <div className="row">
          <div className="Give-intro justify-content-center">
           <h5>For online payments of TITHES, OFFERINGS and SEED OFFERINGS,kindly use the following details bellow:</h5>
        </div>
   </div>
<div className="row">
    <div className="Give-img-container">{/* start Give-img-container */}
    <div className="give-img-zoom">
      <figure><img src={tenpersent} alt="tenpensent" /></figure>
      <h5>TITHE</h5>
      <li>Account Name: Fountain Of Living Waters</li>
      <li>Account Number: 2501367018.</li>
      <img src={fcmb} alt="fcmb" className="bankImg" />
    </div>

    </div> {/*  end Give-img-container */}
    <div className="Give-img-container">{/* start Give-img-container */}
    <div className="give-img-zoom">
      <figure><img src={seed} alt="tenpensent" /></figure>
      <h5>OFFERING</h5>
      <li>Account Name: Fountain Of Living Waters</li>
      <li>Account Number: 2501367025</li>
      <img src={fcmb} alt="fcmb" className="bankImg" />
    </div>

    </div> {/*  end Give-img-container */}
    <div className="Give-img-container">{/* start Give-img-container */}
    <div className="give-img-zoom">
      <figure><img src={seedOffering} alt="tenpensent" /></figure>
      <h5>TITHE</h5>
      <li>Account Name: Fountain Of Living Waters</li>
      <li>Account Number: 1011511907.</li>
      <img src={uba} alt="uba" className="bankImg" />
    </div>

    </div> {/*  end Give-img-container */}
  

</div>


</div>
  </div>    
);

 }
 export default Cards;
