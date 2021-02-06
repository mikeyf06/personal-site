import React, {Component}  from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const BackgroundInfo = styled.div`

`;

const Info1 = styled.div`

`;

const Info2 = styled.div`

`;

const Info3 = styled.div`

`;

const Info4 = styled.div`

`;

export default class background extends Component {
    render() {
        return (
            <Layout>
                <SEO title="Background"/>
            <div>
                <h1>My Background</h1>
                <p>
                I'm a 28 year old Father, Husband and Web Developer. I have been developing professionally for 6+ years. </p>

                
            </div>

            <BackgroundInfo>

            </BackgroundInfo>


            </Layout>
        )
    }
}

