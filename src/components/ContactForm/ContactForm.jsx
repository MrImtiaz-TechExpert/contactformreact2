// ContactForm.jsx
import React from 'react';
import styles from './Contact.module.css';

export default function ContactForm() {
  return (
    <form className={styles.formContainer} aria-labelledby="contact-header">
      <div className={styles.fieldGroup}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          aria-label="Name" 
          required 
        />
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          aria-label="Email" 
          required 
        />
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="4"
          aria-label="Your message"
          required 
        />
      </div>
      <button type="submit" className={styles.primaryButton}>
        Send Message
      </button>
    </form>
  );
}
