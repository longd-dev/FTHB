import React from "react";

const Hero = () => {
  return (
    <section className='bg-gradient-to-br from-slate-900 to-slate-800 text-white'>
      <div className='max-w-7xl mx-auto px-6 py-24 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
          Faith-Aligned Fixed-Income Investing
        </h1>
        <p className='mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto'>
          A transparent, auditable, theology-informed methodology powering a
          next-generation fixed-income ETF.
        </p>

        <div className='mt-10 flex justify-center gap-4'>
          <button className='px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-md font-semibold'>
            View Methodology
          </button>
          <button className='px-6 py-3 border border-slate-400 hover:bg-slate-700 rounded-md font-semibold'>
            Explore the Research
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
