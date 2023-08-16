import logo from "../../assets/imgs/logo.jpeg";
export const JobCard = ({ client, position, country, salary, tags}) => {

  const handleConvertTags = () => {
    const array = tags ? tags.split(',').map(item => item.trim()) : [];
    return (array);
  };

  return (
    <div className="bg-white p-2 rounded-3xl shadow hover:shadow-xl mb-2 cursor-pointer">
      <div className="bg-red-50 rounded-3xl p-3 mb-3">
        <div className="mb-1 mt-2 px-1">
          <p className="text-sm">{client}</p>
        </div>
        <div className="flex items-center mb-5 px-1">
          <div className="text-xl w-5/6">{position}</div>
          <div className="w-1/6">
            <img src={logo} className="rounded-full w-11 lg:w-14" alt="logo" />
          </div>
        </div>
        <div className="flex flex-wrap gap-1 pb-2">
          
          {handleConvertTags().map((tag) => (
            <div key={tag} className="rounded-3xl text-xs px-2 py-1 border-2 border-gray-200">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center px-3 py-1.5">
        <div className="w-3/5">
          <div className="text-base font-bold">$ {salary}</div>
          <div className="text-xs text-gray-500">{country}</div>
        </div>
        <div className="w-2/5 text-center text-right">
          <button className="px-3 py-2 text-sm rounded-3xl bg-dark-mid text-white cursor-pointer">Details</button>
        </div>
      </div>
    </div>
  );
};
