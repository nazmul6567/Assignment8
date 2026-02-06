import React from 'react';

const Banner = () => {
  return (
    <div className="">
      <div className=" px-10 md:px-20 ">
        <div className="text-center mt-8">
          <h1 className="mb-5 text-3xl md:text-6xl font-bold ">
            We Build <br />
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{' '}
            Apps
          </h1>

          <p className="mb-5 text-sm md:text-lg text-gray-500">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.{' '}
            <br className="hidden lg:flex" /> Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          {/* button */}
          <div className="flex justify-center items-center gap-2 md:gap-5 ">
            <a
              href="https://play.google.com/store/games?device=windows"
              target="_"
            >
              <button className="hover:cursor-pointer border-1 border-gray-300 rounded-lg font-semibold  flex items-center text-sm md:text-lg justify-center gap-1 md:gap-2 p-2 md:p-3 md:mx-5">
                <img
                  src="https://i.ibb.co.com/7JqQdGDM/fi-16076057.png"
                  alt=""
                />
                Google Play
              </button>
            </a>
            <a href="https://www.apple.com/app-store/" target="_">
              <button className="hover:cursor-pointer border-1 border-gray-300 rounded-lg font-semibold  flex items-center text-sm md:text-lg justify-center gap-1 md:gap-2 p-2 md:p-3 md:mx-5">
                <img
                  src="https://i.ibb.co.com/svLyLp68/fi-5977575.png"
                  alt=""
                />
                App Store
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5 md:mt-10 flex items-center justify-center">
        <img
          className="px-7 md:px-32 lg:px-44 "
          src="/assets/hero.png"
          alt=""
        />
      </div>
      <div className="p-10 md:p-15 sm:footer-horizontal bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-neutral-content text-center">
        <h1 className="md:text-4xl font-bold">
          Trusted by Millions, Built for You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-2 mt-5 md:mt-10">
          <div>
            <p>Total Downloads</p>
            <h1 className="font-extrabold text-4xl md:text-6xl m-2 md:m-4">
              29.6M
            </h1>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h1 className="font-extrabold text-4xl md:text-6xl m-2 md:m-4">
              906k
            </h1>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h1 className="font-extrabold text-4xl md:text-6xl m-2 md:m-4">
              132+
            </h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /*  */
}
