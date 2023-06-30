export const Success = ({ setShowModal }) => {
  return (
    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
      <div className="mt-3 sm:flex">
        <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto rounded-full">
          <div className="success-animation">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
        </div>
        <div className="w-96 mt-2 text-center sm:ml-4 sm:text-left">
          <h4 className="text-lg font-medium text-gray-800">Yeaah!</h4>
          <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
            Successfully registered.
          </p>
        </div>
      </div>
      <div className="items-center gap-2 mt-3 sm:flex">
        <button
          className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2 border border-green-600"
          onClick={() => setShowModal(false)}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
