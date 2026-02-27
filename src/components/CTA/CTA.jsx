import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.scss';

const CTA = () => {
    return (
        <section className="cta-section">
            <h2 className="cta-section__title">Ready to find something real?</h2>
            <p className="cta-section__subtitle">Join Lovebug today and rethink how you date.</p>
            <Link to="/quizmanager" className="btn btn--primary btn--large">Create Your Account</Link>
        </section>
    );
};

export default CTA;
