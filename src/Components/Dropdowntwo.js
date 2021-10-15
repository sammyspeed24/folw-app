import React, { useState } from 'react';
import { SidebarLi } from './NavulDropdownli';
import '../Components/Dropdown.css';
import { Link, NavLink } from 'react-router-dom';

function Dropdowntwo() {
   const [dropdown, setDropdown] = useState(false);

 
  return (
    <> 
      <ul 
      className={dropdown ? "Dropdown-ul clicked" : "Dropdown-ul"}  
      onClick={()=>setDropdown(!dropdown)}
      >
        {SidebarLi.map((item) =>{
          return (
            <li key={item.id}>
              <NavLink 
              className={item.sbName}
               to={item.path} 
               onClick={()=>setDropdown(false)}
                 >
                 {item.title}
               </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdowntwo;