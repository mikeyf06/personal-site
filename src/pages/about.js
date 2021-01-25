import React, {Component}  from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default class about extends Component {
    render() {
        return (
            <Layout>
                <SEO title="About"/>
            <div>
                <h1>About Me</h1>
                <p>
                I'm a 28 year old Father, Husband and Web Developer. I have been developing professionally for 6+ years. </p>

                
            </div>
            </Layout>
        )
    }
}

