import ContactPage from "@/components/pages/contact";
import WhatsAppButton from "@/components/pages/cform/waform";

export default function Page() {
  return ( 
    <div className="contact-page">
      <ContactPage /> 
      <WhatsAppButton phoneNumber="6285211190139" message="Halo, saya ingin bertanya tentang produk Anda." />
    </div>
  )
} 
