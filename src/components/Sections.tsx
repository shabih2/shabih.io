import { Camera, Send, Award, Compass } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import styles from './Sections.module.css';

export const HowItWorks = () => {
  const { t } = useTranslation();
  const steps = [
    { title: t('sections.step1Title'), desc: t('sections.step1Desc'), icon: <Camera /> },
    { title: t('sections.step2Title'), desc: t('sections.step2Desc'), icon: <Send /> },
    { title: t('sections.step3Title'), desc: t('sections.step3Desc'), icon: <Award /> },
    { title: t('sections.step4Title'), desc: t('sections.step4Desc'), icon: <Compass /> },
  ];
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <h2 className={styles.title}>
          <Trans i18nKey="sections.howItWorksTitle" components={{ 1: <span className={styles.highlight} /> }} />
        </h2>
        <div className={styles.stepsFlow}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.stepItem}>
              <div className={styles.stepIcon} aria-label={`Step ${idx + 1}`}>{step.icon}</div>
              <div className={styles.stepNumber}>{idx + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section} id="stories">
      <div className={styles.container}>
        <div className={styles.statsBanner}>
          <h3>{t('sections.didYouKnow')}</h3>
          <p><Trans i18nKey="sections.statsBannerText" components={{ 1: <span className={styles.highlight} /> }} /></p>
        </div>
        
        <h2 className={styles.title}>
          <Trans i18nKey="sections.successStoriesTitle" components={{ 1: <span className={styles.highlight} /> }} />
        </h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.quote}>{t('sections.quote1')}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>A</div>
              <div>
                <strong>{t('sections.quote1Author')}</strong>
                <p>{t('sections.quote1Role')}</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.quote}>{t('sections.quote2')}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>S</div>
              <div>
                <strong>{t('sections.quote2Author')}</strong>
                <p>{t('sections.quote2Role')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FAQ = () => {
  const { t } = useTranslation();
  const faqs = [
    { q: t('sections.faq1Q'), a: t('sections.faq1A') },
    { q: t('sections.faq2Q'), a: t('sections.faq2A') },
    { q: t('sections.faq3Q'), a: t('sections.faq3A') },
  ];

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <h2 className={styles.title}>
          <Trans i18nKey="sections.faqTitle" components={{ 1: <span className={styles.highlight} /> }} />
        </h2>
        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <details key={idx} className={styles.faqItem}>
              <summary className={styles.faqQ}>{faq.q}</summary>
              <p className={styles.faqA}>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
