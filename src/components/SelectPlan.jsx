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
  const [selectPlan, setSelectPlan] = useState();
  const [planChange, setPlanChange] = useState(false);
  console.log(value);
  const nextPage = () => {
    if (selectPlan) {
      change("selectPlans", "pickAddOns", { plan: selectPlan });
    }
  };

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
                  setSelectPlan({
                    pack: data?.pack,
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
                onClick={() => setPlanChange(!planChange)}
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
