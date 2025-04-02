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
        "UX Scout’s crawler maps your entire website, creating a visual catalog of all pages and connections. This detailed mapping gives you a clear view of your site’s structure, making it easier to spot potential navigation issues.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/assets/f1b.png"
            width={300}
            height={300}
            className="h-full w-full object-fill"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "",
      description:
        "It goes beyond simple mapping by identifying where users may face difficulties, such as slow-loading pages or complicated menus. This helps you pinpoint exactly where visitors may be getting stuck or leaving your site.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/assets/f1c.png"
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
        "The visual dashboard makes it simple to assess your site’s flow and prioritize improvements. UX Scout provides actionable recommendations to optimize navigation, ensuring a smoother experience for your visitors.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/assets/f1a.png"
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
            Comprehensive Website <br /> Crawling & Navigation
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