import { personalSchema } from "../schemas/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const inputTagValues = [
  {
    inputHeading: "Name",
    placeholder: "e.g. Stephen King",
    name: "name",
    type: "text",
  },
  {
    inputHeading: "Email Address",
    placeholder: "e.g. stephenking@lorem.com",
    name: "email",
    type: "email",
  },
  {
    inputHeading: "Phone Number",
    placeholder: "e.g. +1234567890",
    name: "phone",
    type: "number",
  },
];

const PersonalInfo = ({ change, value }) => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalSchema),
    defaultValues: value,
  });

  const submitForm = (data) => {
    console.log(data);
    if (data) {
      change("home", "selectPlans", data);
    }
  };

  return (
    <div className="common-container">
      <div className="common-heading-div">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form onSubmit={handleSubmit(submitForm)} noValidate>
        <div>
          {inputTagValues.map((inputs) => (
            <div className="personal-info-form-input" key={inputs.name}>
              <span>
                <label htmlFor={inputs.name}>{inputs.inputHeading}</label>
                <p>{errors[inputs.name]?.message}</p>
              </span>
              <input
                type={inputs.type}
                id={inputs.name}
                placeholder={inputs.placeholder}
                {...register(`${inputs.name}`)}
                style={{
                  outline: `${
                    errors[inputs.name]?.message ? "1px solid #9e5a63" : ""
                  }`,
                }}
              />
            </div>
          ))}
        </div>
        <div className="navigation-button">
          <div></div>
          <button type="submit">Next Step</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
