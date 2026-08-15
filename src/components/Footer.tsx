
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo} aria-label="{{AppName}} Home">
              <div className={styles.logoMark}>
                <div className={styles.logoCircle}></div>
              </div>
              <span className={styles.logoText}>{'{{AppName}}'}</span>
            </a>
            <p className={styles.tagline}>The ultimate combined referral and loyalty platform to supercharge your business.</p>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h4>Platform</h4>
              <a href="#how-it-works">How it works</a>
              <a href="#benefits">Benefits</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>Resources</h4>
              <a href="#stories">Success Stories</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>Company</h4>
              <a href="#">Contact Us</a>
              <a href="#">About</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <p>&copy; {new Date().getFullYear()} {'{{AppName}}'}. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
