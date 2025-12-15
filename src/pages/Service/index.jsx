import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

// Import all content from constants
import {
  comparisonTable as comparisonTableData,
  faqData as faqDataAll,
  luminaryTable as luminaryTableData,
  investmentComparison as investmentComparisonData,
  servicesContent as servicesContentData,
} from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const { language } = useLanguage();

  // Get all data from constants based on current language
  const comparisonTable =
    comparisonTableData[language] || comparisonTableData.vie;
  const faqData = faqDataAll[language] || faqDataAll.vie;
  const luminaryTable = luminaryTableData[language] || luminaryTableData.vie;
  const investmentComparison =
    investmentComparisonData[language] || investmentComparisonData.vie;
  const t = servicesContentData[language] || servicesContentData.vie;

  // Refs for animation
  const heroSectionRef = useRef(null);
  const comparisonSectionRef = useRef(null);
  const faqSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      sectionTl.fromTo(
        heroSectionRef.current.querySelector(".section-title h1"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      sectionTl.fromTo(
        heroSectionRef.current.querySelector(".section-title p"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.2,
      );

      const tableRows = heroSectionRef.current?.querySelectorAll(
        ".bg-white.rounded-2xl > .grid > div",
      );
      if (tableRows) {
        sectionTl.fromTo(
          tableRows,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          0.4,
        );
      }
    }, heroSectionRef);

    return () => ctx.revert();
  }, [language]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: comparisonSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      sectionTl.fromTo(
        comparisonSectionRef.current.querySelector("h1"),
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      const contentSections = comparisonSectionRef.current?.querySelectorAll(
        ".bg-white > .grid > div",
      );
      if (contentSections) {
        sectionTl.fromTo(
          contentSections,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          0.2,
        );
      }
    }, comparisonSectionRef);

    return () => ctx.revert();
  }, [language]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: faqSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      sectionTl.fromTo(
        faqSectionRef.current.querySelector("h2"),
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0,
      );

      const questions = faqSectionRef.current?.querySelectorAll(".faq-item");
      if (questions) {
        sectionTl.fromTo(
          questions,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          0.2,
        );
      }
    }, faqSectionRef);

    return () => ctx.revert();
  }, [language]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ctaSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      sectionTl.fromTo(
        ctaSectionRef.current.querySelector(".text-left h2"),
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0,
      );

      sectionTl.fromTo(
        ctaSectionRef.current.querySelector(".text-left p"),
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0.2,
      );

      sectionTl.fromTo(
        ctaSectionRef.current.querySelector(".text-left button"),
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" },
        0.4,
      );

      sectionTl.fromTo(
        ctaSectionRef.current.querySelector(".flex.justify-center > div"),
        { x: 100, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.4)" },
        0.6,
      );
    }, ctaSectionRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-16">
          <div className="text-center space-y-6 px-4 w-full max-w-6xl">
            <div className="max-w-3xl mx-auto mb-8 md:mb-10 lg:mb-12">
              <h1
                className="manrope-extrabold text-[#0974B6] 
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
          leading-tight break-words hyphens-auto
          inline-block max-w-full"
              >
                {t.hero.title.split(" ").map((word, index, array) => (
                  <React.Fragment key={index}>
                    {word}
                    {(index + 1) % 2 === 0 && index !== array.length - 1 && (
                      <br />
                    )}
                    {index !== array.length - 1 && " "}
                  </React.Fragment>
                ))}
              </h1>
            </div>
            <div className="mt-6 md:mt-10 lg:mt-12">
              <span
                className="italian-serif text-[#686967]
              text-lg sm:text-xl md:text-2xl lg:text-3xl
              leading-relaxed md:leading-relaxed
              px-2 sm:px-4 md:px-8 lg:px-16"
              >
                {t.hero.subtitle}
              </span>
              <br />
              <span
                className="manrope-regular block mt-2 sm:mt-3 md:mt-4
                text-xl sm:text-2xl md:text-3xl lg:text-4xl
                text-[#0974B6]/80"
              >
                {t.hero.description}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* First Comparison Table */}
      <section ref={heroSectionRef}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h1
              className="manrope-extrabold text-[#040503] 
              text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              leading-none mb-6 md:mb-8"
            >
              {t.comparisonSection.title}
            </h1>
            <div className="space-y-2 md:space-y-3">
              <p
                className="manrope-medium text-[#040503]
                text-xl md:text-2xl lg:text-3xl"
              >
                {t.comparisonSection.description}
              </p>
            </div>
          </div>

          <div className="py-10"></div>

          <div className="bg-white border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 divide-x divide-gray-200">
              <div className="p-6">
                <div className="space-y-8">
                  {comparisonTable.map((row, index) => (
                    <div
                      key={index}
                      className={`${index === 0 ? "h-32" : index === 1 ? "h-24" : "min-h-[120px]"} border-b border-gray-100 last:border-b-0 pb-8 last:pb-0`}
                    >
                      <h3 className="manrope-medium text-gray-900 text-lg">
                        {row.category}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {["discovery", "momentum", "launch"].map((pathway) => (
                <div key={pathway} className="p-6">
                  <div className="space-y-8">
                    {comparisonTable.map((row, rowIndex) => (
                      <div
                        key={rowIndex}
                        className="min-h-[120px] border-b border-gray-100 last:border-b-0 pb-8 last:pb-0"
                      >
                        {rowIndex === 0 && (
                          <div className="mb-4">
                            <h3 className="italian-serif text-gray-900 text-lg mb-1">
                              {row[pathway].title}
                            </h3>
                            <p className="manrope-regular text-gray-600 text-sm">
                              {row[pathway].subtitle}
                            </p>
                          </div>
                        )}

                        {rowIndex === 1 && (
                          <div className="mb-4">
                            <div className="manrope-semibold text-gray-900 text-lg mb-1">
                              {row[pathway].price}
                            </div>
                            <div className="manrope-regular text-gray-600 text-sm">
                              {row[pathway].duration}
                            </div>
                          </div>
                        )}

                        {rowIndex === 2 && (
                          <div className="manrope-regular text-gray-700 text-sm leading-relaxed">
                            {row[pathway]}
                          </div>
                        )}

                        {rowIndex === 3 && (
                          <div className="text-gray-700 text-sm space-y-1">
                            {Array.isArray(row[pathway]) &&
                              row[pathway].map((item, i) => (
                                <div key={i} className="manrope-regular">
                                  {item}
                                </div>
                              ))}
                          </div>
                        )}

                        {rowIndex === 4 && (
                          <div className="text-gray-700 text-sm space-y-1">
                            {Array.isArray(row[pathway]) &&
                              row[pathway].map((item, i) => (
                                <div key={i} className="manrope-regular">
                                  {item}
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-20"></div>

      {/* Luminary Table */}
      <section ref={comparisonSectionRef} className="py-20 bg-gray-50">
        <div className="text-center max-w-5xl mx-auto">
          <h1
            className="manrope-extrabold text-[#040503] 
              text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              leading-none mb-6 md:mb-8"
          >
            {t.luminarySection.title}
          </h1>
          <p className="manrope-regular text-gray-600 text-lg mb-10">
            {t.luminarySection.subtitle}
          </p>
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-rows-[60%_40%] min-h-[1000px]">
              <div className="grid grid-cols-3 border-b border-gray-200">
                <div className="grid grid-rows-2 border-r border-gray-200">
                  <div className="border-b border-gray-200 p-8">
                    <h3 className="manrope-semibold text-xl text-gray-900 mb-6">
                      {luminaryTable.corePhilosophy.title}
                    </h3>
                    <p className="manrope-regular text-gray-700 leading-relaxed">
                      {luminaryTable.corePhilosophy.content}
                    </p>
                  </div>

                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="manrope-semibold text-xl text-gray-900 mb-4">
                      {luminaryTable.value.title}
                    </h3>
                    <div className="manrope-bold text-4xl text-blue-600">
                      {luminaryTable.value.price}
                    </div>
                  </div>
                </div>

                <div className="border-r border-gray-200 p-8">
                  <h3 className="manrope-semibold text-xl text-gray-900 mb-6">
                    {luminaryTable.lifetimeBenefits.title}
                  </h3>
                  <ul className="space-y-4">
                    {luminaryTable.lifetimeBenefits.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="manrope-regular text-gray-700">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8">
                  <h3 className="manrope-semibold text-xl text-gray-900 mb-6">
                    {luminaryTable.experienceDesign.title}
                  </h3>
                  <div className="space-y-6">
                    {luminaryTable.experienceDesign.items.map((item, index) => (
                      <div
                        key={index}
                        className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
                      >
                        <h4 className="manrope-medium text-lg text-gray-800 mb-2">
                          {item.title}
                        </h4>
                        <p className="manrope-regular text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div className="border-r border-gray-200 p-8">
                  <h3 className="manrope-semibold text-xl text-gray-900 mb-6">
                    {luminaryTable.journeyStages.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {luminaryTable.journeyStages.items.map((phase, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="manrope-medium text-gray-800">
                            {phase.phase}
                          </h4>
                          <span className="manrope-regular text-sm bg-white text-gray-700 px-3 py-1 rounded-full border border-gray-200">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="manrope-regular text-sm text-gray-600">
                          {phase.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="manrope-semibold text-xl text-gray-900 mb-6">
                    {luminaryTable.valueCommitment.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <p className="manrope-regular text-gray-700">
                          {luminaryTable.valueCommitment.items[0]}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <p className="manrope-regular text-gray-700">
                          {luminaryTable.valueCommitment.items[1]}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <p className="manrope-regular text-gray-700">
                          {luminaryTable.valueCommitment.items[2]}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <p className="manrope-regular text-gray-700">
                          {luminaryTable.valueCommitment.items[3]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="manrope-bold text-4xl md:text-5xl text-gray-900 mb-6">
              {investmentComparison.title}
            </h1>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-4 border-b border-gray-200">
              <div className="p-6 border-r border-gray-200 bg-gray-50">
                <h3 className="manrope-semibold text-lg text-gray-900">
                  {investmentComparison.headers.criteria}
                </h3>
              </div>
              <div className="p-6 border-r border-gray-200">
                <h3 className="manrope-semibold text-lg text-gray-900">
                  {investmentComparison.headers.pathway1}
                </h3>
              </div>
              <div className="p-6 border-r border-gray-200">
                <h3 className="manrope-semibold text-lg text-gray-900">
                  {investmentComparison.headers.pathway2}
                </h3>
              </div>
              <div className="p-6">
                <h3 className="manrope-semibold text-lg text-gray-900">
                  {investmentComparison.headers.significance}
                </h3>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {investmentComparison.rows.map((row, index) => (
                <div key={index} className="grid grid-cols-4">
                  <div className="p-6 border-r border-gray-200 bg-gray-50">
                    <h4 className="manrope-medium text-gray-800">
                      {row.criteria}
                    </h4>
                  </div>
                  <div className="p-6 border-r border-gray-200">
                    <p className="manrope-regular text-gray-700">
                      {row.pathway1}
                    </p>
                  </div>
                  <div className="p-6 border-r border-gray-200">
                    <p className="manrope-regular text-gray-700">
                      {row.pathway2}
                    </p>
                  </div>
                  <div className="p-6">
                    <p className="manrope-regular text-gray-600">
                      {row.significance}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="manrope-regular text-gray-600 max-w-3xl mx-auto">
              {investmentComparison.note}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqSectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-manrope font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              {t.faqSection.title}
            </h2>
            <p className="font-manrope text-lg text-gray-600 max-w-3xl mx-auto">
              {t.faqSection.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-300"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300"
                  onClick={() => {
                    const content = document.getElementById(
                      `faq-content-${index}`,
                    );
                    const icon = document.getElementById(`faq-icon-${index}`);
                    const faqItem = document.getElementById(
                      `faq-item-${index}`,
                    );

                    if (content && icon && faqItem) {
                      if (content.classList.contains("max-h-0")) {
                        content.classList.remove("max-h-0", "opacity-0");
                        content.classList.add("max-h-96", "opacity-100");
                        icon.style.transform = "rotate(180deg)";
                      } else {
                        content.classList.remove("max-h-96", "opacity-100");
                        content.classList.add("max-h-0", "opacity-0");
                        icon.style.transform = "rotate(0deg)";
                      }
                    }
                  }}
                  id={`faq-item-${index}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="font-manrope font-medium text-gray-700 text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-manrope font-semibold text-lg text-gray-800 pr-4 text-left">
                      {faq.question}
                    </h3>
                  </div>
                  <svg
                    id={`faq-icon-${index}`}
                    className="w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ease-in-out"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={`faq-content-${index}`}
                  className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out"
                >
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <div className="p-4 mb-4">
                        <p className="font-manrope text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>

                      {faq.additionalInfo && (
                        <div className="mt-4 space-y-3">
                          {faq.additionalInfo.map((info, infoIndex) => (
                            <div
                              key={infoIndex}
                              className="flex items-start space-x-3"
                            >
                              <svg
                                className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="font-manrope text-gray-600 text-sm">
                                {info}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="font-manrope font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
                {t.ctaSection.title}
              </h2>
              <p className="font-manrope text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                {t.ctaSection.description}
              </p>

              <div className="mb-8 space-y-4">
                {t.ctaSection.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-manrope font-medium text-gray-800">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <Link to="/connect/step1">
                  <button className="font-manrope font-semibold bg-[#2B82C2] text-white px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
                    {t.ctaSection.button}
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="text-center">
                <div className="w-64 h-32 md:w-72 md:h-36 lg:w-80 lg:h-40 bg-white rounded-lg border border-gray-200 flex items-center justify-center mx-auto shadow-sm">
                  <img
                    src="/images/logo1.png"
                    alt="AGUA Logo"
                    className="w-3/4 h-auto object-contain"
                  />
                </div>
                <div className="mt-8">
                  <p className="font-manrope italic text-lg text-gray-600">
                    {t.ctaSection.quote}
                  </p>
                  <p className="font-manrope font-medium text-gray-500 mt-2">
                    {t.ctaSection.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
