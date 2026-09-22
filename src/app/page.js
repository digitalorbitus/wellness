
// "use client"
// import React, { useState } from 'react';
// import { Quote, Play, ArrowRight, Menu, X, CheckCircle, ShieldCheck, Award, Users } from 'lucide-react';
// import { 
//   HeartPulse, 
//   Dumbbell, 
//   Flame, 
//   Clock, 
//   BicepsFlexed, 
//   Apple, 
//   Activity, 
 
// } from 'lucide-react';
// export default function App() {
// const [gender, setGender] = useState("female");
//   // ================= thired section start======================

//     const benefits = [
//     {
//       title: "Nutrition Strategies",
//       description: "Nulla aliquet enim tortor at auctor urna. Neque sodales ut etiam sit amet nisl purus."
//     },
//     {
//       title: "Workout Routines",
//       description: "Auctor neque vitae tempus quam. At urna condimentum mattis pellentesque id."
//     },
//     {
//       title: "Individual Support",
//       description: "Quis varius quam quisque id diam vel. Lobortis scelerisque fermentum."
//     },
//     {
//       title: "First-Hand Advice",
//       description: "Sem viverra aliquet eget sit amet. Adipiscing elit duis tristique sollicitudin."
//     }
//   ];

//   const programLeftCards = [
//     {
//       id: "cardio",
//       icon: HeartPulse,
//       title: "Cardio",
//       description: "Pretium quam vulputate dignissim suspendisse. Nisi scelerisque eu ultrices."
//     },
//     {
//       id: "abs",
//       icon: Flame,
//       title: "Abdominal abs",
//       description: "Pretium quam vulputate dignissim suspendisse. Nisi scelerisque eu ultrices."
//     }
//   ];

//   const programRightCards = [
//     {
//       id: "shoulders",
//       icon: Dumbbell,
//       title: "Shoulders",
//       description: "Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Condimentum id venenatis."
//     },
//     {
//       id: "hands",
//       icon: BicepsFlexed,
//       title: "Hands",
//       description: "Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Purus in massa."
//     },
//     {
//       id: "time",
//       icon: Clock,
//       title: "Time",
//       description: "Pretium quam vulputate dignissim suspendisse. Nisi scelerisque eu ultrices."
//     }
//   ];











//   const wellnessItems = [
//   {
//     title: "Workout Plans",
//     image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
//     link: "#",
//   },
//   {
//     title: "Meal Plans",
//     image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
//     link: "#",
//   },
//   {
//     title: "Private Coaching",
//     image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
//     link: "#",
//   },
// ];

















// // Top Brand Logos
// // const brands = [
// //   "Women'sHealth",
// //   "COSMOPOLITAN",
// //   "WELL+GOOD",
// //   "Us WEEKLY",
// //   "FASHIONISTA",
// //   "yahoo!news",
// // ];

// // Bottom Stats Data
// const stats = [
//   { value: "550K", label: "Social followers" },
//   { value: "5.000+", label: "Women transformed" },
//   { value: "99%", label: "Success rate" },
//   { value: "220+", label: "Google reviews" },
// ];
//    // ================= thired section end======================
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f2fcd0] via-[#f7fde8] to-white text-slate-900 font-sans relative overflow-x-hidden selection:bg-[#ccff00] selection:text-black">
      
//       {}


 

  



// {/* SECTION 2 START PART 1 */}
// <section className="bg-[#FAF8F5] py-16 px-4 sm:px-6 lg:px-8 text-slate-800">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Header Title */}
//         <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-slate-800 tracking-tight mb-3">
//           Work toward true wellness
//         </h2>

//         {/* Subtitle */}
//         <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal tracking-wide max-w-2xl mx-auto mb-12 sm:mb-16">
//           Together we'll build a strong body, healthy habits & results that last a lifetime
//         </p>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch">
//           {wellnessItems.map((item, index) => (
//             <div
//               key={index}
//               className="group relative flex flex-col items-center justify-end h-[380px] sm:h-[420px] rounded-t-[180px] overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1"
//             >
//               {/* Arch Shaped Background Image */}
//               <div className="absolute inset-0 w-full h-full">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Bottom Overlay Label Card */}
//               <div className="relative z-10 w-[88%] bg-white py-5 px-4 mb-4 text-center shadow-md">
//                 <h3 className="text-slate-800 text-base sm:text-lg font-medium tracking-wide mb-1.5">
//                   {item.title}
//                 </h3>
//                 <a
//                   href={item.link}
//                   className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9E8130] underline underline-offset-4 decoration-1 hover:text-slate-900 transition-colors"
//                 >
//                   DISCOVER MORE
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
// {/* SECTION 2 START PART 1 */}






// {/* SECTION 2 START PART 2 */}










// <section className="bg-[#FAF8F5] text-[#2D2D2D] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
//       <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        
//         {/* 1. TOP LOGO BAR */}
//         {/* <div className="flex flex-wrap items-center justify-between sm:justify-around gap-6 opacity-60 text-xs sm:text-sm md:text-base font-serif font-bold tracking-widest text-slate-700 uppercase">
//           {brands.map((brand, index) => (
//             <span key={index} className="hover:opacity-100 transition-opacity cursor-pointer">
//               {brand}
//             </span>
//           ))}
//         </div> */}

//         {/* 2. MAIN HERO / ABOUT CONTENT GRID */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
//           {/* LEFT: OVERLAPPING IMAGES */}
//           <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
//             <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[450px]">
              
//               {/* Main Image */}
//               <div className="w-full h-[400px] sm:h-[480px] md:h-[520px] overflow-hidden shadow-md">
//                 <img
//                   src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
//                   alt="Personal Trainer"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Small Overlapping Arched Image */}
//               <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 w-36 sm:w-48 md:w-52 h-48 sm:h-60 md:h-64 rounded-t-full border-4 border-[#FAF8F5] overflow-hidden shadow-xl z-10">
//                 <img
//                   src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop"
//                   alt="Fitness detail"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//             </div>
//           </div>

//           {/* RIGHT: TEXT CONTENT & BUTTON */}
//           <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left mt-6 lg:mt-0 max-w-xl mx-auto lg:mx-0">
            
//             {/* Main Heading */}
//             <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-[#1C1C1C]">
//               So much more than just a personal training
//             </h2>

//             {/* Subheading */}
//             <p className="text-sm sm:text-base font-medium text-slate-800">
//               Let me help you get the strong body and healthy lifestyle you want.
//             </p>

//             {/* Paragraph Text */}
//             <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
//               You've had this ongoing goal of getting into a consistent workout routine, losing the excess weight and getting stronger. You want to get back to a body you feel confident in and workouts you feel like you're progressing in. But why is it so hard staying disciplined? Why are you not seeing results despite all your efforts? And what is making it so hard figuring out a healthy nutrition?
//             </p>

//             {/* Leaf Button */}
//             <div className="pt-4 flex justify-center lg:justify-start">
//               <a
//                 href="#"
//                 className="
//                   inline-flex
//                   items-center
//                   justify-center
//                   px-6 sm:px-8
//                   py-3 sm:py-3.5
//                   /* Custom Leaf Shape */
//                   rounded-tl-[24px]
//                   rounded-br-[24px]
//                   rounded-tr-none
//                   rounded-bl-none
//                   bg-[#2c522f]
//                   hover:bg-[#234226]
//                   text-white
//                   text-[11px] sm:text-xs
//                   font-bold
//                   uppercase
//                   tracking-[0.2em]
//                   shadow-md
//                   transition-all
//                   duration-300
//                   hover:scale-105
//                   active:scale-95
//                 "
//               >
//                 ABOUT MY PRACTICE
//               </a>
//             </div>

//           </div>
//         </div>

//         {/* 3. BOTTOM STATS SECTION */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 sm:pt-12 border-t border-slate-200/60 text-center">
//           {stats.map((stat, index) => (
//             <div key={index} className="space-y-1">
//               <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2c522f]">
//                 {stat.value}
//               </div>
//               <div className="text-xs sm:text-sm text-slate-600 font-medium">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
    
// {/* SECTION 2 START PART 2 */}



//        {/* ===================== section 2 start =====================*/}

//            <div className="min-h-screen bg-slate-50 text-slate-800 flex items-center justify-center p-4 sm:p-6 lg:p-12 font-sans antialiased">
//       {}
//       <section className="max-w-6xl w-full mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-6 sm:p-10 lg:p-16 overflow-hidden">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
//           {}
//           <div className="lg:col-span-7 relative">
//             <div className="relative mx-auto max-w-lg lg:max-w-none min-h-[460px] sm:min-h-[520px] flex items-center justify-center">
              
//               {/* Decorative Green Background Block 1 (Main central block) */}
//               <div 
//                 className="absolute top-12 left-16 sm:left-24 w-44 sm:w-60 h-64 sm:h-80 rounded-2xl transition-all duration-300"
//                 style={{ backgroundColor: '#2c522f' }}
//               />

//               {/* Decorative Green Background Block 2 (Top horizontal bridge) */}
//               <div 
//                 className="absolute top-20 left-6 sm:left-10 w-56 sm:w-72 h-32 sm:h-40 rounded-xl transition-all duration-300 opacity-90"
//                 style={{ backgroundColor: '#2c522f' }}
//               />

//               {/* Dot Pattern 1 (Bottom Left Decorative Grid) */}
//               <div className="absolute bottom-4 left-24 sm:left-36 grid grid-cols-8 gap-2 z-0 opacity-80 hidden sm:grid">
//                 {[...Array(32)].map((_, i) => (
//                   <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#2c522f' }} />
//                 ))}
//               </div>

//               {/* Dot Pattern 2 (Dark Subversive Grid under Main Image) */}
//               <div className="absolute bottom-2 left-28 sm:left-40 grid grid-cols-8 gap-2 z-0 opacity-90">
//                 {[...Array(32)].map((_, i) => (
//                   <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-900" />
//                 ))}
//               </div>

//               {/* Image 1: Top Left Small Photo (Toned green overlay filter effect) */}
//               <div className="absolute top-2 left-0 sm:left-2 w-28 sm:w-36 h-28 sm:h-36 rounded-xl overflow-hidden shadow-lg z-20 border-4 border-white transition-transform hover:scale-105 duration-300">
//                 <div 
//                   className="absolute inset-0 z-10 mix-blend-multiply opacity-60"
//                   style={{ backgroundColor: '#2c522f' }}
//                 />
//                 <img 
//                   src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400" 
//                   alt="Fitness training stretch" 
//                   className="w-full h-full object-cover filter grayscale contrast-125"
//                 />
//               </div>

//               {/* Image 2: Center Main Hero Portrait */}
//               <div className="absolute top-8 right-0 sm:right-4 w-48 sm:w-64 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl z-20 transition-transform hover:scale-[1.02] duration-300">
//                 <img 
//                   src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600" 
//                   alt="Hana Evans Portrait" 
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Overlay Accent Strip (Matching exact artwork detail) */}
//                 <div className="absolute top-12 right-0 w-8 h-28 bg-white/95 rounded-l-md shadow-md" />
//               </div>

