import { useEffect, useState } from 'react';
import { ArrowRight, Gift, Users, TrendingUp } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.glowTop}></div>
      <div className={styles.glowBottom}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={`${styles.headline} ${mounted ? styles.animateUp : ''}`}>
            {t('hero.tagline')}
          </h1>
          <p className={`${styles.subtitle} ${mounted ? styles.animateUpDelay1 : ''}`}>
            <Trans i18nKey="hero.subtitle" components={{ 1: <strong /> }} />
          </p>
          
          <div className={`${styles.btnGroup} ${mounted ? styles.animateUpDelay2 : ''}`}>
            <button onClick={() => navigate('/register-business')} className={styles.btnPrimary}>
              {t('navbar.primaryCta')} <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className={`${styles.mediaSection} ${mounted ? styles.animateUpDelay3 : ''}`}>
          <div className={`${styles.floatingCard} ${styles.card1}`}>
            <div className={styles.cardHeader}>{t('hero.combinedPower')}</div>
            <div className={styles.cardBody}>
              <div className={styles.cardRow}>
                <span>{t('hero.referralLoyalty')}</span>
                <span className={styles.greenText}><TrendingUp size={14} /></span>
              </div>
              <p className={styles.cardFooterText}>{t('hero.cardFooterText1')}</p>
            </div>
          </div>
          
          <div className={`${styles.floatingCard} ${styles.card2}`}>
            <div className={styles.cardHeader}>{t('hero.averageClv')}</div>
            <div className={styles.cardBody}>
              <h2 className={styles.amount}>+30%</h2>
              <div className={styles.cardFooter}>{t('hero.cardFooterText2')}</div>
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.card3}`}>
             <div className={styles.cardHeader}>{t('hero.howItWorks')}</div>
             <div className={styles.cardBody}>
               <div className={styles.ruleItem}>
                 <Users size={16} className={styles.ruleIcon}/> {t('hero.shareLink')}
               </div>
               <div className={styles.ruleArrow}>↓</div>
               <div className={styles.ruleItem}>
                 <Gift size={16} className={styles.ruleIcon}/> {t('hero.earnRewards')}
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
