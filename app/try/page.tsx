"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import GraphVisualization from "@/app/graph/graph";
interface RootData {
  url: string;
  text: string;
}

interface RestData {
  url: string;
  text: string;
}

interface ApiResponse {
  url: string;
  images: {
    root: RootData;
    rest: RestData[];
  };
}

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
  const [data, setData] = useState<ApiResponse | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const baseUrl = 'https://ea70-128-185-112-57.ngrok-free.app';
  
    try {
      await fetch(baseUrl, {
        method: 'HEAD',
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      }).catch(() => {
        throw new Error("Backend server is not reachable");
      });

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
  
      const responseData = await response.json();
      console.log('API Response:', responseData);
      setData(responseData);
      setShowDetails(false);
    } catch (error) {
      console.error('API Error:', error instanceof Error ? error.message : 'Failed to analyze URL');
    }
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const adjacencyMatrix = Array.from({ length: 20 }, () =>
    Array.from({ length: 20 }, () => (Math.random() > 0.85 ? 1 : 0))
  );

  // Ensure no node is completely isolated
  adjacencyMatrix.forEach((row, i) => {
    if (row.every(val => val === 0)) {
      const j = Math.floor(Math.random() * 20);
      adjacencyMatrix[i][j] = 1;
      adjacencyMatrix[j][i] = 1;
    }
  });

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
          Whether you&apos;re optimizing for better navigation, higher retention, or
          improved SEO, UX Scout gives you the data-driven roadmap to success.
        </h2>
        <h3 className="font-[helvetica] text-xl sm:text-2xl mt-8 px-4 sm:px-12">
          Try it now and transform your website into a seamless experience for
          every visitor!
        </h3>
      </div>

      <div className="w-full mb-20 mt-16 z-10">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>

      {data && (
        <div className="w-full max-w-4xl mx-auto mb-20 p-6 bg-[#2A2A2C] rounded-lg">
          {/* Root Image and Text */}
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0 w-1/2 h-64 overflow-hidden rounded-lg">
              <Image
                src={data.images.root.url}
                alt={data.images.root.text}
                width={500}
                height={500}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-1/2">
              <p className="text-lg whitespace-pre-wrap">{data.images.root.text}</p>
            </div>
          </div>

          {/* Access Details Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={toggleDetails}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors"
            >
              {showDetails ? "Hide Details" : "Access Details"}
            </button>
          </div>

          {/* Rest Images and Texts */}
          {showDetails && (
            <div className="space-y-6">
              {data.images.rest.map((item, index) => (
                <div key={index} className="flex items-start gap-6 p-4 bg-[#3A3A3C] rounded-lg">
                  <div className="flex-shrink-0 w-1/2 h-48 overflow-hidden rounded-lg">
                    <Image
                      src={item.url}
                      alt={item.text}
                      width={400}
                      height={400}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="w-1/2">
                    <p className="text-lg whitespace-pre-wrap">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
       <div className="w-full max-w-6xl mb-10 p-6">
        <h2 className="text-2xl font-bold text-[#f8f9fa] mb-6">Graph Visualization</h2>
        <div className="w-full h-full">
          <GraphVisualization adjacencyMatrix={adjacencyMatrix} />
        </div>
      </div>
      <Image
        src="/assets/bg.png"
        width={1920}
        height={400}
        className="w-full h-[100%] object-cover"
        alt="UX Scout Demo"
      />
    </div>
  );
}