//               {/* Image 3: Bottom Left Medium Photo */}
//               <div className="absolute bottom-0 left-2 sm:left-8 w-40 sm:w-52 h-44 sm:h-56 rounded-2xl overflow-hidden shadow-xl z-30 border-4 border-white transition-transform hover:scale-105 duration-300">
//                 <img 
//                   src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=500" 
//                   alt="Personal trainer in action" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//             </div>
//           </div>

//           {}
//           <div className="lg:col-span-5 flex flex-col justify-center space-y-6 pt-6 lg:pt-0 text-center lg:text-left">
            
//             {}
//             <div className="space-y-3">
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-none uppercase">
//                 HI! MY NAME IS <br className="hidden sm:inline" />
//                 <span className="relative inline-block mt-1">
//                   HANA EVANS
//                   {/* Decorative dot matrix pattern under name */}
//                   <span className="absolute -bottom-3 left-0 right-0 flex justify-center lg:justify-start gap-1.5 opacity-80 pointer-events-none">
//                     {[...Array(10)].map((_, i) => (
//                       <span 
//                         key={i} 
//                         className="w-1.5 h-1.5 rounded-full inline-block"
//                         style={{ backgroundColor: '#2c522f' }}
//                       />
//                     ))}
//                   </span>
//                 </span>
//               </h1>
//             </div>

//             {}
//             <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0 pt-2">
//               Cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Tellus id interdum velit laoreet id donec ultrices tincidunt. Tincidunt augue interdum velit euismod.
//             </p>

//             {}
//             <div className="pt-2">
//               <button 
//                 type="button"
//                 className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white rounded-lg shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:opacity-95 transform active:scale-95 transition-all duration-200"
//                 style={{ backgroundColor: '#2c522f' }}
//               >
//                 LEARN MORE
//               </button>
//             </div>

//           </div>

//         </div>
//       </section>
//     </div>

//     {/*================================== section 2 end========================= */}
//   {/* SECTION 2 PART 3 SATRAT */}

// <section className="relative w-full min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] flex items-center justify-center overflow-hidden">
      
//       {/* 1. BACKGROUND IMAGE WITH OVERLAY */}
//       <div className="absolute inset-0 w-full h-full">
//         <img
//           src="/50-home-3-8.webp"
//           alt="Fitness Motivation Background"
//           className="w-full h-full object-cover object-center"
//         />
//         {/* Dark overlay to make white text perfectly readable */}
//         <div className="absolute inset-0 bg-black/40 backdrop-brightness-90" />
//       </div>

//       {/* 2. CENTERED CONTENT CONTAINER */}
//       <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-4 sm:space-y-6 py-12">
        
//         {/* Top Sub-heading */}
//         <p className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-white/90">
//           STILL NOT SURE IF IT'S RIGHT FOR YOU?
//         </p>

//         {/* Main Serif Title */}
//         <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight max-w-3xl mx-auto drop-shadow-sm">
//           Become the happiest, healthiest, strongest version of yourself
//         </h2>

//         {/* Subtitle Description */}
//         <p className="text-xs sm:text-sm md:text-base font-normal text-white/90 max-w-2xl mx-auto leading-relaxed pt-1">
//           We'll make realistic and healthy changes, so you can maintain your results forever. Your success is my success
//         </p>

//         {/* 3. WHITE LEAF SHAPED CTA BUTTON */}
//         <div className="pt-4 sm:pt-6 flex justify-center">
//           <a
//             href="#"
//             className="
//               inline-flex
//               items-center
//               justify-center
              
//               /* Responsive Padding */
//               px-6 sm:px-8 md:px-10
//               py-3 sm:py-3.5 md:py-4

//               /* Exact Leaf Shape (Top-Left & Bottom-Right rounded) */
//               rounded-tl-[24px] sm:rounded-tl-[28px]
//               rounded-br-[24px] sm:rounded-br-[28px]
//               rounded-tr-none
//               rounded-bl-none

//               /* Background & Text Colors */
//               bg-white
//               hover:bg-slate-100
//               text-[#2c522f]

//               /* Typography */
//               text-xs sm:text-sm
//               font-bold
//               uppercase
//               tracking-[0.2em]

