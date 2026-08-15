import { useEffect, useRef, useState } from 'react';
import { Target, TrendingUp, BarChart, Gift, Map, Heart } from 'lucide-react';
import styles from './FeatureCards.module.css';

const merchantBenefits = [
  { title: 'Lower CAC', desc: 'Reduce customer acquisition cost significantly.', icon: <Target size={32} /> },
  { title: 'Higher CLV', desc: 'Increase customer lifetime value through loyalty.', icon: <TrendingUp size={32} /> },
  { title: 'Unified Data', desc: 'Unified data on purchase and referral behavior.', icon: <BarChart size={32} /> },
];

const customerBenefits = [
  { title: 'Multi-Source Rewards', desc: 'Earn points for purchases and referral discounts.', icon: <Gift size={32} /> },
  { title: 'Clear Path', desc: 'Clear path to accumulate rewards effortlessly.', icon: <Map size={32} /> },
  { title: 'Pride of Sharing', desc: 'Proud sharing experience strengthening brand connection.', icon: <Heart size={32} /> },
];

const FeatureCards: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="benefits">
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.animateUp : ''}`}>
          <h2 className={styles.title}>Benefits for <span className={styles.highlight}>Merchants</span></h2>
        </div>
        <div className={styles.grid}>
          {merchantBenefits.map((feature, idx) => (
            <div key={`m-${idx}`} className={`${styles.card} ${isVisible ? styles.animateUp : ''}`} style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
              <div className={styles.iconWrapper} aria-label="Icon representing merchant benefit">{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.header} ${isVisible ? styles.animateUp : ''}`} style={{ marginTop: '80px' }}>
          <h2 className={styles.title}>Benefits for <span className={styles.highlight}>Customers</span></h2>
        </div>
        <div className={styles.grid}>
          {customerBenefits.map((feature, idx) => (
            <div key={`c-${idx}`} className={`${styles.card} ${isVisible ? styles.animateUp : ''}`} style={{ animationDelay: `${0.1 * (idx + 4)}s` }}>
              <div className={styles.iconWrapper} aria-label="Icon representing customer benefit">{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
