// "use client"
// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isEventsOpen, setIsEventsOpen] = useState(false);

//   const navLinks = [
//     { title: 'HOME', href: '#' },
//     { title: 'ABOUT ANN', href: '#' },
//     { title: 'THE BOOK', href: '#' },
//     {
//       title: 'EVENTS',
//       href: '#',
//       hasDropdown: true,
//       dropdownItems: [
//         { title: 'Webinars ', href: '#' },
//         { title: 'RETREATS', href: '#' },
//            { title: 'Seminars & Speaking', href: '#' },
//               { title: 'RETREATS', href: '#' },
//       ],
//     },
//     { title: 'RESOURCES', href: '#' },
//     { title: 'CONTACT', href: '#' },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
          
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <a href="#" className="bg-[#ccff00] text-black font-extrabold text-xl px-2 py-1 tracking-wider">
//               SAMANTHA
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8 items-center">
//             {navLinks.map((link, index) => (
//               <div key={index} className="relative group">
//                 {link.hasDropdown ? (
//                   <>
//                     <button className="flex items-center gap-1 text-gray-800 hover:text-black font-medium text-sm tracking-wide py-2">
//                       {link.title}
//                       <svg
//                         className="w-4 h-4 transition-transform group-hover:rotate-180"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </button>

//                     {/* Desktop Dropdown */}
//                     <div className="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 py-2 border border-gray-100">
//                       {link.dropdownItems.map((item, subIndex) => (
//                         <a
//                           key={subIndex}
//                           href={item.href}
//                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
//                         >
//                           {item.title}
//                         </a>
//                       ))}
//                     </div>
//                   </>
//                 ) : (
//                   <a
//                     href={link.href}
//                     className="text-gray-800 hover:text-black font-medium text-sm tracking-wide py-2 transition-colors"
//                   >
//                     {link.title}
//                   </a>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Mobile Hamburger Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-gray-700 hover:text-black focus:outline-none p-2"
//               aria-label="Toggle Menu"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {isMobileMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Drawer Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1">
//           {navLinks.map((link, index) => (
//             <div key={index}>
//               {link.hasDropdown ? (
//                 <div>
//                   <button
//                     onClick={() => setIsEventsOpen(!isEventsOpen)}
//                     className="w-full flex justify-between items-center text-left text-gray-800 font-medium py-3 border-b border-gray-50 text-base"
//                   >
//                     {link.title}
//                     <svg
//                       className={`w-4 h-4 transition-transform ${isEventsOpen ? 'rotate-180' : ''}`}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>

//                   {/* Mobile Dropdown Options */}
//                   {isEventsOpen && (
//                     <div className="pl-4 bg-gray-50 rounded-md my-1 py-1">
//                       {link.dropdownItems.map((item, subIndex) => (
//                         <a
//                           key={subIndex}
//                           href={item.href}
//                           className="block py-2 text-sm text-gray-600 hover:text-black"
//                         >
//                           {item.title}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <a
//                   href={link.href}
//                   className="block text-gray-800 font-medium py-3 border-b border-gray-50 text-base hover:text-black"
//                 >
//                   {link.title}
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;













// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   Leaf,
//   Menu,
//   X,
//   HelpCircle,
// } from "lucide-react";

// export default function App() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // ============================================================
//   // TYPEWRITER
//   // ============================================================
//   const words = [
//     "Deep Healing",
//     "Timeless Health",
//     "Active Living",
//     "Mental Clarity",
//   ];

//   const [wordIndex, setWordIndex] = useState(0);
//   const [typedText, setTypedText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentWord = words[wordIndex];

//     const typingSpeed = isDeleting ? 55 : 100;

//     const timer = setTimeout(() => {
//       if (!isDeleting) {
//         // TYPE
//         const nextText = currentWord.slice(0, typedText.length + 1);
//         setTypedText(nextText);

//         // Word complete
//         if (nextText === currentWord) {
//           setTimeout(() => {
//             setIsDeleting(true);
//           }, 1600);
//         }
//       } else {
//         // DELETE
//         const nextText = currentWord.slice(0, typedText.length - 1);
//         setTypedText(nextText);

//         // Word deleted
//         if (nextText === "") {
//           setIsDeleting(false);
//           setWordIndex((prev) => (prev + 1) % words.length);
//         }
//       }
//     }, typingSpeed);

//     return () => clearTimeout(timer);
//   }, [typedText, isDeleting, wordIndex]);

