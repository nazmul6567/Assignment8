import React, { useState, useEffect } from 'react';
import useApps from '../Hooks/useApps';
import AppsCard from './AppsCard';
import SkeletonLoader from '../Components/SkeletonLoader';

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // console.log(search);

  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter(app => app.title.toLowerCase().includes(term))
    : apps;

  // if(searchedApps.length === 0)

  // jokhon search korbo tar
  useEffect(() => {
    if (search) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        setIsSearching(false);
      }, 400);

      return () => clearTimeout(timer);
    } else {
      setIsSearching(false);
    }
  }, [search]);

  return (
    <div className="max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12flex-1 text-center">
      <h1 className="font-bold text-3xl md:text-5xl">Our All Applications</h1>
      <p className="text-gray-400 md:text-xl m-3">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center m-5 md:mb-8 md:mt-25">
        <span className="md:ml-10 text-xl md:text-3xl font-semibold">
          ({searchedApps.length}) Apps Found
        </span>
        <label className="input md:mr-10 mt-4 md:mt-0">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="search"
            placeholder="search Apps"
          />
        </label>
      </div>

      {loading ? (
        <SkeletonLoader />
      ) : isSearching ? (
        <SkeletonLoader />
      ) : searchedApps.length === 0 ? (
        <div className="p-10 md:p-30 text-center">
          <p className="text-3xl md:text-6xl text-gray-500 font-bold">No Apps Found</p>
        </div>
      ) : (
        <div className="p-10 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {searchedApps.map(app => (
            <AppsCard key={app.id} app={app}></AppsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
