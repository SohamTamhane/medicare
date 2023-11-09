import "./Dashboard.css";
import DashboardNav from "./DashboardNav";

function ViewQuantity(){
    return(
        <>
            <div className="dashboard-main-div">
                <DashboardNav/>
                <div className='dashboard-s1 home-section'>
                    <div className='section-heading'>
                        View <span className='highlight-span'>Quantity</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewQuantity;