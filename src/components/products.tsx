"use client";
import { motion } from "framer-motion";

const data = [
  {
    name: "حفارات هيدروليكية",
    img: "/products/drill.png",
    line: "Heavy Earth Moving Power",
  },
  {
    name: "رافعات شوكية",
    img: "/products/forklift.png",
    line: "Warehouse & Logistics Handling",
  },
  {
    name: "مولدات طاقة",
    img: "/products/generator.png",
    line: "Industrial Power Continuity",
  },
  {
    name: "ضواغط هواء",
    img: "/products/compressor.png",
    line: "High Pressure Operation",
  },
  {
    name: "ماكينات CNC",
    img: "/products/cnc-machine.webp",
    line: "Precision Fabrication Systems",
  },
  {
    name: "معدات خطوط الإنتاج",
    img: "/products/line.avif",
    line: "Full-Scale Manufacturing Lines",
  },
];

export default function ProductsShowcase() {
  return (
    <section
      id="products"
      className="relative w-full py-32 bg-[#f7f9ff] overflow-hidden text-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#08101b]">
          معدات تشغيل ثقيلة
        </h2>
        <p className="text-xl md:text-2xl text-[#48556a] mt-4 font-light">
          تصنيع — بناء — قدرة تشغيل لا تتوقف
        </p>
      </motion.div>

      <div className="flex flex-col gap-20 max-w-7xl mx-auto px-6">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? 80 : -80, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className={`relative flex flex-col md:flex-row items-center gap-10 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.div className="relative w-full md:w-[55%] h-[350px] rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-contain group-hover:scale-110 transition duration-1500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#000000b0] to-transparent"></div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, ease: "easeOut" }}
                className="absolute bottom-6 left-6 text-white"
              >
                <h3 className="text-2xl md:text-3xl font-bold">{item.name}</h3>
                <p className="text-sm md:text-base font-light opacity-90 mt-1">
                  {item.line}
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
              className="w-full md:w-[45%] text-[#08101b]"
            >
              <p className="text-lg md:text-xl leading-relaxed font-light">
                معدات تشغيل صناعية عالية الجودة، جاهزة للعمل في بيئات ثقيلة
                ومشاريع كبرى، مزودة بتقنيات تشغيل حديثة وموثوقية تشغيل على مدار
                الساعة.
              </p>

              <motion.a
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                href="#contact"
                className="inline-block mt-8 px-10 py-3 rounded-xl text-lg font-semibold text-white bg-linear-to-r from-[#0066ff] to-[#00d0ff] shadow-lg"
              >
                اطلب الآن
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
