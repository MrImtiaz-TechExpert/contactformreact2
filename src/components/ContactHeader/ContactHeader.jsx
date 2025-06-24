// ContactHeader.jsx
import React, { useEffect, useState } from 'react';
import styles from './ContactHeader.module.css';

export default function ContactHeader() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100); // trigger animation
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <section className={`${styles.hero} ${visible ? styles.show : ''}`}>
      <h1>Contact Us</h1>
      <p>We’d love to hear from you. Please fill out the form below to get in touch.</p>
    </section>
  );
}
