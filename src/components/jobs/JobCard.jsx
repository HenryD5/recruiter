import logo from "../../assets/imgs/logo.jpeg";
export const JobCard = () => {
  return (
    <div className="bg-white p-2 rounded-3xl shadow hover:shadow-xl mb-2">
      <div className="bg-red-50 rounded-3xl p-3 mb-3">
        <div className="mb-1 mt-2 px-1">
          <p className="text-sm">Amazon</p>
        </div>
        <div className="flex items-center mb-5 px-1">
          <div className="text-xl w-5/6">Senior UX/UI Designer</div>
          <div className="w-1/6">
            <img src={logo} className="rounded-full w-11 lg:w-14" alt="logo" />
          </div>
        </div>
        <div className="flex flex-wrap gap-1 pb-2">
          <div className="rounded-3xl text-xs px-2 py-1 border-2 border-gray-200">
            Full time
          </div>
          <div className="rounded-3xl text-xs px-2 py-1 border-2 border-gray-200">
            Senior level
          </div>
          <div className="rounded-3xl text-xs px-2 py-1 border-2 border-gray-200">
            Distant
          </div>
        </div>
      </div>
      <div className="flex items-center px-3 py-1.5">
        <div className="w-3/5">
          <div className="text-base font-bold">$2000</div>
          <div className="text-xs text-gray-500">Colombia</div>
        </div>
        <div className="w-2/5 text-center text-right">
          <button className="px-3 py-2 text-sm rounded-3xl bg-dark-mid text-white cursor-pointer">Details</button>
        </div>
      </div>
    </div>
  );
};
