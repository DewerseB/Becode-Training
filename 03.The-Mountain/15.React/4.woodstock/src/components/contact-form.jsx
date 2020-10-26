import React from 'react';

const ContactForm = () => {
    return (
        <form>
            <label for="fname">First name</label>
            <input type="text" id="fname" name="fname"/><br/>
            <label for="lname">Last name</label>
            <input type="text" id="lname" name="lname"/><br/>
            <label for="email">Email</label>
            <input type="email" id="email" name="email"/><br/>
            <label for="message">Message</label>
            <textarea id="message" name="message"/><br/>
        </form>
    )
}

export default ContactForm;