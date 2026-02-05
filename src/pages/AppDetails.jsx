import { Link, useParams } from 'react-router';
// import { updateList } from '../utils/localStorage';
import useApps from '../Hooks/useApps';
import { updateList } from '../utils/localstorage';

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  //   console.log(apps);

  if (loading) return <p>Loading.......</p>;
  const app = apps.find(p => p.id === Number(id));
  // console.log(app)

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

  const { image, title, size, description } = app || {};

  return (
    <div className="flex-1 bg-[#F5F5F5] max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 space-y-6">
      <div className="grid grid-cols-2">
        <div>
          <img src={image} className="max-w-md rounded-lg shadow-2xl " />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <button onClick={() => updateList(app)} className="btn btn-primary">
            {size}
          </button>
        </div>
      </div>

      <p className="py-6">{description}</p>
    </div>
  );
};

export default AppDetails;
