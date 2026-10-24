"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { copyText } from "@/lib/toast";

export default function CopyEmailButton({ email, className = "" }: { email: string; className?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        await copyText(email, "Email");
        setDone(true);
        setTimeout(() => setDone(false), 2000);
      }}
      className={className}
    >
      {done ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      {done ? "Copied" : "Copy email"}
    </button>
  );
}
