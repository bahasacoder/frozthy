"use client";

const WHATSAPP_NUMBER = "6281268052229";

export default function FloatingWhatsApp() {
  const handleChatClick = () => {
    const chatMessage =
      `Halo Admin *Frozthy Frozen Food*! 👋\n` +
      `Saya mau tanya-tanya seputar menu sehat & pengiriman di area Sibulue / Bone.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      chatMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 group">
      {/* Label Tooltip (Muncul saat di-hover di Desktop) */}
      <span className="hidden sm:inline-block px-3.5 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-200 rounded-xl shadow-md opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
        Tanya Admin Frozthy
      </span>

      {/* Tombol Bulat Melayang */}
      <button
        type="button"
        onClick={handleChatClick}
        aria-label="Ngobrol dengan Admin Frozthy via WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white shadow-lg shadow-emerald-600/30 transition-all duration-200 cursor-pointer"
      >
        {/* Efek Denyut Halus (Ping) */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-30 animate-ping pointer-events-none" />

        {/* Ikon WhatsApp SVG */}
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7 relative z-10"
          aria-hidden="true"
        >
          <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.46 1.71 6.404L3.2 28.8l6.564-1.72a12.744 12.744 0 0 0 6.24 1.62h.006c7.058 0 12.796-5.74 12.796-12.8 0-3.42-1.332-6.636-3.75-9.054A12.716 12.716 0 0 0 16.004 3.2zm0 23.336h-.004a10.61 10.61 0 0 1-5.41-1.482l-.388-.23-3.896 1.022 1.04-3.798-.252-.402a10.584 10.584 0 0 1-1.624-5.646c0-5.862 4.77-10.632 10.636-10.632 2.84 0 5.51 1.106 7.518 3.116a10.564 10.564 0 0 1 3.114 7.52c0 5.864-4.772 10.632-10.634 10.632zm5.832-7.964c-.32-.16-1.892-.934-2.186-1.04-.294-.106-.506-.16-.72.16-.212.32-.826 1.04-1.012 1.254-.186.212-.374.24-.694.08-.32-.16-1.35-.498-2.572-1.588-.95-.848-1.592-1.896-1.778-2.216-.186-.32-.02-.492.14-.652.144-.144.32-.374.48-.56.16-.186.212-.32.32-.534.106-.212.054-.4-.026-.56-.08-.16-.72-1.734-.986-2.374-.26-.624-.524-.54-.72-.55l-.614-.01c-.212 0-.56.08-.852.4-.294.32-1.12 1.094-1.12 2.668s1.146 3.094 1.306 3.308c.16.212 2.256 3.444 5.466 4.83.764.33 1.36.526 1.824.674.766.244 1.464.21 2.016.126.614-.092 1.892-.774 2.158-1.52.266-.746.266-1.386.186-1.52-.08-.134-.292-.214-.612-.374z" />
        </svg>
      </button>
    </div>
  );
}
