"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export default function TryPage() {
  const placeholders = [
    "How can I get started with UX Scout?",
    "What are the benefits of using UX Scout?",
    "How do I schedule a demo with a UX Scout expert?",
    "What is the cost of using UX Scout?",
    "Is UX Scout free to use?",
    "Can I get a free trial of UX Scout?",
  ];

  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    
    try {
      const response = await fetch('http://localhost:3001/analyse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: inputValue,
        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen px-6 text-center bg-[#1A1A1C] text-white overflow-hidden">
      <div className="w-full pt-10">
        <h1 className="Fraunces-font text-4xl sm:text-7xl mb-8">
          Get Started with UX Scout Today!
        </h1>
        <h2 className="font-[helvetica] text-xl sm:text-2xl mt-16 px-4 sm:px-12">
          Experience the power of smart UX insights with UX Scout. Our platform
          automatically maps your website, detects user friction points, and
          provides ranked solutions to improve engagement and conversions.
          Whether you're optimizing for better navigation, higher retention, or
          improved SEO, UX Scout gives you the data-driven roadmap to success.
        </h2>
        <h3 className="font-[helvetica] text-xl sm:text-2xl mt-8 px-4 sm:px-12">
          Try it now and transform your website into a seamless experience for
          every visitor!
        </h3>
      </div>

      <div className="w-full mb-85 z-10">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>

      <div className="fixed bottom-0 left-0 w-full">
  <Image
    src="/assets/bg.png"
    width={1920}
    height={400}
    className="w-full h-[100%] object-cover"
    alt="UX Scout Demo"
  />
</div>
    </div>
  );
}