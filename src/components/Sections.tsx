
import { UserPlus, ShoppingBag, Share2, Award } from 'lucide-react';
import styles from './Sections.module.css';

export const HowItWorks = () => {
  const steps = [
    { title: 'Register', desc: 'Create an account easily.', icon: <UserPlus /> },
    { title: 'Purchase', desc: 'Buy and earn points.', icon: <ShoppingBag /> },
    { title: 'Share', desc: 'Share your referral link.', icon: <Share2 /> },
    { title: 'Reward', desc: 'Receive bonuses instantly.', icon: <Award /> },
  ];
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <h2 className={styles.title}>How It <span className={styles.highlight}>Works</span></h2>
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
  return (
    <section className={styles.section} id="stories">
      <div className={styles.container}>
        <div className={styles.statsBanner}>
          <h3>Did you know?</h3>
          <p>Businesses adopting a combined program see an average <span className={styles.highlight}>30% growth in CLV</span>. (Source: Industry Data)</p>
        </div>
        
        <h2 className={styles.title}>Success <span className={styles.highlight}>Stories</span></h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p className={styles.quote}>"Our sales increased by 25% in just 3 months!"</p>
            <div className={styles.author}>
              <div className={styles.avatar}>A</div>
              <div>
                <strong>Ahmed</strong>
                <p>Al-Burgers Restaurant</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.quote}>"Customer retention is at an all-time high."</p>
            <div className={styles.author}>
              <div className={styles.avatar}>S</div>
              <div>
                <strong>Sara</strong>
                <p>Boutique Shop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FAQ = () => {
  const faqs = [
    { q: 'Do I need a separate app?', a: 'No, everything is inside {{AppName}}.' },
    { q: 'How do I redeem referral points?', a: 'Automatically upon your next purchase.' },
    { q: 'Is it hard to integrate for merchants?', a: 'Setup takes just a few minutes.' },
  ];

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked <span className={styles.highlight}>Questions</span></h2>
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
