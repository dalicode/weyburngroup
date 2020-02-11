import React from "react";
import classes from "./Contact.module.css";
import NumberFormat from "react-number-format";

const contact = () => {
  return (
    <div className={classes.Contact}>
      <div className={classes.LeftDiv}>
        <h1> Contact Us </h1>
        <p>
          We want to hear from you! If you have any questions or would like to
          book a consultation, you can use the contact form to send us a
          message, or contact us directly. 
          <br/>
          <br/>
          Weyburn Group 
          <br/>
          123 Sesame Street
          <br/>
          Toronto ON M1S1K6
          <br/>
          <br/>
          contact@weyburngroup.com 
          <br/>
          416-456-7809
        </p>
      </div>
      <div className={classes.RightDiv}>
        <form action="https://formspree.io/myywbdqz" method="POST">
          <p>Full Name:</p>
          <input placeholder="Abdulaziz Farah" type="text" name="name" />
          <p>Email Address:</p>
          <input placeholder="abdulaziz.farah@hotmail.com" type="text" name="_replyto" />
          <p>Phone Number:</p>
          <NumberFormat placeholder="(123)-456-7890" format="(###) ###-####" mask="_" />
          <p>Message:</p>
          <textarea rows="6" placeholder="Start typing message here..." name="message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default contact;
