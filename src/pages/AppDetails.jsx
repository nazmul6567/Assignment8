import { Link, useParams } from 'react-router';
// import { updateList } from '../utils/localStorage';
import useApps from '../Hooks/useApps';
import { updateList } from '../utils/localstorage';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  //   console.log(apps);

  if (loading) return <p>Loading.......</p>;
  const app = apps.find(p => p.id === Number(id));
  // console.log(app.ratings)
  // "ratings": [
  //     { "name": "5 star", "count": 35000 },
  //     { "name": "4 star", "count": 4500 },
  //     { "name": "3 star", "count": 1200 },
  //     { "name": "2 star", "count": 350 },
  //     { "name": "1 star", "count": 184 }
  //   ]
  const ratingData = app.ratings;
  console.log(ratingData)
  const chartRatingData = ratingData.map(data => {
    const rating = {
      count: data.count,
      name: data.name
    }
    return (rating)
  })
  console.log(chartRatingData)


  if (!app)
    return (
      <div className="flex-1 bg-[#F5F5F5] max-w-screen-xl mx-auto w-full ">
        <div className="flex flex-col items-center justify-center m-3 text-center space-y-4"> 
          <div className="max-w-xs md:max-w-2xl lg:max-w-3xl">
            <img
              className="px-7 md:px-32 lg:px-44 "
              src="/src/assets/assets/App-Error.png"
              alt=""
            />
          </div>
          <h1 className="font-bold text-xl md:text-5xl">
            OPPS!! APP NOT FOUND
          </h1>
          <p className="text-gray-600  md:text-xl ">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <Link
            to={'/apps'}
            className="btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  shadow-lg"
          >
            Go Back!
          </Link>
        </div>
      </div>
    );

  const {
    image,
    title,
    size,
    description,
    companyName,
    downloads,
    rating,
    reviews,
  } = app || {};

  return (
    <div className="flex-1 bg-[#F5F5F5] max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="col-span-2 flex justify-center items-center">
          <img src={image} className="rounded-lg h-30 md:h-70 md:w-96" />
        </div>

        <div className="col-span-3 space-y-2 md:space-y-3 text-center md:text-left">
          <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
          <h4 className="text-md md:text-xl font-medium">
            Developed by{' '}
            <span className="text-md md:text-xl font-bold">{companyName}</span>
          </h4>
          <hr className="bg-gray-100" />

          <div className="lg:w-2/3 flex justify-between gap-3 md:gap-2 mt-3 md:mt-7 px-10 md:px-0">
            <div className="flex flex-col gap-1 justify-center items-center md:justify-normal md:items-baseline">
              <img
                className="h-8 w-8"
                src="/src/assets/assets/icon-downloads.png"
                alt=""
              />
              <p className="text-xs md:text-lg font-semibold">Downloads</p>
              <h1 className=" font-extrabold text-lg md:text-4xl  ">
                {downloads}
              </h1>
            </div>

            <div className="flex flex-col gap-1 justify-center items-center md:justify-normal md:items-baseline">
              <img
                className="h-8 w-8 "
                src="/src/assets/assets/icon-ratings.png"
                alt=""
              />
              <p className="text-xs md:text-lg font-semibold">
                Average Ratings
              </p>
              <h1 className=" font-extrabold text-lg md:text-4xl    ">
                {rating}
              </h1>
            </div>

            <div className="flex flex-col gap-1 justify-center items-center md:justify-normal md:items-baseline">
              <img
                className="h-8 w-8 items-center"
                src="/src/assets/assets/icon-review.png"
                alt=""
              />
              <p className="text-xs md:text-lg font-semibold">Total Reviews</p>
              <h1 className="font-extrabold text-lg md:text-4xl  ">
                {reviews}
              </h1>
            </div>
          </div>

          <button
            onClick={() => updateList(app)}
            className="btn md:text-xl font-semibold bg-green-400 text-white py-1.5"
          >
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      <hr />

      <div className="">
        <h1 className="text-2xl font-bold mb-5">Ratings</h1>

        <BarChart
  layout="vertical"
  width="auto"
  height={300}
  data={chartRatingData}
>
  <XAxis type="number" />
  <YAxis dataKey="name" type="category" />
  <Bar dataKey="count" fill="Orange" />
</BarChart>

        
      </div>
      <hr />

      <div className="">
        <h1 className="text-2xl font-bold">Description</h1>
        <p className="py-6 text-slate-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
