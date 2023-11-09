import "./Dashboard.css";
import MedicineChart from "./MedicineChart/MedicineChart";
import CrossImg from "../../assets/cross.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../config/Context";
import DashboardNav from "./DashboardNav";

function Dashboard() {

    const {loginInfo} = useContext(Context);

    return (
        <>
            <div className="dashboard-main-div">
                <DashboardNav/>
                <div className='dashboard-s1 home-section'>
                    <div className='section-heading'>
                        Medicine <span className='highlight-span'>Chart</span>
                    </div>
                    <div className="medi-chart-all-div">
                        <MedicineChart />
                        <MedicineChart />
                    </div>
                    <div className="create-chart-btn-div">
                        <span className="create-chart-btn primary-btn">Create New Chart</span>
                    </div>
                </div>
            </div>
            <div className="add-medi-chart-main-black-div">
                <div className="add-medi-chart-div">
                    <div className="add-medi-chart-text1">Medicine Chart</div>
                    <input className="input-field" type="text" placeholder="Email" /> <br />
                    <input className="input-field" type="text" placeholder="Password" />
                    <div className="login-btn-div">
                        <Link className='primary-btn'>Add</Link>
                    </div>
                    <div className="cross-btn-div">
                        <img src={CrossImg} alt="cross" className="cross-img"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;