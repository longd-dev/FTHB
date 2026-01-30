import React from "react";
import {
  HiOutlineShieldCheck,
  HiOutlineCpuChip,
  HiOutlineChartBar,
} from "react-icons/hi2";

const ValueProps = () => {
  const VALUE_PROPS = [
    {
      id: 1,
      title: "Security-Level Analysis",
      desc: "Every bond is evaluated at the CUSIP and collateral level — including ABS, MBS, and CLOs.",
      icon: HiOutlineShieldCheck,
    },
    {
      id: 2,
      title: "AI + Theology Review",
      desc: "Natural language processing meets human theological judgment for consistent, explainable outcomes.",
      icon: HiOutlineCpuChip,
    },
    {
      id: 3,
      title: "Transparent Scoring",
      desc: "A published 0–100 Faith Alignment Score with documented rules, caps, and audit trails.",
      icon: HiOutlineChartBar,
    },
  ];

  return (
    <section className='max-w-7xl mx-auto px-6 py-20'>
      <h2 className='text-3xl font-bold text-center'>
        Built for Integrity, Accountability, and Impact
      </h2>

      <div className='mt-12 grid gap-8 md:grid-cols-3'>
        {VALUE_PROPS.map((item) => (
          <div
            key={item.id}
            className='bg-white rounded-xl p-6 shadow-sm border border-slate-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'
          >
            <item.icon className='h-10 w-10 text-indigo-600 mb-4' />
            <h3 className='text-xl font-semibold'>{item.title}</h3>
            <p className='mt-3 text-slate-600'>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;
