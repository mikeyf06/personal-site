import React from 'react';
import Layout from '../components/layout';

function goHome(e) {
    e.PreventDefault();
    if(typeof window !== 'undefined') {
        window.location = '/';
    }
}

export default function ThankYou() {
    return (
        <Layout>
        <div>
            <h3>Thanks for Contacting!</h3>
            <p>I'll try to reach back out as soon as I can.</p>
        </div>
        <button type="button" onClick={goHome()}>Back</button>

        </Layout>
    )
}
