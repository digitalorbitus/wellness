"use client"
import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (

<footer className="w-full bg-[#FAF8F5] text-[#2C2C2C] pt-16 pb-8 px-6 lg:px-16 border-t border-slate-200/60 font-sans">
  <div className="max-w-7xl mx-auto">

    {/* =========================================================
        MAIN FOOTER GRID
    ========================================================= */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">

      {/* =======================================================
          1. LEFT SECTION — LOGO
      ======================================================= */}
    <div className="lg:col-span-3 order-1">
  <a
    href="#"
    className="inline-flex items-center gap-2 group"
  >
    <img
      src="/26e058e5-cda6-4b09-bbad-932e7040aea1 (1).png"
      alt="Healthify Logo"
      className="h-35 w-25 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </a>
</div>


      {/* =======================================================
          2. CENTER SECTION — LINKS
      ======================================================= */}
      <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8 order-2">

        {/* =====================================================
            PAGES
        ===================================================== */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-6">
            Pages
          </h4>

          <ul className="space-y-3.5 text-sm text-slate-700">

            <li>
              <a
                href="#"
                className="hover:text-slate-900 transition-colors"
              >
                Appointment
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-slate-900 transition-colors"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-slate-900 transition-colors"
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-slate-900 transition-colors"
              >
                Shop
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-slate-900 transition-colors"
              >
                Contacts
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-slate-900 transition-colors"
              >
                Image Credits
              </a>
            </li>

          </ul>
        </div>


        {/* =====================================================
            PROGRAMS
        ===================================================== */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-6">
            Programs
          </h4>

          <ul className="space-y-3.5 text-sm text-slate-700">

            <li>
              <a
                href="#"
                className="hover:text-slate-900 transition-colors"
              >
                Wellness Essentials Program
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-slate-900 transition-colors"
              >
                Immune Boost Program
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-slate-900 transition-colors"
              >
                Holistic Health Coaching
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-slate-900 transition-colors"
              >
                Heart Health Heroes
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-slate-900 transition-colors"
              >
                Active for Life
              </a>
            </li>

          </ul>
        </div>

      </div>


      {/* =======================================================
          3. RIGHT SECTION — NEWSLETTER
      ======================================================= */}
      <div className="lg:col-span-5 space-y-6 order-3">

        {/* =====================================================
            NEWSLETTER HEADING
        ===================================================== */}
        <h3 className="font-serif text-2xl sm:text-3xl text-slate-800 leading-tight max-w-lg">
          Get expert advice, updates and perks directly in your inbox
        </h3>


        {/* =====================================================
            SUBSCRIPTION FORM
        ===================================================== */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="pt-2"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

            <input
              type="email"
              placeholder="Your email address...*"
              required
              className="
                w-full
                bg-transparent
                border-b
                border-slate-300
                py-2.5
                px-1
                text-sm
                text-slate-800
                placeholder-slate-400
                focus:outline-none
                focus:border-slate-800
                transition-colors
              "
            />

            {/* =================================================
                SUBSCRIBE BUTTON
            ================================================= */}
            <button
              type="submit"
              className="
                px-7
                py-3

                rounded-tl-2xl
                rounded-br-2xl
                rounded-tr-none
                rounded-bl-none

                bg-[#2C522F]
                hover:bg-[#234425]

                text-white
                text-xs
                font-bold
                uppercase
                tracking-widest

                transition-all
                duration-200

                shadow-sm
                hover:shadow-md

                shrink-0
                mt-3
                sm:mt-0
              "
            >
              Subscribe
            </button>

          </div>
        </form>

      </div>

    </div>


    {/* =========================================================
        BOTTOM COPYRIGHT + SOCIAL
    ========================================================= */}
    <div
      className="
        pt-8
        border-t
        border-slate-200/50

        flex
        flex-col
        sm:flex-row
        items-center
        justify-between

        gap-4

        text-xs
        text-slate-500
      "
    >

      {/* COPYRIGHT */}
      <p>
        Privacy Policy - cmsmasters © 2026 - All Rights Reserved
      </p>


      {/* =======================================================
          SOCIAL ICONS
      ======================================================= */}
      <div className="flex items-center gap-4 text-slate-600">

        {/* INSTAGRAM */}
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-slate-900 transition-colors"
        >
          <FaInstagram size={16} />
        </a>

        {/* X / TWITTER */}
        <a
          href="#"
          aria-label="X"
          className="hover:text-slate-900 transition-colors"
        >
          <FaXTwitter size={15} />
        </a>

        {/* FACEBOOK */}
        <a
          href="#"
          aria-label="Facebook"
          className="hover:text-slate-900 transition-colors"
        >
          <FaFacebookF size={15} />
        </a>

      </div>

    </div>

  </div>
</footer>

  );
}