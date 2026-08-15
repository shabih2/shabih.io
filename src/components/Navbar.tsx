import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Benefits', hasDropdown: false },
    { name: 'How it Works', hasDropdown: false },
    { name: 'Stories', hasDropdown: false },
    { name: 'FAQ', hasDropdown: false },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="#" className={styles.logo} aria-label="{{AppName}} Home">
          <div className={styles.logoMark}>
            <div className={styles.logoCircle}></div>
          </div>
          <span className={styles.logoText}>{'{{AppName}}'}</span>
        </a>

        {/* Desktop Links */}
        <div className={styles.desktopMenu}>
          {navLinks.map((link, idx) => (
            <div key={idx} className={styles.navItem}>
              <span className={styles.navLink}>
                {link.name}
                {link.hasDropdown && <ChevronDown className={styles.chevron} size={16} />}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className={styles.desktopActions}>
           <button className={styles.primaryBtn}>{'{{PrimaryCTA}}'}</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link, idx) => (
            <div key={idx} className={styles.mobileNavItem}>
              {link.name}
            </div>
          ))}
          <button className={styles.mobilePrimaryBtn}>{'{{PrimaryCTA}}'}</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
