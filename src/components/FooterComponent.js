import React from 'react'
import ContactForm from './ContactForm'

export default function Footer() {
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ContactForm />
                    </div>
                    <div className="col">
                        <h5>1855 Plumas Street Suite 2</h5>
                        <h5>Reno, NV  89509</h5>
                        <h5>775.470.8300</h5>
                    </div>
                    <div className="col">
                        <h5>Follow Us</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i class="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i class="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i class="fa fa-youtube" /></a>{' '}
                    </div>

                </div>
            </div>
        </footer>
    )
}
