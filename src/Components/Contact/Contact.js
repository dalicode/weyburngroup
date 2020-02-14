import React from "react";
import classes from "./Contact.module.css";
import NumberFormat from "react-number-format";

const contact = () => {
  return (
    <div className={classes.Contact}>
        <div className={classes.LeftDiv}>
          <h1> Contact Us </h1>
          <p>
          We would love to hear from you! If you have any questions or would like to book a consultation, you can use the contact form to send us a message or contact us directly.
            <br />
            <br />
            Weyburn Group
            <br />
            618 Weyburn Square
            <br />
            Pickering ON L1V 3V4
            <br />
            <br />
            info@weyburngroup.com
            <br />
            (647) 271-3886
          </p>
        </div>
        <div className={classes.RightDiv}>
          <form action="https://formspree.io/myywbdqz" method="POST">
            <p>Full Name</p>
            <input placeholder="John Smith" type="text" name="name" />
            <span className={classes.focusBg}></span>
            <p>Email Address</p>
            <input
              placeholder="johnsmith@abc.com"
              type="text"
              name="_replyto"
            />
            <p>Phone Number*</p>
            <NumberFormat
              placeholder="(123)-456-7890"
              format="(###) ###-####"
              mask="_"
              name="phone"
              required
            />
            <p>Message*</p>
            <textarea
              rows="4"
              placeholder="Start typing message here..."
              name="message"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
  );
};

export default contact;
