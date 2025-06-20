import React, { useRef } from 'react';
import { useLanguage } from '../App';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useLanguage();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_contact', // Service ID di EmailJS
        'template_contact', // Template ID di EmailJS
        form.current,
        'Ql7-7FhF9RvG_Jv3d' // Public Key di EmailJS
      )
      .then(
        () => {
          alert('Messaggio inviato con successo!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Errore nell\'invio del messaggio. Riprova più tardi.');
        },
      );
  };

  return (
    <section id="contact" className="py-20 bg-[#010d2c]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#b8ff00] mb-4 text-center [text-shadow:_0_0_10px_#b8ff00]">
          {t('contact', 'title')}
        </h2>
        <p className="text-white text-center mb-12">stefanoschifanographic@gmail.com</p>
        <div className="max-w-2xl mx-auto">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">{t('contact', 'name')}</label>
              <input
                type="text"
                id="name"
                name="from_name"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#c0ff00] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">{t('contact', 'email')}</label>
              <input
                type="email"
                id="email"
                name="from_email"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#c0ff00] transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">{t('contact', 'message')}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#c0ff00] transition-colors"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#c0ff00] text-[#010d2c] px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_#c0ff00] transition-all duration-300 transform hover:scale-105"
              >
                {t('contact', 'send')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;