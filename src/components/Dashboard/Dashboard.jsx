import "./Dashboard.css";
import MedicineChart from "./MedicineChart/MedicineChart";
import CrossImg from "../../assets/cross.png";
import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { Context } from "../../config/Context";
import DashboardNav from "./DashboardNav";

function Dashboard() {

    const {loginInfo} = useContext(Context);
    const blackDiv = useRef();
    const [message, setMessage] = useState("");

    function openBlackDiv() {
        blackDiv.current.style.display = "flex";
    }

    function closeBlackDiv() {
        blackDiv.current.style.display = "none";
    }

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
                        <span onClick={openBlackDiv} className="create-chart-btn primary-btn">Create New Chart</span>
                    </div>
                </div>
            </div>
            <div ref={blackDiv} className="add-medi-dashboard-main-black-div">
                <div className="add-medi-chart-div">
                    <div className="add-medi-chart-text1">Create Medicine Chart</div>
                    <input className="input-field" type="text" placeholder="Patient Name" /> <br />
                    <div className="medicine-input-div">
                        <input className="input-field" type="text" placeholder="Medicine Name" /> <br />
                        <input className="input-field" type="text" placeholder="Dose" /> <br />
                    </div>
                    <div className="add-medi-chart-text2">{message}</div>
                    <div className="login-btn-div">
                        <button className='primary-btn'>Add</button>
                    </div>
                    <div onClick={closeBlackDiv} className="cross-btn-div">
                        <img src={CrossImg} alt="cross" className="cross-img" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;