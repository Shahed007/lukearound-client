"use client";
import React from "react";

interface EllipsisTextProps {
  text: string;
}

const EllipsisText: React.FC<EllipsisTextProps> = ({ text }) => {
  return (
    <p className="text-base mt-[22px] text-gray-900">
      {text}
    </p>
  );
};

export default EllipsisText;
