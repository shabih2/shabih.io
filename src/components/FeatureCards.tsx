import { useEffect, useRef, useState } from 'react';
import { Target, TrendingUp, BarChart, Gift, Map, Heart, Star, Banknote } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import styles from './FeatureCards.module.css';

const FeatureCards: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const merchantBenefits = [
    { title: t('features.lowerCac'), desc: t('features.lowerCacDesc'), icon: <Target size={32} /> },
    { title: t('features.higherClv'), desc: t('features.higherClvDesc'), icon: <TrendingUp size={32} /> },
    { title: t('features.unifiedData'), desc: t('features.unifiedDataDesc'), icon: <BarChart size={32} /> },
    { title: t('features.payForResults'), desc: t('features.payForResultsDesc'), icon: <Banknote size={32} /> },
  ];

  const customerBenefits = [
    { title: t('features.multiSource'), desc: t('features.multiSourceDesc'), icon: <Gift size={32} /> },
    { title: t('features.clearPath'), desc: t('features.clearPathDesc'), icon: <Map size={32} /> },
    { title: t('features.prideSharing'), desc: t('features.prideSharingDesc'), icon: <Heart size={32} /> },
    { title: t('features.beAmbassador'), desc: t('features.beAmbassadorDesc'), icon: <Star size={32} /> },
  ];

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
          <h2 className={styles.title}>
            <Trans i18nKey="features.benefitsMerchants" components={{ 1: <span className={styles.highlight} /> }} />
          </h2>
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
          <h2 className={styles.title}>
            <Trans i18nKey="features.benefitsCustomers" components={{ 1: <span className={styles.highlight} /> }} />
          </h2>
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
