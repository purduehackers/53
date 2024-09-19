"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Site() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", inputValue);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-white flex flex-col items-center justify-center p-4 gap-12">
      <h1 className="text-7xl md:text-5xl font-bold text-center text-gray-800">
        53
      </h1>
      <div className="flex flex-col">
        <h1 className="text-gray-800 font-bold text-2xl">
          🌿 How to decode the vine
        </h1>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/vine-key.jpg"
            alt="Placeholder image"
            className="h-[600px] w-auto"
          />
        </div>
      </div>

      <p className="text-center text-gray-800 text-xl">The password is horse</p>

      <form onSubmit={handleSubmit} className="w-full max-w-md mb-8">
        <div className="flex flex-col justify-center items-end sm:flex-row gap-4">
          <div className="flex flex-col w-full sm:w-auto">
            <label htmlFor="creations" className="text-gray-800">
              Where do the creations belong?
            </label>
            <Input
              type="text"
              placeholder="The creations belong in..."
              value={inputValue}
              id="creations"
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-grow text-gray-800"
            />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Check answer
          </Button>
        </div>
      </form>
    </div>
  );
}
