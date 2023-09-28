const linkDetail = [
  {
    heading: "Your Info",
    activeValue: "home",
  },
  {
    heading: "Select Plan",
    activeValue: "selectPlans",
  },
  {
    heading: "Add-ons",
    activeValue: "pickAddOns",
  },
  {
    heading: "Summary",
    activeValue: "finishingUp",
  },
];

const SideComponents = ({ active }) => {
  return (
    <div className="side-component-container">
      {linkDetail.map((value, index) => (
        <div className="side-menu-steps-container" key={index}>
          <div className={`${active == value.activeValue ? "side-menu-index side-index-active" : "side-menu-index"}`}>
            <span>{index + 1}</span>
          </div>
          <div className="side-menu-detail">
            <p>STEP {index + 1}</p>
            <h2>{value.heading}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideComponents;
