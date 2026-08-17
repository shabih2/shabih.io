import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, MessageCircle } from 'lucide-react';
import styles from './RegisterBusiness.module.css';

const RegisterBusiness: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    uan: '',
    contactNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.businessName && formData.uan) {
      setStep(2);
    }
  };

  const handleWhatsAppVerification = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.contactNumber) {
      const token = Math.random().toString(36).substring(2, 10).toUpperCase();
      
      // We will use a placeholder number for now as requested in the plan
      const whatsappNumber = '966500000000';
      
      // Workaround because i18next interpolates natively if configured, 
      // but simple string replacement works safely here too if interpolator is basic.
      let message = t('registerBusiness.whatsappMessage', {
        businessName: formData.businessName,
        token: token
      });
      
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    }
  };

  const isRtl = i18n.language === 'ar';

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{t('registerBusiness.title')}</h1>
        
        {step === 1 ? (
          <form onSubmit={handleNext}>
            <div className={styles.formGroup}>
              <label className={styles.label}>{t('registerBusiness.businessName')}</label>
              <input
                type="text"
                name="businessName"
                required
                className={styles.input}
                value={formData.businessName}
                onChange={handleChange}
                placeholder={t('registerBusiness.businessName')}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>{t('registerBusiness.uan')}</label>
              <input
                type="text"
                name="uan"
                required
                className={styles.input}
                value={formData.uan}
                onChange={handleChange}
                placeholder={t('registerBusiness.uan')}
              />
            </div>
            
            <button type="submit" className={styles.btn}>
              {t('registerBusiness.next')} 
              {!isRtl ? <ArrowRight size={18} /> : <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} />}
            </button>
          </form>
        ) : (
          <form onSubmit={handleWhatsAppVerification}>
            <div className={styles.formGroup}>
              <label className={styles.label}>{t('registerBusiness.contactNumber')}</label>
              <input
                type="tel"
                name="contactNumber"
                required
                className={styles.input}
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="+966 5X XXX XXXX"
                dir="ltr"
                style={{ textAlign: isRtl ? 'right' : 'left' }}
              />
            </div>
            
            <button type="submit" className={styles.btn}>
              <MessageCircle size={18} /> {t('registerBusiness.verifyWhatsApp')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterBusiness;
