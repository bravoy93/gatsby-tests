import React from "react";
import { Link } from "gatsby";
import styles from "./nav.module.css";
import {fbPxTrigger} from "../../index"
import Hamburger from "../Toolbar/ToolbarToggleButton.js";

const NavLink = props => (
  <li>
    <Link to={props.to} 
      style={{ textDecoration: "none" }}
      onClick={() => props.to_top()}
      onKeyPress={() => props.to_top()}>
      {props.label}
    </Link>
  </li>
)

export default function Nav(props) {
  let nav_wrapper_class = `nav_wrapper ${styles.nav_wrapper}`;
  let items_nav = `items_nav ${styles.items_nav}`;
  let logo_white = "https://unifiedhealthadvisors.com/aws/images/white+full.svg";
  let logo_dark = "https://unifiedhealthadvisors.com/aws/images/blue+full+.svg";
  let icon = "https://unifiedhealthadvisors.com/aws/images/white+icon.svg";
  let logo = logo_white;
  let nav_number_scrolled = `nav_number ${styles.nav_number}`;
  if (props.scrolled) {
    nav_wrapper_class = `nav_wrapper ${styles.nav_wrapper} scrolled ${styles.scrolled}`;
    items_nav = `items_nav ${styles.items_nav} nav_text_scrolled ${styles.nav_text_scrolled}`;
    nav_number_scrolled = `nav_number_scrolled ${styles.nav_number_scrolled}`;
  }
  if (!props.scrolled) {
    logo = logo_dark;
  } 

  // React.useEffect(() => {
  //   value = stateValue;
  // },[value]); // Only re-run the effect if 'value' changes, like a Vue watcher

  const onLogoClick = (e='') => {
    const path = typeof window !== 'undefined' ? window.location.pathname : '';
    if(e && path === '/') e.preventDefault();
    props.to_top()
  }

  return (
    <div className={nav_wrapper_class}>
      <div 
        role="button"
        tabIndex="0"
        aria-label="Home"
        onClick={(e) => {onLogoClick(e)}}
        onKeyPress={(e) => {onLogoClick(e)}}>
        <Link to="/">
          <img
            src={icon}
            alt="Unified Health Icon"
            className={`cfd_icon_mobile ${styles.cfd_icon_mobile}`}
          />
          <img
            src={logo}
            alt="Unified Health Logo"
            className={`cfd_logo ${styles.cfd_logo}`}
            width="140px"
            height="40px"
          />
        </Link>
      </div>
      <div className={`hamburger ${styles.hamburger}`}>
        <Hamburger click={props.toolbarToggleClickHandler} />
      </div>
      <div className={items_nav}>
        <ul>
          <li>
            <a href="https://unifiedhealthadvisors.com/enroll" target="_blank" rel="noreferrer" onClick={()=>fbPxTrigger({goEmbed: false})} style={{ textDecoration: "none" }}>
              Enroll
            </a>
          </li>        
          <NavLink to="/dental" label="Dental" to_top={props.to_top} />
          <NavLink to="/vision" label="Vision/Hearing" to_top={props.to_top} />
          <NavLink to="/about" label="About Us" to_top={props.to_top} />
          <li className={`navNumber ${styles.navNumber}`}>
            <a
              data-replaceable-phone-dialable=""
              className={nav_number_scrolled}
              href="tel:18559310267"
              role="button"
              aria-label="Call to speak speak to a Licensed Benefit Advisor"
            >
              1-855-931-0267 <span>TTY users 711</span>
            </a>
            <ul>
              <li>Available: Mon - Fri, 8 AM - 8 PM</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}