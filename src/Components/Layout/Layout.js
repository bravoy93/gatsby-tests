import React from "react"
import SEO from "../seo"
import Nav from "../Nav/Nav"

export default function Layout({children}) {
  return (
    <div>
      <SEO />
      <Nav/>
      <div>
        {children}
      </div>      
    </div>
  )
}