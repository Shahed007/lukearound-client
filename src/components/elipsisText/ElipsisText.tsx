"use client";
import React, { useState } from "react";

interface EllipsisTextProps {
  text: string;
  charLimit?: number; // optional, default to 120
}

const EllipsisText: React.FC<EllipsisTextProps> = ({
  text,
  charLimit = 120,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <p className="text-paragraph text-base mt-[22px]">
      {expanded || text.length <= charLimit
        ? text
        : `${text.substring(0, charLimit)}...`}{" "}
      {text.length > charLimit && (
        <button
          onClick={toggleExpanded}
          className="font-bold cursor-pointer hover:text-background"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </p>
  );
};

export default EllipsisText;
