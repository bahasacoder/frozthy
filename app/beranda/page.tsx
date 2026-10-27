import Image from "next/image";
import HeroPage from "@/components/blocks/hero/hero-page";
import MarqueeCategories from "@/components/blocks/marquee-categories/marquee-categories";
import ProductHome from "@/components/blocks/product/product-home";
import FooterPanel from "@/components/blocks/footer/footer-panel";

export default function Beranda() {
  return (
    <>
     <HeroPage />
     <MarqueeCategories />
     <ProductHome />
     <FooterPanel />

    </>
  );
}
