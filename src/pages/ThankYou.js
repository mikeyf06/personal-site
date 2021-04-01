import React from 'react';
import Layout from '../components/layout';

function goHome() {
    if(typeof window !== 'undefined') {
        window.location = '/';
        window.scrollTo(0,0);
    }
}

export default function ThankYou() {
    return (
        <Layout>
        <div>
            <h3>Thanks for Contacting!</h3>
            <p>I'll try to reach back out as soon as I can.</p> 
            <p>Until then, feel free to <a href="/">return to the site.</a></p>
        </div>
        {/* <button type="button" onClick={goHome()}>Back</button> */}

        </Layout>
    )
}
