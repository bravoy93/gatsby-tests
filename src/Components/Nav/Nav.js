import React from "react"
import { Link } from "gatsby"
// import "./Nav.css"
import styles from "./nav.module.css"

const handleChange = () => {
  console.log('Tab changed!');
}

const ItemLink = props => (
    <div className={`navbarLink ${styles.navbarLink}`} onClick={handleChange} onKeyPress={handleChange} role="button" tabIndex="-1">
      <Link to={props.to} className={`navbarLinkText ${styles.navbarLinkText}`}>{props.label}</Link>
    </div>
  );

export default function Nav() {  
  return (
    <div className={`navbar ${styles.navbar}`}>
      <ItemLink to="/" label="Home" />
      <ItemLink to="/about/" label="About" />
      <ItemLink to="/contact/" label="Contact" />
    </div>
  )
}