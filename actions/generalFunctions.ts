export const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);

export function Str_Random(length: number) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        
        // Loop to generate characters for the specified length
        for (let i = 0; i < length; i++) {
            const randomInd = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomInd);
        }
        return result;
}

// export function formatRibuan(amount: number): string {
//   return new Intl.NumberFormat("id-ID", {
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   }).format(amount);
// }

// function formatRibuan(amount: number): string {
//   return Math.round(amount || 0)
//     .toString()
//     .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// }

export function formatRibuan(amount: number | string): string {
  const numericValue = Math.round(Number(amount) || 0);
  return numericValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const formatIDR = (amount: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(amount)

export const generateUUID = (): string => {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) => {
    const randomValue =
      typeof crypto !== "undefined"
        ? crypto.getRandomValues(new Uint8Array(1))[0]
        : Math.floor(Math.random() * 256);

    return (
      +c ^ (randomValue & (15 >> (+c / 4)))
    ).toString(16);
  });
};

export const generateShortId = (): string => {
  return generateUUID().replace(/-/g, "").slice(0, 6).toUpperCase();
};

// export const generateCartCode = (): string => {
//   const now = new Date();

//   const year = now.getFullYear();
//   const month = String(now.getMonth() + 1).padStart(2, "0");
//   const day = String(now.getDate()).padStart(2, "0");
//   const hours = String(now.getHours()).padStart(2, "0");
//   const minutes = String(now.getMinutes()).padStart(2, "0");

//   const shortId = generateShortId();

//   return `${year}:${month}:${day}-${hours}:${minutes}-FRZ-${shortId}`;
// };

export const generateCartCode = (timestamp: number): string => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Makassar",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(timestamp); // Notice: pass timestamp number directly, NO `new Date()` needed!

  const getPart = (type: string) =>
    parts.find((p) => p.type === type)?.value || "00";

  const shortId = generateShortId();

  return `${getPart("year")}:${getPart("month")}:${getPart("day")}-${getPart("hour")}:${getPart("minute")}-FRZ-${shortId}`;
};