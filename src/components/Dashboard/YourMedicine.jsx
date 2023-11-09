import "./Dashboard.css";
import DashboardNav from "./DashboardNav";

function YourMedicine(){
    return(
        <>
            <div className="dashboard-main-div">
                <DashboardNav/>
                <div className='dashboard-s1 home-section'>
                    <div className='section-heading'>
                        Your <span className='highlight-span'>Medicine</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default YourMedicine;