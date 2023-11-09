import "./Dashboard.css";
import ChartImg from "../../assets/chart.png";
import SearchImg from "../../assets/search.png";
import QtyImg from "../../assets/quantity.png";
import AccountImg from "../../assets/account.png";
import MedicineChart from "./MedicineChart/MedicineChart";
import CrossImg from "../../assets/cross.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../../config/Context";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

function Dashboard() {

    const navigate = useNavigate();
    const {loginInfo} = useContext(Context);

    async function logoutFunc(){
        try{
            await signOut(auth).then(()=>{
                navigate('/login');
            }).catch((error)=>{
                console.log(error);
            })
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <div className="dashboard-main-div">
                <div className="dashboard-hero-section">
                    <div className="d1-hero-heading">
                        Welcome, <span className="highlight-span">{loginInfo?.user?.displayName}</span>
                    </div>
                    <div className="dashboard-options-div">
                        <div className="d1-option">
                            <img src={ChartImg} alt="medicineChart" className="d1-img" />
                            <div className="d1-text">Medicine Chart</div>
                        </div>
                        <div className="d1-option">
                            <img src={SearchImg} alt="medicineChart" className="d1-img" />
                            <div className="d1-text">Your Medicine</div>
                        </div>
                        <div className="d1-option">
                            <img src={QtyImg} alt="medicineChart" className="d1-img" />
                            <div className="d1-text">View Quantity</div>
                        </div>
                        <div className="d1-option">
                            <img src={AccountImg} alt="medicineChart" className="d1-img" />
                            <div className="d1-text">View Account</div>
                        </div>
                    </div>
                </div>
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