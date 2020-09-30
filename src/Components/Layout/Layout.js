import React from "react"
import SEO from "../seo"
import Nav from "../Nav/Nav"

const toTop = () => {
  this.handleScrollToElement("nav");
};

const toolbarToggleClickHandler = () => {
  // this.setState(prevState => {
  //   return { toolbarOpen: !prevState.toolbarOpen };
  console.log('toolbarToggleClickHandler clickeado')
};

export default function Layout({children}) {
  return (
    <>
      <SEO title="Unified Health Advisors"/>
      <Nav 
        toolbarToggleClickHandler={toolbarToggleClickHandler}
        scrolled={true}
        to_top={toTop}/>
      <div id="nav"/>
      {children}
    </>
  )
}