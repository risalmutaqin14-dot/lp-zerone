import React, { useState, useRef, useEffect } from "react";
import {
  User,
  Target,
  Settings,
  Palette,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Send,
  BarChart3,
  Clock,
  ChevronDown,
  Calendar,
} from "lucide-react";

export default function ProfessionalBriefForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState("idle");
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    currentWebsite: "",
    companyName: "",
    companyOverview: "",
    websiteType: "Company Profile",
    projectDescription: "",
    businessDescription: "",
    primaryGoals: "",
    customerProfile: "",
    languages: "",
    pageCount: "1-5",
    mandatoryPages: [],
    specialFeatures: [],
    targetKeywords: "",
    priorityChannels: [],
    marketingTarget: "",
    brandingStatus: "Have Branding (Logo/Assets)",
    designReferences: "",
    budgetRange: "$500-$1500",
    startDate: "",
    launchDate: "",
    additionalNotes: "",
  });

  const steps = [
    {
      id: 1,
      title: "Basics Information",
      icon: <User size={18} />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      title: "Strategy",
      icon: <Target size={18} />,
      color: "from-purple-500 to-pink-400",
    },
    {
      id: 3,
      title: "Technical",
      icon: <Settings size={18} />,
      color: "from-indigo-500 to-blue-400",
    },
    {
      id: 4,
      title: "Marketing",
      icon: <BarChart3 size={18} />,
      color: "from-emerald-500 to-teal-400",
    },
    {
      id: 5,
      title: "Timeline",
      icon: <Clock size={18} />,
      color: "from-orange-500 to-yellow-400",
    },
    {
      id: 6,
      title: "Confirm",
      icon: <CheckCircle size={18} />,
      color: "from-green-500 to-emerald-400",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const list = prev[category];
      return checked
        ? { ...prev, [category]: [...list, value] }
        : { ...prev, [category]: list.filter((i) => i !== value) };
    });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulasi pengiriman data
    setTimeout(() => {
      console.log("Final Form Data Submitted:", formData);
      setStatus("success");
    }, 2000);
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 6));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  if (status === "success") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-xl text-center border border-slate-100 animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">Success!</h2>
          <p className="text-slate-500 mb-8">
            Your website brief has been sent. We will review it and contact you as soon as possible.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-[linear-gradient(90deg,#1c76d2,#3498db)] text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg shadow-blue-200"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-10 font-sans text-slate-900 leading-relaxed">
      <div className="max-w-6xl w-full mt-18 bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col md:flex-row overflow-hidden border border-white">
        {/* MOBILE STEPS (icons only) */}
        <nav className="w-full py-4 bg-gradient-to-br from-slate-50 to-blue-50/50 p-3 border-b border-slate-100 md:hidden">
          <div className="flex items-center justify-between py-4 gap-1 overflow-x-auto px-2">
            {steps.map((s) => (
              <button
                key={s.id}
                onClick={() => setStep(s.id)}
                className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 mr-2 ${
                  step === s.id
                    ? `bg-gradient-to-br ${s.color} text-white shadow-xl scale-110`
                    : step > s.id
                      ? 'bg-green-500 text-white'
                      : 'bg-white border border-slate-200 text-slate-400'
                }`}
                aria-label={`Step ${s.id}`}
              >
                {step > s.id ? <CheckCircle size={16} /> : s.icon}
              </button>
            ))}
          </div>
        </nav>

        {/* SIDEBAR */}
        <aside className="hidden md:block md:w-72 lg:w-80 bg-gradient-to-br from-slate-50 to-blue-50/50 p-8 border-r border-slate-100 shrink-0">
          <nav className="space-y-1 relative">
            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-200 hidden md:block" />
            {steps.map((s) => (
              <div key={s.id} className="relative flex items-center gap-4 py-3">
                <div
                  className={`relative z-10 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500
                  ${
                    step === s.id
                      ? `bg-gradient-to-br ${s.color} text-white shadow-xl scale-110`
                      : step > s.id
                        ? "bg-green-500 text-white"
                        : "bg-white border border-slate-200 text-slate-400"
                  }`}
                >
                  {step > s.id ? <CheckCircle size={18} /> : s.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${step === s.id ? "text-blue-600" : "text-slate-400"}`}
                  >
                    Step 0{s.id}
                  </span>
                  <span
                    className={`font-bold text-sm ${step === s.id ? "text-slate-900" : "text-slate-400"}`}
                  >
                    {s.title}
                  </span>
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* FORM CONTENT */}
        <main className="flex-1 p-8 md:p-16 overflow-y-auto max-h-[90vh]">
          <form
            onSubmit={handleSubmitClick}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
            className="max-w-2xl mx-auto space-y-8 text-left"
          >
            {/* STEP 1: BASIC INFO */}
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Header
                  title="Basic Information"
                  subtitle="Identity and business credentials."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput
                    label="Full Name"
                    name="fullName"
                    required
                    placeholder="John Wick"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                  <FloatingInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <FloatingInput
                    label="WhatsApp"
                    name="whatsapp"
                    placeholder="+62..."
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                  />
                  <FloatingInput
                    label="Current Website"
                    name="currentWebsite"
                    placeholder="https://..."
                    value={formData.currentWebsite}
                    onChange={handleInputChange}
                  />
                </div>
                <FloatingInput
                  label="Company Name"
                  name="companyName"
                  placeholder="e.g. Acme Corp"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
                <FloatingTextArea
                  label="Company Overview"
                  name="companyOverview"
                  placeholder="What field does your company operate in?"
                  value={formData.companyOverview}
                  onChange={handleInputChange}
                />
              </div>
            )}

            {/* STEP 2: STRATEGY */}
            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Header title="Project Details" subtitle="What are we building?" />
                <CustomSelect
                  label="Website Type"
                  name="websiteType"
                  value={formData.websiteType}
                  options={[
                    "Company Profile",
                    "E-Commerce",
                    "Landing Page",
                    "News Portal / Blog",
                    "Custom App",
                  ]}
                  onChange={handleInputChange}
                />
                <FloatingTextArea
                  label="Project Description"
                  name="projectDescription"
                  value={formData.projectDescription}
                  placeholder="e.g. Online store with checkout..."
                  onChange={handleInputChange}
                />
                <FloatingTextArea
                  label="Business Description"
                  name="businessDescription"
                  value={formData.businessDescription}
                  placeholder="Explain your business in detail..."
                  onChange={handleInputChange}
                />
                <FloatingTextArea
                  label="Primary Goals"
                  name="primaryGoals"
                  value={formData.primaryGoals}
                  placeholder="What are the 3 main goals?"
                  onChange={handleInputChange}
                />
                <FloatingTextArea
                  label="Target Audience"
                  name="customerProfile"
                  value={formData.customerProfile}
                  placeholder="Demographics & location..."
                  onChange={handleInputChange}
                />
              </div>
            )}

            {/* STEP 3: TECHNICAL */}
            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Header
                  title="Technical"
                  subtitle="Specific needs and features."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput
                    label="Languages"
                    name="languages"
                    value={formData.languages}
                    placeholder="e.g. English & Indonesian"
                    onChange={handleInputChange}
                  />
                  <CustomSelect
                    label="Est. Pages"
                    name="pageCount"
                    value={formData.pageCount}
                    options={["1-5", "6-10", "11-20", "> 20"]}
                    onChange={handleInputChange}
                  />
                </div>
                <CheckboxGroup
                  label="Mandatory Pages"
                  category="mandatoryPages"
                  selected={formData.mandatoryPages}
                  options={[
                    "Home",
                    "About",
                    "Products",
                    "Services",
                    "Contact",
                    "Blog",
                    "Other",
                  ]}
                  onChange={handleCheckboxChange}
                />
                <CheckboxGroup
                  label="Special Features"
                  category="specialFeatures"
                  selected={formData.specialFeatures}
                  options={[
                    "Booking",
                    "Live Chat",
                    "E-Commerce",
                    "SEO Integration",
                    "Multi-Language",
                    "CMS Admin",
                  ]}
                  onChange={handleCheckboxChange}
                />
              </div>
            )}

            {/* STEP 4: MARKETING */}
            {step === 4 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Header title="Marketing" subtitle="SEO and Branding." />
                <FloatingTextArea
                  label="Target Keywords"
                  name="targetKeywords"
                  value={formData.targetKeywords}
                  placeholder="Separated by commas..."
                  onChange={handleInputChange}
                />
                <CheckboxGroup
                  label="Priority Channels"
                  category="priorityChannels"
                  selected={formData.priorityChannels}
                  options={[
                    "Instagram",
                    "Facebook",
                    "TikTok",
                    "Google Ads",
                    "Email",
                  ]}
                  onChange={handleCheckboxChange}
                />
                <FloatingTextArea
                  label="3-6 Month KPI Target"
                  name="marketingTarget"
                  value={formData.marketingTarget}
                  placeholder="Your measurable expectations..."
                  onChange={handleInputChange}
                />
                <CustomSelect
                  label="Branding Status"
                  name="brandingStatus"
                  value={formData.brandingStatus}
                  options={[
                    "Have Branding (Logo/Assets)",
                    "Need Branding Services",
                  ]}
                  onChange={handleInputChange}
                />
                <FloatingTextArea
                  label="Competitor References"
                  name="designReferences"
                  value={formData.designReferences}
                  placeholder="Enter 2-3 competitor URLs..."
                  onChange={handleInputChange}
                />
              </div>
            )}

            {/* STEP 5: TIMELINE */}
            {step === 5 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Header title="Finalize" subtitle="Budgeting and scheduling." />
                <CustomSelect
                  label="Budget Range"
                  name="budgetRange"
                  value={formData.budgetRange}
                  options={[
                    "< $500",
                    "$500 - $1,500",
                    "$1,500 - $3,000",
                    "$3,000 - $10,000",
                    "Custom",
                  ]}
                  onChange={handleInputChange}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CustomDateInput
                    label="Start Date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                  />
                  <CustomDateInput
                    label="Est. Launch Date"
                    name="launchDate"
                    value={formData.launchDate}
                    onChange={handleInputChange}
                  />
                </div>
                <FloatingTextArea
                  label="Additional Notes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  placeholder="Any technical or legal constraints?"
                  onChange={handleInputChange}
                />
              </div>
            )}

            {/* STEP 6: CONFIRMATION (REVIEWS ALL DATA) */}
            {step === 6 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Header
                  title="Review & Confirm"
                  subtitle="Please verify your information before submitting."
                />

                <div className="grid grid-cols-1 gap-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {/* 1. Contact & Company */}
                  <ReviewCard
                    title="Basic Information"
                    icon={<User size={16} />}
                  >
                    <ReviewItem label="Full Name" value={formData.fullName} />
                    <ReviewItem label="Email" value={formData.email} />
                    <ReviewItem label="WhatsApp" value={formData.whatsapp} />
                    <ReviewItem label="Company" value={formData.companyName} />
                    <ReviewItem
                      label="Current Web"
                      value={formData.currentWebsite}
                    />
                    <ReviewItem
                      label="Overview"
                      value={formData.companyOverview}
                      fullWidth
                    />
                  </ReviewCard>

                  {/* 2. Strategy & Goals */}
                  <ReviewCard
                    title="Project Strategy"
                    icon={<Target size={16} />}
                  >
                    <ReviewItem label="Type" value={formData.websiteType} />
                    <ReviewItem
                      label="Description"
                      value={formData.projectDescription}
                      fullWidth
                    />
                    <ReviewItem
                      label="Primary Goals"
                      value={formData.primaryGoals}
                      fullWidth
                    />
                    <ReviewItem
                      label="Target Audience"
                      value={formData.customerProfile}
                      fullWidth
                    />
                  </ReviewCard>

                  {/* 3. Technical Specs */}
                  <ReviewCard
                    title="Technical Specifications"
                    icon={<Settings size={16} />}
                  >
                    <ReviewItem label="Languages" value={formData.languages} />
                    <ReviewItem label="Est. Pages" value={formData.pageCount} />
                    <ReviewItem
                      label="Mandatory Pages"
                      value={formData.mandatoryPages.join(", ")}
                      fullWidth
                    />
                    <ReviewItem
                      label="Features"
                      value={formData.specialFeatures.join(", ")}
                      fullWidth
                    />
                  </ReviewCard>

                  {/* 4. Marketing & Design */}
                  <ReviewCard
                    title="Marketing & Branding"
                    icon={<BarChart3 size={16} />}
                  >
                    <ReviewItem
                      label="Keywords"
                      value={formData.targetKeywords}
                      fullWidth
                    />
                    <ReviewItem
                      label="Channels"
                      value={formData.priorityChannels.join(", ")}
                      fullWidth
                    />
                    <ReviewItem
                      label="3-6 Months KPI"
                      value={formData.marketingTarget}
                      fullWidth
                    />
                    <ReviewItem
                      label="Branding"
                      value={formData.brandingStatus}
                    />
                    <ReviewItem
                      label="References"
                      value={formData.designReferences}
                      fullWidth
                    />
                  </ReviewCard>

                  {/* 5. Timeline & Budget */}
                  <ReviewCard
                    title="Timeline & Budget"
                    icon={<Clock size={16} />}
                  >
                    <ReviewItem
                      label="Budget Range"
                      value={formData.budgetRange}
                    />
                    <ReviewItem label="Start Date" value={formData.startDate} />
                    <ReviewItem
                      label="Launch Date"
                      value={formData.launchDate}
                    />
                    <ReviewItem
                      label="Add. Notes"
                      value={formData.additionalNotes}
                      fullWidth
                    />
                  </ReviewCard>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <Sparkles size={20} />
                  </div>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <span className="font-black italic uppercase block mb-1">
                      Final Check
                    </span>
                    All set? If everything looks good, click the{" "}
                    <span className="font-bold">Complete Brief</span> button to
                    send your project details to our team.
                  </p>
                </div>
              </div>
            )}

            {/* NAVIGATION BUTTONS */}
            <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  step === 1
                    ? "opacity-0 cursor-default"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <ChevronLeft size={20} /> Back
              </button>

              {step < 6 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-[linear-gradient(90deg,#1c76d2,#3498db)] text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 hover:opacity-90 hover:scale-[1.02] transition-all active:scale-95 shadow-xl shadow-blue-100"
                >
                  Continue <ChevronRight size={18} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmitClick}
                  disabled={status === "submitting"}
                  className="bg-[linear-gradient(90deg,#1c76d2,#3498db)] text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 hover:opacity-90 hover:scale-[1.02] transition-all active:scale-95 shadow-xl shadow-blue-100 disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Complete Brief <Send size={18} />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

// --- REUSABLE COMPONENTS ---

const Header = ({ title, subtitle }) => (
  <div>
    <h2 className="text-4xl font-black text-slate-1000 mb-2 tracking-tight">
      {title}
    </h2>
    <p className="text-slate-500 font-medium">{subtitle}</p>
  </div>
);

const CustomSelect = ({ label, options, name, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    onChange({ target: { name, value: option } });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-2 group relative" ref={dropdownRef}>
      <label className="text-[11px] font-black uppercase tracking-wider text-slate-900 text-blue-600 transition-colors tracking-[0.1em]">
        {label}
      </label>
      <div className="relative">
        {/* Trigger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-transparent border-b-2 border-slate-100 py-2 outline-none focus:border-blue-500 transition-all duration-300 font-bold cursor-pointer text-slate-700 relative z-10 flex items-center justify-between text-left focus:ring-0"
        >
          <span>{value}</span>
          <ChevronDown 
            size={16} 
            strokeWidth={3} 
            className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-h-48 overflow-y-auto">
              {options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleSelect(opt)}
                  className={`w-full px-4 py-3 text-left font-600 transition-all duration-200 ${
                    value === opt
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                      : 'text-slate-500 hover:bg-slate-50 border-l-4 border-transparent'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Garis aksen biru yang muncul dari tengah saat focus */}
        <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ${isOpen ? 'w-full bg-blue-600' : 'w-0 bg-blue-600'}`} />
      </div>
    </div>
  );
};

const CustomDateInput = ({ label, name, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const displayDate = value 
    ? new Date(value).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : '';

  const handleDateChange = (e) => {
    onChange(e);
    setIsFocused(true);
  };

  return (
    <div className="flex flex-col gap-2 group relative">
      <label className="text-[11px] font-black uppercase tracking-wider text-slate-900 group-focus-within:text-blue-600 transition-colors tracking-[0.1em]">
        {label}
      </label>
      <div className="relative">
        {/* Hidden date input */}
        <input
          ref={inputRef}
          type="date"
          name={name}
          value={value}
          onChange={handleDateChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-20"
        />
        
        {/* Custom display button */}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="w-full bg-transparent border-b-2 border-slate-100 py-2 outline-none transition-all duration-300 font-bold cursor-pointer text-slate-700 relative z-10 flex items-center justify-between text-left"
        >
          <span className={`${value ? 'text-slate-700' : 'text-slate-400'}`}>
            {displayDate || 'Select date'}
          </span>
          <Calendar 
            size={16} 
            strokeWidth={3} 
            className={`transition-all duration-300 ${isFocused ? 'text-blue-600' : 'text-slate-400'}`}
          />
        </button>

        {/* Garis aksen biru yang muncul dari tengah saat focus */}
        <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ${isFocused ? 'w-full bg-blue-600' : 'w-0 bg-blue-600'}`} />
      </div>
    </div>
  );
};

const FloatingInput = ({ label, ...props }) => (
  <div className="flex flex-col gap-2 group">
    <label className="text-[11px] font-black uppercase tracking-wider text-slate-900 group-focus-within:text-blue-600 transition-colors tracking-[0.1em]">
      {label}
    </label>
    <input
      className="px-0 py-2 bg-transparent border-b-2 border-slate-100 focus:border-blue-500 outline-none transition-all duration-300 font-medium placeholder:text-slate-300"
      {...props}
    />
  </div>
);

const FloatingTextArea = ({ label, ...props }) => (
  <div className="flex flex-col gap-2 group">
    <label className="text-[11px] font-black uppercase tracking-wider text-slate-900 group-focus-within:text-blue-600 transition-colors tracking-[0.1em]">
      {label}
    </label>
    <textarea
      className="px-0 py-2 bg-transparent border-b-2 border-slate-100 focus:border-blue-500 outline-none transition-all duration-300 font-medium resize-none placeholder:text-slate-300"
      rows="2"
      {...props}
    />
  </div>
);

const CheckboxGroup = ({ label, options, category, selected, onChange }) => (
  <div className="flex flex-col gap-4">
    <label className="text-[11px] font-black uppercase tracking-wider text-slate-900 tracking-[0.1em]">
      {label}
    </label>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {options.map((opt) => (
        <label
          key={opt}
          className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all group/box ${selected.includes(opt) ? "border-blue-500 bg-blue-50/50" : "border-slate-100 hover:bg-white hover:border-slate-300"}`}
        >
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            value={opt}
            onChange={(e) => onChange(e, category)}
            className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <span
            className={`text-sm font-bold transition-colors ${selected.includes(opt) ? "text-blue-400" : "text-slate-600 group-hover/box:text-slate-900"}`}
          >
            {opt}
          </span>
        </label>
      ))}
    </div>
  </div>
);

// Helper untuk membungkus kategori di halaman review
const ReviewCard = ({ title, icon, children }) => (
  <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
    <div className="flex items-center gap-2 mb-4 border-b border-slate-50 pb-3">
      <div className="text-blue-500 bg-blue-50 p-1.5 rounded-lg">{icon}</div>
      <h4 className="font-black text-slate-800 text-sm uppercase tracking-wider">{title}</h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
      {children}
    </div>
  </div>
);

// Helper untuk menampilkan item data individu
const ReviewItem = ({ label, value, fullWidth = false }) => (
  <div className={`${fullWidth ? 'md:col-span-2' : ''} space-y-1`}>
    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</p>
    <p className="text-sm font-bold text-slate-700 leading-relaxed">
      {Array.isArray(value) ? (value.length > 0 ? value.join(', ') : '-') : (value || '-')}
    </p>
  </div>
);
