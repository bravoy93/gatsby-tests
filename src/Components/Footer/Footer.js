import React from "react";
import styles from "./footer.module.css";
import { Link } from "gatsby";
import { fbPxTrigger } from "../../index";

const FooterLink = props => (
  <li>
    <Link to={props.to} style={{ textDecoration: "none" }} onClick={() => props.to_top()}>
      {props.label}
    </Link>
  </li>
);

const FooterSocialMediaIcon = props => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={props.href}
    className={`social_media_icon ${styles.social_media_icon} ${props.iconClassName} ${styles[props.iconClassName]}`}
>{' '}</a>
)

export default function Footer(props) {
  let logo = "https://unifiedhealthadvisors.com/aws/images/white+full.svg";

  const onLogoClick = (e='') => {
    const path = typeof window !== 'undefined' ? window.location.pathname : '';
    if(e && path === '/') e.preventDefault();
    props.to_top()
  }

  return (
    <div className={`footer_wrapper ${styles.footer_wrapper}`}>
      <div className={`footer_container ${styles.footer_container}`}>
        <div>
          <ul>
            <li>
            <a href="https://unifiedhealthadvisors.com/enroll" target="_blank" rel="noreferrer" onClick={()=>fbPxTrigger({goEmbed: false})} style={{ textDecoration: "none" }}>
              Enroll
            </a>
            </li>
            <span>|</span>
            <FooterLink to="/dental/" label="Dental" to_top={props.to_top}/>
            <span>|</span>
            <FooterLink to="/vision/" label="Vision/Hearing" to_top={props.to_top}/>
          </ul>
        </div>
        <div>
          <ul>
            <span>|</span>
            <FooterLink to="/about/" label="About Us" to_top={props.to_top}/>
            <span>|</span>
          </ul>
        </div>
        <div>
          <ul>
            <FooterLink to="/termsPrivacy/" label="Terms of Use" to_top={props.to_top}/>            
            <span>|</span>
            <FooterLink to="/termsPrivacy/" label="Privacy Policy" to_top={props.to_top}/>
            <span>|</span>
            <li>
              <a href="mailto:info@UnifiedHealth.com" style={{ textDecoration: "none"}}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`footer_cta ${styles.footer_cta}`}>
        <p>Speak to a Licensed Benefits Advisor!</p>
        <span className={`footer_phone ${styles.footer_phone}`} />
        <a
          data-replaceable-phone-dialable=""
          className={`footer_number ${styles.footer_number}`}
          href="tel:18559310267"
        >
          <span>1-855-931-0267</span>
        </a>
      </div>
      <div className={`social_media_wrapper ${styles.social_media_wrapper}`}>
        <div>
          <Link to="/" style={{ textDecoration: "none" }} 
            onClick={(e) => {onLogoClick(e)}}
            onKeyPress={(e) => {onLogoClick(e)}}>
            <img
              className={`footer_logo ${styles.footer_logo}`}
              src={logo}
              alt="Unified Health Logo"/>
          </Link>
        </div>
        <div className={`footer_social_wrapper_child ${styles.footer_social_wrapper_child}`}>
          <FooterSocialMediaIcon href="https://www.facebook.com/UnifiedHealth" iconClassName="footer_fb" />
          <FooterSocialMediaIcon href="https://www.instagram.com/UnifiedHealth" iconClassName="footer_ig" />
          <FooterSocialMediaIcon href="https://www.linkedin.com/company/UnifiedHealth" iconClassName="footer_lk" />
          <a
            href="mailto:info@unifiedhealth.com"
            style={{ textDecoration: "none", color: "#fff" }}
            className={`social_media_icon ${styles.social_media_icon} footer_mail ${styles.footer_mail}`}
          >{" "}</a>
        </div>
      </div>
      <p className={`footer_copyright ${styles.footer_copyright}`}>
        ©2020 Unified Health All Rights Reserved.
      </p>
    </div>
  );
}
