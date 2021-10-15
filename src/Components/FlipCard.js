import React from 'react';
import dance2 from "../folwImages/dance2.jpg" ;
import study from "../folwImages/study.jpg" ;
import faith from "../folwImages/faith.jpg" ;
import youth from "../folwImages/youthchurch.jpg" ;
import praise from "../folwImages/praise.jpg" ;
import Footer from './Footer';



function FlipCard(){
	return(
		<div className="Clipwrapper">
			<div className="Clip_title  wow tada" data-wow-offset="80" data-wow-delay="1s">
         <h1>Join Any Of Our Services</h1>
         </div>

			<div id="ClipWrapper-row">
		<div className="row justify-content-center text-center row-cols-1 row-cols-md-6 g-4 ClipWrapper_row">		
			<div className="col col_wrapper">
				<div className ="CardContainer">
				  <div className = "Card">
						<figure className="frontCard">
							<img src={dance2} className="card-img" alt="test" />
		                     <h5 className="card-tit justify-content-center text-center">Thanksgiving Service</h5>
		                </figure>
							  
						<figure className="backCard">
						   <p>
						<strong>O come let us sing for joy to the LORD,Let us shout joyfully to the rock of our salvation.
						<span className="flip_verses"><br />(Psalm 95:1)</span>
						</strong>
							   </p>
	                      
	                    </figure>
				   </div>
		        </div>
		    </div>

		   <div className="col col_wrapper">
				<div className ="CardContainer">
				  <div className = "Card">
						<figure className="frontCard">
							<img src={faith} className="card-img" alt="test" />
		                     <h5 className="card-tit justify-content-center text-center">Faith Clinic</h5>
		                </figure>
							  
						<figure className="backCard">
						   <p><strong>Pray without ceasing.<span className="flip_verses"><br />(1Thess. 5:17)</span></strong></p>
                          
	                    </figure>
				   </div>
		        </div>
		    </div>

 			<div className="col col_wrapper">
				<div className ="CardContainer ">
				  <div className = "Card">
						<figure className="frontCard">
					 
							<img src={study} className="card-img" alt="test" />
		                     <h5 className="card-tit justify-content-center text-center">Digging Deep</h5>
		                </figure>
							  
						<figure className="backCard backCard2">
						     <p><strong>Study to shew thyself approved unto God, a workman that needeth not to be ashamed,
								 rightly dividing the word of truth.<span className="flip_verses"><br />(2 Tim.2:15 KJV)</span></strong></p>
                          
	                    </figure>
				   </div>
		        </div>
		    </div>

			<div className="col col_wrapper">
						<div className ="CardContainer">
						  <div className = "Card">
								<figure className="frontCard">
							      <img src={praise} className="card-img" alt="test" />
				                  <h5 className="card-tit justify-content-center text-center">Rejoice</h5>
				                </figure>
									  
								<figure className="backCard">
								  <p><strong> " When the praises go up,<br /> the blessings come down.”</strong></p>
		                          
			                    </figure>
						   </div>
				        </div>
				    </div>

				     <div className="col col_wrapper">
						<div className ="CardContainer">
						  <div className = "Card">
								<figure className="frontCard">
							 
									<img src={youth} className="card-img" alt="test" />
				                     <h5 className="card-tit justify-content-center text-center">Youth Sunday</h5>
				                </figure>
									  
								<figure className="backCard ">
								  <p><strong> May our sons in their youth be like plants full grown,
								   our daughters like corner pillars cut for the structure of a palace.
								   <span className="flip_verses"><br />(Psalm 144:12 ESV)</span></strong></p>
		                        
			                    </figure>
						   </div>
				        </div>
				    </div>
					</div>



			

		</div>
<div className="ClipWrapperFooter">
<Footer />
</div>

		</div>
);
			
}

export default FlipCard;