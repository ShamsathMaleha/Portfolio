import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

import "./contact-form.styles.css";
import emailjs from "emailjs-com";



const ContactForm = () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_qtetzoe', 'template_xw7jvi8', e.target, 'user_4v5S5LRq7akcDVmKBOcUd')
    .then((result) => {
    console.log(result.text);
    }, (error) => {
    console.log(error.text);
    });
    e.target.reset()
    }

  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3 text-light fw-bold">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <div className="container ">
          <div className="row ">
            <div className="col-md-6">
              <p style={{ fontSize: '3rem' }} className="fw-bolder contact-text">
              I am eagerly<br /> waiting 
              <br /> for your call.

                    </p>
              <small>You can find me here. I am always ready to help or contribute with my experience and skills. </small>
            </div>
            <div className="col-md-6 mx-auto mt-2">
              <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                  <div className="col-8 form-group mx-auto">
                    <input type="text" className="form-control" placeholder="Name" name="name" />
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="Email Address" name="email" />
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Subject" name="subject" />
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                  </div>
                  <div className="col-8 pt-3 mx-auto">
                    <input type="submit" className="btn btn-primary text-center" value="Send"></input>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </Jumbotron>
    </div>

  );
};

export default ContactForm;
