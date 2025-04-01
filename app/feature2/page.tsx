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
        "UX Scout tracks how visitors interact with your site, providing insights into key behaviors like clicks, time spent on pages, and scroll depth. This helps you identify which areas of your site are engaging and which may need improvement.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
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
        "By pinpointing where users drop off or struggle, you can make targeted changes to improve the user experience. For example, you can optimize navigation menus, fix slow-loading pages, or address visual issues like layout inconsistencies. ",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
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
        "With these insights, you can optimize your site to boost engagement and drive higher conversions, ensuring that every change is backed by real user data. ",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
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
           User Behavior &<br /> Engagement Analysis
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