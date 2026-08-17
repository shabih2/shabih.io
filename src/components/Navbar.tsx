import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

import Logo from './Logo';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
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
    { name: t('navbar.benefits'), hasDropdown: false, href: '#benefits' },
    { name: t('navbar.howItWorks'), hasDropdown: false, href: '#how-it-works' },
    { name: t('navbar.faq'), hasDropdown: false, href: '#faq' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="#" className={styles.logo} aria-label={`${t('navbar.appName')} Home`}>
          <Logo className={styles.logoMark} />
          <span className={styles.logoText}>{t('navbar.appName')}</span>
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
           <button onClick={toggleLanguage} className={styles.langBtn} aria-label="Toggle Language" title={i18n.language === 'en' ? 'العربية' : 'English'}>
             <Globe size={22} />
           </button>
           <button className={styles.primaryBtn} onClick={() => navigate('/register-business')}>
             {t('navbar.primaryCta')}
           </button>
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
          <button onClick={toggleLanguage} className={styles.mobileLangBtn}>
            <Globe size={20} /> {i18n.language === 'en' ? 'العربية' : 'English'}
          </button>
          <button className={styles.mobilePrimaryBtn} onClick={() => {
            navigate('/register-business');
            setMobileMenuOpen(false);
          }}>
            {t('navbar.primaryCta')}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
