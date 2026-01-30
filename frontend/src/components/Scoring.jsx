import React from "react";

const Scoring = () => {
  return (
    <section className='max-w-7xl mx-auto px-6 py-20'>
      <div className='grid gap-12 md:grid-cols-2 items-center'>
        <div>
          <h2 className='text-3xl font-bold'>
            The Faith Alignment Score (FAS)
          </h2>
          <p className='mt-4 text-slate-600'>
            Every security receives a 0–100 score. Negative alignment disables
            positives, ensuring no moral trade-offs. Positive alignment is
            earned — never assumed.
          </p>

          <div className='mt-6 flex flex-col md:flex-row md:justify-between gap-4'>
            <div className='flex items-center gap-3 bg-[#F5F5F5] p-4 rounded-lg shadow-sm'>
              <span className='flex w-16 h-16 items-center justify-center rounded-full bg-red-500 text-white font-bold text-lg leading-none'>
                0–49
              </span>
              <span className='text-[#0A2540] font-medium'>
                Negative Alignment
              </span>
            </div>
            <div className='flex items-center gap-3 bg-[#F5F5F5] p-4 rounded-lg shadow-sm'>
              <span className='flex w-16 h-16 items-center justify-center rounded-full bg-gray-400 text-white font-bold text-lg leading-none'>
                50
              </span>
              <span className='text-[#0A2540] font-medium'>Neutral</span>
            </div>
            <div className='flex items-center gap-3 bg-[#F5F5F5] p-4 rounded-lg shadow-sm'>
              <span className='flex w-16 h-16 items-center justify-center rounded-full bg-green-600 text-white font-bold text-sm leading-none'>
                51–100
              </span>
              <span className='text-[#0A2540] font-medium'>
                Positive Alignment
              </span>
            </div>
          </div>
        </div>

        <div className='bg-white border border-slate-200 rounded-xl p-6 shadow-sm'>
          <h3 className='font-semibold text-lg'>Decision States</h3>
          <div className='mt-4 space-y-2 text-slate-700'>
            <p>
              <strong>Pass:</strong> Eligible for ETF inclusion
            </p>
            <p>
              <strong>Review:</strong> Theology & governance review required
            </p>
            <p>
              <strong>Exclude:</strong> Fails alignment thresholds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scoring;
