import React from 'react';
import '../App.css';
import classes from "../Components/Location.module.css";



function ChurchLocation(){
	return(
	<div className={classes.locationRow}>
		 <div className={classes.locationRow}>
			 <div className={classes.ChurchLocate}>
		      <div className="Churchlocate wow bounceIn" data-wow-offset="80" data-wow-delay="1s">
		     			<h3>Church Location</h3> 
		       </div>
			   </div>

		        <div className={classes.MapWrapper}>
				    <div className={classes.mapp}>
		          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.6660194070373!2d3.3655265644409917!3d6.563772695252807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dbceac82f4b%3A0x84829b1c33b48544!2sRCCG%20-%20Fountain%20of%20Living%20Waters!5e0!3m2!1sen!2sng!4v1601229303821!5m2!1sen!2sng" width="400" height="400" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
		      		</div>
		       </div>
         </div>

	</div>
);
			
}

export default ChurchLocation;