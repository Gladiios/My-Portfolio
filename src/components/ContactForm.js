import React, { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="bottom-right-form contact-form bottom-right-animation"
      onSubmit={handleSubmit}
    >
      <div className="first-last-name">
        <div>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="email-message">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="submit-button">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
