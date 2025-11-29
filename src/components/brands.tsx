"use client";
import { motion } from "framer-motion";

const brands = [
  { logo: "/brands/behr.png", name: "BEHR", field: "Cooling Systems" },
  { logo: "/brands/glyco.png", name: "GLYCO", field: "Engine Bearings" },
  { logo: "/brands/ufi.png", name: "UFI", field: "Filters Systems" },
  { logo: "/brands/valeo.png", name: "Valeo", field: "Ignition & Clutch" },
  { logo: "/brands/iveco.png", name: "IVECO", field: "Truck OEM Parts" },
  { logo: "/brands/zf.png", name: "ZF", field: "Transmission & Gear" },
];

export function Brands() {
  return (
    <section id="brands" className="py-28 bg-[#f8fbff] text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#081019]">
        الماركات العالمية التي نوفرها
      </h2>
      <p className="text-xl text-[#4f5e70] mt-4">
        قطع أصلية بضمان تشغيلي موثوق
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 mt-16">
        {brands.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center hover:shadow-2xl transition"
          >
            <img src={b.logo} className="w-28 h-28 object-contain" />
            <h3 className="mt-3 font-bold text-xl">{b.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{b.field}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
