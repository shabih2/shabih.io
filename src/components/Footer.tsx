import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo} aria-label={`${t('navbar.appName')} Home`}>
              <Logo className={styles.logoMark} />
              <span className={styles.logoText}>{t('navbar.appName')}</span>
            </a>
            <p className={styles.tagline}>{t('hero.tagline')}</p>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <a href="#how-it-works">{t('navbar.howItWorks')}</a>
              <a href="#benefits">{t('navbar.benefits')}</a>
            </div>
            <div className={styles.linkGroup}>
              <a href="#faq">{t('navbar.faq')}</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
