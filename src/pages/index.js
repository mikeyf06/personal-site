import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Profile from "../components/profile";
import BackgroundInfo from "../components/backgroundinfo";
import ContactForm from "../components/contactform";
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';

const IndexPage = ({ contacts }) => {
  return (
  <Layout>
    <SEO title="Home" />
    
    {
    /* 
    Here I want to add some type of animation for the title to load in, and then whatever components 
    or sections come next.    
    */
    }
    <Profile contacts={contacts} />
    <BackgroundInfo />
    <ContactForm />
    <Footer></Footer>
    <BackToTop/>
  </Layout>
  )
    }

export default IndexPage

