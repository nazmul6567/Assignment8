import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1 bg-[#F5F5F5] max-w-screen-xl mx-auto w-full py-4 md:py-8 lg:py-12 ">
        <Outlet/>
      </div>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
};

export default MainLayout;
