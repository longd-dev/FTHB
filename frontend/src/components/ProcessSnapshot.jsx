import React from "react";

const ProcessSnapshot = () => {
  return (
    <section className='bg-slate-100 py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center'>
          How the Faith Alignment Methodology Works
        </h2>

        <div className='mt-12 grid gap-6 md:grid-cols-5 text-center'>
          {[
            "Financial Pre-Screen",
            "AI Data Enrichment",
            "Rule-Based Screens",
            "Theology Review",
            "ETF Inclusion Decision",
          ].map((step, i) => (
            <div
              key={i}
              className='bg-white rounded-lg p-5 shadow-sm border border-slate-200'
            >
              <div className='text-emerald-600 font-bold text-lg'>
                Step {i + 1}
              </div>
              <p className='mt-2 font-medium'>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSnapshot;
