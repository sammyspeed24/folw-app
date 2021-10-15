
 import React from "react";
 import Pastor from "../folwImages/4.jpg";
 import  classes from '../Components/WelcomeSpech.module.css';


 function WelcomeSpech(){
     return( 
 <div className={classes.WelcomeSpech}>

 <div className={classes.WelTitle} >
   <div className=" wel_tithle wow tada" data-wow-duration="2s" data-wow-delay="1s">
     <h3>Welcome To FOLW</h3>
   </div>
   </div>

 <div className={classes.PastorWrapper}>
     <div className={classes.photo}>
     <img className={classes.pastorImage} src={Pastor} alt="Pastor-img" />
    
   </div>

   <div className={classes.PastorText}>
     <p>At Fountain Of Living Waters (FOLW), our prayer for you is that the God of all grace anoints you with fresh oil and His precious Spirit illuminates the word as you read.
            <br /> May He empower you to effectively communicate to others the vibrant hope that He has given you to persevere the struggles that you have overcome and continue to overcome.<br /> Furthermore to bring together the body of Christ, which is our hope and righteousness, and lift up ourselves in prayer and admonition, as commanded by Him.


     </p>
     <p className={classes.pastorName}>PASTOR CONRAD MEMEH.
     <span className={classes.pastorChurch}>(R.C.C G FOLW)</span></p>     
   
    
   </div>
 </div> 
 </div>  
        
     );
} 
export default WelcomeSpech;

