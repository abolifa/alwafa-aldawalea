"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Factory, Truck } from "lucide-react";

const stats = [
  { icon: Factory, num: "50+", label: "شراكات مصانع دولية" },
  { icon: Truck, num: "200+", label: "معدات موردة سنوياً" },
  { icon: ShieldCheck, num: "99%", label: "موثوقية توريد وتشغيل" },
  { icon: ShieldCheck, num: "35", label: "مشاريع ناجحة" },
];

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="relative w-full py-32 bg-[#fafeff] text-[#0e1827] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          لماذا تختارنا؟
        </h2>
        <p className="mt-5 text-xl md:text-2xl text-[#4d5f75] font-light leading-relaxed">
          لأنك تحتاج أكثر من معدات — تحتاج شريك تشغيل صناعي يضمن القوة
          والاستمرارية.
        </p>
      </motion.div>

      <div className="container max-w-7xl mx-auto px-6 mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.08)] py-12 px-5 hover:shadow-[0_20px_70px_rgba(0,0,0,0.12)] transition"
            >
              <Icon className="w-14 h-14 text-[#0078ff] mx-auto" />
              <h3 className="text-xl md:text-3xl font-extrabold mt-5">
                {s.num}
              </h3>
              <p className="mt-2 text-[#4d5f75] text-lg font-medium">
                {s.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
