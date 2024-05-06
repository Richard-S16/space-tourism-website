"use client";

import React, { useState } from "react";
import StepParagraph from "./StepParagraph";
import Image from "next/image";

type DestinationNavTypes = {
  className?: string;
};

export default function DestinationNav({ className }: DestinationNavTypes) {
  const [selectedDestination, setSelectedDestination] = useState("moon");
  const destinations = ["moon", "mars", "europa", "titan"];

  return (
    <>
      <StepParagraph>Pick your destination</StepParagraph>
      <Image
        className="mx-auto mt-8"
        src={`/assets/destination/image-${selectedDestination}.webp`}
        alt="Planet Image"
        width={170}
        height={170}
        quality={100}
      />

      <div
        className={`${
          className ? className : ""
        } flex justify-center space-x-7`}
      >
        {destinations.map((destination) => (
          <p
            key={destination}
            className={`${
              destination === selectedDestination
                ? "border-b-[3px] border-b-color-3 pb-2 text-white"
                : "border-b-[3px] border-b-transparent pb-2 text-color-2"
            }`}
            onClick={() => setSelectedDestination(destination)}
          >
            {destination.toUpperCase()}
          </p>
        ))}
      </div>

      <h3 className="mt-[23px] text-center">
        {selectedDestination.toUpperCase()}
      </h3>

      <p className="mx-6 text-center text-[15px] leading-[25px] text-color-2">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
    </>
  );
}
