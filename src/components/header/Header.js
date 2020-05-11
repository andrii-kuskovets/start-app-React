import React from 'react';
import {NAV_ITEMS} from "../../constatns";
import Icon from "../Icons";
import './_header.scss'

function Header() {
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
              <nav className="menu__nav">
                <ul className="menu__list">
                  {NAV_ITEMS.map(item => (
                      <li key={item.title} className="menu__element">
                        <a className="menu__link" href={`#${item.link}`}>{item.title}</a>
                      </li>
                  ))}
                </ul>
              </nav>
              <button className="btn hamburger js-mobile-menu" aria-label="open menu">
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
