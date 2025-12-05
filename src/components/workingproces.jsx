import React from "react";
import "../css/workingproces.css";
const cardsData = [
  {
    color: "#00bbd7",
    icon: "fa-solid fa-user",
    title: "Requirement",
    content:
      "The process of understanding system requirements",
  },
  {
    color: "#0092d7",
    icon: "fa-solid fa-house",
    title: "UI/UX Design",
    content:
      "The process of designing sketches, wireframes, visuals",
  },
  {
    color: "#00bbd7",
    icon: "fa-solid fa-wifi",
    title: "Prototype",
    content: "Initial model to validate the design",
  },
  {
    color: "#0092d7",
    icon: "fa-solid fa-cart-shopping",
    title: "Development",
    content:
      "System development process based on approved designs",
  },
];

export default function ULCards() {
  return (
    <div className="pb-[80px]">
      <h2 className="text-[36px] font-bold text-gray-600 mb-6 text-center">
        The Right Solution Through a Clear Process
      </h2>
      <h3 className="tagline-description text-lg text-gray-600 my-4">
        Discover the proven workflow we apply to every project. 
        <br className="hidden md:inline" />&nbsp;
        A clear, collaborative, and effective process designed to deliver the best solutions for your needs.
      </h3>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 ul-cards">
        {cardsData.map((card, index) => (
          <li key={index} style={{ "--accent-color": card.color }}>
            <div className="icon animate-bounce">
              <i className={card.icon}></i>
            </div>
            <div className="title">{card.title}</div>
            <div className="content">{card.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
