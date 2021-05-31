import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7zdiv3p",
        "template_taps7jq",
        e.target,
        "user_PsmRntaXM3mRIYeOJL9bk"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Received");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact-area pt-2 text-center" id="contact">
      <div className="container p-5 ">
        <h1>
          Feel free to Contact with us
        </h1>
        <form className="pt-4" onSubmit={sendEmail}>
          <div className="row pt-2 m-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                name="name"
                placeholder="Name"
                id=""
                className="form-control"
              />
            </div>
            <div className="col-8 form-group mx-auto pt-2">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                id=""
                className="form-control"
              />
            </div>
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                id=""
                className="form-control mt-2"
              />
            </div>
            <div className="col-8 form-group mx-auto">
              <textarea
                cols="30"
                rows="8"
                name="message"
                placeholder="Your Message"
                id=""
                className="form-control mt-2"
              />
            </div>
            <div className="col-8 form-group mx-auto">
              <input
                type="submit"
                id=""
                className="btn-contact mt-2 mb-2"
                value="Send Message"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
