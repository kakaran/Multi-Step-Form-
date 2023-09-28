import { useState, useEffect } from "react";
import PersonalInfo from "../components/PersonalInfo";
import SelectPlan from "../components/SelectPlan";
import PickAddOns from "../components/PickAddOns";
import FinishingUp from "../components/FinishingUp";
import Thank from "../components/Thank";

const Home = ({sideMethod}) => {
  const [page, setpage] = useState({
    home: true,
    selectPlans: false,
    pickAddOns: false,
    finishingUp: false,
    thank: false
  });

  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    add: [],
  });

  useEffect(() => {
    setpage({
      home: true,
      selectPlans: false,
      pickAddOns: false,
      finishingUp: false,
      thank: false
    });
  }, []);

  const Onchagetesdetail = (last, next, value) => {
    setpage({ ...page, [last]: false, [next]: true });
    setFormValue((preState) => ({
      ...preState,
      ...value,
    }));
    sideMethod(next);
  };


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
      {page.thank && (
        <Thank change={Onchagetesdetail} value={formValue} />
      )}
    </>
  );
};

export default Home;
