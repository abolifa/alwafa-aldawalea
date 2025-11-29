"use client";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Engine Components",
    arabic: "قطع المحرك",
    img: "/products/engine.png",
  },
  {
    name: "Filtration Systems",
    arabic: "أنظمة الفلترة",
    img: "/products/filter.jpg",
  },
  {
    name: "Cooling System Parts",
    arabic: "قطع نظام التبريد",
    img: "/products/cooling.png",
  },
  {
    name: "Transmission & Gearbox",
    arabic: "قطع ناقل الحركة والتروس",
    img: "/products/gearbox.webp",
  },
  {
    name: "Electrical & Sensors",
    arabic: "حساسات ودوائر كهربائية",
    img: "/products/electric.png",
  },
  {
    name: "Air Brake Systems",
    arabic: "نظام الهواء والفرامل",
    img: "/products/brake.avif",
  },
  {
    name: "Body & Exterior Panels",
    arabic: "هياكل خارجية",
    img: "/products/body.png",
  },
  {
    name: "Tensioners & Pulleys",
    arabic: "السيور والبكرات",
    img: "/products/tensiner.png",
  },
  {
    name: "Suspension Parts",
    arabic: "قطع نظام التعليق",
    img: "/products/suspension.webp",
  },
];

export function Products() {
  return (
    <section id="products" className="py-32 bg-[#fcfeff] text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#07131f]">
        مجالات قطع الغيار
      </h2>
      <p className="mt-3 text-xl text-[#4a586c]">
        توريد مباشر لقطع تشغيل صناعية متعددة
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 mt-16">
        {categories.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition flex flex-col items-center"
          >
            <img src={c.img} className="w-full h-52 object-contain" />
            <h3 className="mt-4 text-xl font-bold text-[#07131f]">
              {c.arabic}
            </h3>
            <p className="text-gray-500">{c.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
