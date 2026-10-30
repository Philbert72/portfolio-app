"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useToast } from "@/lib/toast";

export default function Toaster() {
  const message = useToast();
  return (
    <div aria-live="polite" role="status" className="pointer-events-none fixed inset-x-0 bottom-6 z-[80] flex justify-center px-4">
      <AnimatePresence>
        {message && (
          <motion.div
            key={message}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 rounded-full bg-ink py-2.5 pl-3 pr-4 text-sm font-medium text-paper shadow-lift"
          >
            <span className="grid size-5 place-items-center rounded-full bg-hi text-hi-ink">
              <Check size={13} strokeWidth={3} aria-hidden="true" />
            </span>
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
