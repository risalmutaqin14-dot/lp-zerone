// src/components/Faq.jsx
import React, { useState } from 'react';
import '../css/Faq.css'; // Pastikan untuk menyertakan file CSS

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null); // Menyimpan indeks yang terbuka

  const faqs = [
    {
      question: 'What is Zerone.id?',
      answer: 'Zerone.id is a digital solutions company (Global Digital Solution) based in Tangerang, Indonesia. They focus on web application development, mobile applications, information systems, UI/UX, and other technology services.'
    },
    {
      question: 'Who is the Zerone solution intended for?',
      answer: 'Zerone serves various types of clients, with particular expertise in the education sector (schools, educational institutions) and small to medium-sized enterprises.'
    },
    {
      question: 'Does Zerone have experience in large projects/public institutions?',
      answer: 'Yes, Zerone has experience in developing applications such as EduNav, which is already used by more than 50 schools in more than 4 countries with more than 42,000 active users.'
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
