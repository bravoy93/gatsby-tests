import React from "react";
import { Link } from "gatsby";
import styles from "./toolbar.module.css";
import {button} from "../Button/button.module.css";

import { fbPxTrigger } from "../../index";



const ToolbarItem = props => (  
  <Link to={props.to} onClick={() => props.to_top()} onKeyPress={() => props.to_top()}>
    <li className={`toolbar_item ${styles.toolbar_item}`}>
      {props.label}
    </li>
  </Link>
  )

const toolbar = (props) => {
  let toolbarClasses = `toolbar ${styles.toolbar}`;
  if (props.show) {
    toolbarClasses = `toolbar ${styles.toolbar} open ${styles.open}`;
  }

  const handleEnrollClick = () => {
    fbPxTrigger({goEmbed:false});
    props.to_top()
  }
  
  return (
    <nav className={`${toolbarClasses} lg-none`}>
      <div className={`toolbar_container ${styles.toolbar_container}`} 
      onClick={props.backdropClickHandler}
      onKeyPress={props.backdropClickHandler}
      role="button" 
      aria-label="Close Menu"
      tabIndex="0">
        <div>
          <ul>
            <a href="https://unifiedhealthadvisors.com/enroll"
            target="_blank"
            rel="noreferrer"
            onClick={handleEnrollClick}
            onKeyPress={handleEnrollClick}
            >
              <li className={`toolbar_item ${styles.toolbar_item}`}>
               Enroll               
              </li>
            </a>
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
            role="button"
            aria-label="Call to speak speak to a Licensed Benefit Advisor"
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