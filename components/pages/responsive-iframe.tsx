import React from "react";
// import styles from "@/styles/map-frame.module.css"

export default function ResponsiveIframe({ src, title  }: { src: string; title?: string }) {
  if (!src || typeof src !== "string") {
    console.error("Invalid iframe src provided");
    return null;
  }

  return (
    <div className="w-full relative h-[40rem] mx-auto">
      <iframe
        src={src}
        title={title || "Embedded content"}
        className="w-full max-w-[92rem] h-[40rem] absolute mx-auto top-0 "
        frameBorder="0"
        allowFullScreen
        loading="lazy" // Improves performance
        referrerPolicy="no-referrer"
        
      />
    </div>
  );
}