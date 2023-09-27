import { useState } from "react";

const plansData = [
  {
    icons: "/icon-arcade.svg",
    pack: "Arcade",
    monthPrice: "9/mo",
    yearPrice: "90/yr",
  },
  {
    icons: "/icon-advanced.svg",
    pack: "Advanced",
    monthPrice: "12/mo",
    yearPrice: "120/yr",
  },
  {
    icons: "/icon-pro.svg",
    pack: "Pro",
    monthPrice: "15/mo",
    yearPrice: "150/yr",
  },
];

const SelectPlan = ({ change, value }) => {
  const [selectPlan, setSelectPlan] = useState({
    pack: value.plan?.pack,
    planSelect: false,
    price: value.plan?.price,
  });
  const [planChange, setPlanChange] = useState(
    value.plan?.planSelect ? value.plan.planSelect : false
  );

  //Data reset on change the plan year
  const planchangeMethod = () => {
    setSelectPlan({
      pack: "",
      planSelect: planChange,
      price: "",
    });
  };

  //Data Set on State
  const selectPlanUpdate = (data) => {
    setSelectPlan((emptyobject) => ({ ...emptyobject }, { ...data }));
  };

  //Move on next page
  const nextPage = () => {
    if (selectPlan.pack) {
      change("selectPlans", "pickAddOns", { plan: selectPlan });
    }
  };

  //Move on previous page
  const backPage = () => {
    change("selectPlans", "home", { plan: selectPlan });
  };

  return (
    <div className="common-container">
      <div className="common-heading-div">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="select-plan-box-container">
        <div>
          <div className="plan-box-container">
            {plansData.map((data) => (
              <div
                className={` ${
                  selectPlan?.pack == data?.pack
                    ? " select-item plan-box-div "
                    : "plan-box-div"
                }`}
                key={data?.pack}
                onClick={() =>
                  selectPlanUpdate({
                    pack: data?.pack,
                    planSelect: planChange,
                    price: !planChange ? data.monthPrice : data.yearPrice,
                  })
                }
              >
                <img src={data.icons} alt="icons" />
                <div className="plan-box-detail">
                  <h4>{data?.pack}</h4>
                  <p>${!planChange ? data.monthPrice : data.yearPrice}</p>
                  <p
                    style={
                      planChange
                        ? {
                            display: "block",
                            marginTop: "0.6rem",
                            color: "#000d35",
                            fontWeight: "bold",
                          }
                        : { display: "none" }
                    }
                  >
                    2 months free
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="plan-value-converter">
            <p style={{ color: `${planChange ? "#91939f" : ""}` }}>Monthly</p>
            <label className="switch" htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                onChange={() => {
                  setPlanChange(!planChange);
                  planchangeMethod();
                }}
                checked={planChange}
              />
              <div className="slider round"></div>
            </label>
            <p style={{ color: `${!planChange ? "#91939f" : ""}` }}>Yearly</p>
          </div>
        </div>
        <div className="navigation-button">
          <div onClick={backPage}>Go Back</div>
          <button onClick={nextPage}>Next Step</button>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
