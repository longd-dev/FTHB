import React from "react";

const CTA = () => {
  return (
    <section className='bg-slate-900 text-white py-20'>
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <h2 className='text-3xl font-bold'>
          Purpose-Driven Technology for Faith-Aligned Investors
        </h2>
        <p className='mt-4 text-slate-300 max-w-2xl mx-auto'>
          Developed by a student-led computer science team in partnership with
          investment researchers to bring transparency and conviction to
          fixed-income investing.
        </p>

        <button className='mt-8 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-md font-semibold'>
          Meet the Team
        </button>
      </div>
    </section>
  );
};

export default CTA;
