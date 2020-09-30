import React from  "react";
import Header from "../Components/Header/Header";
import Layout from "../Components/Layout/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="page-root">
        <Header headerText="Contact" />
        <h1>This is my contact page</h1>
      </div>
    </Layout>    
  )
}