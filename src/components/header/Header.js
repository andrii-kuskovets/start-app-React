import React, {useState} from 'react';
import {NAV_ITEMS} from "../../constatns";
import Icon from "../Icons";
import './_header.scss';

function Header() {
  const [active, setActiveMenu] = useState(false);

  return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="logo">
              <a href="/">
                <Icon className="logo__icon logo__icon_white" name="logo" />
              </a>
            </div>
            <div className="menu header__menu">
              <nav className={active ? "menu__nav menu__nav_active" : "menu__nav"}>
                <ul className="menu__list">
                  {NAV_ITEMS.map(item => (
                      <li key={item.title} className="menu__element">
                        <a className="menu__link" href={`#${item.link}`} onClick={() => setActiveMenu(!active)}>{item.title}</a>
                      </li>
                  ))}
                </ul>
              </nav>
              <button onClick={() => setActiveMenu(!active)} className={active ? 'btn hamburger hamburger_active' : 'btn hamburger'} aria-label="open menu">
                <span/>
                <span/>
                <span/>
              </button>
            </div>
            <button className="header__btn btn btn__secondary">Register</button>
          </div>
        </div>
      </header>
  );
}

export default Header;
