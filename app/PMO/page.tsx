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
        "UX Scout analyzes your website’s performance, identifying slow-loading pages and elements that may negatively impact user experience. By highlighting performance bottlenecks, it helps you optimize load times and ensure a smoother, faster browsing experience for your visitors.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/assets/f4c.png"
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
        "It also focuses on mobile optimization, checking how your site performs across different devices and screen sizes. This ensures that users have a seamless experience, whether they’re browsing on a desktop, tablet, or smartphone.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/assets/f4b.png"
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
        "With these insights, you can improve both desktop and mobile performance, keeping users engaged and reducing bounce rates by delivering a faster, more responsive experience.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/assets/f4a.png"
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
           Performance &<br />Mobile Optimization
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