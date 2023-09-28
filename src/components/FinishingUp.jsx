import { useEffect, useState } from "react";

const FinishingUp = ({ change, value }) => {

  const [total, setTotal] = useState();

  const nextPage = () => {
    // if (selectPlan) {
    change("finishingUp", "thank");
    // }
  };

  const backPage = () => {
    change("finishingUp", "pickAddOns");
  };

  const ChageButton = () => {
    change("finishingUp", "selectPlans");
  };

  const totalValue = () => {
    let plan = value.plan.price.split("/");
    let result = Number(plan[0]);
    value.add.map((addOn) => {
      result += Number(addOn.price.split("/")[0]);
    });
    setTotal(result);
  };

  useEffect(() => {
    totalValue();
  }, [value]);

  return (
    <div className="common-container">
      <div className="common-heading-div">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="finishing-up">
        <div className="finishing-up-payment-page">
          <div className="finishing-up-payment-page-details">
            <div>
              <div>
                <h3>
                  {value?.plan.pack}
                  {value?.plan.planSelect ? "(Year)" : "(Monthly)"}
                </h3>
                <p onClick={ChageButton}>Change</p>
              </div>
              <p>${value?.plan.price}</p>
            </div>
            {value?.add.map((addOn) => (
              <div key={addOn.id}>
                <h4>{addOn.pack}</h4>
                <p>+${addOn.price}</p>
              </div>
            ))}
          </div>
          <div className="finishing-up-payment-page-total-value">
            <h5>Total (per {value?.plan.planSelect ? "year" : "monthly"})</h5>
            <p>{`+$${total}/${value?.plan.planSelect ? "yr" : "mo"}`}</p>
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

export default FinishingUp;
