import { useState } from "react";
import validator from "validator";

const levels = [
  "English A1",
  "English A2",
  "English B1",
  "English B2",
  "English C1",
  "English C2",
];

const likes = [
  "🎓 Top School",
  "💻 Majored in Hard Sciences",
  "👨‍🚀 Entrepreneurial experience",
  "🚀 Startup experience",
  "🤓 Seniority",
  "👨‍🦲️ Junior with high potential",
  "💼 Previous rol experience",
  "🏬 Stability in companies",
  "📚 Passionate about learning",
  "👨‍🏫 Personal project",
  "📊 Data-driven",
  "🏦 Traditional companies",
  "👨‍🎓 MBA",
  "🖥 Software companies",
];

const stackTech = [
  "Java",
  "Javascript",
  "Python",
  "Css",
  "Sass",
  "PHP",
  "Typescript",
  "Vue",
  "React",
  "Next",
  "Nuxt",
  "Angular",
  "Svelt",
  "Flutter",
];

const roles = [
  "Lead Frontend",
  "Lead Backend",
  "Devops",
  "Tech Lead",
];

const interfaceErrors = {
  levelEnglish: "",
  anotherLenguage: "",
  likes: "",
  stack: "",
  roles: "",
  aspects: "",
};

export const StepThree = ({ saveData, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(interfaceErrors);

  const handleError = (input, value) => {
    setError((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const validStack =
    values.stackJunior.length === 0 &&
    values.stackMid.length === 0 &&
    values.stackSenior.length === 0;

  const valid =
    validator.isEmpty(values.levelEnglish) ||
    values.likes.length < 1 ||
    values.linkedin.anotherLenguage < 3 ||
    validStack;

  const submitFormData = (e) => {
    e.preventDefault();
    setError(interfaceErrors);

    if (valid) {
      validator.isEmpty(values.levelEnglish) &&
        handleError("levelEnglish", "Selecciona un nivel de ingles");

      values.likes.length < 1 &&
        handleError("likes", "Seleciona al menos una opcion");

      values.anotherLenguage.length < 3 &&
        handleError("anotherLenguage", "Ingresa un dato valido");

      validStack && handleError("stack", "Selecciona al menos un item");
    } else {
      saveData();
    }
  };

  const isChecked = (item) => values?.likes.includes(item);

  const isCheckedRoles = (item) => values?.roles.includes(item);

  const isCheckedStackJunior = (item) => values?.stackJunior.includes(item);

  const isCheckedStackMid = (item) => values?.stackMid.includes(item);

  const isCheckedStackSenior = (item) => values?.stackSenior.includes(item);

  return (
    <form onSubmit={submitFormData}>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Skills del candidato
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail. (Actualizar)
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="english-level"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              English level <span className="text-red-600">*</span>
            </label>
            <div className="mt-2">
              <select
                id="english-level"
                name="english-level"
                value={values.levelEnglish}
                onChange={handleFormData("levelEnglish")}
                required
                className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
                  error.levelEnglish
                    ? "border-2 border-red-500 focus:ring-red-500"
                    : "focus:ring-primary"
                }`}
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
            {error.levelEnglish && (
              <p className="text-red-500 text-xs italic mt-2">
                {error.levelEnglish}
              </p>
            )}
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="another-languague"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Another language <span className="text-red-600">*</span>
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="another-languague"
                id="another-languague"
                autoComplete="another-languague"
                placeholder="Portugues"
                value={values.anotherLenguage}
                onChange={handleFormData("anotherLenguage")}
                required
                className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                  error.anotherLenguage
                    ? "border-2 border-red-500 focus:ring-red-500"
                    : "focus:ring-primary"
                }`}
              />
            </div>
            {error.anotherLenguage && (
              <p className="text-red-500 text-xs italic mt-2">
                {error.anotherLenguage}
              </p>
            )}
          </div>

          <div className="sm:col-span-6">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                What we Like top <span className="text-red-600">*</span>
              </legend>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-6">
                {likes.map((like, index) => (
                  <div
                    className="flex gap-x-3 my-1 sm:col-span-3 md:col-span-2"
                    key={like}
                  >
                    <div className="flex h-6 items-center">
                      <input
                        id={`like-top-${index}`}
                        name="like-top"
                        type="checkbox"
                        defaultChecked={isChecked(like)}
                        value={like}
                        onChange={handleFormData("likes")}
                        className={`h-4 w-4 rounded ${
                          error.likes
                            ? "border-red-500 focus:ring-red-500 text-red-500"
                            : "border-gray-300 focus:ring-primary text-primary"
                        }`}
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="ike-top"
                        className={`font-medium ${
                          error.likes ? "text-red-500" : "text-gray-900"
                        }`}
                      >
                        {like}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              {error.likes && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.likes}
                </p>
              )}
            </fieldset>
          </div>

          <div className="sm:col-span-6">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Roles
              </legend>
              <div className="mt-4 flex flex-wrap gap-2 pb-2">
                <div className=""></div>
                {roles.map((rol, index) => (
                  <div
                    key={rol}
                    onClick={handleFormData("roles", rol)}
                    className={`rounded-3xl text-xs px-3 py-1.5 border-2 cursor-pointer ${
                      isCheckedRoles(rol)
                        ? "text-white bg-dark-mid"
                        : "border-gray-200"
                    } ${error.rol ? "text-red-500 " : ""}`}
                  >
                    {rol}
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="sm:col-span-6">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Tech Stack <span className="text-red-600">*</span>
              </legend>

              <div className="mt-6 pl-5">
                <legend className="text-sm leading-6 text-gray-900">
                  Beginner
                </legend>
                <div className="mt-4 flex flex-wrap gap-2 pb-2">
                  <div className=""></div>
                  {stackTech.map((stack, index) => (
                    <div
                      key={stack}
                      onClick={handleFormData("stackJunior", stack)}
                      className={`rounded-3xl text-xs px-3 py-1.5 border-2 cursor-pointer ${
                        isCheckedStackJunior(stack)
                          ? "text-white bg-dark-mid"
                          : "border-gray-200"
                      } ${error.stack ? "text-red-500 " : ""}`}
                    >
                      {stack}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pl-5">
                <legend className="text-sm leading-6 text-gray-900">
                  Intermediate
                </legend>
                <div className="mt-4 flex flex-wrap gap-2 pb-2">
                  <div className=""></div>
                  {stackTech.map((stack, index) => (
                    <div
                      key={stack}
                      onClick={handleFormData("stackMid", stack)}
                      className={`rounded-3xl text-xs px-3 py-1.5 border-2 cursor-pointer ${
                        isCheckedStackMid(stack)
                          ? "text-white bg-dark-mid"
                          : "border-gray-200"
                      } ${error.stack ? "text-red-500 " : ""}`}
                    >
                      {stack}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pl-5">
                <legend className="text-sm leading-6 text-gray-900">
                  Crack
                </legend>
                <div className="mt-4 flex flex-wrap gap-2 pb-2">
                  <div className=""></div>
                  {stackTech.map((stack, index) => (
                    <div
                      key={stack}
                      onClick={handleFormData("stackSenior", stack)}
                      className={`rounded-3xl text-xs px-3 py-1.5 border-2 cursor-pointer ${
                        isCheckedStackSenior(stack)
                          ? "text-white bg-dark-mid"
                          : "border-gray-200"
                      } ${error.stack ? "text-red-500 " : ""}`}
                    >
                      {stack}
                    </div>
                  ))}
                </div>
              </div>

              {error.stack && (
                <p className="text-red-500 text-xs italic mt-2">
                  {error.stack}
                </p>
              )}
            </fieldset>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="comments"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Aspects to take into account
            </label>
            <div className="mt-2">
              <textarea
                id="aspects"
                name="aspects"
                rows={3}
                onChange={handleFormData("aspects")}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
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
          className="text-sm font-semibold leading-6 text-gray-900 border-2 border-gray-900/10 px-3 py-2 rounded-md shadow-sm"
        >
          Back
        </button>
        <button
          type="submit"
          className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Save
        </button>
      </div>
    </form>
  );
};
