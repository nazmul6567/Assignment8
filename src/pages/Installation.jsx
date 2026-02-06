import React, { useState } from 'react';
import { loadInstalled, removeFromInstalled } from '../utils/localstorage';

const Installation = () => {
  const [Installed, setInstalled] = useState(() => loadInstalled());
  const [sortOrder, setSortOrder] = useState('none');

  if (!Installed.length)
    return (
      <h1 className="font-bold md:font-bold text-4xl md:text-5xl mt-20 md:mt-9 p-10 md:p-20 text-center">
        Your Didn't Installed Any Apps
      </h1>
    );

  const sortedItem = (() => {
    if (sortOrder === 'price-asc') {
      return [...Installed].sort((a, b) => a.size - b.size);
    } else if (sortOrder === 'price-desc') {
      return [...Installed].sort((a, b) => b.size - a.size);
    } else {
      return Installed;
    }
  })();

  const handleRemove = id => {
    // remove from localstorage
    removeFromInstalled(id);
    // for ui instant update
    setInstalled(prev => prev.filter(p => p.id !== id));
  };
  return (
    <div className="flex-1 bg-[#F5F5F5] max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 space-y-5">
      <div className="text-center ">
        <h1 className="font-bold md:font-bold text-2xl md:text-5xl">
          Your Installed Apps
        </h1>
        <p className="text-gray-600 text-lg md:text-xl m-3 ">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between py-3 items-center">
        <h1 className="text-xl md:text-2xl font-semibold">
          {sortedItem.length} Apps Found
        </h1>

        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Size</option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-3">
        {sortedItem.map(p => (
          <div key={p.id} className="card card-side bg-base-100 shadow flex flex-col items-center md:flex-row">
            <figure className="p-2.5">
              <img
                className="md:w-29 md:h-24 rounded-xl object-cover"
                src={p.image}
                alt={p.name}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{p.title}</h3>

              <div className="flex items-center mt-auto gap-2">
                <span className="text-green-400 flex gap-1 items-center font-semibold py-1 px-1 rounded-md">
                  <img
                    src="https://i.ibb.co.com/4RXcMWcr/fi-9131795.png"
                    alt=""
                  />
                  <p>{p.downloads}</p>
                </span>

                <span className="text-amber-400 font-semibold flex gap-1 items-center py-1 px-1 rounded-md">
                  <img
                    src="https://i.ibb.co.com/MkDK1rgx/fi-1828884.png"
                    alt=""
                  />
                  <p>{p.rating}</p>
                </span>
                <p className="text-base-content/70 font-medium">{p.size} MB</p>
              </div>
            </div>
            <div className="pb-2 md:mr-3">
              <button
                onClick={() => handleRemove(p.id)}
                className="btn p bg-green-400 text-white font-semibold"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
