import React from "react";
import pixs1 from "../folwImages/menMinistry.jpg";
import pixs2 from "../folwImages/women2.jpg";
import pixs3 from "../folwImages/ym connect.jpg";
import pixs4 from "../folwImages/children6.jpg";
import pixs5 from "../folwImages/teenschurch.png";
import  '../Components/Dept.css';




function DeptCard(){
     return(
          <div className="DeptCards">
                   <div className="DeptCardsWrapper">
                               <div className="DeptcardsTitle wow tada" data-wow-offset="80" data-wow-delay=".5s">
                                        <h1>CONNECT, GROW & THRIVE</h1>
                               </div> 
                                                 
                     <div className="DeptcardPara">         
                           <p>The body is a unit, though it is made up of many parts; 
                         and though all its parts are many, they form one body. So it is with Christ.</p>
                         <p className="Scripture2">Cor 12:12 [NIV]</p>
                      </div>{/*============end col=====*/}
                     

           <div className="container"> 
           <div className="row">
                    <div className="image-container">
                         <div className="image-zoom">
                              <figure> <img src={pixs1} alt="pixs1" /></figure>
                              <h5 className="card-title">Men Connect</h5>                              
                         </div>
                         </div>

                         <div className="image-container">
                         <div className="image-zoom">
                              <figure> <img src={pixs2} alt="pixs1" /></figure>
                              <h5 className="card-title">Wise Women</h5>                              
                         </div>
                         </div>

                         <div className="image-container">
                           <div className="image-zoom">
                              <figure> <img src={pixs3} alt="pixs1" /></figure>
                              <h5 className="card-title">Young Adults and Professionals</h5>                              
                         </div>
                         </div>

                         <div className="image-container">
                         <div className="image-zoom">
                              <figure> <img src={pixs4} alt="pixs1" /></figure>
                              <h5 className="card-title">Children Church</h5>                              
                         </div>
                         </div>

                         <div className="image-container">
                         <div className="image-zoom">
                              <figure> <img src={pixs5} alt="pixs1" /></figure>
                              <h5 className="card-title">Teen Church</h5>                              
                         </div>

                    </div>

               </div> 
               </div>

              
     
               </div> 
               </div>          
               
           
     
     );
     

}
export default DeptCard;





// <div className="row">
// <div className="col-12 col-md-3 col-lg-3 ">
//      <div className="card">
//           <img src={pixs1} className="card-img-top" alt="pixs1" />
//           <div className="card-body">
//           <h5 className="card-title">Men Connect</h5>
//           </div>
//      </div>
// </div>{/*===end of col1*/}
// <div className="col-sm-12 col-md-3 col-lg-3">
//       <div className="card">
//           <img src={pixs2} className="card-img-top" alt="pixs1" />
//           <div className="card-body">
//           <h5 className="card-title">Wise Women</h5>
//           </div>
//        </div>
//      </div>{/*===end of col1*/}
//      <div className="col-sm-12 col-md-3 col-lg-3">
//    <div className="card">
//      <img src={pixs3} className="card-img-top" alt="pixs1" />
//      <div className="card-body">
//      <h5 className="card-title">Young Adult & Professionals</h5>
//      </div>
//      </div>
//   </div>{/*===end of col1*/}
//   <div className="col-sm-12 col-md-3 col-lg-3 ">
// <div className="card">
//      <img src={pixs4} className="card-img-top" alt="pixs1" />
//      <div className="card-body">
//      <h5 className="card-title">Childrens Church</h5>
//      </div>
//      </div>
// </div>{/*===end of col1*/}
// <div className="col-sm-12 col-md-3 col-lg-3 ">
// <div className="card">
//      <img src={pixs5} className="card-img-top" alt="pixs1" />
//      <div className="card-body">
//      <h5 className="card-title">Teens Church</h5>
//      </div>
//      </div>
// </div>{/*===end of col1*/}
     
// </div>{/*===end of ROW*/}  