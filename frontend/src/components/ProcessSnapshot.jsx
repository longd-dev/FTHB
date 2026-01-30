import React from "react";
import {
  HiOutlineFunnel,
  HiOutlineCpuChip,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineScale,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineArrowUp,
  HiOutlineChartBar,
} from "react-icons/hi2";

const ProcessSnapshot = () => {
  const PROCESS_SNAPSHOT = [
    {
      id: 1,
      label: "Financial Pre-Screen",
      desc: "Pre-screens bonds for key metrics.",
      icon: HiOutlineFunnel,
    },
    {
      id: 2,
      label: "Data Enrichment",
      desc: "AI collects key data per security.",
      icon: HiOutlineCpuChip,
    },
    {
      id: 3,
      label: "NLP Scoring",
      desc: "Scores bonds across key pillars.",
      icon: HiOutlineChartBar,
    },
    {
      id: 4,
      label: "Hard Exclusions",
      desc: "Automatic review or exclusion.",
      icon: HiOutlineXCircle,
    },
    {
      id: 5,
      label: "Positive Alignment",
      desc: "Best positives lift score if clean.",
      icon: HiOutlineArrowUp,
    },
    {
      id: 6,
      label: "Human Theology Review",
      desc: "Reviewers assess flagged cases.",
      icon: HiOutlineScale,
    },
    {
      id: 7,
      label: "Deliverable & Audit Trail",
      desc: "Decisions and notes delivered.",
      icon: HiOutlineCheckCircle,
    },
  ];

  return (
    <section className='bg-slate-100 py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center'>
          How the Faith Alignment{" "}
          <span className='text-emerald-600'>Methodology</span> Works
        </h2>

        {/* First row of cards */}
        <div className='mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center text-center'>
          {PROCESS_SNAPSHOT.slice(0, 4).map((step) => (
            <div
              key={step.id}
              className='bg-white rounded-lg p-5 shadow-sm border border-slate-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'
            >
              <div className='flex justify-center mb-3'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50'>
                  <step.icon className='h-6 w-6 text-emerald-600' />
                </div>
              </div>
              <div className='text-emerald-600 font-bold text-sm'>
                Step {step.id}
              </div>
              <p className='mt-2 font-medium'>{step.label}</p>
              <p className='mt-1 text-sm text-slate-600'>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Second row of cards */}
        <div className='mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center text-center'>
          {PROCESS_SNAPSHOT.slice(4).map((step) => (
            <div
              key={step.id}
              className='bg-white rounded-lg p-5 shadow-sm border border-slate-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'
            >
              <div className='flex justify-center mb-3'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50'>
                  <step.icon className='h-6 w-6 text-emerald-600' />
                </div>
              </div>
              <div className='text-emerald-600 font-bold text-sm'>
                Step {step.id}
              </div>
              <p className='mt-2 font-medium'>{step.label}</p>
              <p className='mt-1 text-sm text-slate-600'>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSnapshot;
