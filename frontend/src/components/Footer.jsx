import React from "react";

const Footer = () => {
  return (
    <footer className='bg-slate-100 text-slate-900 shadow-inner'>
      <div className='max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-12'>
        {/* About Section */}
        <div className='flex-1'>
          <h3 className='font-bold text-2xl mb-3'>Faith-Aligned ETF</h3>
          <p className='text-sm md:text-base text-slate-600 leading-relaxed'>
            Transparent, auditable, theology-informed fixed-income research
            supporting faith-aligned investment decisions.
          </p>
        </div>

        {/* Navigation */}
        <div className='flex-1'>
          <h4 className='font-semibold text-lg mb-3'>Navigation</h4>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href='/' className='hover:text-emerald-600 transition-colors'>
                Home
              </a>
            </li>
            <li>
              <a
                href='/dashboard'
                className='hover:text-emerald-600 transition-colors'
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href='/methodology'
                className='hover:text-emerald-600 transition-colors'
              >
                Methodology
              </a>
            </li>
          </ul>
        </div>

        {/* Disclosure */}
        <div className='flex-1'>
          <h4 className='font-semibold text-lg mb-3'>Disclosure</h4>
          <p className='text-sm md:text-base text-slate-600 leading-relaxed'>
            This platform provides faith-aligned research and scoring for
            educational and informational purposes only and does not constitute
            investment advice.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-slate-300 py-4 text-center text-xs md:text-sm text-slate-500'>
        © {new Date().getFullYear()} Faith-Aligned ETF Research. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
