import React from 'react';

const Footer = () => {
  return (
    <div className="px-10 sm:footer-horizontal bg-neutral text-neutral-content py-6">
      <footer className="flex justify-between items-center footer border-b border-dashed">
        <div className="flex justify-center items-center">
          <img className="h-8 w-8" src={'/src/assets/assets/logo.png'} alt="" />
          <a className=" font-semibold">HERO.IO</a>
        </div>
        <nav>
          <h6 className="font-semibold">Social Links</h6>
          <div className="grid grid-flow-col gap-2">
            <a>
              <img src="https://i.ibb.co.com/5wV1X8B/fi-5969020.png" alt="" />
            </a>
            <a>
              <img
                src="
https://i.ibb.co.com/v4rzs1bn/Frame-1171277689.png"
                alt=""
              />
            </a>
            <a>
              <img
                src="
https://i.ibb.co.com/Y4zsPFMd/Frame-1171277690.png"
                alt=""
              />
            </a>
          </div>
        </nav>
      </footer>
      <div className=""></div>

      <p className="text-sm text-center mt-5 md:mt-10">
        Copyright © {new Date().getFullYear()} - All right reserved.
      </p>
    </div>
  );
};

export default Footer;
