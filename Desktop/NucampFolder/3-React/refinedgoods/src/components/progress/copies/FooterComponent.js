import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div clasNames="row">
                    <div className="col-sm-4 text-center">
                        <h5>Contact</h5>
                        <div ClassName="col-sm-4 text-center">
                            <a role="button" className="btn btn-link" href="tel:+608123-4567"> <i className="fa fa-phone fa-md" /> 1-608-123-4567 </a><br />
                            <a role="button" className="btn btn-link" href="mailto:refinedgoods@gmail.com>"> <i className="fa fa-envelope-o" /> refinedgoods@gmail.com</a>
                        </div>
                        <div className="col-3  text-center">
                            <h5>Social</h5>
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram fa-md text-footer" /></a>{' '}
                            <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook fa-md text-footer" /></a>{' '}
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fa-md text-footer" /></a>{' '}
                        </div>

                        <div className="col-4 col-sm-5 text-center">
                            <h5>Menu</h5>
                            <ul className="list-unstyled">
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/shop'>Directory</Link></li>
                                <li><Link to='/aboutus'>About</Link></li>
                                <li><Link to='/contactus'>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;