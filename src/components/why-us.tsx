"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Factory, Wrench } from "lucide-react";

const reasons = [
  {
    title: "قطع أصلية ومضمونة",
    desc: "نوفّر قطع تشغيل عالية الجودة مع معايير تصنيع OEM معتمدة.",
    icon: ShieldCheck,
  },
  {
    title: "توريد مباشر بدون وسطاء",
    desc: "شحن سريع وتوفير مستمر لقطع Iveco وأنظمة تشغيل متكاملة.",
    icon: Truck,
  },
  {
    title: "خبرة في القطع الصناعية",
    desc: "نساعدك في اختيار القطعة المناسبة حسب رقم الهيكل أو رمز القطعة.",
    icon: Factory,
  },
  {
    title: "حلول تشغيل كاملة",
    desc: "من الفلاتر والمضخات إلى أنظمة الهواء والحساسات بنطاق توريد شامل.",
    icon: Wrench,
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-32 bg-[#f8fbfe] text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold text-[#07111e]">
        لماذا تختارنا؟
      </h2>

      <p className="mt-6 text-xl md:text-2xl text-[#4d5c70] max-w-3xl mx-auto leading-relaxed">
        لأن قطع التشغيل الجيدة ليست سلعة — بل عامل تشغيل وموثوقية أساسية لعمر
        الشاحنة واستمرار العمل.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 max-w-7xl mx-auto px-6">
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="group bg-white rounded-3xl py-12 px-6 shadow-lg hover:shadow-2xl transition flex flex-col items-center"
            >
              <Icon className="w-14 h-14 text-blue-600 group-hover:scale-110 transition" />
              <h3 className="mt-5 text-xl font-bold text-[#0f1a28]">
                {r.title}
              </h3>
              <p className="text-[#5c6c82] mt-3 text-base leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
