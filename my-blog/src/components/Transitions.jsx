"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Transitions({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: -50 }} // Start faded and 50px above
        animate={{ opacity: 1, y: 0 }} // Animate to fully visible and in place
        exit={{ opacity: 0, y: 50 }} // Fade out while moving 50px down
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
