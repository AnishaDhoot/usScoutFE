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
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [responseData, setResponseData] = useState(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    setIsLoading(true);
    setError("");
    setResponseData(null);
  
    // Define the base URL consistently
    const baseUrl = ' https://ea70-128-185-112-57.ngrok-free.app';
  
    try {
      // Test if the backend is reachable first
      await fetch(baseUrl, {
        method: 'HEAD',
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      }).catch(() => {
        throw new Error("Backend server is not reachable");
      });
  
      // Make the actual request to the same base URL
      const response = await fetch(`${baseUrl}/analyse`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
        },
        body: JSON.stringify({ url: inputValue }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      setResponseData(data);
      console.log('API Response:', data);
    } catch (error) {
      console.error('API Error:', error);
      setError(error instanceof Error ? error.message : 'Failed to analyze URL');
    } finally {
      setIsLoading(false);
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