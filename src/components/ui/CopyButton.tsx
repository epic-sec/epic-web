"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      onClick={handleCopy}
      title="Copy"
      className={
        className ??
        "p-1.5 rounded-md text-epic-text-secondary hover:text-epic-text-primary hover:bg-white/5 transition-colors"
      }
    >
      {copied ? <Check className="w-3.5 h-3.5 text-epic-accent" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}
