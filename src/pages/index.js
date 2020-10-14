import React from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"
import Medicare from "../Components/Medicare/medicare"

export default function Home({location}) {
  return (
    <Layout>
      <SEO title="Home" pathname="/"/>
      <Medicare />
    </Layout>
  )
}
