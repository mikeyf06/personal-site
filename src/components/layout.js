/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React from "react";
 import PropTypes from "prop-types";
 import { useStaticQuery, graphql } from "gatsby";
 import styled from "styled-components";
 
 import Header from "./header";
 import "./layout.css";
 
 const MainWrapper = styled.div`
   margin: 0 auto;
   max-width: 70%;
   height: 80%;
   padding: 0 1.0875rem 1.45rem;
 `;
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
           author
           contacts {
             linkedin
             github
             twitter
             instagram
           }
         }
       }
     }
   `)
 
   return (
     <>
       <Header 
       siteTitle={data.site.siteMetadata?.title || `Title`} 
       author={data.site.siteMetadata.author}
       contacts={data.site.siteMetadata.contacts}
       />
       <MainWrapper>
         <main>{children}</main>
       </MainWrapper>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 