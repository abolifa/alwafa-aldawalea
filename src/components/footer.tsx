"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0b1220] text-white pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,120,255,0.23),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),#0b1220)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1 }}
        className="container mx-auto px-6 max-w-7xl grid md:grid-cols-4 gap-12 relative z-10"
      >
        <div className="space-y-5 col-span-2">
          <img
            src="/meta/logo-icon-white.png"
            className="w-22 brightness-110 drop-shadow-[0_0_20px_rgba(0,115,255,0.4)]"
          />
          <p className="text-gray-300 leading-relaxed text-lg max-w-sm">
            شركة الوفاء الدولية — استيراد المعدات الثقيلة، تجهيز المصانع، توفير
            قطع الغيار، وشريك صناعي يعتمد عليه في مشاريع الطاقة والتشغيل.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-2 text-[#4FC3F7]">روابط سريعة</h3>
          <ul className="space-y-3 text-gray-300 text-lg">
            <li>
              <Link to="/" className="hover:text-[#4FC3F7]">
                الرئيسية
              </Link>
            </li>
            <li>
              <a href="#about" className="hover:text-[#4FC3F7]">
                من نحن
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#4FC3F7]">
                المنتجات
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#4FC3F7]">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-2 text-[#4FC3F7]">
            التواصل المباشر
          </h3>

          <div className="flex gap-3 items-center text-gray-300">
            <Phone className="w-5 h-5 text-[#4FC3F7]" />
            <a className="font-medium" href="tel:+218919407227" dir="ltr">
              +218 91 940 7227
            </a>
          </div>

          <div className="flex gap-3 items-center text-gray-300">
            <Mail className="w-5 h-5 text-[#4FC3F7]" />
            <a
              className="font-medium"
              href="mailto:info@alwafaaldawalea.com.ly"
              dir="ltr"
            >
              info@alwafaaldawalea.com.ly
            </a>
          </div>

          <div className="flex gap-3 items-start text-gray-300">
            <MapPin className="w-5 h-5 text-[#4FC3F7] mt-1" />
            <span>مصراتة - شارع سعدون السويحلي</span>
          </div>

          <div className="flex items-center gap-4 pt-3 text-gray-300">
            <a
              href="https://wa.me/218919407227"
              target="_blank"
              className="w-10 h-10 rounded-full bg-[#ffffff14] hover:bg-[#4FC3F7] flex items-center justify-center transition"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@alwafaaldawalea.com.ly"
              target="_blank"
              className="w-10 h-10 rounded-full bg-[#ffffff14] hover:bg-[#4FC3F7] flex items-center justify-center transition"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              className="w-10 h-10 rounded-full bg-[#ffffff14] hover:bg-[#4FC3F7] flex items-center justify-center transition"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-16 text-center text-gray-400 text-sm tracking-wide"
      >
        © {new Date().getFullYear()} شركة الوفاء الدولية — جميع الحقوق محفوظة.
      </motion.div>
    </footer>
  );
}
