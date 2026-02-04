import React from "react";
import { Download, FileText, Info, Check, X } from "lucide-react";

// --- 1. DATA CONFIGURATION ---
const logoData = {
  zerone: [
    {
      id: "z1",
      title: "Zerone Primary",
      description: "Corporate main logo. Use on a light/white background.",
      bg: "bg-white",
      src: "/assets/DownloadLogos/Zerone-biru.png",
      files: [
        { type: "PNG", url: "/assets/DownloadLogos/Zerone-biru.png" }, // Note: URL mismatch in original, kept as requested
      ],
    },
    {
      id: "z2",
      title: "Zerone White",
      description:
        "White (inverted) version of the logo. Required for dark backgrounds.",
      bg: "bg-slate-900",
      src: "/assets/DownloadLogos/Zerone-Putih.png",
      files: [{ type: "PNG", url: "/assets/DownloadLogos/Zerone-Putih.png" }],
    },
    {
      id: "z3",
      title: "Zerone Black",
      description:
        "Black version of the logo. Recommended for light backgrounds.",
      bg: "bg-gray-50",
      src: "/assets/DownloadLogos/Zerone-Black.png",
      files: [{ type: "PNG", url: "/assets/DownloadLogos/Zerone-Black.png" }],
    },
  ],
  edunav: [
    {
      id: "e1",
      title: "Edunav Full Color",
      description:
        "Complete logo with tagline. Standard for official documents.",
      bg: "bg-white",
      src: "/assets/DownloadLogos/Edunav-full.png",
      files: [{ type: "PNG", url: "/assets/DownloadLogos/Edunav-full.png" }],
    },
    {
      id: "e2",
      title: "Edunav Monochrome",
      description: "Monochrome version (black). Use for B/W document printing.",
      bg: "bg-gray-100",
      src: "/assets/DownloadLogos/Edunav-mono.png",
      files: [{ type: "PNG", url: "/assets/DownloadLogos/Edunav-mono.png" }],
    },
    {
      id: "e3",
      title: "Edunav App Icon",
      description: "App icon for mobile (iOS/Android) and web clips.",
      bg: "bg-blue-50",
      src: "/assets/DownloadLogos/Edunav-icon.png",
      files: [{ type: "PNG", url: "/assets/DownloadLogos/Edunav-icon.png" }],
    },
  ],
  others: [
    {
      id: "o1",
      title: "Edunav",
      description: "School Information System",
      bg: "bg-white",
      src: "/assets/DownloadLogos/edunav.png",
      files: [{ type: "PNG", url: "/assets/DownloadLogos/edunav.png" }],
    },
    {
      id: "o2",
      title: "Latihan.id",
      description: "Best online exam solutions",
      bg: "bg-white",
      src: "/assets/DownloadLogos/latihan.png",
      files: [{ type: "PNG", url: "/assets/DownloadLogos/latihan.png" }],
    },
    {
      id: "o3",
      title: "Venti",
      description: "A complete event management solution logo",
      bg: "bg-white",
      src: "/assets/DownloadLogos/venti.png",
      files: [{ type: "PNG", url: "/assets/DownloadLogos/venti.png" }],
    },
    {
      id: "o4",
      title: "Writing Aide",
      description: "Writing assistance application",
      bg: "bg-white",
      src: "/assets/DownloadLogos/Logo-Writing-Aide.png",
      files: [
        { type: "PNG", url: "/assets/DownloadLogos/Logo-Writing-Aide.png" },
      ],
    },
    {
      id: "o5",
      title: "Rajin.id",
      description: "Productivity platform logo. Standard version.",
      bg: "bg-white",
      src: "/assets/DownloadLogos/rajin.png",
      files: [{ type: "PNG", url: "/assets/DownloadLogos/rajin.png" }],
    },
    {
      id: "o6",
      title: "Mari Dukung",
      description: "Donation and fundraising platform logo.",
      bg: "bg-white",
      src: "/assets/DownloadLogos/MariDukung.png",
      files: [{ type: "PNG", url: "/assets/DownloadLogos/MariDukung.png" }],
    },
    {
      id: "o7",
      title: "Jadwal Kuliah",
      description: "Student scheduling application logo.",
      bg: "bg-white",
      src: "/assets/DownloadLogos/Jadwal-Kuliah-logo.png",
      files: [
        { type: "PNG", url: "/assets/DownloadLogos/Jadwal-Kuliah-logo.png" },
      ],
    },
  ],
};

