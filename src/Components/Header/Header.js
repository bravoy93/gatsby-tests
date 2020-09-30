import React from "react";
import styles from "./header.module.css"

export default function Header(props) {
    return (
        <div className={`header ${styles.header}`}>
            <h1>{props.headerText || "No text"}</h1>
        </div>
    )
}