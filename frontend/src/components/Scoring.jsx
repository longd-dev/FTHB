import React from "react";
import {
  HiOutlineXCircle,
  HiOutlineMinusCircle,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const Scoring = () => {
  return (
    <section className='py-20 bg-white'>
      <div className='container-custom'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-[var(--primary-color)] mb-6'>
            The Faith Alignment Score (FAS)
          </h2>
          <p className='text-lg text-slate-600 leading-relaxed'>
            Every security receives a{" "}
            <span className='font-semibold text-[var(--primary-color)]'>
              0–100 score
            </span>
            . Our methodology is rigorous:{" "}
            <span className='italic text-emerald-400'>
              Negative alignment disables positives
            </span>
            , ensuring no moral trade-offs. Positive alignment is earned — never
            assumed.
          </p>
        </div>

        {/* Visual Score Scale */}
        <div className='relative mb-20 pt-8 pb-4'>
          {/* Zone Descriptions Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
            {/* Negative Card */}
            <div className='bg-red-50 border border-red-100 rounded-xl p-6 md:p-8 relative overflow-hidden transition-transform duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105'>
              <div className='absolute top-0 right-0 p-4 opacity-20'>
                <HiOutlineXCircle className='text-red-600 text-6xl' />
              </div>
              <div className='relative z-10'>
                <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold mb-4'>
                  0 – 49
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-slate-800 mb-4'>
                  Negative Alignment
                </h3>
                <p className='text-slate-600 text-sm md:text-base'>
                  Violations of core principles. Even a single violation caps
                  the score, regardless of other positive attributes.
                </p>
              </div>
            </div>

            {/* Neutral Card */}
            <div className='bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 relative overflow-hidden transition-transform duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105'>
              <div className='absolute top-0 right-0 p-4 opacity-20'>
                <HiOutlineMinusCircle className='text-slate-600 text-6xl' />
              </div>
              <div className='relative z-10'>
                <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold mb-4'>
                  50
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-slate-800 mb-4'>
                  Neutral
                </h3>
                <p className='text-slate-600 text-sm md:text-base'>
                  No specific violations, but no demonstrable positive impact or
                  alignment with faith-based values.
                </p>
              </div>
            </div>

            {/* Positive Card */}
            <div className='bg-amber-50 border border-amber-100 rounded-xl p-6 md:p-8 relative overflow-hidden transition-transform duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105'>
              <div className='absolute top-0 right-0 p-4 opacity-20'>
                <HiOutlineCheckCircle className='text-[var(--secondary-color)] text-6xl' />
              </div>
              <div className='relative z-10'>
                <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-[var(--secondary-color)] text-xs font-bold mb-4'>
                  51 – 100
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-slate-800 mb-4'>
                  Positive Alignment
                </h3>
                <p className='text-slate-600 text-sm md:text-base'>
                  Active demonstration of values. Positive alignment is earned
                  through verifiable actions and commitments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scoring;
