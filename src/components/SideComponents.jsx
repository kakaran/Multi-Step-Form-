
const linkDetail = [
    {
        heading: "Your Info",
    },
    {
        heading: "Select Plan",
    },
    {
        heading: "Add-ons",
    },
    {
        heading: "Summary",
    }
]


const SideComponents = () => {
    return (
        <div className="side-component-container">
            {
                linkDetail.map((value, index) => (
                    <div className="side-menu-steps-container" >
                        <div className="side-menu-index"><span>{index + 1}</span></div>
                        <div className="side-menu-detail">
                            <p>STEP {index + 1}</p>
                            <h2>{value.heading}</h2>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default SideComponents
