import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <section className="contact" id="contact">
                    <div className="row">
                    <h2>Get in Touch</h2>
                    <div className="contact__info">
                        <p>
                            Are you looking for a fast-performing and user-friendly website to 
                            represent your product or business? or looking for any kind of 
                            consultation? or want to ask questions? or have some advice for me 
                            or just want to say "Hi 👋" in any case feel free to Let me know. I 
                            will do my best to respond back. 😊 The quickest way to reach out to 
                            me is via an email.
                        </p>
                        <a href="mailto:itsnateguy@gmail.com" className="btn">itsnateguy@gmail.com</a>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact;