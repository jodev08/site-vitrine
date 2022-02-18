import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div className='navigation'>
           <ul>
               <NavLink to="/" exact className="hover" activeClassName='nav-active'>
                   <li>accueil</li>
               </NavLink>

               <li className='nav-portfolio'>services
               <ul className='nav-projects'>
                   
                   <NavLink to="/service1" activeClassName='nav-active' className='hover'>
                       <li>service 1</li>
                   </NavLink>

                   <NavLink to="/service2" activeClassName='nav-active' className='hover'>
                       <li>service 2</li>
                   </NavLink>

                   <NavLink to="/service3" activeClassName='nav-active' className='hover'>
                       <li>service 3</li>
                   </NavLink>

                   
               </ul>
               
               </li>
               <NavLink to="/contact" activeClassName='nav-active' className='hover'>
                       <li>contact</li>
                   </NavLink>

           </ul>
       </div>
    );
};

export default Navigation;