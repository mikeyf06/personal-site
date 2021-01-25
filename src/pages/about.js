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
                <h1>About</h1>
                <p>
                I'm baby leggings distillery shoreditch, chia messenger bag flexitarian pabst pok pok gentrify. 
                Literally typewriter forage cliche you probably haven't heard of them seitan irony craft beer williamsburg butcher snackwave twee. 
                Succulents distillery semiotics live-edge. Migas raw denim drinking vinegar, skateboard art party truffaut cronut synth. 
                Literally sartorial poke selvage craft beer shaman heirloom etsy vape copper mug put a bird on it mlkshk thundercats kinfolk. 
                Drinking vinegar shoreditch crucifix synth knausgaard williamsburg food truck meh.

                Dummy text? More like dummy thicc text, amirite? Lolololol
                </p>
            </div>
            </Layout>
            
        )
    }
}

