import React from "react";
import style from "./backdrop.module.css";

const backdrop = props => (
  <div className={`backdrop ${style.backdrop}`} onClick={props.backdropClickHandler} onKeyPress={props.backdropClickHandler} role="button" aria-label="Close Menu" tabIndex="0"/>
);

export default backdrop;
