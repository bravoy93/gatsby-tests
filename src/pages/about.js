import React from "react"
import { graphql } from "gatsby"
import Header from "../Components/Header/Header"
import Layout from "../Components/Layout/Layout"

export default function About({data}) {
  return (
    <Layout>
      <div className="about page-root">      
      <Header headerText="About" />
      <h1>{data.site.siteMetadata.title}</h1>
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
      </div>
    </Layout>    
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`