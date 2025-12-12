import React from "react";
import "../css/workingproces.css";

const cardsData = [
  {
    color: "#00bbd7",
    // Changed to clipboard/list icon for Requirements
    icon: "fa-solid fa-clipboard-list", 
    title: "Requirement Analysis",
    content: "Deep dive analysis to fully understand your system requirements and business goals.",
  },
  {
    color: "#0092d7",
    // Changed to pen/ruler or magic for Design
    icon: "fa-solid fa-pen-ruler", 
    title: "UI/UX Design",
    content: "Crafting intuitive user journeys through wireframes and high-fidelity visuals.",
  },
  {
    color: "#00bbd7",
    // Changed to cube/layer for Prototype (Wifi was confusing)
    icon: "fa-solid fa-layer-group", 
    title: "Prototyping",
    content: "Creating interactive models to validate flow and functionality before coding.",
  },
  {
    color: "#0092d7",
    // Changed to code/laptop for Development (Cart was confusing)
    icon: "fa-solid fa-code", 
    title: "Development",
    content: "Robust system engineering and coding based on the approved design specifications.",
  },
];

export default function ULCards() {
  return (
    <div className="pb-[80px] container mx-auto px-4">
      <h2 className="text-[24px] md:text-[36px] font-bold text-gray-600 mb-6 text-center">
        The Right Solution Through a Clear Process
      </h2>
      
      {/* Changed h3 to p for correct SEO semantic structure */}
      <p className="tagline-description md:text-lg text-gray-600 my-4 text-center leading-relaxed max-w-3xl mx-auto">
        Discover the proven workflow we apply to every project.
        <br className="hidden md:inline" />
        {" "}A clear, collaborative, and effective process designed to deliver the best solutions for your needs.
      </p>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 ul-cards mt-12">
        {cardsData.map((card, index) => (
          <li key={index} style={{ "--accent-color": card.color }}>
            <div className="icon animate-bounce">
              {/* Added aria-hidden for accessibility */}
              <i className={card.icon} aria-hidden="true"></i>
            </div>
            <div className="title font-bold text-xl mb-2">{card.title}</div>
            <div className="content text-gray-600 text-sm">{card.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}