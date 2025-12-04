import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const INSTAGRAM_URL = "https://www.instagram.com/aria.b.photography/";

function ContactForm() {
  const [state, handleSubmit] = useForm("xwpgqkov");

  if (state.succeeded) {
    return (
      <p className="contact-success">
        Thanks for reaching out! I will get back to you soon.
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-row">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>

      <div className="contact-row">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          required
          placeholder="Tell me about your shoot or project..."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function ContactPage() {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <p className="contact-intro">
        Share your ideas, dates, or questions and I will respond quickly.
      </p>
      <ContactForm />
      <a
        className="instagram-link"
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow on Instagram
      </a>
    </section>
  );
}

export default ContactPage;
