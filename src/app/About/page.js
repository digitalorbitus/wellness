
"use client";

import { useState } from "react";

export default function EventsDropdown() {
      const stats = [
    {
      value: "550K",
      label: "Social followers",
    },
    {
      value: "5.000+",
      label: "Women transformed",
    },
    {
      value: "99%",
      label: "Success rate",
    },
    {
      value: "220+",
      label: "Google reviews",
    },
  ];
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState("female");

  return (
    <div className="">






          {/* SECTION 3 - ABOUT / PRACTICE
      ============================================================ */} 

      <section
        className="
          bg-[#FAF8F5]
          text-[#2D2D2D]
          py-12
          sm:py-16
          md:py-20
          lg:py-24
          px-4
          sm:px-6
          lg:px-12
          w-full
          overflow-hidden
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            space-y-16
            md:space-y-24
          "
        >

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-10
              lg:gap-12
              items-center
            "
          >

            {/* LEFT IMAGES */}

            <div
              className="
                lg:col-span-6
                relative
                flex
                justify-center
                lg:justify-end
              "
            >
              <div
                className="
                  relative
                  w-full
                  max-w-[340px]
                  sm:max-w-[400px]
                  md:max-w-[450px]
                "
              >

                <div
                  className="
                    w-full
                    h-[400px]
                    sm:h-[480px]
                    md:h-[520px]
                    overflow-hidden
                    shadow-md
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
                    alt="Personal Trainer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  className="
                    absolute
                    -bottom-6
                    -right-4
                    sm:-bottom-8
                    sm:-right-8
                    w-36
                    sm:w-48
                    md:w-52
                    h-48
                    sm:h-60
                    md:h-64
                    rounded-t-full
                    border-4
                    border-[#FAF8F5]
                    overflow-hidden
                    shadow-xl
                    z-10
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop"
                    alt="Fitness detail"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div
              className="
                lg:col-span-6
                space-y-4
                sm:space-y-6
                text-center
                lg:text-left
                mt-6
                lg:mt-0
                max-w-xl
                mx-auto
                lg:mx-0
              "
            >

              <h2
                className="
                  font-serif
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-normal
                  leading-tight
                  text-[#1C1C1C]
                "
              >
                So much more than just a personal training
              </h2>

              <p
                className="
                  text-sm
                  sm:text-base
                  font-medium
                  text-slate-800
                "
              >
                Let me help you get the strong body and healthy
                lifestyle you want.
              </p>

              <p
                className="
                  text-xs
                  sm:text-sm
                  leading-relaxed
                  text-slate-600
                  font-normal
                "
              >
                You've had this ongoing goal of getting into a
                consistent workout routine, losing the excess weight
                and getting stronger. You want to get back to a body
                you feel confident in and workouts you feel like
                you're progressing in. But why is it so hard staying
                disciplined? Why are you not seeing results despite
                all your efforts? And what is making it so hard
                figuring out a healthy nutrition?
              </p>

              <div className="pt-4 flex justify-center lg:justify-start">
                <a
                  href="#"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-6
                    sm:px-8
                    py-3
                    sm:py-3.5
                    rounded-tl-[24px]
                    rounded-br-[24px]
                    rounded-tr-none
                    rounded-bl-none
                    bg-[#2c522f]
                    hover:bg-[#234226]
                    text-white
                    text-[11px]
                    sm:text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    shadow-md
                    transition-all
                    duration-300
                    hover:scale-105
                    active:scale-95
                  "
                >
                  ABOUT MY PRACTICE
                </a>
              </div>

            </div>

          </div>

          {/* STATS */}

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-8
              pt-8
              sm:pt-12
              border-t
              border-slate-200/60
              text-center
            "
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="space-y-1"
              >
                <div
                  className="
                    font-serif
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    font-light
                    text-[#2c522f]
                  "
                >
                  {stat.value}
                </div>

                <div
                  className="
                    text-xs
                    sm:text-sm
                    text-slate-600
                    font-medium
                  "
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>














        <section className="w-full bg-[#0d0d0d] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden shadow-2xl rounded-sm">
        
        {/* LEFT COLUMN: LIME GREEN BANNER WITH OVERLAY IMAGE */}
        <div className="lg:col-span-5 bg-[#2c522f] relative min-h-[380px] sm:min-h-[450px] lg:min-h-[520px] flex items-center justify-center overflow-hidden">
          
          {/* Vertical Background Text */}
          <span className="absolute left-[-20px] top-1/2 -translate-y-1/2 -rotate-90 text-white/30 text-6xl sm:text-7xl font-extrabold uppercase tracking-widest pointer-events-none select-none">
            SLIMMING
          </span>

          {/* Model Image */}
          <div className="relative z-10 w-full h-full flex items-end justify-center pt-8">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
              alt="Fitness Model"
              className="object-cover h-[90%] sm:h-full max-h-[500px] drop-shadow-2xl"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: BMI CALCULATOR FORM */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 flex flex-col justify-between">
          <div>
            
            {/* Header Title */}
            <div className="mb-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-wider uppercase">
                CALCULATE YOUR BMI<span className="text-[#2c522f]">.</span>
              </h2>
              {/* Dotted underline */}
              <div className="flex gap-1 mt-1">
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="w-1 h-1 rounded-full bg-[#2c522f]" />
                ))}
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
              Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Morbi tristique senectus et netus et.
            </p>

            {/* Form & Result Box Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              
              {/* Inputs Form */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5">
                
                {/* Gender Toggle Buttons */}
                <div className="grid grid-cols-2 gap-2 border border-[#2c522f] p-0.5 rounded-sm">
                  <button
                    type="button"
                    onClick={() => setGender("female")}
                    className={`py-2 text-xs font-bold uppercase transition-colors ${
                      gender === "female"
                        ? "bg-[#2c522f] text-slate-900"
                        : "bg-transparent text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Female
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender("male")}
                    className={`py-2 text-xs font-bold uppercase transition-colors ${
                      gender === "male"
                        ? "bg-[#2c522f] text-slate-900"
                        : "bg-transparent text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Male
                  </button>
                </div>

                {/* Age Input */}
                <div>
                  <input
                    type="number"
                    placeholder="Age"
                    className="w-full border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-800 transition-colors"
                  />
                </div>

                {/* Weight Input */}
                <div>
                  <input
                    type="number"
                    placeholder="Weight / kg"
                    className="w-full border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-800 transition-colors"
                  />
                </div>

                {/* Height Input */}
                <div>
                  <input
                    type="number"
                    placeholder="Height / cm"
                    className="w-full border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-800 transition-colors"
                  />
                </div>

                {/* Level of Activity Select Dropdown */}
                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full border border-slate-200 px-3.5 py-2.5 text-xs text-slate-500 bg-white appearance-none focus:outline-none focus:border-slate-800 transition-colors cursor-pointer"
                  >
                    <option value="" disabled>Level of Activity</option>
                    <option value="low">Sedentary (Little or no exercise)</option>
                    <option value="moderate">Light / Moderate exercise</option>
                    <option value="high">Active / Heavy exercise</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                    ▼
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-widest py-3 transition-colors mt-2"
                >
                  CALCULATE
                </button>
              </form>

              {/* Right Result Placeholder Box */}
              <div className="border border-slate-100 bg-slate-50/50 rounded-sm p-6 flex flex-col items-center justify-center text-center h-full min-h-[220px]">
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm">
                  {/* Scale Icon */}
                  <svg
                    className="w-7 h-7 text-[#A0E000]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 6l3 12h12l3-12H3zm9 0v12m-4-6h8"
                    />
                  </svg>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed max-w-[180px]">
                  Fill out the form to calculate calories for weight loss
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  
    </div>
  );
}

