import { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import SelectPlan from "../components/SelectPlan";
import PickAddOns from "../components/PickAddOns";
import FinishingUp from "../components/FinishingUp";
import { useEffect } from "react";

const Home = () => {
  const [page, setpage] = useState({
    home: false,
    selectPlans: false,
    pickAddOns: true,
    finishingUp: false,
  });

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    add: "",
  });

//   useEffect(() => {
//     setpage({
//       home: true,
//       selectPlans: false,
//       pickAddOns: false,
//       finishingUp: false,
//     });
//   }, []);

  const Onchagetesdetail = (last, next, value) => {
    setpage({ ...page, [last]: false, [next]: true });
    setFormValue((preState) => ({
      ...preState,
      ...value,
    }));
  };

  console.log(formValue, "Home");

  return (
    <>
      {page.home && (
        <PersonalInfo change={Onchagetesdetail} value={formValue} />
      )}
      {page.selectPlans && (
        <SelectPlan change={Onchagetesdetail} value={formValue} />
      )}
      {page.pickAddOns && (
        <PickAddOns change={Onchagetesdetail} value={formValue} />
      )}
      {page.finishingUp && (
        <FinishingUp change={Onchagetesdetail} value={formValue} />
      )}
    </>
  );
};

export default Home;
