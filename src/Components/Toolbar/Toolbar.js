import React from "react";
import { Link } from "gatsby";
import styles from "./toolbar.module.css";
// import "../Button/button.css";

// import { fbPxTrigger } from "../..";

const ToolbarItem = props => (
  <Link to={props.to} style={{ textDecoration: "none" }}>
    <li className={`toolbar_item ${styles.toolbar_item}`} onClick={() => props.to_top()}>
      {props.label}
    </li>
  </Link>
)

const toolbar = (props) => {
  let toolbarClasses = `toolbar ${styles.toolbar}`;
  if (props.show) {
    toolbarClasses = `toolbar ${styles.toolbar} open ${styles.open}`;
  }
  return (
    <nav className={toolbarClasses}>
      <div className={`toolbar_container ${styles.toolbar_container}`} onClick={props.backdropClickHandler}>
        <div>
          <ul>
            <div 
              // onClick={fbPxTrigger}
            >
              <li className={`toolbar_item ${styles.toolbar_item}`} onClick={() => props.to_top()}>
                Enroll
              </li>
            </div>
            <ToolbarItem to="/dental/" label="Dental" to_top={props.to_top} />
            <ToolbarItem to="/vision/" label="Vision / Hearing" to_top={props.to_top} />
            <ToolbarItem to="/about/" label="About" to_top={props.to_top} />
          </ul>
        </div>
        <div className="call_toolbar">
          <a
            data-replaceable-phone-dialable=""
            className="`toolbar_item ${styles.toolbar_item}"
            href="tel:8559310267"
          >
            <span className="button" id="`toolbar_button ${styles.toolbar_button">
              Call Now
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default toolbar;