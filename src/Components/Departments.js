
import React from "react";
import '../Components/Departments.css';
import Footer from "./Footer";
import pixs1 from "../folwImages/menMinistry.jpg";
import pixs2 from "../folwImages/women2.jpg";
import pixs3 from "../folwImages/ym connect.jpg";
import pixs4 from "../folwImages/children6.jpg";
import pixs5 from "../folwImages/teenschurch.png";




function DepartmentsPage(){
  return (
<div className="department">
      <div className="departmentWrapper">
  <div className="DeptcardsTitle">
                <div className="Deptcards_title wow tada" data-wow-offset="80" data-wow-delay=".5s">
                     <h1>CONNECT, GROW & THRIVE</h1>
                </div>
           </div>                   
            <div id="DeptcardPara">         
                       <p>The body is a unit, though it is made up of many parts; 
                         and though all its parts are many, they form one body. So it is with Christ.</p>
                         <p className="Scripture2">Cor 12:12 [NIV]</p>
                      </div>{/*============end col=====*/}
                    

           <div className="container content-justify-content-center"> 
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


<Footer />

 </div>

  );
}

export default DepartmentsPage;