//               /* Shadows & Hover Animations */
//               shadow-xl
//               transition-all
//               duration-300
//               hover:scale-105
//               active:scale-95
//             "
//           >
//             BOOK A FREE CONSULTATION
//           </a>
//         </div>

//       </div>
//     </section>
//   {/* SECTION 2 PART 3 END */}
//     {/*================================== section 3 start========================= */}














// <section className="w-full bg-[#0d0d0d] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
//       <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden shadow-2xl rounded-sm">
        
//         {/* LEFT COLUMN: LIME GREEN BANNER WITH OVERLAY IMAGE */}
//         <div className="lg:col-span-5 bg-[#2c522f] relative min-h-[380px] sm:min-h-[450px] lg:min-h-[520px] flex items-center justify-center overflow-hidden">
          
//           {/* Vertical Background Text */}
//           <span className="absolute left-[-20px] top-1/2 -translate-y-1/2 -rotate-90 text-white/30 text-6xl sm:text-7xl font-extrabold uppercase tracking-widest pointer-events-none select-none">
//             SLIMMING
//           </span>

//           {/* Model Image */}
//           <div className="relative z-10 w-full h-full flex items-end justify-center pt-8">
//             <img
//               src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
//               alt="Fitness Model"
//               className="object-cover h-[90%] sm:h-full max-h-[500px] drop-shadow-2xl"
//             />
//           </div>
//         </div>

//         {/* RIGHT COLUMN: BMI CALCULATOR FORM */}
//         <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 flex flex-col justify-between">
//           <div>
            
//             {/* Header Title */}
//             <div className="mb-4">
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-wider uppercase">
//                 CALCULATE YOUR BMI<span className="text-[#2c522f]">.</span>
//               </h2>
//               {/* Dotted underline */}
//               <div className="flex gap-1 mt-1">
//                 {[...Array(10)].map((_, i) => (
//                   <span key={i} className="w-1 h-1 rounded-full bg-[#2c522f]" />
//                 ))}
//               </div>
//             </div>

//             {/* Description Paragraph */}
//             <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
//               Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Morbi tristique senectus et netus et.
//             </p>

//             {/* Form & Result Box Layout */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              
//               {/* Inputs Form */}
//               <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5">
                
//                 {/* Gender Toggle Buttons */}
//                 <div className="grid grid-cols-2 gap-2 border border-[#2c522f] p-0.5 rounded-sm">
//                   <button
//                     type="button"
//                     onClick={() => setGender("female")}
//                     className={`py-2 text-xs font-bold uppercase transition-colors ${
//                       gender === "female"
//                         ? "bg-[#2c522f] text-white"
//                         : "bg-transparent text-slate-600 hover:text-slate-900"
//                     }`}
//                   >
//                     Female
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setGender("male")}
//                     className={`py-2 text-xs font-bold uppercase transition-colors ${
//                       gender === "male"
//                         ? "bg-[#2c522f] text-white"
//                         : "bg-transparent text-slate-600 hover:text-slate-900"
//                     }`}
//                   >
//                     Male
//                   </button>
//                 </div>

//                 {/* Age Input */}
//                 <div>
//                   <input
//                     type="number"
//                     placeholder="Age"
//                     className="w-full border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-800 transition-colors"
//                   />
//                 </div>

//                 {/* Weight Input */}
//                 <div>
//                   <input
//                     type="number"
//                     placeholder="Weight / kg"
//                     className="w-full border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-800 transition-colors"
//                   />
//                 </div>

//                 {/* Height Input */}
//                 <div>
//                   <input
//                     type="number"
//                     placeholder="Height / cm"
//                     className="w-full border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-800 transition-colors"
//                   />
//                 </div>

//                 {/* Level of Activity Select Dropdown */}
//                 <div className="relative">
//                   <select
//                     defaultValue=""
//                     className="w-full border border-slate-200 px-3.5 py-2.5 text-xs text-slate-500 bg-white appearance-none focus:outline-none focus:border-slate-800 transition-colors cursor-pointer"
//                   >
//                     <option value="" disabled>Level of Activity</option>
//                     <option value="low">Sedentary (Little or no exercise)</option>
//                     <option value="moderate">Light / Moderate exercise</option>
//                     <option value="high">Active / Heavy exercise</option>
//                   </select>
//                   <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
//                     ▼
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="w-full bg-black hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-widest py-3 transition-colors mt-2"
//                 >
//                   CALCULATE
//                 </button>
//               </form>

//               {/* Right Result Placeholder Box */}
//               <div className="border border-slate-100 bg-slate-50/50 rounded-sm p-6 flex flex-col items-center justify-center text-center h-full min-h-[220px]">
//                 <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm">
//                   {/* Scale Icon */}
//                   <svg
//                     className="w-7 h-7 text-[#A0E000]"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       d="M3 6l3 12h12l3-12H3zm9 0v12m-4-6h8"
//                     />
//                   </svg>
//                 </div>
//                 <p className="text-[11px] text-slate-400 leading-relaxed max-w-[180px]">
//                   Fill out the form to calculate calories for weight loss
//                 </p>
//               </div>

//             </div>
//           </div>
//         </div>

//       </div>
//     </section>









//      <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans antialiased py-12 px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
      
//       {/* Background Soft Ambient Light Gradient matching #2c522f */}
//       <div 
//         className="pointer-events-none absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
//         style={{ backgroundColor: '#2c522f' }}
//       />
//       <div 
//         className="pointer-events-none absolute top-1/3 -right-20 w-96 h-96 rounded-full blur-3xl opacity-15"
//         style={{ backgroundColor: '#2c522f' }}
//       />

//       <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">

//         {}
//         <section className="relative">
          
//           {/* Main Section Header */}
//           <div className="text-center mb-12 sm:mb-16 relative">
//             <div className="inline-block relative">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-slate-900 leading-tight">
//                 Benefits Of <br className="sm:hidden" />
//                 <span> Personal Training</span>
//               </h2>

//               {/* Green Dot Matrix Header Accent */}
//               <div className="absolute -top-1 -right-8 sm:-right-10 grid grid-cols-4 gap-1 opacity-90">
//                 {[...Array(12)].map((_, i) => (
//                   <span key={i} className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: '#2c522f' }} />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Benefits 4-Card Responsive Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
//             {benefits.map((benefit, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-2xl p-6 sm:p-7 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
//               >
//                 {/* Accent Top Border Bar */}
//                 <div 
//                   className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl transition-all duration-300"
//                   style={{ backgroundColor: '#2c522f' }}
//                 />

//                 {/* Left accent vertical block strip matching exact diagram art */}
//                 <div 
//                   className="w-1.5 h-8 rounded-full mb-4 opacity-80"
//                   style={{ backgroundColor: '#2c522f' }}
//                 />

//                 <div>
//                   <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-950 transition-colors">
//                     {benefit.title}
//                   </h3>
//                   <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
//                     {benefit.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </section>


//         {}
//         <section className="relative pt-6">
          
//           {/* Layout Container */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">

//             {/* LEFT COLUMN: Program Header & Program Cards */}
//             <div className="lg:col-span-4 flex flex-col justify-between space-y-8 z-10">
              
//               {/* "MY PROGRAM" Heading & Action */}
//               <div className="space-y-4">
//                 <div className="relative inline-block">
//                   <h2 className="text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight">
//                     MY PROGRAM
//                   </h2>
                  
//                   {/* Dot Grid next to Header */}
//                   <div className="absolute top-1 -right-9 grid grid-cols-4 gap-1">
//                     {[...Array(12)].map((_, i) => (
//                       <span key={i} className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: '#2c522f' }} />
//                     ))}
//                   </div>
//                 </div>

