"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("جاري الإرسال...");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("to", "info@alwafaaldawalea.com.ly");

    try {
      const res = await fetch("https://relay.eratech.com.ly/send", {
        method: "POST",
        body: formData,
      });

      const txt = await res.text();
      if (txt.includes("OK")) {
        setStatus("✔ تم الإرسال بنجاح");
        form.reset();
      } else {
        setStatus("⚠ حدث خطأ أثناء الإرسال");
      }
    } catch {
      setStatus("⚠ فشل الاتصال بالخادم");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-32 overflow-hidden bg-[#f1f5fb] text-[#0a141f]"
      dir="rtl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0078ff15,transparent_75%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#e9eef8_90%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="container relative z-10 mx-auto px-6 max-w-6xl text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-5">
          تواصل <span className="text-[#0078ff]">معنا</span>
        </h2>
        <p className="text-xl text-[#4b5c72] max-w-2xl mx-auto leading-relaxed">
          شركة الوفاء الدولية — شريكك الصناعي في استيراد المعدات الثقيلة، تجهيز
          المصانع، وتوفير قطع الغيار الأصلية.
        </p>
        <div className="flex justify-center mt-8">
          <span className="block w-24 h-1 rounded-full bg-[#0078ff]" />
        </div>
      </motion.div>

      <div className="container mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-start z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="p-10 rounded-3xl bg-white border border-[#0078ff33] shadow-[0_0_45px_rgba(0,0,0,0.06)] space-y-8"
        >
          <h3 className="text-3xl font-extrabold text-[#0078ff]">
            بيانات التواصل
          </h3>
          <ul className="space-y-6 text-lg text-[#334155]">
            <li className="flex gap-3 items-start">
              <MapPin className="w-6 h-6 text-blue-500" />
              شارع سعدون السويحلي، مصراتة - ليبيا
            </li>

            <li className="flex gap-3 items-start">
              <Phone className="w-6 h-6 text-blue-500" />
              <a
                href="tel:+218919407227"
                className="font-bold underline"
                dir="ltr"
              >
                +218 91 940 7227
              </a>
            </li>

            <li className="flex gap-3 items-start">
              <Mail className="w-6 h-6 text-blue-500" />
              <a
                href="mailto:info@alwafaaldawalea.com.ly"
                className="font-bold underline"
                dir="ltr"
              >
                info@alwafaaldawalea.com.ly
              </a>
            </li>
          </ul>
          <iframe
            className="w-full h-[260px] rounded-2xl border border-gray-300"
            src="https://maps.google.com/maps?q=32.34627790980508,15.104764996362238&z=15&output=embed"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="bg-white p-10 rounded-3xl border border-[#0078ff33] shadow-[0_0_45px_rgba(0,0,0,0.05)] flex flex-col space-y-6"
        >
          <input
            name="name"
            required
            placeholder="الاسم الكامل"
            className="w-full border border-gray-300 rounded-xl p-4 text-lg focus:border-[#0078ff] outline-none"
          />
          <input
            name="email"
            required
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full border border-gray-300 rounded-xl p-4 text-lg focus:border-[#0078ff] outline-none"
          />
          <input
            name="phone"
            placeholder="رقم الهاتف"
            dir="ltr"
            className="w-full border border-gray-300 rounded-xl p-4 text-lg focus:border-[#0078ff] outline-none"
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="أكتب رسالتك بالتفصيل"
            className="w-full border border-gray-300 rounded-xl p-4 text-lg resize-none focus:border-[#0078ff] outline-none"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl text-white text-xl font-bold bg-[#0078ff] hover:bg-[#0066d9] flex items-center justify-center gap-2"
          >
            إرسال الرسالة <Send className="w-6 h-6" />
          </button>

          <p className="text-center font-bold text-lg text-[#0ea86c]">
            {status}
          </p>
        </motion.form>
      </div>
    </section>
  );
}
