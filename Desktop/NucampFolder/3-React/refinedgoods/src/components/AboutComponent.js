import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function About(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><NavLink to="/home">Home</NavLink></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row mission-content">
                <div className="col-12">
                    <h3>Our Mission</h3>
                    <p>We find and refinish or repurpose antique or vintage items. We beleive in keeping the integirty of antique items and try to restore them to their former glory. Check back often for new items! </p>
            </div>
        </div>

    </div>
    )
}



                export default About;