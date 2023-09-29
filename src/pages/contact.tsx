/** @jsxImportSource theme-ui */
import { useState } from "react";
import "../theme/styles.scss"

import axios from "axios";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const ContactPage = () => {

const [serverState, setServerState] = useState({
    submitting: false,
    status: null
    });
    const handleServerResponse = (ok, msg, form) => {
    setServerState({
        submitting: false,
        status: { ok, msg }
    });
    if (ok) {
        form.reset();
    }
    };
    const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
        method: "post",
        url: "https://getform.io/f/a8ab672d-ddd5-44e8-b956-56be0d3addd2",
        data: new FormData(form)
    })
        .then(r => {
        handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
        });
    };

    const buttonText = serverState.submitting ? 'Sending...' : 'Send';

const formPage =  (<div className="form">
    <div className="subheader2">Lets get in touch</div>
    <form className="contactform" onSubmit={handleOnSubmit}>
        <div className="forminput">
            <label className="buttontext justify">Full name<span className="required">*Required field</span></label>
            <input className="textfield placeholder" type="text" name="name" placeholder="Your full name (e.g. Erin Yoo)" required/>
        </div>
        <div className="forminput">
            <label className="buttontext justify">Email address<span className="required">*Required field</span></label>
            <input className="textfield placeholder" type="email" name="email" placeholder="Your email (e.g. hello@email.com)" required/>
        </div>
        <div className="forminput">
            <label className="buttontext">Your message</label>
            <textarea className="textarea placeholder" rows={7} type="text" name="message" placeholder="Enter your message or any additional details here" />
        </div>
        <button className="specialbutton buttontext" type="submit">{buttonText}</button>
    </form></div>);

const success = <div className="form confirmation"><div className="subheader2">Your message was sent!</div><div className="body">Thanks for reaching out!</div><div className="justifycenter buttonwidth"><a href="/" class="specialbutton buttontext">Back to home</a><a href="/contact" class="specialbuttongreen buttontext">Back to contact</a></div></div>;

const formOrSuccess = serverState.status ? success : formPage;
    return (
    <div className="page">
    <NavBar currentPage="contact" />
    {formOrSuccess}
    <Footer />
    </div>
    )
}

export default ContactPage

