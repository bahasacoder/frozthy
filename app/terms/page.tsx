import type { Metadata } from "next";
import SyaratKetentuanClient from "./SyaratKetentuanClient";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan | Frozthy Frozen Food",
  description:
    "Syarat dan ketentuan pemesanan, pembayaran, pengiriman suhu beku, serta garansi produk Frozthy Frozen Food di Sibulue, Kabupaten Bone, dan sekitarnya.",
};

export default function SyaratKetentuanPage() {
  return <SyaratKetentuanClient />;
}
