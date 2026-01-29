import React from "react";

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-slate-300 border-t border-slate-800'>
      <div className='max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3'>
        <div>
          <h3 className='text-white font-semibold text-lg'>
            Faith-Aligned ETF
          </h3>
          <p className='mt-3 text-sm text-slate-400'>
            Transparent, auditable, theology-informed fixed-income research
            supporting faith-aligned investment decisions.
          </p>
        </div>

        <div>
          <h4 className='text-white font-semibold mb-3'>Navigation</h4>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='/' className='hover:text-emerald-400'>
                Home
              </a>
            </li>
            <li>
              <a href='/dashboard' className='hover:text-emerald-400'>
                Dashboard
              </a>
            </li>
            <li>
              <a href='/methodology' className='hover:text-emerald-400'>
                Methodology
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-white font-semibold mb-3'>Disclosure</h4>
          <p className='text-sm text-slate-400'>
            This platform provides faith-aligned research and scoring for
            educational and informational purposes only and does not constitute
            investment advice.
          </p>
        </div>
      </div>

      <div className='border-t border-slate-800 py-4 text-center text-xs text-slate-500'>
        © {new Date().getFullYear()} Faith-Aligned ETF Research. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
