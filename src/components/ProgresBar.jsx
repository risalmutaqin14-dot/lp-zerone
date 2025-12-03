// SkillsChart component (plain JS)
import React from "react";
import "../css/ProgresBar.css";

// Sections data (no TypeScript types here)
const sections = [
  {
    key: "design",

    items: [
      { label: "Customable", width: 94 },
      { label: "Detail Oriented", width: 94 },
      { label: "Ongoing Support", width: 94 },
      { label: "Innovation and Creativity", width: 94 },
    ],
  },
];

export default function SkillsChart() {
  // Hitung jumlah item per section buat delay animasi
  const countsByKey = sections.reduce((acc, s) => {
    acc[s.key] = s.items.length;
    return acc;
  }, {});

  return (
    <>
      <div className="skills">
        

        <div className="skills mt-3">
          <div className="charts ">
            {sections.map((section) => (
              <div key={section.key} className={`chart chart--${section.key}`}>
                <span className="chart__title">{section.title}</span>
                <ul className="chart--horiz">
                  {section.items.map((item, idx) => {
                    // Atur delay animasi sesuai urutan item + kategori (plain JS)
                    const baseDelays = {
                      dev: 0.5,
                      prod: 3.8,
                      design: 2.0,
                    };
                    const delay = `${
                      (baseDelays[section.key] || 0) + 0.2 * (idx + 1)
                    }s`;

                    return (
                      <li
                        key={item.label}
                        className="chart__bar"
                        style={{
                          height: '40px',
                          width: `${item.width}%`,
                          animationDelay: delay,
                          borderRadius: '0px 20px 0px 0px',
                          padding : '4px'
                        }}
                      >
                        <span className="chart__label">{item.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
