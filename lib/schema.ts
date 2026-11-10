// lib/schema.ts
import { z } from "zod";

export const FormDataSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

export type ContactFormData = z.infer<typeof FormDataSchema>;

export const TodaysDataSchema = z.object({
    nama: z.string().min(1, "Nama Barang is required"),
    harga: z.number().positive("Harga must be a positive number"),
    kategori: z.string().min(1, "Kategori is required"),
    deskripsi: z.string().min(1, "Deskripsi is required"),
    lokasi: z.string().min(1, "Lokasi is required"),    
    gambar1: z.string().url("Gambar 1 must be a valid URL"),
    gambar2: z.string().url("Gambar 2 must be a valid URL").optional(),
    gambar3: z.string().url("Gambar 3 must be a valid URL").optional(),
    map: z.string().url("Map must be a valid URL").optional(),
    penjual: z.string().min(1, "Penjual is required"),
    kontak: z.string().min(1, "Kontak is required"),
    alamat: z.string().min(1, "Alamat is required"),
});
export type TodaysData = z.infer<typeof TodaysDataSchema>;