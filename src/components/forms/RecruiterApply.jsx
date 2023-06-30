import { useState } from "react";
import { StepOne, StepThree, StepTwo } from "./recruiter-job";
import { maskOnlyNumbers } from "../../helpers/masks";
import { Loader } from "../Loader";
import Modal from "../Modal";
import { Failed } from "../responses/Failed";
import { Success } from "../responses/Success";
import { useDataSender } from "../../hooks/useDataSender";

export const RecruiterApply = () => {
  const isNumbers = ["phone", "currentSalary", "expectationSalary"];
  const isChecks = ["likes"];
  const isArrays = ["roles", "stackJunior", "stackMid", "stackSenior"];

  const [step, setstep] = useState(1);

  //const [isLoading, setisLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [responseType, setResponseType] = useState('failed');

  const { isLoading, error, responseData, sendData } = useDataSender();


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    source: "",
    linkedin: "",
    github: "",
    cv: "",
    currentSalary: "",
    expectationSalary: "",
    levelEnglish: "",
    anotherLenguage: "",
    likes: [],
    roles: [],
    stackJunior: [],
    stackMid: [],
    stackSenior: [],
    aspects: "",
    onSite: "",
    client: "",
    position: "",
    offers: "",
    time: "",
    recruiter: "",
    comments: "",
  });

  const saveData = () => {
    //setisLoading(true);
    console.log("Save Data ...", formData);
    sendData(formData);
    //setisLoading(false);
    setShowModal(true);
    setResponseType("success");
  };

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleCheck = (arrChecked, value, checked) => {
    var updatedList = [...arrChecked];
    if (checked) {
      updatedList = [...arrChecked, value];
    } else {
      updatedList.splice(arrChecked.indexOf(value), 1);
    }
    return updatedList;
  };

  const handleArrays = (arr, value) => {
    var updatedList = [...arr];
    const index = arr.indexOf(value);
    if (index > -1) {
      updatedList.splice(index, 1);
    } else {
      updatedList = [...arr, value];
    }
    return updatedList;
  };

  const handleInputData = (input, data) => (e) => {
    const { value, checked } = e.target;

    let newValue;
    if (
      isNumbers.includes(input) ||
      isChecks.includes(input) ||
      isArrays.includes(input)
    ) {
      if (isNumbers.includes(input)) {
        newValue = maskOnlyNumbers(value);
      }
      if (isChecks.includes(input)) {
        newValue = handleCheck(formData.likes, value, checked);
      }
      if (isArrays.includes(input)) {
        newValue = handleArrays(formData[input], data);
      }
    } else {
      newValue = value;
    }

    setFormData((prevState) => ({
      ...prevState,
      [input]: newValue,
    }));
  };

  const currentStep = () => {
    switch (step) {
      case 1:
        return (
          <StepOne
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        );
      case 2:
        return (
          <StepTwo
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        );
      case 3:
        return (
          <StepThree
            saveData={saveData}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        );
      default:
        return <div> Loading ... </div>;
    }
  };

  return (
    <div className="container mx-auto py-16">
      <div className="mx-auto lg:max-w-4xl p-8 bg-white rounded-3xl shadow">
        <div className="space-y-12">{currentStep()}</div>
      </div>
      {isLoading && <Loader />}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        {responseType === "success" ? (
          <Success setShowModal={setShowModal} />
        ) : (
          <Failed setShowModal={setShowModal} />
        )}
      </Modal>
    </div>
  );
};
