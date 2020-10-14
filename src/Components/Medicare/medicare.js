import React from "react";
import selfStyles from "./medicare.module.css"
import homeStyles from "../../styles/home.module.css"
import buttonStyles from "../Button/button.module.css"
import { fbPxTrigger } from "../../index";
import Callcta from "../CallCTA/Callcta"
import Products from "../Products/Products"

const Plan = ({children, title, subtitle}) => {
  return <>
    <h2 className="title">
      <a href="https://unifiedhealthadvisors.com/enroll" 
        target="_blank" 
        rel="noreferrer"
        onClick={()=>fbPxTrigger({goEmbed: false})}
        title="Take advantage and enroll"    
      >
        {title}
        {subtitle? <span>{` (${subtitle})`}</span> : null}
      </a>
    </h2>
    <p className="large_body">{children}</p>
  </>
}


export default function Medicare() {
  return (
    <div>
      <div className={`home_wrapper ${homeStyles.home_wrapper}`}>
        <div className={`banner ${homeStyles.banner} medicareBanner ${selfStyles.medicareBanner}`}>
          <div>
            <h1>Get the benefits that you deserve</h1>
            <p>
              Find out what you've been investing in <br /> all this time.
            </p>
            <div className={`medicare-banner-buttons ${selfStyles.medicareBannerButtons}`}>
              <span
                onClick={() => fbPxTrigger()}
                onKeyPress={() => fbPxTrigger()}
                className={`button ${buttonStyles.button} ${selfStyles.button}`}
                role="button"
                aria-label="Compare Plans"
                tabIndex="0"
              >
                COMPARE PLANS
              </span>
              <span
                onClick={() => fbPxTrigger()}
                onKeyPress={() => fbPxTrigger()}
                className={`button ${buttonStyles.button} ${selfStyles.button}`}
                role="button"
                aria-label="Enroll Now"
                tabIndex="0"
              >
                ENROLL NOW
              </span>
            </div>
          </div>
        </div>

        <p style={{display: "none"}}>Medical Plans to get the benefits that your health deserves</p>

        <div className="text_container xs-none sm-none">
          <Plan title="Medicare Advantage and Dual Special Needs Plans" subtitle="DSNP">
            These plans offer an alternative way to get your Original Medicare,
            Part A and Part B, benefits. Unlike Original Medicare, Medicare
            Advantage and DSNP plans may also include prescription drug coverage
            (Part D) and additional benefits, like vision, dental, hearing
            coverage, over-the-counter health products, transportation and a
            fitness benefit.
          </Plan>
          <Plan title="Medicare Prescription Drug Coverage" subtitle="Part D">
            You can enroll in a stand-alone Medicare Prescription Drug Plan that
            can complement your existing Original Medicare (Part A and Part B)
            coverage. These plans cover a formulary of brand and generic
            medications.
          </Plan>
          <Plan title="Medicare Supplement Plans" subtitle="Medigap">
            These policies are sold by private insurance companies to help pay
            some of the healthcare costs that Original Medicare (Parts A and B)
            doesn't cover. These plans may offer benefits such as assistance
            with deductibles, premiums, and copayment/ coinsurance, as well as
            emergency foreign travel coverage.
          </Plan>
          <Plan title="Need Medicare Coverage?">
            Unified Health works with consumers to find affordable Medicare
            coverage that meets their healthcare needs. Unified Health’s
            licensed agents can match consumers with a variety of Medicare
            coverage options including Medicare Advantage (MA or MAPD), Dual
            Special Needs Plans (DSNP), Medicare Prescription Drug Coverage
            (PDP) and Medicare Supplement Plans (Medigap). Unified Health offers
            these plans through a wide range of private insurance companies that
            contract with Medicare.
          </Plan>
          <br />
          <p className="large_body">
            Unified Health can help you learn more and compare any of these
            coverage options to find the right plan for you.
          </p>
        </div>
        <Products />
        <div className="whiteSpace64 xs-none sm-none" />
        <Callcta />
      </div>
      <div className={`banner ${homeStyles.banner} medicarePromo ${selfStyles.medicarePromo}`} />
    </div>
  );
}