//   // ============================================================
//   // NAVIGATION
//   // ============================================================
//  const navLinks = [
//   { name: "HOME", href: "#" },
//   { name: "ABOUT", href: "/About" },
//   { name: "THE BOOK", href: "#" },
//   {
//     name: "EVENTS",
//     href: "#",
//     dropdown: [
//       { name: "Webinars", href: "#" },
//       { name: "Seminars & Speaking", href: "#" },
//       { name: "Retreats", href: "#" },
//     ],
//   },
//   { name: "CONTACT", href: "#" },
//   { name: "BLOGS", href: "#" },
// ];

//   return (
//     <div
//       className="
//         relative
//         min-h-screen
//         w-full
//         bg-slate-900
//         font-sans
//         antialiased
//         overflow-x-hidden
//         flex
//         flex-col
//         selection:bg-[#2c522f]
//         selection:text-white
//       "
//     >

//       {/* ========================================================
//           BACKGROUND IMAGE
//       ========================================================= */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/landing-1.webp"
//           alt="Woman preparing fresh salad in bright kitchen"
//           className="
//             w-full
//             h-full
//             object-cover
//             object-center
//             lg:object-[80%_center]
//             brightness-[0.92]
//           "
//           loading="eager"
//         />

//         <div className="absolute inset-0 bg-slate-900/30 lg:bg-transparent" />
//       </div>

//       {/* ========================================================
//           HEADER
//       ========================================================= */}
//       <header
//         className="
//           relative
//           z-30
//           w-full
//           px-4
//           sm:px-8
//           lg:px-16
//           py-4
//           sm:py-5
//           lg:py-2
//         "
//       >
//         <div className=" mx-auto flex items-center justify-between">

//           {/* LOGO */}
        
// {/* LOGO */}
// <a
//   href="#"
//   className="
//     flex
//     items-center
//     text-white
//     group
//     drop-shadow-md
//   "
// >
//   <img
//     src="/26e058e5-cda6-4b09-bbad-932e7040aea1 (1).png"
//     alt="Healthify"
//     className="
//       h-18
//       sm:h-24
//       w-auto
//       object-contain
//       transition-transform
//       duration-300
//       group-hover:scale-105
//     "
//   />
// </a>



//           {/* DESKTOP NAV */}
//          <nav className="hidden lg:flex items-center space-x-8">
//   {navLinks.map((link) => (
//     <div key={link.name} className="relative group">
//       <a
//         href={link.href}
//         className="
//           flex
//           items-center
//           gap-1.5
//           text-xs
//           font-bold
//           tracking-widest
//           text-white/90
//           hover:text-white
//           transition-colors
//           uppercase
//           drop-shadow-sm
//           hover:underline
//           underline-offset-4
//         "
//       >
//         {link.name}

//         {link.dropdown && (
//           <span className="text-[10px] transition-transform duration-300 group-hover:rotate-180">
//             ▼
//           </span>
//         )}
//       </a>

//       {/* DROPDOWN */}
//       {link.dropdown && (
//         <div
//           className="
//             absolute
//             left-1/2
//             top-full
//             mt-4
//             -translate-x-1/2
//             invisible
//             opacity-0
//             translate-y-2
//             group-hover:visible
//             group-hover:opacity-100
//             group-hover:translate-y-0
//             transition-all
//             duration-300
//             w-52
//             rounded-xl
//             bg-white
//             shadow-2xl
//             border
//             border-slate-100
//             overflow-hidden
//             z-50
//           "
//         >
//           {link.dropdown.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="
//                 block
//                 px-5
//                 py-3.5
//                 text-[11px]
//                 font-bold
//                 tracking-wider
//                 text-slate-700
//                 hover:bg-[#2c522f]
//                 hover:text-white
//                 transition-colors
//                 uppercase
//               "
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>
//       )}
//     </div>
//   ))}
// </nav>

//           {/* DESKTOP PURCHASE */}
//         <div className="hidden lg:block p-4 sm:p-6 bg-transparent">
//   <a
//     href="#"
//     className="
//       inline-flex
//       items-center
//       justify-center
//       /* Leaf Shape (Opposite corners rounded) */
//       rounded-tl-[32px]
//       rounded-br-[32px]
//       rounded-tr-none
//       rounded-bl-none
//       /* Transparent Glass Background & Borders */
//       bg-black/20
//       hover:bg-black/40
//       border-2
//       border-white/80
//       hover:border-white
//       text-white
//       /* Responsive Padding & Font Size */
//       px-5 sm:px-7 md:px-8
//       py-2.5 sm:py-3 md:py-3.5
//       text-xs sm:text-sm
//       font-bold
//       uppercase
//       tracking-wider
//       backdrop-blur-sm
//       transition-all
//       duration-300
//       shadow-lg
//       hover:scale-105
//     "
//   >
//     PURCHASE NOW
//   </a>
// </div>

