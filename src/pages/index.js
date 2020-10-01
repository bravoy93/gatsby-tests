import React from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home"/>
      <div style={{ color: `purple`, padding: '16px' }}>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
      </div>
    </Layout>
  )
}
