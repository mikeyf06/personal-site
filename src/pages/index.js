import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Profile from "../components/profile"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {
    /* 
    Here I want to add some type of animation for the title to load in, and then whatever components 
    or sections come next.    
    */
    }
    <Profile />
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
