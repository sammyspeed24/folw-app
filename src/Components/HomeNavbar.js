// import React, { useState,useEffect } from 'react';
// import{ NavLink, Link } from 'react-router-dom';
// import '../Components/navbar.css';
// import pix from "../folwImages/RCCG.png";
// import {navbarul, SidebarLi}  from '../Components/NavulDropdownli';
// import Dropdown from '../Components/Dropdown';

// function Navbar() {
//   const [dropdown, setDropdown] = useState(false);
//   const [mobile, setMobile] = useState(false);
//   const [sidebar, setSidebar] = useState(false);

//   useEffect(()=>{
//       if(window.innerWidth<960){
//         setMobile(true);
      
//       }
    
//   },[]);

//   useEffect(()=>{
//     const handleResize =()=>{
//       if(window.innerWidth<960){
//         setMobile(true);
//       }else{
//         setMobile(false);
//         setSidebar(false);
//       }
//     }
   

//     window.addEventListener("resize",handleResize);
//     return ()=>{
//       window.removeEventListener("resize" , handleResize);
//     };
//   },[])

//   return (
//     <>
//       <nav className='navbar'>
//           {/*=========logoSection*/}
//         <Link to='/' className='navbar-logo wow bounceIn'  data-wow-delay="1s" data-wow-duration="1s" >
//         <img src ={pix} alt="pix"  className="rccgPix" />
//          <h3 className="text-white rccgpix_title">Fountain Of Living Waters</h3>
//         </Link>
//          {/*=========logoSection*/}
        
//          {/*=========UL====================*/}
//          {!mobile &&(
//             <ul className="navbar-ul">
           
//             {navbarul.map((item)=>{
//                 if(item.title==="Explore"){
                  
//                return(<li key={item.id} 
//                className={item.cName} 
//                 onMouseEnter={()=>setDropdown(true)}
//                 onMouseLeave={()=>setDropdown(false)}
//                >
//                 <Link to={item.path}>{item.title} <i className='fas fa-caret-down' /></Link>
//                 {dropdown && <Dropdown />} 
//               </li>
//               );
//                 }

//                return(<li key={item.id} className={item.cName}  >
//                 <Link to={item.path}>{item.title}</Link>
//               </li>); 
            
//           })}
      
         
//         </ul>
//          )}
          
//          {!mobile}
//           {/*=========UL===================*/}
       
//         {mobile &&(
//           <div className="sidebar-toggle" >
//               {sidebar ?(
//                <i className='fas fa-times' onClick={()=>{setSidebar(!sidebar)}} /> 
//               ) :(<i className='fas fa-bars'  onClick={()=>{setSidebar(!sidebar)}}/>)}
//           </div>
//         )}
//       </nav>

//     <div className={sidebar ?"sidebar active" :"sidebar"}>
//     <ul className="sidebar-ul">
//               {navbarul.map((item)=>{
//                  if(item.title==="Explore"){
//                   return(
//                   <li key={item.id} 
//                   className={item.sName} 
//                    onMouseEnter={()=>setDropdown(true)}
//                    onMouseLeave={()=>setDropdown(false)}
//                   >
//                    <Link to={item.path}>{item.title} <i className='fas fa-caret-down' /></Link>
//                    {dropdown && <Dropdown />} 
//                  </li>
//                  );
//                    }
               
//                  return(
//                  <li key={item.id} 
//                  className={item.sName}
//                  onClick={()=>setSidebar(false)}
//                    >
//                 <Link to={item.path}>{item.title}</Link>
//               </li>);
            
//           })}
        
         
//         </ul>

//     </div>
//     </>
//   );
// }

// export default Navbar;