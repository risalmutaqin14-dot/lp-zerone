// src/components/Faq.jsx
import React, { useState } from 'react';
import '../css/Faq.css'; // Pastikan untuk menyertakan file CSS

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null); // Menyimpan indeks yang terbuka

  const faqs = [
    {
      question: 'What is Zerone Global Digital Solution?',
      answer: 'zerOne.id.id is an information technology company that provides integrated digital solutions. We develop systems that streamline administration, strengthen security, and support scalable operations for organizations across multiple sectors.'
    },
    {
      question: 'What products does Zerone Global Digital Solution offer?',
      answer: (
      <div>
        <p>
          zerOne.id provides a complete ecosystem of digital platforms designed to support operations, administration, learning, assessments, events, and data management.
        </p>
        <p>Our key products are:</p>
        <ul>
          <li>Edunav Integrated School Information System</li>
          <li>Latihan.id Secure CBT and Assessment Platform</li>
          <li>Venti.id Event and Ticketing Management Platform</li>
          <li>WritingAide AI Writing and Feedback Assistant</li>
          <li>Rajin.id Tutoring and Learning Platform</li>
          <li>MariDukung.com Crowdfunding Platform</li>
          <li>JadwalKuliah.id College Directory and Schedule Platform</li>
        </ul>
        <p>
          These products are ready to use, cloud based, and built to support organizations across various sectors.
        </p>
      </div>
    )
    },
    {
      question: 'What IT services does Zerone Global Digital Solution provide?',
      answer: (
      <div>
        <p>
          In addition to our products, we offer professional IT development services for organizations that need custom technology solutions. Our services include:
        </p>
        <ul>
          <li>Custom Web Application Development</li>
          <li>CMS Development and Implementation</li>
          <li>UI and UX Design Services</li>
          <li>Payment Gateway Integration</li>
          <li>System Integration and API Development</li>
          <li>Data Migration and Digital Transformation Support</li>
        </ul>
        <p>
          These services allow organizations to build tailored systems that meet unique operational needs beyond our existing products.
        </p>
      </div>
    )

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
