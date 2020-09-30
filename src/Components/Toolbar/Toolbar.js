import React from "react";
import { Link } from "gatsby";
import styles from "./toolbar.module.css";
import {button} from "../Button/button.module.css";

import { fbPxTrigger } from "../../index";



const ToolbarItem = props => (  
  <li className={`toolbar_item ${styles.toolbar_item}`}>
    <Link to={props.to} style={{ textDecoration: "none" }} onClick={() => props.to_top()} onKeyPress={() => props.to_top()}>
      {props.label}
    </Link>
  </li>)

const toolbar = (props) => {
  let toolbarClasses = `toolbar ${styles.toolbar}`;
  if (props.show) {
    toolbarClasses = `toolbar ${styles.toolbar} open ${styles.open}`;
  }

  const handleEnrollClick = () => {
    fbPxTrigger();
    props.to_top()
  }
  
  return (
    <nav className={toolbarClasses}>
      <div className={`toolbar_container ${styles.toolbar_container}`} 
      onClick={props.backdropClickHandler}
      onKeyPress={props.backdropClickHandler}
      role="button" 
      aria-label="close menu"
      tabIndex="-1">
        <div>
          <ul>
            <li className={`toolbar_item ${styles.toolbar_item}`}>
              <a href="/enroll" 
              style={{ textDecoration: "none" }}
              onClick={handleEnrollClick}
              onKeyPress={handleEnrollClick}>
               Enroll
              </a> 
            </li>
            <ToolbarItem to="/dental/" label="Dental" to_top={props.to_top} />
            <ToolbarItem to="/vision/" label="Vision / Hearing" to_top={props.to_top} />
            <ToolbarItem to="/about/" label="About" to_top={props.to_top} />
          </ul>
        </div>
        <div className={`call_toolbar ${styles.call_toolbar}`}>
          <a
            data-replaceable-phone-dialable=""
            className={`toolbar_item ${styles.toolbar_item}`}
            href="tel:8559310267"
          >
            <span className={`button ${button} ${styles.toolbar_button}`} id="toolbar_button">
              Call Now
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default toolbar;