import React from "react";

const Home = () => {
  return (
    <div className='bg-slate-50 text-slate-900'>
      {/* HERO SECTION */}
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

      {/* VALUE PROPS */}
      <section className='max-w-7xl mx-auto px-6 py-20'>
        <h2 className='text-3xl font-bold text-center'>
          Built for Integrity, Accountability, and Impact
        </h2>

        <div className='mt-12 grid gap-8 md:grid-cols-3'>
          {[
            {
              title: "Security-Level Analysis",
              desc: "Every bond is evaluated at the CUSIP and collateral level — including ABS, MBS, and CLOs.",
            },
            {
              title: "AI + Theology Review",
              desc: "Natural language processing meets human theological judgment for consistent, explainable outcomes.",
            },
            {
              title: "Transparent Scoring",
              desc: "A published 0–100 Faith Alignment Score with documented rules, caps, and audit trails.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className='bg-white rounded-xl p-6 shadow-sm border border-slate-200'
            >
              <h3 className='text-xl font-semibold'>{item.title}</h3>
              <p className='mt-3 text-slate-600'>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS SNAPSHOT */}
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

      {/* SCORING SECTION */}
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

      {/* CTA */}
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
    </div>
  );
};

export default Home;
