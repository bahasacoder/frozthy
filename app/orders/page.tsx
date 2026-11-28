import type { Metadata } from "next";
import CekPesananClient from "./CekPesananClient";

export const metadata: Metadata = {
  title: "Cek Status Pesanan | Frozthy Frozen Food",
  description:
    "Lacak status pengiriman dan konfirmasi pesanan Frozthy Frozen Food area Sibulue, Watampone, Kabupaten Bone, dan sekitarnya.",
};

export default function CekPesananPage() {
  return <CekPesananClient />;
}
