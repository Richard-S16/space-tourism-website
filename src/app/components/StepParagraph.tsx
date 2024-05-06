import React from "react";

type StepParagraphTypes = {
  children: React.ReactNode;
};

export default function StepParagraph({ children }: StepParagraphTypes) {
  return (
    <div className="text-center">
      <p className="font-BarlowCondensed uppercase">
        <span className="mr-[18px] font-bold opacity-25">01</span>
        <span className="tracking-[2.7px]">{children}</span>
      </p>
    </div>
  );
}