//                 <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
//                   Nulla aliquet enim tortor at auctor urna. Neque sodales ut etiam sit amet nisl purus. Auctor neque vitae tempus quem. At urna condimentum mattis pellentesque.
//                 </p>

//                 <div className="pt-2">
//                   <button 
//                     type="button"
//                     className="inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white rounded-lg shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:opacity-95 transform active:scale-95 transition-all duration-200"
//                     style={{ backgroundColor: '#2c522f' }}
//                   >
//                     JOIN NOW
//                   </button>
//                 </div>
//               </div>

//               {/* Left Side Feature Cards (Cardio & Abs) */}
//               <div className="space-y-6 pt-4">
//                 {programLeftCards.map((card) => {
//                   const Icon = card.icon;
//                   return (
//                     <div 
//                       key={card.id}
//                       className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-emerald-50/60 shadow-md hover:shadow-lg transition-all duration-300 group"
//                     >
//                       <div className="flex items-center space-x-3 mb-2">
//                         <div 
//                           className="p-2.5 rounded-xl bg-emerald-50 text-slate-800 transition-colors group-hover:bg-slate-900 group-hover:text-white"
//                           style={{ color: '#2c522f' }}
//                         >
//                           <Icon className="w-5 h-5" />
//                         </div>
//                         <h4 className="font-bold text-slate-900 text-base">{card.title}</h4>
//                       </div>
//                       <p className="text-slate-500 text-xs sm:text-sm leading-relaxed pl-1">
//                         {card.description}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>

//             </div>


//             {/* CENTER COLUMN: Athlete Hero Portrait */}
//             <div className="lg:col-span-4 flex justify-center items-center my-6 lg:my-0 relative z-0">
//               <div className="relative w-full max-w-md lg:max-w-none flex justify-center">
                
//                 {/* Background Glow Ring */}
//                 <div 
//                   className="absolute inset-0 rounded-full blur-2xl opacity-20 scale-90"
//                   style={{ backgroundColor: '#2c522f' }}
//                 />

//                 <img 
//                   src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80" 
//                   alt="Fitness athlete female trainer" 
//                   className="relative z-10 w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-cover filter drop-shadow-2xl transition-transform hover:scale-105 duration-500"
//                 />
//               </div>
//             </div>


//             {/* RIGHT COLUMN: Feature Cards (Shoulders, Hands, Time) */}
//             <div className="lg:col-span-4 flex flex-col justify-center space-y-6 z-10">
//               {programRightCards.map((card) => {
//                 const Icon = card.icon;
//                 return (
//                   <div 
//                     key={card.id}
//                     className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-slate-100 shadow-md hover:shadow-lg transition-all duration-300 group"
//                   >
//                     <div className="flex items-center space-x-3 mb-2">
//                       <div 
//                         className="p-2.5 rounded-xl bg-emerald-50 text-slate-800 transition-colors group-hover:bg-slate-900 group-hover:text-white"
//                         style={{ color: '#2c522f' }}
//                       >
//                         <Icon className="w-5 h-5" />
//                       </div>
//                       <h4 className="font-bold text-slate-900 text-base">{card.title}</h4>
//                     </div>
//                     <p className="text-slate-500 text-xs sm:text-sm leading-relaxed pl-1">
//                       {card.description}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>

//           </div>

//         </section>

//       </div>
//     </div>
//      {/*================================== section 3 start========================= */}
//     </div>
//   );
// }












"use client";

import React, { useEffect, useState } from "react";

import {
  Quote,
  Play,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  ShieldCheck,
  Award,
  Users,
  Leaf,
  HeartPulse,
  Dumbbell,
  Flame,
  Clock,
  BicepsFlexed,
  Apple,
  Activity,
} from "lucide-react";

