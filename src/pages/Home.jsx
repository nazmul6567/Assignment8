import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import AppsCard from './AppsCard';
import { Link } from 'react-router';
import useApps from '../Hooks/useApps';
import SkeletonLoader from '../Components/SkeletonLoader';

const Home = () => {
  // const data = useLoaderData();
  //   console.log(data);

  const { apps, loading, error } = useApps();
  // console.log(apps)
  const ratedApps = apps.filter(app => app.rating > 4);
  // console.log(ratedApps)
  // console.log(loading,error)

  return (
    <div>
      <Banner></Banner>
      <div className="m-10  text-center">
        <h1 className="font-bold text-3xl md:text-5xl">Trending Apps</h1>
        <p className="text-gray-400 text-lg md:text-xl m-3 ">
          Explore All Trending Apps on the Market developed by us
        </p>
        {loading ? (
          <SkeletonLoader/>
        ) : (
          <div className=" p-10 grid gap-4 md:grid-cols-2  lg:grid-cols-4">
            {ratedApps.map(app => (
              <AppsCard key={app.id} app={app}></AppsCard>
            ))}
          </div>
        )}
        <Link to="/apps" className="btn btn-primary text-lg font-semibold mt-4">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
