import React, {useState} from "react"
import ReactDOM from "react-dom"
import SEO from "../seo"
import Nav from "../Nav/Nav"
import Backdrop from "../Backdrop/Backdrop";
import Toolbar from "../Toolbar/Toolbar"

// let toolbarOpen = false;

export default function Layout({children}) {
  const [toolbarOpen, setToolbarOpen] = useState(false);
  const toTop = () => {
    handleScrollToElement("nav");
  };

  function handleScrollToElement(elRef) {
    const tesNode = ReactDOM.findDOMNode(this.refs[elRef]);
    window.scrollTo({ top: tesNode.offsetTop, behavior: "smooth" });
  }
  
  const toolbarToggleClickHandler = () => {
    // this.setState(prevState => {
    //   return { toolbarOpen: !prevState.toolbarOpen };
    setToolbarOpen(!toolbarOpen)
    console.log('toolbarToggleClickHandler clickeado')
  };
  
  const backdropClickHandler = () => {
    setToolbarOpen(false);
  };

  let backdrop;
  if (toolbarOpen) {
    backdrop = <Backdrop backdropClickHandler={backdropClickHandler} />;
  }

  return (
    <>
      <SEO title="Unified Health Advisors"/>
      <Nav 
        toolbarToggleClickHandler={toolbarToggleClickHandler}
        scrolled={true}
        to_top={toTop}/>
      <div id="nav"/>
      {children}
      {backdrop}
      <Toolbar
        show={toolbarOpen}
        backdropClickHandler={backdropClickHandler}
        to_top={toTop}/>
    </>
  )
}