const allServices = [
  {
    serviceName: "Online service",
    serviceDetail: "Access to multiplayer games",
    serviceMonthPrice: "1/mo",
    serviceYearPrice: "10/yr",
  },
  {
    serviceName: "Larger storage",
    serviceDetail: "Extra 1TB of cloud save",
    serviceMonthPrice: "2/mo",
    serviceYearPrice: "20/yr",
  },
  {
    serviceName: "Customizable profile",
    serviceDetail: "Custom theme on your profile",
    serviceMonthPrice: "2/mo",
    serviceYearPrice: "20/yr",
  },
];

const PickAddOns = ({ change }) => {
  
  const nextPage = () => {
    // if (selectPlan) {
    change("pickAddOns", "finishingUp");
    // }
  };

  const backPage = () => {
    change("pickAddOns", "selectPlans");
  };

  return (
    <div className="common-container">
      <div className="common-heading-div">
        <h1>Pick add-ons</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className="pick-add-ons-container">
        <div>
          {allServices.map((value, index) => (
            <div className="service-container" key={index}>
              <div>
                <input type="checkbox" name="" id="" />
                <span>
                  <label htmlFor="">{value.serviceName}</label>
                  <p>{value.serviceDetail}</p>
                </span>
              </div>
              <p>+${value.serviceMonthPrice}</p>
            </div>
          ))}
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
