"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
export default function Drawer({ open, onClose, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return createPortal(
    <>
      {/* backdrop part */}
      <div
        className={`backdrop-blur-sm fixed inset-0 w-full h-screen bg-secondary-800 bg-opacity-30 ${
          open ? "block" : "pointer-events-none hidden"
        }`}
        onClick={onClose}
      ></div>
      {/* drawer part */}
      {/* the reason why two dive is side by side not inside bacdrop div is that on display hidden of backdrop div we cannot assign animations */}
      <div
        className={`fixed right-0 top-0 w-[250px] h-full transition-transform transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <div className="bg-secondary-0 max-h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </>,
    document.body
  );
}
