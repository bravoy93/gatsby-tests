import React from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"
import homeStyles from "../styles/home.module.css"
import styles from "../styles/dental.module.css"
import buttonStyles from "../Components/Button/button.module.css"
import { fbPxTrigger } from "../index";
import Callcta from "../Components/CallCTA/Callcta"


export default function Dental() {
  return (
    <Layout>
      <SEO title="Dental" 
        description="Exams and Cleanings, Oral Surgery, Crowns, Dentures, Fillings, Simple Extractions" 
        keywords={[`dental`, `dentures`,`health`, `healtcare`, `unified health`]}/>
     
      <div className={`home_wrapper ${homeStyles.home_wrapper}`}>
      <div className={`banner ${homeStyles.banner} dentalBanner ${styles.dentalBanner}`}>
        <div>
          <h1>
            You could be missing out on <br />
            enhanced benefits!
          </h1>
          <p>
            Exams and Cleanings, Oral Surgery, Crowns,
            <br />
            Dentures, Fillings, Simple Extractions
          </p>
          <div 
            onClick={() => fbPxTrigger()}
            onKeyPress={() => fbPxTrigger()}
            role="button"
            tabIndex="0">
            <span className={`button ${buttonStyles.button} ${styles.button}`}>
              UPGRADE NOW
            </span>
          </div>
        </div>
      </div>
      <div className="text_container">
        <h1 className="title">
          Why do I need dental and vision insurance coverage?
        </h1>
        <p className="large_body">
          If you are in the market for dental and vision insurance and find
          yourself asking, "Why do I need it?" consider the advantages to your
          overall health. Our oral and ocular health can be key indicators in
          detecting early stages of many health risks and diseases along with
          preventing many other health issues.
        </p>
        <br />
        <h1 className="title">
          Unified Health understands that your needs are unique
        </h1>
        <p className="large_body">
          We're committed to finding you the dental and vision plans that meets
          your needs. Our dental and vision insurance plans offer affordable
          coverage with instant free online quotes, coverage for individuals 18+
          (including seniors), no online enrollment fees and a broad dental
          network.
        </p>
        <div className="whiteSpace48" />        
        <div
            // eslint-disable-next-line react/jsx-no-target-blank   
            onClick={() => fbPxTrigger()}
            onKeyPress={() => fbPxTrigger()}
            role="button"
            tabIndex="0">
            <span className={`button ${buttonStyles.button} ${styles.button}`}>
              See Dental Plans
            </span>
          </div>
        <h1 className="title">Dental / Vision / Hearing</h1>
        <br />
        <br />
        <p className="large_body">
          Unified Health has a team of courteous and knowledgeable licensed
          agents that can share additional insights on your Medicare coverage
          options and find the right plan for you. If you're unsure of what type
          of Medicare coverage would best suit your needs, don't hesitate to
          call us to speak with a Unified Health licensed agent to assist in
          finding the right coverage to meet your needs.
        </p>
      </div>
      <div className="whiteSpace64" />
      <Callcta />
      <div className="pic2" />
    </div>

    </Layout>
  )
}