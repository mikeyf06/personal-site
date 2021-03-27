import React, {Component}  from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

// *Not being used right now. May use this page later if I decide to restructure the site again.

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