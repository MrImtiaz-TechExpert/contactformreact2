import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock/unlock background scroll
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={`${styles.navbar} container`}>
        <a href="/" className={styles.logo}>
          <img src="/images/logo.png" alt="Logo" />
        </a>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className={styles.toggleButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>
    </header>
  );
}
