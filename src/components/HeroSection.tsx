import { useEffect, useState } from 'react';
import { ArrowRight, Gift, Users, TrendingUp } from 'lucide-react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
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
            {'{{Tagline}}'}
          </h1>
          <p className={`${styles.subtitle} ${mounted ? styles.animateUpDelay1 : ''}`}>
            Boost sales & retain customers with a single referral‑loyalty app. Empower your customers to earn while they refer, creating a self-sustaining growth loop.
          </p>
          
          <div className={`${styles.btnGroup} ${mounted ? styles.animateUpDelay2 : ''}`}>
            <a href="#" className={styles.btnPrimary}>
              {'{{PrimaryCTA}}'} <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className={`${styles.mediaSection} ${mounted ? styles.animateUpDelay3 : ''}`}>
          <div className={`${styles.floatingCard} ${styles.card1}`}>
            <div className={styles.cardHeader}>Combined Power</div>
            <div className={styles.cardBody}>
              <div className={styles.cardRow}>
                <span>Referral + Loyalty</span>
                <span className={styles.greenText}><TrendingUp size={14} /></span>
              </div>
              <p className={styles.cardFooterText}>Customers earn points on purchases and bonuses for referring friends.</p>
            </div>
          </div>
          
          <div className={`${styles.floatingCard} ${styles.card2}`}>
            <div className={styles.cardHeader}>Average CLV Growth</div>
            <div className={styles.cardBody}>
              <h2 className={styles.amount}>+30%</h2>
              <div className={styles.cardFooter}>Data: Businesses using combined programs</div>
            </div>
          </div>

          <div className={`${styles.floatingCard} ${styles.card3}`}>
             <div className={styles.cardHeader}>How it works</div>
             <div className={styles.cardBody}>
               <div className={styles.ruleItem}>
                 <Users size={16} className={styles.ruleIcon}/> Share Link
               </div>
               <div className={styles.ruleArrow}>↓</div>
               <div className={styles.ruleItem}>
                 <Gift size={16} className={styles.ruleIcon}/> Earn Rewards
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
