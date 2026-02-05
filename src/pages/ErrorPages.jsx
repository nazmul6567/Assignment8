import { Link, useRouteError } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPages = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1 bg-[#F5F5F5] max-w-screen-xl mx-auto w-full py-4 md:py-8 lg:py-12 space-y-4">
        <div className="flex flex-col items-center justify-center m-3 text-center">
          {error.message}
          <img
            className="px-7 md:px-32 lg:px-44 "
            src="/src/assets/assets/error-404.png"
            alt=""
          />
          <h1 className="font-extrabold md:font-bold text-2xl md:text-5xl">
            Oops, page not found!
          </h1>
          <p className="text-gray-600 text-lg md:text-xl m-3 ">
            The page you are looking for is not available.
          </p>
          <Link
            to={'/'}
            className="btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  shadow-lg"
          >
            Go Home!
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPages;
