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
          DSBG 
          <br/>
          80 Bass Pro Mills Drive, Suite 7
          <br/>
          Vaughan ON L4K 5W9 
          <br/>
          <br/>
          info@dsbg.ca 
          <br/>
          416.367.DSBG
        </p>
      </div>
      <div className={classes.RightDiv}>
        <form action="https://formspree.io/myywbdqz" method="POST">
          <p>Full Name:</p>
          <input type="text" name="name" />
          <p>Email Address:</p>
          <input type="text" name="_replyto" />
          <p>Phone Number:</p>
          <NumberFormat format="(###) ###-####" mask="_" />
          <p>Message:</p>
          <textarea name="message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default contact;