//           {/* MOBILE */}
//           <div className="flex lg:hidden items-center space-x-3">

//             <a
//               href="#"
//               className="
//                 px-4
//                 py-2
//                 rounded-full
//                 border
//                 border-white/80
//                 bg-black/30
//                 text-white
//                 text-[10px]
//                 font-bold
//                 uppercase
//                 tracking-wider
//                 backdrop-blur-sm
//               "
//             >
//               PURCHASE
//             </a>

//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="
//                 p-2
//                 rounded-lg
//                 bg-black/40
//                 text-white
//                 backdrop-blur-md
//               "
//               aria-label="Toggle Navigation Menu"
//             >
//               {mobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>

//           </div>
//         </div>

//         {/* MOBILE MENU */}
//         {mobileMenuOpen && (
//           <div
//             className="
//               lg:hidden
//               absolute
//               top-full
//               left-0
//               right-0
//               bg-slate-900/95
//               backdrop-blur-xl
//               border-b
//               border-slate-800
//               p-6
//               shadow-2xl
//               z-40
//             "
//           >
//             <nav className="flex flex-col space-y-3">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="
//                     text-sm
//                     font-bold
//                     tracking-widest
//                     text-slate-200
//                     hover:text-[#ccff00]
//                     uppercase
//                     py-2
//                     border-b
//                     border-slate-800/60
//                   "
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </nav>
//           </div>
//         )}
//       </header>

//       {/* ========================================================
//           HERO
//           TOP SPACE REDUCED
//       ========================================================= */}
//       <main
//         className="
//           relative
//           z-20
//           w-full
//           max-w-7xl
//           mx-auto
//           px-4
//           sm:px-8
//           lg:px-10
//           pt-2
//           sm:pt-4
//           lg:pt-6
//           pb-8
//           lg:pb-12
//         "
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

//           {/* ====================================================
//               HERO CARD
//           ==================================================== */}
//           <div
//             className="
//               lg:col-span-7
//               xl:col-span-7

//               bg-white/95
//               lg:bg-white

//               rounded-tl-[50px]
//               sm:rounded-tl-[70px]

//               rounded-br-[50px]
//               sm:rounded-br-[70px]

//               rounded-tr-[20px]
//               rounded-bl-[20px]

//               p-7
//               sm:p-10
//               lg:p-12
//               xl:p-14

//               min-h-[420px]
//               sm:min-h-[500px]
//               lg:min-h-[560px]
//               xl:min-h-[600px]

//               flex
//               items-center

//               shadow-2xl
//               shadow-black/20

//               border
//               border-slate-100

//               backdrop-blur-md
//             "
//           >
//             <div className="w-full space-y-2">

//               {/* =================================================
//                   HEADING
//               ================================================= */}
//               <h1
//                 className="
//                   text-3xl
//                   sm:text-4xl
//                   md:text-5xl
//                   lg:text-5xl
//                   xl:text-6xl

//                   font-normal
//                   text-slate-900
//                   font-serif

//                   leading-[1.08]
//                   tracking-tight
//                 "
//               >
//                 <span className="block">
//                  Achieve Real
//                 </span>

//                 {/* TYPEWRITER LINE */}
//                 <span
//                   className="
//                     block
//                     min-h-[1.15em]
//                     font-serif
//                     font-medium
//                     text-[#2c522f]
//                   "
//                 >
//                   {typedText}

//                   <span
//                     className="
//                       inline-block
//                       ml-1
//                       font-sans
//                       font-light
//                       text-[#2c522f]
//                       animate-pulse
//                     "
//                   >
//                     |
//                   </span>
//                 </span>

//                 <span className="block">
//                   On Your Own Terms.




//                 </span>
//               </h1>

//               {/* =================================================
//                   DESCRIPTION
//               ================================================= */}
//               <p
//                 className="
//                   text-slate-500
//                   text-sm
//                   sm:text-base
//                   leading-relaxed
//                   font-sans
//                   font-normal
//                   max-w-md
//                   pt-1
//                 "
//               >
//                 Health Coaching, Diet & Fitness Consultant
//                 Elementor WordPress Theme
//               </p>

//               {/* =================================================
//                   BUTTONS
//               ================================================= */}
//          <div
//   className="
//     pt-2
//     flex
//     flex-wrap
//     items-center
//     gap-4
//     sm:gap-5
//   "
// >

