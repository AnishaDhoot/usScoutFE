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
        "UX Scout provides detailed insights into how users interact with your site, tracking key stats like page views, session duration, and engagement rates. This helps you understand how visitors navigate your content and what keeps them interested.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/assets/f5a.png"
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
        "The attention span analysis focuses on how long users stay engaged with specific pages or sections. By identifying where attention drops off, you can pinpoint areas of your site that may need clearer messaging or more compelling content to hold user interest.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/assets/f5b.png"
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
        "With these insights, you can tailor your content and design to better capture and retain your audience’s attention, ultimately improving user experience and boosting conversions.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/assets/f5c.png"
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
          User Stats &<br />Attention Span Analysis
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