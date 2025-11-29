"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 bg-[#f4f8ff] text-[#0b1524] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto px-6 max-w-7xl text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide text-[#0a1b33]">
          من نحن
        </h2>

        <p className="mt-5 text-lg md:text-xl text-[#4f5b6b] max-w-3xl mx-auto leading-relaxed">
          شركة الوفاء الدولية – اسم يرتبط بالقوة، الاعتمادية، والإنجاز الصناعي.
          نعمل في مجال استيراد الآلات والمعدات الثقيلة، تجهيز المصانع والورش،
          وتوفير القطع الأصلية بجودة عالمية ومعايير تشغيل دقيقة تلائم كل مشروع.
        </p>
      </motion.div>

      <div className="container mx-auto max-w-7xl px-6 mt-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
        >
          <img
            src="/images/about.png"
            alt="Company Industrial Showcase"
            className="w-full h-full object-cover opacity-95"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0a1b33]">
            نحن نبني القوة الصناعية
          </h3>

          <p className="text-[#566479] leading-relaxed text-lg">
            نوفّر حلول توريد وتجهيز وتشغيل مشاريع ثقيلة من المستوى العالمي، مع
            قدرة عالية على توفير معدات تشغيل، خطوط إنتاج، وقطع غيار أصلية مع
            كبريات المصانع الدولية.
          </p>

          <div className="grid md:grid-cols-2 gap-5 pt-3">
            <div className="rounded-xl bg-white shadow-lg px-6 py-5 text-[#0d1d33] font-semibold border border-[#ccd4e6]">
              معدات تشغيل ثقيلة
            </div>
            <div className="rounded-xl bg-white shadow-lg px-6 py-5 text-[#0d1d33] font-semibold border border-[#ccd4e6]">
              تجهيز مصانع وورش
            </div>
            <div className="rounded-xl bg-white shadow-lg px-6 py-5 text-[#0d1d33] font-semibold border border-[#ccd4e6]">
              قطع غيار أصلية
            </div>
            <div className="rounded-xl bg-white shadow-lg px-6 py-5 text-[#0d1d33] font-semibold border border-[#ccd4e6]">
              استيراد عالمي مباشر
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
