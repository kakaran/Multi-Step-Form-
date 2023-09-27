import { useState } from "react";

const allServices = [
  {
    id: 1,
    serviceName: "Online service",
    serviceDetail: "Access to multiplayer games",
    serviceMonthPrice: "1/mo",
    serviceYearPrice: "10/yr",
  },
  {
    id: 2,
    serviceName: "Larger storage",
    serviceDetail: "Extra 1TB of cloud save",
    serviceMonthPrice: "2/mo",
    serviceYearPrice: "20/yr",
  },
  {
    id: 3,
    serviceName: "Customizable profile",
    serviceDetail: "Custom theme on your profile",
    serviceMonthPrice: "2/mo",
    serviceYearPrice: "20/yr",
  },
];

const PickAddOns = ({ change, value }) => {
  const [planChange] = useState(
    value.plan?.planSelect ? value.plan.planSelect : false
  );

  const [addOns, setAddOns] = useState(value.add ? value.add : []);

  const AddOnsMethod = (data) => {
    setAddOns((addOns) => {
      if (!addOns.length) {
        return [...addOns, data];
      } else {
        let match = addOns.some((value) => value.id === data.id);
        if (match) return addOns.filter((check) => check.id !== data.id);
        else return [...addOns, data];
      }
    });
  };

  const nextPage = () => {
    if (addOns.length) {
      change("pickAddOns", "finishingUp", { add: addOns });
    }
  };

  const backPage = () => {
    change("pickAddOns", "selectPlans", { add: addOns });
  };

  return (
    <div className="common-container">
      <div className="common-heading-div">
        <h1>Pick add-ons</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className="pick-add-ons-container">
        <div>
          {allServices.map((value, index) => {
            const inValue = addOns.some((addOn) => addOn.id === value.id);
            return (
              <div className="service-container" key={index}>
                <div>
                  <input
                    type="checkbox"
                    name=""
                    id={value.id}
                    checked={inValue}
                    onChange={() =>
                      AddOnsMethod({
                        id: value.id,
                        pack: value?.serviceName,
                        planSelect: planChange,
                        price: !planChange
                          ? value.serviceMonthPrice
                          : value.serviceYearPrice,
                      })
                    }
                  />
                  <span>
                    <label htmlFor={value.id}>{value.serviceName}</label>
                    <p>{value.serviceDetail}</p>
                  </span>
                </div>
                <p>
                  +$
                  {!planChange
                    ? value.serviceMonthPrice
                    : value.serviceYearPrice}
                </p>
              </div>
            );
          })}
        </div>
        <div className="navigation-button">
          <div onClick={backPage}>Go Back</div>
          <button onClick={nextPage}>Next Step</button>
        </div>
      </div>
    </div>
  );
};

export default PickAddOns;
