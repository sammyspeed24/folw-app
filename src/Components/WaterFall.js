import React from 'react';
import waterfall from '../videos/flowingWater.mp4';


function Waters() {
  return (
      <div className="video-container container-fluid">
    	<div className="video-wrapper">
      		<video autoPlay muted loop>
     		  <source src ={waterfall} type="video/mp4" />
     	    </video>
        </div>
      </div>
  );
}

export default Waters;