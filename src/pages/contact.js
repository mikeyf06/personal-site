import React, {Component}  from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

export default class contact extends Component {
    render() {
        return (
            <Layout>
                <SEO title="Contact"/>
                <div>
                    <h1>Contact</h1>
                    <p>
                        Contact form coming soon....
                    </p>
                </div>
            </Layout>
        )
    }
}