// --- 2. COMPONENT: LOGO CARD ---
const LogoCard = ({ logo }) => {
  // Get filename for download attribute
  const getFileName = (path) => path.split("/").pop();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
      {/* PREVIEW IMAGE */}
      <div
        className={`w-full aspect-[3/2] flex items-center justify-center ${logo.bg} border-b border-gray-100 relative`}
      >
        <img
          src={logo.src}
          alt={logo.title}
          loading="lazy"
          className="max-w-full max-h-full object-contain drop-shadow-sm px-12 md:px-12"
          // Fallback if image is missing
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://via.placeholder.com/400x200?text=${logo.title.replace(" ", "+")}`;
          }}
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="font-bold text-lg text-gray-900 mb-2">{logo.title}</h4>
        <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
          {logo.description}
        </p>

        {/* DOWNLOAD BUTTON (PNG ONLY) */}
        <div className="flex flex-col gap-2 mt-auto">
          {logo.files.map((file, idx) => (
            <a
              key={idx}
              href={file.url}
              download={getFileName(file.url)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold border border-gray-200 rounded-lg text-gray-700 bg-gray-50 hover:bg-white hover:border-[#324E74] hover:text-[#324E74] transition-all no-underline shadow-sm"
            >
              <Download
                size={16}
                className="group-hover:scale-110 transition-transform"
              />
              <span>DOWNLOAD PNG</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 3. MAIN PAGE COMPONENT ---
export default function LogoPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800 pb-20 selection:bg-blue-100 selection:text-blue-900">
      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 pt-32 pb-16 px-4 text-center ">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#324E74] mb-6 tracking-tight">
            Brand Assets
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Download official logos and guidelines. Please use strictly as
            provided.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-6xl -mt-10 relative z-10">
        {/* BRAND GUIDELINE BOX */}
        <div className="bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] rounded-2xl p-6 md:p-10 shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-6 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex items-start gap-5">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <FileText size={32} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Brand Guidelines
              </h2>
              <p className="text-blue-50 max-w-xl text-sm md:text-base opacity-90">
                A comprehensive manual detailing the correct usage of our logos,
                color systems, and typography to ensure brand consistency across
                all platforms.
              </p>
            </div>
          </div>

          <div className="relative z-10">
            <a
              href="https://drive.google.com/file/d/1BzvgPdTbdIG2bUP4TLqrvhodo3pc8ehW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0092D7] hover:bg-blue-50 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg active:scale-95"
            >
              <Download size={20} />
              <span>Guideline (Zerone)</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1L4MaEnIBRcsEZwzV0xyFDDrpSfdjkHJE/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0092D7] mt-3 hover:bg-blue-50 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg active:scale-95"
            >
              <Download size={20} />
              <span>Guideline (Edunav)</span>
            </a>
          </div>
        </div>

        {/* --- SECTION: ZERONE --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
            <div className="p-2 bg-blue-100 rounded-lg text-[#324E74]">
              <Info size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Zerone Logo</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logoData.zerone.map((logo) => (
              <LogoCard key={logo.id} logo={logo} />
            ))}
          </div>
        </div>

        {/* --- SECTION: EDUNAV (CURRENTLY DISABLED) ---
        <div className="mb-16">
           <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
            <div className="p-2 bg-blue-100 rounded-lg text-[#324E74]">
              <Info size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Edunav Product</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logoData.edunav.map((logo) => (
              <LogoCard key={logo.id} logo={logo} />
            ))}
          </div>
        </div> */}

        {/* --- SECTION: OTHERS --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
            <div className="p-2 bg-blue-100 rounded-lg text-[#324E74]">
              <Info size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Zerone Products
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logoData.others.map((logo) => (
              <LogoCard key={logo.id} logo={logo} />
            ))}
          </div>
        </div>

        {/* --- GUIDELINES (DOs / DON'Ts) --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50">
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
            <div className="flex items-center gap-3 font-bold text-green-700 mb-6">
              <Check size={24} />
              <span className="text-lg">DO (Acceptable Usage)</span>
            </div>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Use original logos without modification.</li>
              <li>Provide clear space around the logo.</li>
              <li>Use the white logo on dark backgrounds.</li>
            </ul>
          </div>

          <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <div className="flex items-center gap-3 font-bold text-red-700 mb-6">
              <X size={24} />
              <span className="text-lg">DON'T (Unacceptable Usage)</span>
            </div>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Do not alter logo proportions (squashing/stretching).</li>
              <li>Do not change logo element colors.</li>
              <li>Do not add shadows or outlines.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
