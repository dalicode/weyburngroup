import React from "react";
import classes from "./Contact.module.css";

const contact = () => {
    return (
        <div className={classes.Contact}>
            <div className={classes.LeftDiv}> Left Div </div>
            <div className={classes.RightDiv}>
                <h3> EMAIL US NOW </h3>
                <form action="https://formspree.io/myywbdqz" method="POST">
                    <p>Full Name:</p>
                    <input type="text" name="name" />
                    <p>Email Address:</p>
                    <input type="text" name="_replyto" />
                    <p>Message:</p>
                    <textarea name="message"></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default contact;
