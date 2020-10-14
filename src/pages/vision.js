import React from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"
import homeStyles from "../styles/home.module.css"
import styles from "../styles/vision.module.css"
import buttonStyles from "../Components/Button/button.module.css"
import { fbPxTrigger } from "../index";
import Callcta from "../Components/CallCTA/Callcta"


export default function Vision() {
  return (
    <Layout>
      <SEO title="Vision/Hearing" description="Vision and Hearing plans to fit your needs" 
        keywords={['vision', 'hearing','healthcare', 'unified health', 'medical']}
        pathname="/vision"/>
     
      <div className={`home_wrapper ${homeStyles.home_wrapper}`}>
      <div className={`banner ${homeStyles.banner} visionBanner ${styles.visionBanner}`}>
        <div>
          <h1>Vision and Hearing</h1>
          <p>Vision and Hearing plans to fit your needs</p>
          <div              
            onClick={() => fbPxTrigger()}
            onKeyPress={() => fbPxTrigger()}
            role="button"
            aria-label="Review Vision Plans"
            tabIndex="0">
            <span className={`button ${buttonStyles.button} ${styles.button}`}>
              Review Vision Plans
            </span>
          </div>
        </div>
      </div>
      <div className="text_container">
        <h1 className="title">
          Unified Health Works with Leading Health Plans
        </h1>
        <p className="subtitle">
          to Provide Comprehensive and Affordable Hearing Aid Coverage
        </p>
        <p className="large_body">
          Getting help with hearing loss can be confusing and expensive. That’s
          where Unified Health comes in. Our hearing aid benefit programs give
          you everything you need to improve your hearing at the lowest possible
          out-of-pocket cost.
        </p>
        <h1 className="title">Dental / Vision / Hearing</h1>
        <p className="large_body">
          If you are in the market for dental and vision insurance and find
          yourself asking, 'Why do I need it?' consider the advantages to your
          overall health. Our oral and ocular health can be key indicators in
          detecting early stages of many health risks and diseases along with
          preventing many other health issues. We excel in exceeding clients
          goals by understanding objectives, and pivoting real-time to drive
          superior outcomes.
        </p>
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
      <div className={`visionPromo ${styles.visionPromo}`} />
    </div>

    </Layout>
  )
}