export default function App() {
  /* ============================================================
     STATES
  ============================================================ */

  const [gender, setGender] = useState("female");

  /* ============================================================
     TYPEWRITER
  ============================================================ */

  const words = [
    "Deep Healing",
    "Timeless Health",
    "Active Living",
    "Mental Clarity",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = isDeleting ? 55 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.slice(
          0,
          typedText.length + 1
        );

        setTypedText(nextText);

        if (nextText === currentWord) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1600);
        }
      } else {
        const nextText = currentWord.slice(
          0,
          typedText.length - 1
        );

        setTypedText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setWordIndex(
            (prev) => (prev + 1) % words.length
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  /* ============================================================
     BENEFITS
  ============================================================ */

  const benefits = [
    {
      title: "Nutrition Strategies",
      description:
        "Discover simple nutrition strategies that fit your lifestyle and goals.Make smarter food choices without giving up balance, variety, or enjoyment..",
    },
    {
      title: "Workout Routines",
      description:
        "Move with purpose through workouts designed around your fitness level. Build strength, improve mobility, and stay active with routines you can enjoy.",
    },
    {
      title: "Individual Support",
      description:
        "Your wellness journey is personal, and your support should be too.Get guidance tailored to your goals, lifestyle, and everyday needs.",
    },
    {
      title: "First-Hand Advice",
      description:
        "Get practical guidance from wellness experts who understand your journey Simple, actionable advice to help you make healthier choices every day.",
    },
  ];

  /* ============================================================
     PROGRAM CARDS
  ============================================================ */

  const programLeftCards = [
    {
      id: "cardio",
      icon: HeartPulse,
      title: "Cardio",
      description:
        "Boost endurance and keep your heart healthy with energizing cardio workouts.",
    },
    {
      id: "abs",
      icon: Flame,
      title: "Abdominal abs",
      description:
        "Strengthen your core and build better stability with effective ab exercises.",
    },
  ];

  const programRightCards = [
    {
      id: "shoulders",
      icon: Dumbbell,
      title: "Shoulders",
      description:
        "Build stronger, more stable shoulders with focused movements.",
    },
    {
      id: "hands",
      icon: BicepsFlexed,
      title: "Hands",
      description:
        "Strengthen your hands and improve grip with targeted exercises.",
    },
    {
      id: "time",
      icon: Clock,
      title: "Time",
      description:
        "Stay consistent and make every minute of your workout count.",
    },
  ];

  /* ============================================================
     WELLNESS ITEMS
  ============================================================ */

  const wellnessItems = [
    {
      title: "Workout Plans",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Meal Plans",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Private Coaching",
      image:
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
      link: "#",
    },
  ];

  /* ============================================================
     STATS
  ============================================================ */

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

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-[#f2fcd0]
        via-[#f7fde8]
        to-white
        text-slate-900
        font-sans
        relative
        overflow-x-hidden
        selection:bg-[#2c522f]
        selection:text-white
      "
    >

      {/* ============================================================
          HERO SECTION
      ============================================================ */}

      <section
        className="
          relative
          min-h-screen
          w-full
          overflow-hidden
          flex
          flex-col
        "
      >

        {/* ==========================================================
            HERO BACKGROUND
        ========================================================== */}

        <div className="absolute inset-0 z-0">
          <img
            src="/landing-1.webp"
            alt="Woman preparing fresh salad in bright kitchen"
            className="
              w-full
              h-full
              object-cover
              object-center
              lg:object-[80%_center]
              brightness-[0.92]
            "
            loading="eager"
          />

          <div
            className="
              absolute
              inset-0
              bg-slate-900/30
              lg:bg-transparent
            "
          />
        </div>

        {/* ==========================================================
            HERO CONTENT
        ========================================================== */}

        <main
          className="
            relative
            z-20
            w-full
            max-w-7xl
            mx-auto
            px-4
            sm:px-8
            lg:px-10
            pt-20
            sm:pt-24
            lg:pt-28
            pb-10
            lg:pb-16
            flex-1
            flex
            items-center
          "
        >
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              items-center
              w-full
            "
          >

            {/* ====================================================
                HERO CARD
            ===================================================== */}

            <div
              className="
                lg:col-span-7
                xl:col-span-7

                bg-white/95
                lg:bg-white

                rounded-tl-[50px]
                sm:rounded-tl-[70px]

                rounded-br-[50px]
                sm:rounded-br-[70px]

                rounded-tr-[20px]
                rounded-bl-[20px]

                p-7
                sm:p-10
                lg:p-12
                xl:p-14

                min-h-[420px]
                sm:min-h-[500px]
                lg:min-h-[560px]
                xl:min-h-[600px]

                flex
                items-center

                shadow-2xl
                shadow-black/20

                border
                border-slate-100

                backdrop-blur-md
              "
            >

              <div className="w-full space-y-2">

                {/* =================================================
                    HERO HEADING
                ================================================= */}

                <h1
                  className="
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    lg:text-5xl
                    xl:text-6xl

                    font-normal
                    text-slate-900
                    font-serif

                    leading-[1.08]
                    tracking-tight
                  "
                >

                  <span className="block">
                    Achieve Real
                  </span>

                  {/* TYPEWRITER */}

                  <span
                    className="
                      block
                      min-h-[1.15em]
                      font-serif
                      font-medium
                      text-[#2c522f]
                    "
                  >
                    {typedText}

                    <span
                      className="
                        inline-block
                        ml-1
                        font-sans
                        font-light
                        text-[#2c522f]
                        animate-pulse
                      "
                    >
                      |
                    </span>
                  </span>

                  <span className="block">
                    On Your Own Terms.
                  </span>

                </h1>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="
                    text-slate-500
                    text-sm
                    sm:text-base
                    leading-relaxed
                    font-sans
                    font-normal
                    max-w-md
                    pt-1
                  "
                >
                  Transformative health strategies crafted to move <br/>
                   you from where you are to where you want to be.
                
                </p>

                {/* =================================================
                    HERO BUTTONS
                ================================================= */}

                <div
                  className="
                    pt-4
                    flex
                    flex-wrap
                    items-center
                    gap-4
                    sm:gap-5
                  "
                >

                  {/* PURCHASE NOW */}

                  <a
                    href="#"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2

                      px-7
                      py-3.5

                      rounded-tl-[28px]
                      rounded-br-[28px]
                      rounded-tr-none
                      rounded-bl-none

                      bg-[#2c522f]
                      text-white

                      font-extrabold
                      text-xs
                      tracking-wider
                      uppercase

                      shadow-lg
                      shadow-[#2c522f]/30

                      hover:shadow-xl
                      hover:opacity-95

                      active:scale-95

                      transition-all
                      duration-200
                    "
                  >
                    <span>
                      PURCHASE NOW
                    </span>

                    <Leaf
                      className="
                        w-4
                        h-4
                        fill-white
                        stroke-none
                      "
                    />
                  </a>

                  {/* PREVIEW DEMOS */}

                  <a
                    href="#"
                    className="
                      inline-flex
                      items-center
                      justify-center

                      px-7
                      py-3.5

                      rounded-tl-[28px]
                      rounded-br-[28px]
                      rounded-tr-none
                      rounded-bl-none

                      border-2
                      border-[#2c522f]
                      bg-transparent

                      text-[#2c522f]

                      text-xs
                      font-extrabold
                      tracking-wider
                      uppercase

                      hover:bg-[#2c522f]
                      hover:text-white

                      active:scale-95

                      transition-all
                      duration-300
                    "
                  >
                    PREVIEW DEMOS
                  </a>

                </div>

              </div>
            </div>

          </div>
        </main>
      </section>

      {/* ============================================================
          SECTION 2 - WORK TOWARD TRUE WELLNESS
      ============================================================ */}

      <section
        className="
          bg-[#FAF8F5]
          py-16
          px-4
          sm:px-6
          lg:px-8
          text-slate-800
        "
      >
        <div className="max-w-6xl mx-auto text-center">

          <h2
            className="
              font-serif
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-light
              text-[#2c522f]
              tracking-tight
              mb-3
            "
          >
            Work Towards True Wellness
          </h2>

          <p
            className="
              text-xs
              sm:text-sm
              md:text-base
              text-slate-600
              font-normal
              tracking-wide
              max-w-2xl
              mx-auto
              mb-12
              sm:mb-16
            "
          >
            Together we'll build a strong body, healthy habits &
            results that last a lifetime
          </p>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-8
              md:gap-6
              lg:gap-8
              items-stretch
            "
          >
            {wellnessItems.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  flex
                  flex-col
                  items-center
                  justify-end
                  h-[380px]
                  sm:h-[420px]
                  rounded-t-[180px]
                  overflow-hidden
                  shadow-sm
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                "
              >

                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                <div
                  className="
                    relative
                    z-10
                    w-[88%]
                    bg-white
                    py-5
                    px-4
                    mb-4
                    text-center
                    shadow-md
                  "
                >
                  <h3
                    className="
                      text-slate-800
                      text-base
                      sm:text-lg
                      font-medium
                      tracking-wide
                      mb-1.5
                    "
                  >
                    {item.title}
                  </h3>

                  <a
                    href={item.link}
                    className="
                      inline-block
                      text-[10px]
                      sm:text-xs
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#2c522f]
                      underline
                      underline-offset-4
                      decoration-1
                      hover:text-slate-900
                      transition-colors
                    "
                  >
                    DISCOVER MORE
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 - ABOUT / PRACTICE
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
                space-y-6
                sm:space-y-6
                sm:space-x-6

                text-center
                lg:text-left
                mt-6
                lg:mt-0
                max-w-xl
                mx-auto
                lg:mx-0
              "
            >
   <h1
                className="
                  font-serif
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-normal
                  leading-tight
                  

                  text-[#2c522f]
                "
              >
             INTRODUCTION
              </h1>
       <h2
  className="
    text-xl
    sm:text-xl
    md:text-2xl
    py-4
    px-4
    rounded-2xl
    w-fit
    max-w-full
    leading-tight
    bg-[#2c522f]
    font-serif
    text-white
  "
>
  So much more than just a personal training
</h2>

              {/* <p
                className="
                  text-sm
                  sm:text-base
                  font-medium
                  text-slate-800
                "
              >
                Let me help you get the strong body and healthy
                lifestyle you want.
              </p> */}

              <p
                className="
                  text-xs
                  sm:text-sm
                  leading-relaxed
                  text-black
                  font-serif
                "
              >
           
Wellness does not have to be complicated.
The Law of Wellness was created to help people make more informed, sustainable choices that
support a healthier and more fulfilling life.
Rooted in food, fitness, mindset, education, and meaningful connection, The Law of Wellness
brings together practical knowledge and real-life application to help you build habits that can
last.
Whether you begin with the book, join a webinar or seminar, attend a wellness retreat, or
become part of the Lifetime Wellness Membership Circle, the goal is the same
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

      {/* ============================================================
          SECTION 4 - HANA EVANS
      ============================================================ */}

      <section
        className="
          min-h-screen
          bg-slate-50
          text-slate-800
          flex
          items-center
          justify-center
          p-4
          sm:p-6
          lg:p-12
          font-sans
          antialiased
        "
      >
        <section
          className="
            max-w-6xl
            w-full
            mx-auto
            bg-white
            rounded-3xl
            shadow-xl
            shadow-slate-200/60
            p-6
            sm:p-10
            lg:p-16
            overflow-hidden
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

            {/* LEFT IMAGE COLLAGE */}

            <div className="lg:col-span-7 relative">

              <div
                className="
                  relative
                  mx-auto
                  max-w-lg
                  lg:max-w-none
                  min-h-[460px]
                  sm:min-h-[520px]
                  flex
                  items-center
                  justify-center
                "
              >

                <div
                  className="
                    absolute
                    top-12
                    left-16
                    sm:left-24
                    w-44
                    sm:w-60
                    h-64
                    sm:h-80
                    rounded-2xl
                  "
                  style={{
                    backgroundColor: "#2c522f",
                  }}
                />

                <div
                  className="
                    absolute
                    top-20
                    left-6
                    sm:left-10
                    w-56
                    sm:w-72
                    h-32
                    sm:h-40
                    rounded-xl
                    opacity-90
                  "
                  style={{
                    backgroundColor: "#2c522f",
                  }}
                />

                {/* DOT PATTERN */}

                <div
                  className="
                    absolute
                    bottom-4
                    left-24
                    sm:left-36
                    grid
                    grid-cols-8
                    gap-2
                    z-0
                    opacity-80
                    hidden
                    sm:grid
                  "
                >
                  {[...Array(32)].map((_, i) => (
                    <div
                      key={i}
                      className="
                        w-1.5
                        h-1.5
                        rounded-full
                      "
                      style={{
                        backgroundColor: "#2c522f",
                      }}
                    />
                  ))}
                </div>

                {/* DARK DOTS */}

                <div
                  className="
                    absolute
                    bottom-2
                    left-28
                    sm:left-40
                    grid
                    grid-cols-8
                    gap-2
                    z-0
                    opacity-90
                  "
                >
                  {[...Array(32)].map((_, i) => (
                    <div
                      key={i}
                      className="
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-slate-900
                      "
                    />
                  ))}
                </div>

                {/* SMALL IMAGE */}

                <div
                  className="
                    absolute
                    top-2
                    left-0
                    sm:left-2
                    w-28
                    sm:w-36
                    h-28
                    sm:h-36
                    rounded-xl
                    overflow-hidden
                    shadow-lg
                    z-20
                    border-4
                    border-white
                    hover:scale-105
                    transition-transform
                    duration-300
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      z-10
                      mix-blend-multiply
                      opacity-60
                    "
                    style={{
                      backgroundColor: "#2c522f",
                    }}
                  />

                  <img
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400"
                    alt="Fitness training stretch"
                    className="
                      w-full
                      h-full
                      object-cover
                      filter
                      grayscale
                      contrast-125
                    "
                  />
                </div>

                {/* MAIN PORTRAIT */}

                <div
                  className="
                    absolute
                    top-8
                    right-0
                    sm:right-4
                    w-48
                    sm:w-64
                    h-64
                    sm:h-80
                    rounded-2xl
                    overflow-hidden
                    shadow-2xl
                    z-20
                    hover:scale-[1.02]
                    transition-transform
                    duration-300
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
                    alt="Hana Evans Portrait"
                    className="w-full h-full object-cover"
                  />

                  <div
                    className="
                      absolute
                      top-12
                      right-0
                      w-8
                      h-28
                      bg-white/95
                      rounded-l-md
                      shadow-md
                    "
                  />
                </div>

                {/* BOTTOM IMAGE */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-2
                    sm:left-8
                    w-40
                    sm:w-52
                    h-44
                    sm:h-56
                    rounded-2xl
                    overflow-hidden
                    shadow-xl
                    z-30
                    border-4
                    border-white
                    hover:scale-105
                    transition-transform
                    duration-300
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=500"
                    alt="Personal trainer in action"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div
              className="
                lg:col-span-5
                flex
                flex-col
                justify-center
                space-y-6
                pt-6
                lg:pt-0
                text-center
                lg:text-left
              "
            >

              <div className="space-y-3">

                <h1
                  className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-extrabold
                    text-slate-900
                    tracking-tight
                    leading-none
                    uppercase
                  "
                >
                  HI! MY NAME IS
                  <br className="hidden sm:inline" />

                  <span className="relative inline-block mt-1 text-[#2c522f]">
                    Ann Law

                    <span
                      className="
                        absolute
                        -bottom-3
                        left-0
                        right-0
                        flex
                        justify-center
                        lg:justify-start
                        gap-1.5
                        opacity-80
                        pointer-events-none
                      "
                    >
                      {[...Array(10)].map((_, i) => (
                        <span
                          key={i}
                          className="
                            w-1.5
                            h-1.5
                            rounded-full
                            inline-block
                          "
                          style={{
                            backgroundColor: "#2c522f",
                          }}
                        />
                      ))}
                    </span>
                  </span>
                </h1>

              </div>

              <p
                className="
                  text-slate-600
                  text-sm
                  sm:text-base
                  leading-relaxed
                  max-w-md
                  mx-auto
                  lg:mx-0
                  pt-2
                "
              >
America’s Wellness Coach
Helping People Live Well, Eat Well, Move Well, and Age Well.
I bring together decades of experience in healthcare, business, government, advocacy,
and wellness education.
As a Family Nurse Practitioner, author, wellness educator, entrepreneur, and former public
official, I have spent my life working at the intersection of health, leadership, and
community.
My approach to wellness is practical, personal, and grounded in the belief that lasting
wellbeing is built through the choices and habits we make every day.
Through The Law of Wellness, I share the knowledge, perspective, and experience that I have
developed throughout my career to help others create a more intentional and vibrant way of
living.

              </p>

              <div className="pt-2">
                <button
                  type="button"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-8
                    py-3.5
                    text-sm
                    font-bold
                    uppercase
                    tracking-wider
                    text-white
                    rounded-lg
                    shadow-lg
                    shadow-emerald-900/20
                    hover:shadow-xl
                    hover:opacity-95
                    active:scale-95
                    transition-all
                    duration-200
                  "
                  style={{
                    backgroundColor: "#2c522f",
                  }}
                >
                  LEARN MORE
                </button>
              </div>

            </div>

          </div>
        </section>
      </section>

      {/* ============================================================
          SECTION 5 - CONSULTATION CTA
      ============================================================ */}

      <section
        className="
          relative
          w-full
          min-h-[500px]
          sm:min-h-[550px]
          md:min-h-[600px]
          lg:min-h-[650px]
          flex
          items-center
          justify-center
          overflow-hidden
        "
      >

        <div className="absolute inset-0 w-full h-full">

          <img
            src="/50-home-3-8.webp"
            alt="Fitness Motivation Background"
            className="
              w-full
              h-full
              object-cover
              object-center
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-black/40
              backdrop-brightness-90
            "
          />

        </div>

        <div
          className="
            relative
            z-10
            max-w-4xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            text-center
            text-white
            space-y-4
            sm:space-y-6
            py-12
          "
        >

          <p
            className="
              text-[10px]
              sm:text-xs
              md:text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-white/90
            "
          >
            STILL NOT SURE IF IT'S RIGHT FOR YOU?
          </p>

          <h2
            className="
              font-serif
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-normal
              leading-[1.15]
              tracking-tight
              max-w-3xl
              mx-auto
              drop-shadow-sm
            "
          >
            Become the happiest, healthiest, strongest version
            of yourself
          </h2>

          <p
            className="
              text-xs
              sm:text-sm
              md:text-base
              font-normal
              text-white/90
              max-w-2xl
              mx-auto
              leading-relaxed
              pt-1
            "
          >
            We'll make realistic and healthy changes, so you can
            maintain your results forever. Your success is my
            success
          </p>

          <div className="pt-4 sm:pt-6 flex justify-center">

            <a
              href="#"
              className="
                inline-flex
                items-center
                justify-center

                px-6
                sm:px-8
                md:px-10

                py-3
                sm:py-3.5
                md:py-4

                rounded-tl-[24px]
                sm:rounded-tl-[28px]

                rounded-br-[24px]
                sm:rounded-br-[28px]

                rounded-tr-none
                rounded-bl-none

                bg-white
                hover:bg-slate-100

                text-[#2c522f]

                text-xs
                sm:text-sm

                font-bold
                uppercase
                tracking-[0.2em]

                shadow-xl

                transition-all
                duration-300

                hover:scale-105
                active:scale-95
              "
            >
              BOOK A FREE CONSULTATION
            </a>

          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 6 - BMI CALCULATOR
      ============================================================ */}

      <section
        className="
          w-full
          bg-[#0d0d0d]
          py-12
          sm:py-16
          md:py-20
          px-4
          sm:px-6
          lg:px-8
          flex
          justify-center
          items-center
        "
      >

        <div
          className="
            max-w-5xl
            w-full
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-0
            overflow-hidden
            shadow-2xl
            rounded-sm
          "
        >

          {/* LEFT */}

          <div
            className="
              lg:col-span-5
              bg-[#2c522f]
              relative
              min-h-[380px]
              sm:min-h-[450px]
              lg:min-h-[520px]
              flex
              items-center
              justify-center
              overflow-hidden
            "
          >

            <span
              className="
                absolute
                left-[-20px]
                top-1/2
                -translate-y-1/2
                -rotate-90
                text-white/30
                text-6xl
                sm:text-7xl
                font-extrabold
                uppercase
                tracking-widest
                pointer-events-none
                select-none
              "
            >
              SLIMMING
            </span>

            <div
              className="
                relative
                z-10
                w-full
                h-full
                flex
                items-end
                justify-center
                pt-8
              "
            >
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
                alt="Fitness Model"
                className="
                  object-cover
                  h-[90%]
                  sm:h-full
                  max-h-[500px]
                  drop-shadow-2xl
                "
              />
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              lg:col-span-7
              bg-white
              p-6
              sm:p-8
              md:p-10
              flex
              flex-col
              justify-between
            "
          >

            <div>

              <div className="mb-4">

                <h2
                  className="
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                    font-black
                    text-slate-900
                    tracking-wider
                    uppercase
                  "
                >
                  CALCULATE YOUR BMI
                  <span className="text-[#2c522f]">
                    .
                  </span>
                </h2>

                <div className="flex gap-1 mt-1">
                  {[...Array(10)].map((_, i) => (
                    <span
                      key={i}
                      className="
                        w-1
                        h-1
                        rounded-full
                        bg-[#2c522f]
                      "
                    />
                  ))}
                </div>

              </div>

              <p
                className="
                  text-xs
                  sm:text-sm
                  text-slate-500
                  mb-6
                  leading-relaxed
                "
              >
             Calculate your BMI and stay informed on your journey to a healthier you.
              </p>

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-6
                  items-start
                "
              >

                {/* FORM */}

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-3.5"
                >

                  <div
                    className="
                      grid
                      grid-cols-2
                      gap-2
                      border
                      border-[#2c522f]
                      p-0.5
                      rounded-sm
                    "
                  >

                    <button
                      type="button"
                      onClick={() => setGender("female")}
                      className={`
                        py-2
                        text-xs
                        font-bold
                        uppercase
                        transition-colors
                        ${
                          gender === "female"
                            ? "bg-[#2c522f] text-white"
                            : "bg-transparent text-slate-600 hover:text-slate-900"
                        }
                      `}
                    >
                      Female
                    </button>

                    <button
                      type="button"
                      onClick={() => setGender("male")}
                      className={`
                        py-2
                        text-xs
                        font-bold
                        uppercase
                        transition-colors
                        ${
                          gender === "male"
                            ? "bg-[#2c522f] text-white"
                            : "bg-transparent text-slate-600 hover:text-slate-900"
                        }
                      `}
                    >
                      Male
                    </button>

                  </div>

                  <input
                    type="number"
                    placeholder="Age"
                    className="
                      w-full
                      border
                      border-slate-200
                      px-3.5
                      py-2.5
                      text-xs
                      text-slate-800
                      placeholder-slate-400
                      focus:outline-none
                      focus:border-slate-800
                      transition-colors
                    "
                  />

                  <input
                    type="number"
                    placeholder="Weight / kg"
                    className="
                      w-full
                      border
                      border-slate-200
                      px-3.5
                      py-2.5
                      text-xs
                      text-slate-800
                      placeholder-slate-400
                      focus:outline-none
                      focus:border-slate-800
                      transition-colors
                    "
                  />

                  <input
                    type="number"
                    placeholder="Height / cm"
                    className="
                      w-full
                      border
                      border-slate-200
                      px-3.5
                      py-2.5
                      text-xs
                      text-slate-800
                      placeholder-slate-400
                      focus:outline-none
                      focus:border-slate-800
                      transition-colors
                    "
                  />

                  <div className="relative">

                    <select
                      defaultValue=""
                      className="
                        w-full
                        border
                        border-slate-200
                        px-3.5
                        py-2.5
                        text-xs
                        text-slate-500
                        bg-white
                        appearance-none
                        focus:outline-none
                        focus:border-slate-800
                        transition-colors
                        cursor-pointer
                      "
                    >
                      <option value="" disabled>
                        Level of Activity
                      </option>

                      <option value="low">
                        Sedentary (Little or no exercise)
                      </option>

                      <option value="moderate">
                        Light / Moderate exercise
                      </option>

                      <option value="high">
                        Active / Heavy exercise
                      </option>
                    </select>

                    <div
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        pointer-events-none
                        text-slate-400
                        text-xs
                      "
                    >
                      ▼
                    </div>

                  </div>

                  <button
                    type="submit"
                    className="
                      w-full
                      bg-black
                      hover:bg-slate-800
                      text-white
                      font-extrabold
                      text-xs
                      uppercase
                      tracking-widest
                      py-3
                      transition-colors
                      mt-2
                    "
                  >
                    CALCULATE
                  </button>

                </form>

                {/* RESULT */}

                <div
                  className="
                    border
                    border-slate-100
                    bg-slate-50/50
                    rounded-sm
                    p-6
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    h-full
                    min-h-[220px]
                  "
                >

                  <div
                    className="
                      w-12
                      h-12
                      mb-3
                      flex
                      items-center
                      justify-center
                      rounded-lg
                      bg-white
                      border
                      border-slate-200
                      shadow-sm
                    "
                  >
                    <svg
                      className="
                        w-7
                        h-7
                        text-[#2c522f]
                      "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 6l3 12h12l3-12H3zm9 0v12m-4-6h8"
                      />
                    </svg>
                  </div>

                  <p
                    className="
                      text-[11px]
                      text-slate-400
                      leading-relaxed
                      max-w-[180px]
                    "
                  >
                    Fill out the form to calculate calories
                    for weight loss
                  </p>

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 7 - BENEFITS + MY PROGRAM
      ============================================================ */}

      <section
        className="
          min-h-screen
          bg-slate-50/50
          text-slate-800
          font-sans
          antialiased
          py-12
          px-4
          sm:px-6
          lg:px-8
          xl:px-12
          relative
          overflow-hidden
        "
      >

        {/* AMBIENT LIGHT */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-20
            -left-20
            w-96
            h-96
            rounded-full
            blur-3xl
            opacity-20
          "
          style={{
            backgroundColor: "#2c522f",
          }}
        />

        <div
          className="
            pointer-events-none
            absolute
            top-1/3
            -right-20
            w-96
            h-96
            rounded-full
            blur-3xl
            opacity-15
          "
          style={{
            backgroundColor: "#2c522f",
          }}
        />

        <div
          className="
            max-w-7xl
            mx-auto
            space-y-24
            sm:space-y-32
          "
        >

          {/* ======================================================
              BENEFITS
          ====================================================== */}

          <section className="relative">

            <div
              className="
                text-center
                mb-12
                sm:mb-16
                relative
              "
            >

              <div className="inline-block relative">

                <h2
                  className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    font-extrabold
                    uppercase
                    tracking-tight
                    text-slate-900
                    leading-tight
                  "
                >
                  Benefits Of
                  <br className="sm:hidden" />
                  <span> Personal Training</span>
                </h2>

                <div
                  className="
                    absolute
                    -top-1
                    -right-8
                    sm:-right-10
                    grid
                    grid-cols-4
                    gap-1
                    opacity-90
                  "
                >
                  {[...Array(12)].map((_, i) => (
                    <span
                      key={i}
                      className="
                        w-1.5
                        h-1.5
                        rounded-full
                        inline-block
                      "
                      style={{
                        backgroundColor: "#2c522f",
                      }}
                    />
                  ))}
                </div>

              </div>
            </div>

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-6
                xl:gap-8
              "
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-2xl
                    p-6
                    sm:p-7
                    shadow-lg
                    shadow-slate-200/50
                    border
                    border-slate-100
                    hover:shadow-xl
                    transition-all
                    duration-300
                    relative
                    group
                    overflow-hidden
                    flex
                    flex-col
                    justify-between
                  "
                >

                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      h-1.5
                      rounded-t-2xl
                    "
                    style={{
                      backgroundColor: "#2c522f",
                    }}
                  />

                  <div
                    className="
                      w-1.5
                      h-8
                      rounded-full
                      mb-4
                      opacity-80
                    "
                    style={{
                      backgroundColor: "#2c522f",
                    }}
                  />

                  <div>

                    <h3
                      className="
                        text-lg
                        font-bold
                        text-slate-900
                        mb-3
                        group-hover:text-emerald-950
                        transition-colors
                      "
                    >
                      {benefit.title}
                    </h3>

                    <p
                      className="
                        text-slate-500
                        text-xs
                        sm:text-sm
                        leading-relaxed
                      "
                    >
                      {benefit.description}
                    </p>

                  </div>

                </div>
              ))}
            </div>

          </section>

          {/* ======================================================
              MY PROGRAM
          ====================================================== */}

          <section className="relative pt-6">

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-12
                gap-8
                items-center
                relative
              "
            >

              {/* LEFT */}

              <div
                className="
                  lg:col-span-4
                  flex
                  flex-col
                  justify-between
                  space-y-8
                  z-10
                "
              >

                <div className="space-y-4">

                  <div className="relative inline-block">

                    <h2
                      className="
                        text-3xl
                        sm:text-4xl
                        font-black
                        uppercase
                        text-slate-900
                        tracking-tight
                      "
                    >
                      MY PROGRAM
                    </h2>

                    <div
                      className="
                        absolute
                        top-1
                        -right-9
                        grid
                        grid-cols-4
                        gap-1
                      "
                    >
                      {[...Array(12)].map((_, i) => (
                        <span
                          key={i}
                          className="
                            w-1.5
                            h-1.5
                            rounded-full
                            inline-block
                          "
                          style={{
                            backgroundColor: "#2c522f",
                          }}
                        />
                      ))}
                    </div>

                  </div>

                  <p
                    className="
                      text-slate-500
                      text-xs
                      sm:text-sm
                      leading-relaxed
                      max-w-sm
                    "
                  >
                    A personalized approach designed to support your wellness goals.
Follow structured workouts tailored to your fitness level and routine.
Build strength, improve endurance, and develop healthier daily habits.
Stay consistent, track your progress, and keep moving toward your goals.
                  </p>

                  <div className="pt-2">

                    <button
                      type="button"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        px-8
                        py-3.5
                        text-xs
                        sm:text-sm
                        font-bold
                        uppercase
                        tracking-wider
                        text-white
                        rounded-lg
                        shadow-lg
                        shadow-emerald-900/20
                        hover:shadow-xl
                        hover:opacity-95
                        active:scale-95
                        transition-all
                        duration-200
                      "
                      style={{
                        backgroundColor: "#2c522f",
                      }}
                    >
                      JOIN NOW
                    </button>

                  </div>
                </div>

                {/* LEFT CARDS */}

                <div className="space-y-6 pt-4">

                  {programLeftCards.map((card) => {
                    const Icon = card.icon;

                    return (
                      <div
                        key={card.id}
                        className="
                          bg-white/90
                          backdrop-blur-sm
                          rounded-2xl
                          p-5
                          border
                          border-emerald-50/60
                          shadow-md
                          hover:shadow-lg
                          transition-all
                          duration-300
                          group
                        "
                      >

                        <div
                          className="
                            flex
                            items-center
                            space-x-3
                            mb-2
                          "
                        >

                          <div
                            className="
                              p-2.5
                              rounded-xl
                              bg-emerald-50
                              transition-colors
                              group-hover:bg-slate-900
                              group-hover:text-white
                            "
                            style={{
                              color: "#2c522f",
                            }}
                          >
                            <Icon className="w-5 h-5" />
                          </div>

                          <h4
                            className="
                              font-bold
                              text-slate-900
                              text-base
                            "
                          >
                            {card.title}
                          </h4>

                        </div>

                        <p
                          className="
                            text-slate-500
                            text-xs
                            sm:text-sm
                            leading-relaxed
                            pl-1
                          "
                        >
                          {card.description}
                        </p>

                      </div>
                    );
                  })}

                </div>

              </div>

              {/* CENTER */}

              <div
                className="
                  lg:col-span-4
                  flex
                  justify-center
                  items-center
                  my-6
                  lg:my-0
                  relative
                  z-0
                "
              >

                <div
                  className="
                    relative
                    w-full
                    max-w-md
                    lg:max-w-none
                    flex
                    justify-center
                  "
                >

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      blur-2xl
                      opacity-20
                      scale-90
                    "
                    style={{
                      backgroundColor: "#2c522f",
                    }}
                  />

                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
                    alt="Fitness athlete female trainer"
                    className="
                      relative
                      z-10
                      w-full
                      max-w-xs
                      sm:max-w-sm
                      lg:max-w-md
                      h-auto
                      object-cover
                      filter
                      drop-shadow-2xl
                      transition-transform
                      hover:scale-105
                      duration-500
                    "
                  />

                </div>

              </div>

              {/* RIGHT */}

              <div
                className="
                  lg:col-span-4
                  flex
                  flex-col
                  justify-center
                  space-y-6
                  z-10
                "
              >

                {programRightCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.id}
                      className="
                        bg-white/90
                        backdrop-blur-sm
                        rounded-2xl
                        p-5
                        border
                        border-slate-100
                        shadow-md
                        hover:shadow-lg
                        transition-all
                        duration-300
                        group
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          space-x-3
                          mb-2
                        "
                      >

                        <div
                          className="
                            p-2.5
                            rounded-xl
                            bg-emerald-50
                            transition-colors
                            group-hover:bg-slate-900
                            group-hover:text-white
                          "
                          style={{
                            color: "#2c522f",
                          }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <h4
                          className="
                            font-bold
                            text-slate-900
                            text-base
                          "
                        >
                          {card.title}
                        </h4>

                      </div>

                      <p
                        className="
                          text-slate-500
                          text-xs
                          sm:text-sm
                          leading-relaxed
                          pl-1
                        "
                      >
                        {card.description}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          </section>

        </div>
      </section>

    </div>
  );
}