//   {/* 1. FIRST BUTTON - SOLID GREEN LEAF */}
//   <a
//     href="#"
//     className="
//       inline-flex
//       items-center
//       justify-center
//       gap-2

//       px-7
//       py-3.5

//       rounded-tl-[28px]
//       rounded-br-[28px]
//       rounded-tr-none
//       rounded-bl-none

//       bg-[#2c522f]
//       text-white

//       font-extrabold
//       text-xs
//       tracking-wider
//       uppercase

//       shadow-lg
//       shadow-[#2c522f]/30

//       hover:shadow-xl
//       hover:opacity-95

//       active:scale-95

//       transition-all
//       duration-200
//     "
//   >
//     <span>PURCHASE NOW</span>

//     <Leaf
//       className="
//         w-4
//         h-4
//         fill-white
//         stroke-none
//       "
//     />
//   </a>

//   {/* 2. SECOND BUTTON - GREEN (#2c522f) OUTLINE LEAF */}
//   <a
//     href="#"
//     className="
//       inline-flex
//       items-center
//       justify-center

//       px-7
//       py-3.5

//       /* Leaf Corner Shape */
//       rounded-tl-[28px]
//       rounded-br-[28px]
//       rounded-tr-none
//       rounded-bl-none

//       /* Green Outline & Transparent Background */
//       border-2
//       border-[#2c522f]
//       bg-transparent

//       /* Text Color matching outline */
//       text-[#2c522f]

//       text-xs
//       font-extrabold
//       tracking-wider
//       uppercase

//       /* Hover Effect */
//       hover:bg-[#2c522f]
//       hover:text-white

//       active:scale-95

//       transition-all
//       duration-300
//     "
//   >
//     PREVIEW DEMOS
//   </a>

// </div>

//             </div>
//           </div>

//         </div>
//       </main>

//       {/* ========================================================
//           FOOTER
//       ========================================================= */}
//       <footer
//         className="
//           relative
//           z-30
//           p-4
//           sm:p-6
//           flex
//           justify-between
//           items-end
//           pointer-events-none
//         "
//       >
//         <button
//           type="button"
//           aria-label="Help & Support"
//           className="
//             pointer-events-auto
//             p-3
//             rounded-full
//             bg-slate-800/80
//             hover:bg-slate-900
//             text-white/90
//             hover:text-white
//             shadow-xl
//             backdrop-blur-md
//             transition-all
//             duration-300
//             hover:scale-110
//             active:scale-95
//             border
//             border-white/10
//           "
//         >
//           <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
//         </button>
//       </footer>

//     </div>
//   );
// }










