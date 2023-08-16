import { useState } from "react";
import validator from "validator";

const sources = [
  "Linkedin",
  "Referral",
  "Facebook",
  "Instagram",
  "Networking",
  "Indeed",
  "GitHub",
  "Twitter",
];
const interfaceErrors = {
  fullName: "",
  email: "",
  country: "",
  city: "",
  phone: "",
  source: "",
  linkedin: "",
  github: "",
  cv: "",
};

export const StepOne = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(interfaceErrors);

  const handleError = (input, value) => {
    setError((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const valid =
    validator.isEmpty(values.source) ||
    values.fullName.length < 3 ||
    values.linkedin.length < 5;

  const submitFormData = (e) => {
    e.preventDefault();
    setError(interfaceErrors);

    if (valid) {
      validator.isEmpty(values.source) &&
        handleError("source", "Selecciona un source");

      values.fullName.length < 3 &&
        handleError("fullName", "El campo debe tener mas de 3 caracteres");

      values.linkedin.length < 5 &&
        handleError("linkedin", "Ingresa un link valido");
    } else {
      nextStep();
    }
  };

  return (
    <form onSubmit={submitFormData} encType="multipart/form-data">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Informacion personal del candidato
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you
          share. (Actualizar)
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="full-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name of the candidate <span className="text-red-600">*</span>
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="full-name"
                id="full-name"
                placeholder="Henry ..."
                autoComplete="given-name"
                value={values.fullName}
                onChange={handleFormData("fullName")}
                required
                className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                  error.fullName
                    ? "border-2 border-red-500 focus:ring-red-500"
                    : "focus:ring-primary"
                }`}
              />
            </div>
            {error.fullName && (
              <p className="text-red-500 text-xs italic mt-2">
                {error.fullName}
              </p>
            )}
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email (candidate) <span className="text-red-600">*</span>
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="henry@email.com"
                value={values.email}
                onChange={handleFormData("email")}
                required
                className={`block w-full rounded-md border-0  px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                  error.email
                    ? "border-2 border-red-500 focus:ring-red-500"
                    : "focus:ring-primary"
                }`}
              />
            </div>
            {error.email && (
              <p className="text-red-500 text-xs italic mt-2">{error.email}</p>
            )}
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Country
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="country"
                id="country"
                placeholder="Colombia"
                autoComplete="country-name"
                value={values.country}
                onChange={handleFormData("country")}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Medellin"
                autoComplete="city-name"
                value={values.city}
                onChange={handleFormData("city")}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone Number <span className="text-red-600">*</span>
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="51908909809"
                autoComplete="tel"
                value={values.phone}
                onChange={handleFormData("phone")}
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="source"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Source <span className="text-red-600">*</span>
            </label>
            <div className="mt-2">
              <select
                id="source"
                name="source"
                value={values.source}
                onChange={handleFormData("source")}
                required
                className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6 ${
                  error.source
                    ? "border-2 border-red-500 focus:ring-red-500"
                    : "focus:ring-primary"
                }`}
              >
                <option>Elige</option>
                {sources.map((source) => (
                  <option key={source} value={source}>
                    {source}
                  </option>
                ))}
              </select>
            </div>
            {error.source && (
              <p className="text-red-500 text-xs italic mt-2">{error.source}</p>
            )}
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="linkedin"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Linkedin <span className="text-red-600">*</span>
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="linkedin"
                id="linkedin"
                placeholder="Link ..."
                autoComplete="linkedin"
                value={values.linkedin}
                onChange={handleFormData("linkedin")}
                required
                className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                  error.linkedin
                    ? "border-2 border-red-500 focus:ring-red-500"
                    : "focus:ring-primary"
                }`}
              />
            </div>
            {error.linkedin && (
              <p className="text-red-500 text-xs italic mt-2">
                {error.linkedin}
              </p>
            )}
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="github"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              GitHub/Portofolio
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="github"
                id="github"
                autoComplete="github"
                placeholder="Link ..."
                value={values.github}
                onChange={handleFormData("github")}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="file-upload"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Link the CV of your candidate
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="file-upload"
                id="file-upload"
                autoComplete="file-upload"
                placeholder="Link ..."
                value={values.cv}
                onChange={handleFormData("cv")}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* <div className="col-span-full">
            <label
              htmlFor="upload-cv"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Upload the CV of your candidate
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary"
                  >
                    <span className="px-2">{values.cv ? values.cv?.name : 'Upload a file'}</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      onChange={handleFormData("cv")}
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-3">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600 mt-2">PDF up to 5MB</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Next
        </button>
      </div>
    </form>
  );
};
