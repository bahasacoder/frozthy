import type { Metadata } from "next";
import KemitraanClient from "./KemitraanClient";

export const metadata: Metadata = {
  title: "Kemitraan & Partner | Frozthy Frozen Food",
  description:
    "Bergabung menjadi Reseller, Agen, atau Mitra Titip Jual Frozthy Frozen Food di Kecamatan Sibulue, Watampone, Kabupaten Bone, dan Sulawesi Selatan.",
};

export default function KemitraanPage() {
  return <KemitraanClient />;
}
