"use client";
import React from "react";

function WhatsAppButton({ phoneNumber, message }: { phoneNumber: string; message: string }) {
  // Encode message to make it URL-safe
  const encodedMessage = encodeURIComponent(message);

  // WhatsApp Web link format
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#25D366",
        color: "#fff",
        borderRadius: "5px",
        textDecoration: "none",
        fontWeight: "bold"
      }}
    >
      Send WhatsApp Message
    </a>
  );
}

export default WhatsAppButton;
