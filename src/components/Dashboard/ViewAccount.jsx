import "./Dashboard.css";
import DashboardNav from "./DashboardNav";

function ViewAccount(){
    return(
        <>
            <div className="dashboard-main-div">
                <DashboardNav/>
                <div className='dashboard-s1 home-section'>
                    <div className='section-heading'>
                        View <span className='highlight-span'>Account</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewAccount;