// Button.jsx
import React from 'react';
import styles from './Button.module.css';

export default function Button({ children, variant = 'primary', ...props }) {
  const className = variant === 'outline' 
    ? `${styles.button} ${styles.outline}` 
    : `${styles.button} ${styles.primary}`;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
