const FinishingUp = ({ change }) => {
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
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="finishing-up">
        <div className="navigation-button">
          <div onClick={backPage}>Go Back</div>
          <button onClick={nextPage}>Next Step</button>
        </div>
      </div>
    </div>
  );
};

export default FinishingUp;
