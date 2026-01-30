import React from "react";

const ValueProps = () => {
  const VALUE_PROPS = [
    {
      id: 1,
      title: "Security-Level Analysis",
      desc: "Every bond is evaluated at the CUSIP and collateral level — including ABS, MBS, and CLOs.",
    },
    {
      id: 2,
      title: "AI + Theology Review",
      desc: "Natural language processing meets human theological judgment for consistent, explainable outcomes.",
    },
    {
      id: 3,
      title: "Transparent Scoring",
      desc: "A published 0–100 Faith Alignment Score with documented rules, caps, and audit trails.",
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
            className='bg-white rounded-xl p-6 shadow-sm border border-slate-200'
          >
            <h3 className='text-xl font-semibold'>{item.title}</h3>
            <p className='mt-3 text-slate-600'>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;
