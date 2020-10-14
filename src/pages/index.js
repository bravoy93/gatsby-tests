import React from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"
import Medicare from "../Components/Medicare/medicare"

const homeImage = {
  src: "https://unifiedhealthadvisors.com/aws/images/blue+full+.svg",
  width: '500px',
  height: '500px'
}

export default function Home({location}) {
  return (
    <Layout>
      <SEO title="Home" 
      pathname="/"
      image={homeImage} />
      <Medicare />
    </Layout>
  )
}
