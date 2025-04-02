"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

export default function FeaturePage() {
  const content = [
    {
      title: "",
      description:
        "UX Scout evaluates your website’s underlying code, identifying areas that could impact performance or user experience. By analyzing code quality, it helps ensure that your site is clean, efficient, and free from technical issues that may slow down performance or cause errors.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/assets/f6a.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "",
      description:
        "Based on this analysis, UX Scout provides actionable recommendations for improving your site’s functionality. Whether it’s optimizing code for faster load times, simplifying complex scripts, or fixing broken elements, the tool offers clear steps to enhance your site’s technical foundation.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/assets/f6b.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "",
      description:
        "With these recommendations, you can improve not only the user experience but also the long-term maintainability of your website, ensuring it remains fast, reliable, and scalable.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/assets/f6c.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
   
  ];

  return (
    <div className="relative">
      {/* Lamp Section */}
      <div className="h-screen">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent text-white md:text-7xl"
          >
          Code Quality &<br />Actionable Recommendations
          </motion.h1>
        </LampContainer>
      </div>

      {/* Sticky Scroll Section */}
      <div className="relative z-50 -mt-110  ">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}