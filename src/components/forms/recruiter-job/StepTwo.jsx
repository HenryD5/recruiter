import { useState } from "react";
import validator from "validator";

const clients = ["Trebol", "Addi", "Bia"];

const positions = ["Frontend", "Backend", "Mobile"];

const typesWork = ["Remote", "Hibrid", "Ambas"];

const offers = ["1", "2", "3", "4", "+5", "None"];

const times = ["1 week", "2 week"];

const recruiters = ["TAT", "VBC"];

const interfaceErrors = {
  client: "",
  position: "",
  currentSalary: "",
  expectationSalary: "",
  onSite: "",
  offers: "",
  time: "",
  recruiter: "",
};

export const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(interfaceErrors);

  const handleError = (input, value) => {
    setError((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const valid =
    validator.isEmpty(values.client) ||
    validator.isEmpty(values.position) ||
    validator.isEmpty(values.onSite) ||
    validator.isEmpty(values.offers) ||
    validator.isEmpty(values.time) ||
    validator.isEmpty(values.recruiter);

  const submitFormData = (e) => {
    e.preventDefault();
    setError(interfaceErrors);

    if (valid) {
      validator.isEmpty(values.client) &&
        handleError("client", "Selecciona un cliente");

      validator.isEmpty(values.position) &&
        handleError("position", "Selecciona una posicion");

      validator.isEmpty(values.onSite) &&
        handleError("onSite", "Selecciona una opcion");

      validator.isEmpty(values.offers) &&
        handleError("offers", "Selecciona una opcion");

      validator.isEmpty(values.time) &&
        handleError("time", "Selecciona una opcion");

      validator.isEmpty(values.recruiter) &&
        handleError("recruiter", "Selecciona un reclutador");
    } else {
      nextStep();
    }
  };

  return (
    <form onSubmit={submitFormData}>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Informacion de posicion y reclutador
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          We'll always let you know about important changes, but you pick what
          else you want to hear about. (Actualizar)
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="client"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Client
            </label>
            <div className="mt-2">
              <select
                id="client"
                name="client"
                defaultValue="Trebol"
                onChange={handleFormData("client")}
                required
                className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
                  error.client
                    ? "border-2 border-red-500 focus:ring-red-500"
                    : "focus:ring-indigo-600"
                }`}
              >
                {clients.map((client) => (
                  <option key={client} value={client}>
                    {client}
                  </option>
                ))}
              </select>
            </div>
            {error.client && (
              <p className="text-red-500 text-xs italic mt-2">{error.client}</p>
            )}
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="position"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Position
            </label>
            <div className="mt-2">
              <select
                id="position"
                name="position"
                defaultValue="Frontend"
                onChange={handleFormData("position")}
                required
                className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
                  error.position
                    ? "border-2 border-red-500 focus:ring-red-500"
                    : "focus:ring-indigo-600"
                }`}
              >
                {positions.map((position) => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
              </select>
            </div>
            {error.position && (
              <p className="text-red-500 text-xs italic mt-2">
                {error.position}
              </p>
            )}
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="current-salary"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Current Salary (USD) <span className="text-red-600">*</span>
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="current-salary"
                id="current-salary"
                autoComplete="current-salary"
                placeholder="2000"
                value={values.currentSalary}
                onChange={handleFormData("currentSalary")}
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="salary-expectation"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Salary expectation (USD) <span className="text-red-600">*</span>
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="salary-expectation"
                id="salary-expectation"
                autoComplete="salary-expectation"
                placeholder="2500"
                value={values.expectationSalary}
                onChange={handleFormData("expectationSalary")}
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="work-on-site"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Work on-site <span className="text-red-600">*</span>
            </label>
            <div className="mt-2">
              <select
                id="work-on-site"
                name="work-on-site"
                value={values.onSite}
                onChange={handleFormData("onSite")}
                className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
                  error.onSite
                    ? "border-2 border-red-500 focus:ring-red-500"
                    : "focus:ring-indigo-600"
                }`}
              >
                {typesWork.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            {error.onSite && (
              <p className="text-red-500 text-xs italic mt-2">{error.onSite}</p>
            )}
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="offers"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              # Offers
            </label>
            <div className="mt-2">
              <select
                id="offers"
                name="offers"
                defaultValue="1"
                onChange={handleFormData("offers")}
                required
                className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
                  error.offers
                    ? "border-2 border-red-500 focus:ring-red-500"
                    : "focus:ring-indigo-600"
                }`}
              >
                {offers.map((offer) => (
                  <option key={offer} value={offer}>
                    {offer}
                  </option>
                ))}
              </select>
            </div>
            {error.offers && (
              <p className="text-red-500 text-xs italic mt-2">{error.offers}</p>
            )}
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="time"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Time to leave position
            </label>
            <div className="mt-2">
              <select
                id="time"
                name="time"
                defaultValue="1 week"
                onChange={handleFormData("time")}
                required
                className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
                  error.time
                    ? "border-2 border-red-500 focus:ring-red-500"
                    : "focus:ring-indigo-600"
                }`}
              >
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            {error.time && (
              <p className="text-red-500 text-xs italic mt-2">{error.time}</p>
            )}
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="recruiter"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Recruiter
            </label>
            <div className="mt-2">
              <select
                id="recruiter"
                name="recruiter"
                defaultValue="TAT"
                onChange={handleFormData("recruiter")}
                required
                className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
                  error.recruiter
                    ? "border-2 border-red-500 focus:ring-red-500"
                    : "focus:ring-indigo-600"
                }`}
              >
                {recruiters.map((recruiter) => (
                  <option key={recruiter} value={recruiter}>
                    {recruiter}
                  </option>
                ))}
              </select>
            </div>
            {error.recruiter && (
              <p className="text-red-500 text-xs italic mt-2">
                {error.recruiter}
              </p>
            )}
          </div>

          <div className="col-span-full">
            <label
              htmlFor="comments"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Comments
            </label>
            <div className="mt-2">
              <textarea
                id="coments"
                name="coments"
                rows={3}
                onChange={handleFormData("comments")}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Write a few sentences about yourself.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={prevStep}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Back
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};
