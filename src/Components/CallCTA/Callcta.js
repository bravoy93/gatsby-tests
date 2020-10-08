import React from "react";
import styles from "./call.module.css";
import toolbarStyles from "../Toolbar/toolbar.module.css"

export default function Callcta(props) {
  let prompt = props.prompt;
  let prompt_style = `prompt ${styles.prompt}`;
  if (!props.prompt) {
    prompt_style = `no_prompt ${styles.no_prompt}`;
  }
  return (
    <div className={`call_wrapper ${styles.call_wrapper}`} style={{minHeight: '360px'}}>
      <div className={`call_container ${styles.call_container}`}>
        <p className={prompt_style}>{prompt}</p>
        <h2 className={`call ${styles.call}`}>
          Call to speak to a <br />
          Licensed Benefit Advisor
        </h2>
        <div className={`call_box ${styles.call_box}`}>
          <a
            data-replaceable-phone-dialable=""
            className={`toolbar_item ${toolbarStyles.toolbar_item}`}
            href="tel:18559310267"
            role="button"
            aria-label="Call to speak speak to a Licensed Benefit Advisor"
          >
            <span className={`number ${styles.number}`}>
              <span>1-855-931-0267</span>
            </span>
          </a>
        </div>
        <p className={`time ${styles.time}`}>Available: Mon - Fri, 8 AM - 8 PM</p>
        <p>TTY users 711</p>
      </div>
      <div>
        <img src="https://unifiedhealthadvisors.com/aws/callcta/zNDnGp_reduced.svg" alt="Agent Icon" />
      </div>
    </div>
  );
}
