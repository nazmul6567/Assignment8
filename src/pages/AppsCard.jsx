import React from 'react';
import { Link } from 'react-router';

const AppsCard = ({ app }) => {
  // console.log(app);

  const { image, title, downloads, rating, id } = app;

  return (
    <Link to={`/app/${id}`} className="p-4 md:p-3 bg-base-100 shadow-sm hover:scale-105 transition ease-in-out rounded text-center flex flex-col h-full">
      <div>
        <figure className="px-4 py-2 md:p-1  overflow-hidden">
          <img
            src={image}
            alt="Shoes"
            className="rounded-lg md:h-[180px] w-full object-cover"
          />
        </figure>
        <h2 className="font-bold text md:text-xl my-2">{title}</h2>
      </div>

      <div className="flex justify-between items-center mt-auto gap-2">
        <span className="bg-[#FFF0E1] flex gap-1 items-center py-1 px-1 rounded-md">
          <img src="https://i.ibb.co.com/4RXcMWcr/fi-9131795.png" alt="" />
          <p>{downloads}</p>
        </span>

        <span className="bg-[#FFF0E1] flex gap-1 items-center py-1 px-1 rounded-md">
          <img src="https://i.ibb.co.com/MkDK1rgx/fi-1828884.png" alt="" />
          <p>{rating}</p>
        </span>
      </div>
    </Link>
  );
};

export default AppsCard;
