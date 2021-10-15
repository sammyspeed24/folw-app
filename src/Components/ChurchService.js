import React from 'react';
import classes  from '../Components/Service.module.css';


function ChurchService(){
	return(
		
	<div className ={classes.ServiceContainer}>
				
			<div className={classes.Service_innerWrapper }>
			<div className={classes.ServiceTitle}>
			     <div className="Service_title justify-content-center text-center wow tada" data-wow-duration="2s" data-wow-delay="1s">
					 <h1 >Service Days</h1>
					 </div>
			  </div>

			    
			    <div className={classes.ServiceRow }>
				      <div className={classes.Serivce_para}>
				        <h4>SUNDAY</h4>
				        <p>- Celebration Service :  9:30am - 11:30am <br />
				           - Thanksgiving Service (1st sunday of the Month) 9:30am - 11:30am  </p> 
				       </div>
			      
					   <div className={classes.Serivce_para}>
						 <h4>TUESDAYS</h4>
						 <p> -  Digging Deep : 6:30pm - 8:00pm <br />
                             - Communion Service (1st Tuesdays of the Month) <br /> 6:30pm - 8:00pm</p>
					  </div>

					  <div className={classes.Serivce_para}>
			          <h4>THURSDAYS</h4>
			          <p>- Faith Clinic : 6:30pm - 7:00pm </p>
			         </div>
			      
			    </div>

			</div>

		

	</div>
);
			
}

export default ChurchService;