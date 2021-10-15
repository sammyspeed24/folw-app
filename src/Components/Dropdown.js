// import React, { useState } from 'react';
// import { DropDownLi } from './NavulDropdownli';
// import '../Components/Dropdown.css';
// import { Link, NavLink } from 'react-router-dom';

// function Dropdown() {
//    const [dropdown, setDropdown] = useState(false);

 
//   return (
//     <> 
//       <ul 
//       className={dropdown ? "Dropdown-ul clicked" : "Dropdown-ul"}  
//       onClick={()=>setDropdown(!dropdown)}
//       >
//         {DropDownLi.map((item) =>{
//           return (
//             <li key={item.id}>
//               <NavLink 
//               className={item.cName}
//                to={item.path} 
//                onClick={()=>setDropdown(false)}
//                  >
//                  {item.title}
//                </NavLink>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// export default Dropdown;