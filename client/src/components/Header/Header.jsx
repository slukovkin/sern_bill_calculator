import React from "react";
import "./Header.module.css";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <header className='header'>
      <div className='header-menu'>
        <ul>
          <li>
            <NavLink to='/'>Платежи</NavLink>
          </li>
          <li>
            <NavLink to='counter_el'>Электроснабжение</NavLink>
          </li>
          <li>
            <NavLink to='counter_w'>Водоснабжение</NavLink>
          </li>
          <li>
            <NavLink to='counter_g'>Газоснабжение</NavLink>
          </li>
          <li>
            <NavLink to='settings'>Настройки</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
