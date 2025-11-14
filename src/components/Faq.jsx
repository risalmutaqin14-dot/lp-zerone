// src/components/Faq.jsx
import React, { useState } from 'react';
import '../css/Faq.css'; // Pastikan untuk menyertakan file CSS

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null); // Menyimpan indeks yang terbuka

  const faqs = [
    {
      question: 'How do I start working with Zerone?',
      answer: 'Contact us through our website or email, and our team will guide you through the quick onboarding and project setup process.'
    },
    {
      question: 'What services do you offer?',
      answer: 'We offer a variety of software development services, including web development, mobile apps, and cloud solutions.'
    },
    {
      question: 'What is the pricing model?',
      answer: 'We offer both fixed-price and hourly-based pricing depending on the project needs.'
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle jawaban
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <h3>{faq.question}</h3>
            <span className={openIndex === index ? 'arrow-up' : 'arrow-down'}></span>
          </div>
          <div
            className={`faq-answer ${openIndex === index ? 'open' : ''}`}
          >
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
