import React from "react";
import heroimg from "../assets/heroimg.png";

const Hero = () => {
  return (
    <section
      className='relative text-white'
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className='absolute inset-0 bg-slate-900/80'></div>
      <div className='relative max-w-7xl mx-auto px-6 py-40 md:py-56 flex flex-col items-start justify-start'>
        {/* Badge */}
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-3'>
          <div className='w-2 h-2 rounded-full bg-amber-500 animate-pulse'></div>
          <span className='text-amber-100 text-xs font-semibold tracking-wide uppercase'>
            Next-Generation ETF
          </span>
        </div>

        <h1 className='text-5xl md:text-7xl font-bold tracking-tight leading-tight'>
          <span className='block'>Faith-Aligned</span>
          <span className='block bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent'>
            Fixed-Income Investing
          </span>
        </h1>

        <p className='mt-6 text-lg md:text-xl text-slate-300 max-w-3xl'>
          A transparent, auditable, theology-informed methodology powering a
          next-generation fixed-income ETF.
        </p>

        <div className='mt-10 flex gap-4'>
          <button className='px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-md font-semibold'>
            View ETF Details →
          </button>
          <button className='px-sectionborder border-slate-400 hover:bg-slate-700 rounded-md font-semibold'>
            Explore the Research
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
