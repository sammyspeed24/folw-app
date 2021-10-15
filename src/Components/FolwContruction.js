import React, { Component } from 'react';
import '../Components/folwContruction.css';
import uba from "../folwImages/uba.png";
import WOW from 'wowjs';
import Footer from "../Components/Footer";


class FolwContruction extends Component{
    componentDidMount(){
        new WOW.WOW().init();
    }
    render(){
        return (
            <div className="DonatePage">
                <div className="DonatePage-Wrapper">
                    <h1>FOLW BUILDING PROJECT</h1>
               
                <p  className=" DonateScripture wow slideInRight" data-wow-delay="2s" data-wow-duration="1s">
                    Go up to the hills and bring wood and build the house, 
                    that I may take pleasure in it and that I may be glorified, says the Lord.
               </p>
               <p className="DonatePage-p"><strong>Haggai 1:8 ESV</strong></p>
               </div>
        
                
                      <div className="AccountNum justify-content-center container text-center">
                      <h2>Bank : UBA<img src={uba} alt="uba" className="uba-img" /></h2>
                            <h2> Account Number: 1011511907</h2>
                        
                         </div>
                         
                     
               
            
           <Footer />
                    
                </div>

          
                
               
               
    
        );
    }
    
}

export default FolwContruction
