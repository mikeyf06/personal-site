import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {
    /* 
    Here I want to add some type of animation for the title to load in, and then whatever components 
    or sections come next.    
    */
    }
    <h1>Hi, I'm Mike.</h1> 
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
    </div>
    <footer
      style={{
        marginTop: `2rem`,
      }}
    >
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="/">Mike Flores</a>
    </footer>
  </Layout>
)

export default IndexPage
