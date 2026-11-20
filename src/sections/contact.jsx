
import { useState } from 'react';

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    alert("Form Submitted Successfully!");
    setName("");
    setEmail("");
    setMessage("");

  }

  return (
    <section id="contact">
      <h1>Contact Me</h1>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Let's Work Together</h2>
          <p>
            Send me a message and
            I will get back to you as soon as possible.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            aria-label="Name"
            required
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            aria-label="Email"
            required
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            aria-label="Message"
            rows="5"
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>

    </section>
  );
}

export default Contact;