"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  const navLinks = [
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "ABOUT",
      href: "/About",
    },
    {
      name: "THE BOOK",
      href: "/book",
    },
    {
      name: "EVENTS",
      dropdown: [
        {
          name: "Webinars",
          href: "/events/webinars",
        },
        {
          name: "Seminars & Speaking",
          href: "/events/seminars",
        },
        {
          name: "Retreats",
          href: "/events/retreats",
        },
      ],
    },
    {
      name: "CONTACT",
      href: "/contact",
    },
    {
      name: "BLOGS",
      href: "/blogs",
    },
  ];

  return (
    <header
      className="
        relative
        z-50
        w-full
        px-4
        sm:px-8
        lg:px-16
        py-4
        sm:py-5
        lg:py-2
      "
    >
      <div className="mx-auto flex items-center justify-between">

        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link
          href="/"
          className="
            flex
            items-center
            text-black
            group
          "
        >
          <img
            src="/26e058e5-cda6-4b09-bbad-932e7040aea1 (1).png"
            alt="Healthify"
            className="
              h-18
              sm:h-24
              w-auto
              object-contain
              transition-transform
              duration-300
              group-hover:scale-105
            "
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVBAR
        ====================================================== */}
        <nav className="hidden lg:flex items-center space-x-8">

          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
            >

              {/* NORMAL LINK */}
              {!link.dropdown ? (
                <Link
                  href={link.href}
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-xs
                    font-bold
                    tracking-widest
                    text-black
                    hover:text-[#2c522f]
                    transition-colors
                    uppercase
                    hover:underline
                    underline-offset-4
                  "
                >
                  {link.name}
                </Link>
              ) : (

                /* EVENTS BUTTON */
                <button
                  type="button"
                  onClick={() => setEventsOpen(!eventsOpen)}
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-xs
                    font-bold
                    tracking-widest
                    text-black
                    hover:text-[#2c522f]
                    transition-colors
                    uppercase
                  "
                >
                  {link.name}

                  <ChevronDown
                    className={`
                      w-3.5
                      h-3.5
                      transition-transform
                      duration-300
                      ${eventsOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>
              )}

              {/* =================================================
                  EVENTS DROPDOWN
              ================================================== */}
              {link.dropdown && eventsOpen && (
                <div
                  className="
                    absolute
                    left-1/2
                    top-full
                    mt-4
                    -translate-x-1/2
                    w-56
                    rounded-xl
                    bg-white
                    shadow-2xl
                    border
                    border-slate-100
                    overflow-hidden
                    z-50
                  "
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setEventsOpen(false)}
                      className="
                        block
                        px-5
                        py-3.5
                        text-[11px]
                        font-bold
                        tracking-wider
                        text-black
                        hover:bg-[#2c522f]
                        hover:text-white
                        transition-colors
                        uppercase
                      "
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

            </div>
          ))}

        </nav>

        {/* =====================================================
            DESKTOP PURCHASE BUTTON
        ====================================================== */}
   <div className="hidden lg:block">
  <Link
    href="#"
    className="
      inline-flex
      items-center
      justify-center
      /* Leaf Shape */
      rounded-tl-[32px]
      rounded-br-[32px]
      rounded-tr-none
      rounded-bl-none
      /* Theme Colors (Transparent BG + Theme Green Border & Text) */
     
      bg-[#2c522f]
      hover:bg-[#2c522f]
      border-2
      border-[#2c522f]
      text-white
      hover:text-white
      /* Sizing & Typography */
      px-7
      py-3
      text-sm
      font-bold
      uppercase
      tracking-wider
      backdrop-blur-sm
      /* Transitions & Effects */
      transition-all
      duration-300
      shadow-md
      hover:shadow-lg
      hover:scale-105
      active:scale-95
    "
  >
    PURCHASE NOW
  </Link>
</div>

        {/* =====================================================
            MOBILE RIGHT SIDE
        ====================================================== */}
        <div className="flex lg:hidden items-center space-x-3">

          {/* MOBILE PURCHASE */}
          <Link
            href="#"
            className="
              px-4
              py-2
              rounded-full
              border
              border-black
              bg-white/60
              text-black
              text-[10px]
              font-bold
              uppercase
              tracking-wider
              backdrop-blur-sm
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
            "
          >
            PURCHASE
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              p-2
              rounded-lg
              bg-white/70
              text-black
              backdrop-blur-md
              border
              border-black/20
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
            "
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </div>

      {/* =======================================================
          MOBILE MENU
      ======================================================== */}
      {mobileMenuOpen && (
        <div
          className="
            lg:hidden
            absolute
            top-full
            left-0
            right-0
            bg-white/95
            backdrop-blur-xl
            border-b
            border-slate-200
            p-6
            shadow-2xl
          "
        >

          <nav className="flex flex-col space-y-3">

            {navLinks.map((link) => (
              <div key={link.name}>

                {/* MOBILE NORMAL LINK */}
                {!link.dropdown ? (
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      block
                      text-sm
                      font-bold
                      tracking-widest
                      text-black
                      hover:text-[#2c522f]
                      uppercase
                      py-3
                      border-b
                      border-slate-200
                      transition-colors
                    "
                  >
                    {link.name}
                  </Link>
                ) : (

                  /* MOBILE EVENTS */
                  <>
                    <button
                      type="button"
                      onClick={() => setEventsOpen(!eventsOpen)}
                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        text-sm
                        font-bold
                        tracking-widest
                        text-black
                        hover:text-[#2c522f]
                        uppercase
                        py-3
                        border-b
                        border-slate-200
                        transition-colors
                      "
                    >
                      <span>EVENTS</span>

                      <ChevronDown
                        className={`
                          w-4
                          h-4
                          transition-transform
                          duration-300
                          ${eventsOpen ? "rotate-180" : ""}
                        `}
                      />
                    </button>

                    {/* MOBILE EVENTS DROPDOWN */}
                    {eventsOpen && (
                      <div
                        className="
                          pl-4
                          mt-2
                          space-y-1
                          border-l-2
                          border-[#2c522f]
                        "
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setEventsOpen(false);
                            }}
                            className="
                              block
                              py-2.5
                              text-xs
                              font-semibold
                              tracking-wide
                              text-black
                              hover:text-[#2c522f]
                              uppercase
                              transition-colors
                            "
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}

              </div>
            ))}

          </nav>
        </div>
      )}
    </header>
  );
}

