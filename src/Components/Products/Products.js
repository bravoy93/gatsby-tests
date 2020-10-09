import React, { useState } from "react";
import styles from "./product.module.css";
import homeStyles from "../../styles/home.module.css"
import Breakpoint from "../Layout/breakpointConfig";


export default function Products() {  
  const [clicked, setClicked] = useState("");
  const [breakpoint, setBreakpoint] = useState(new Breakpoint());
  const initialCards = [
    {
      title: "Medicare Advantage and Dual Special Needs Plans (DSNP)",
      label: "Medicare Advantage and Dual Special Needs Plans",
      description: "These plans offer an alternative way to get your Original Medicare, Part A and Part B, benefits. Unlike Original Medicare, Medicare Advantage and DSNP plans may also include prescription drug coverage (Part D) and additional benefits, like vision, dental, hearing coverage, over-the-counter health products, transportation and a fitness benefit.",
      src: `https://unifiedhealthadvisors.com/aws/products/SVIzihJ_reduced.${breakpoint.xs ? 'webp' : 'jpg'}`,
      alt: "Yoga Class",
    },
    {
      title: "Medicare Prescription Drug Coverage (Part D)",
      label: "Medicare Prescription Drug Coverage",
      description: "You can enroll in a stand-alone Medicare Prescription Drug Plan that can complement your existing Original Medicare (Part A and Part B) coverage.  These plans cover a formulary of brand and generic medications.",
      src:`https://unifiedhealthadvisors.com/aws/products/p6miqu2_reduced.${breakpoint.xs ? 'webp' : 'jpg'}`,
      alt: "Drugs",
    },
    {
      title: "Medicare Supplement Plans (Medigap)",
      label: "Medicare Supplements",
      description: "These policies are sold by private insurance companies to help pay some of the health care costs that Original Medicare (Parts A and B) doesn't cover.  These plans may offer benefits such as assistance with deductibles, premiums, and copayment/ coinsurance, as well as emergency foreign travel coverage.",
      src:`https://unifiedhealthadvisors.com/aws/products/UZ8lCdn_reduced.${breakpoint.xs ? 'webp' : 'jpg'}`,
      alt: "Stethoscope",
    },
    {
      title: "Dental / Vision / Hearing",
      label: "Dental / Vision / Hearing",
      description: "If you are in the market for dental and vision insurance and find yourself asking, 'Why do I need it?' consider the advantages to your overall health. Our oral and ocular health can be key indicators in detecting early stages of many health risks and diseases along with preventing many other health issues. We excel in exceeding clients goals by understanding objectives, and pivoting real-time to drive superior outcomes.",
      src:`https://unifiedhealthadvisors.com/aws/products/O674mGb_reduced.${breakpoint.xs ? 'webp' : 'jpg'}`,
      alt: "Glasses",
    },
  ]
  const [cards] = useState(initialCards)  
  const isSelected = cardIndex => clicked === cardIndex
  const onCardChange = cardIndex => clicked !== cardIndex ? setClicked(cardIndex) : setClicked("")

  React.useEffect(() => {
    setBreakpoint(new Breakpoint(window.screen.width));
    window.addEventListener( "resize",()=> setBreakpoint(new Breakpoint(window.screen.width)))
    return () => window.addEventListener( "resize",()=> setBreakpoint(new Breakpoint(window.screen.width)))
  },[]);

  return (
    <div className={`products_container ${homeStyles.products_container}`} style={{minHeight: '336'}} >
      <div className={`card_container ${styles.card_container}`}>
        {cards.map((card,i) => (
          <div className={isSelected(i) ? `card active ${styles.card} ${styles.active}` : `card ${styles.card}`}
              onClick={()=>onCardChange(i)}
              onKeyPress={()=>onCardChange(i)}
              role="button"
              aria-expanded={isSelected(i)}
              aria-label={`${card.label}`}
              tabIndex="0"
              key={i}>
            {breakpoint.xs ? '' : <img src={card.src} alt={card.alt} /> }
            <div className={`container ${styles.container}`}>
              <h2>{card.label}</h2>
              <div className={isSelected(i) ? 
                `card-content-text-active ${styles.cardContentTextActive} xs-only`
                : `card-content-text ${styles.cardContentText} xs-only`}>
                <p>{card.description}</p>
              </div>
              <p className={isSelected(i) ? `xs-none sm-none` : undefined}>Learn More</p>
            </div>
            <div className={isSelected(i) ? `arrow ${styles.arrow}` : ""} />
          </div>
        ))}
      </div>
      {breakpoint.xs ? '' :
        <div        
        aria-label="Selected Product Description"
        aria-expanded={clicked !== ""}
        className={clicked === "" ? `learnMoreClosed ${styles.learnMoreClosed}` : `learnMoreOpened ${styles.learnMoreOpened}`}>
          <h2 className={`learnMoreTitle ${styles.learnMoreTitle}`}>
            {clicked === ""? null : cards[clicked].title }
          </h2>
          <p>{clicked === ""? null : cards[clicked].description }</p>
        </div>
      }
    </div>
  );
}