import React, {useState} from "react"
// import ReactDOM from "react-dom"
import Nav from "../Nav/Nav"
import Backdrop from "../Backdrop/Backdrop"
import Toolbar from "../Toolbar/Toolbar"
import Footer from "../Footer/Footer"
import "typeface-roboto"
import Breakpoint from "../Layout/breakpointConfig";

export default function Layout({children}) {
  const [toolbarOpen, setToolbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [breakpoint, setBreakpoint] = useState(new Breakpoint());

  const scrollListener = () => {
    setScrolled(window.scrollY > 80)
  };

  React.useEffect(() => {
    setBreakpoint(new Breakpoint(window.screen.width));
    window.addEventListener("scroll", scrollListener);
    window.addEventListener( "resize",()=> setBreakpoint(new Breakpoint(window.screen.width)))
    return () => {
      window.removeEventListener("scroll", scrollListener);
      window.addEventListener( "resize",()=> setBreakpoint(new Breakpoint(window.screen.width)))
    }
  },[]);

  const toTop = () => {
    handleScrollToElement(/*"nav"*/);
  };

  const handleScrollToElement = (/*elRef*/) => {
    // const tesNode = ReactDOM.findDOMNode(this.refs[elRef]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  const toolbarToggleClickHandler = () => {
    setToolbarOpen(!toolbarOpen)
  };
  
  const backdropClickHandler = () => {
    setToolbarOpen(false);
  };

  let backdrop;
  let toolbar;

  //toolbar and backdrop only renders if the breakpoint SM or XS is  to prevent unnecessary DOM nodes
  if (breakpoint.isSmAndDown) {
    toolbar = <Toolbar show={toolbarOpen} backdropClickHandler={backdropClickHandler} to_top={toTop}/>
      
    if (toolbarOpen) {
      backdrop = <Backdrop backdropClickHandler={backdropClickHandler} />;
    }    
  }  

  return (
    <>      
      <Nav 
        toolbarToggleClickHandler={toolbarToggleClickHandler}
        isSmAndDown={breakpoint.isSmAndDown}
        scrolled={scrolled}
        to_top={toTop}/>
      {children}
      {backdrop}
      {toolbar}
      <Footer to_top={toTop}/>
    </>
  )
}