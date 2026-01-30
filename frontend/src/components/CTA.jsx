import React from "react";
import { HiArrowRight } from "react-icons/hi2";

const CTA = () => {
  return (
    <section className='bg-slate-900 text-white py-20 rounded-md mb-3'>
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold'>
          Invest with Principle. Grow with Purpose.
        </h2>
        <p className='mt-4 text-slate-300 max-w-2xl mx-auto'>
          Join the next generation of fixed-income investing. Access a portfolio
          that refuses to compromise on returns or values.
        </p>

        <div className='mt-8 flex justify-center gap-4 flex-wrap'>
          <button className='px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-md font-semibold flex items-center gap-2'>
            Start Investing <HiArrowRight className='w-5 h-5' />
          </button>
          <button className='px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-md font-semibold'>
            Contact Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
