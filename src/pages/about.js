import React from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"
import styles from "../styles/about.module.css"
import homeStyles from "../styles/home.module.css"

const homeImage = {
  src: "https://cfd-web.s3.us-east-2.amazonaws.com/images/blue%2Bbox%2Bfull.svg",
  width: '500px',
  height: '500px'
}

export default function About() {
  return (
    <Layout>
      <SEO title="About Us" description="We work hard to find the right Medicare and healthcare solutions, so you don’t have to." 
      pathname="/about" image={homeImage}/>
     
      <div className={`home_wrapper ${homeStyles.home_wrapper} about_wrapper ${styles.about_wrapper}`}>
        <div className={`banner ${homeStyles.banner} aboutBanner ${styles.aboutBanner}`}>
          <h1>UNIFIED HEALTH</h1>
          <p>
            We work hard to find the right Medicare and healthcare solutions,{" "}
            <br />
            so you don’t have to.
          </p>
        </div>
        <div>
          <div className={`aboutContainer ${styles.aboutContainer}`}>
            <div>
              <h1 className={`full_title ${homeStyles.full_title}`} style={{whiteSpace: "nowrap"}}>UNIFIED HEALTH</h1>
              <p className={`quote ${styles.quote}`}>"Healthcare, not just health insurance."</p>
              <p className="large_body justify-xs-text">
                Unified Health has a team of courteous and knowledgeable licensed
                agents that can share additional insights on your Medicare
                coverage options and find the right plan for you.
              </p>
            </div>
            <div>
              <img
                src="https://unifiedhealthadvisors.com/aws/images/UH_logo_full_blue.svg"
                alt="Unified Health Logo"
              />
            </div>
          </div>
          <div className={`aboutContainer ${styles.aboutContainer}`}>
            <div>
              <p className="large_body justify-xs-text">
                If you're unsure of what type of Medicare coverage best suits your
                needs, one phone call with a knowledgeable Unified Health
                licensed agent will help answer your questions and enroll you in a
                plan that best meets your needs.
              </p>
              <br />
              <p className="large_body justify-xs-text">
                Unified Health’s service doesn’t end after your enrollment in a
                Medicare plan. Our licensed benefit advisors will provide ongoing
                support for the duration of your coverage. Our team will ensure
                your selected plan continues to meet your healthcare needs as your
                benefit needs evolve and available coverage options change.
              </p>
              <br />
              <p className="large_body justify-xs-text">
                We’ll be available to provide information to help with provider
                network questions, drug coverage questions, and general benefit
                questions about your coverage. We’re here to help and we look
                forward to serving you.
              </p>
              <br />
              <div>
                <h1 className="title">Helpful Resources</h1>
                <p className="large_body justify-xs-text">
                  Here are some helpful links to answer questions and prepare you
                  to make informed decisions regarding your Healthcare coverage.
                </p>
                <div className={`resourceLinks ${styles.resourceLinks}`}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.medicare.gov/sites/default/files/2018-09/10050-medicare-and-you.pdf"
                    style={{ textDecoration: "none" }}
                  >
                    <p>
                      <span>•</span> 2019 Medicare and You Handbook
                    </p>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.kff.org/medicare/issue-brief/an-overview-of-medicare/"
                    style={{ textDecoration: "none" }}
                  >
                    <p>
                      <span>•</span>An Overview of Medicare
                    </p>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.kff.org/tag/medicare-advantage/"
                    style={{ textDecoration: "none" }}
                  >
                    <p>
                      <span>•</span>Medicare Advantage Overview
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}