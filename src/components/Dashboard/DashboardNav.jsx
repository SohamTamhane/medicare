import ChartImg from "../../assets/chart.png";
import SearchImg from "../../assets/search.png";
import QtyImg from "../../assets/quantity.png";
import AccountImg from "../../assets/account.png";
import { useContext } from "react";
import { Context } from "../../config/Context";
import "./Dashboard.css";
import { Link } from "react-router-dom";

function DashboardNav() {

    const {loginInfo} = useContext(Context);

    return (
        <div className="dashboard-hero-section">
            <div className="d1-hero-heading">
                Welcome, <span className="highlight-span">{loginInfo?.user?.displayName}</span>
            </div>
            <div className="dashboard-options-div">
                <Link to={'/dashboard'} className="d1-option">
                    <img src={ChartImg} alt="medicineChart" className="d1-img" />
                    <div className="d1-text">Medicine Chart</div>
                </Link>
                <Link to={'/dashboard/medicines'} className="d1-option">
                    <img src={SearchImg} alt="medicineChart" className="d1-img" />
                    <div className="d1-text">Your Medicine</div>
                </Link>
                <Link to={'/dashboard/qty'} className="d1-option">
                    <img src={QtyImg} alt="medicineChart" className="d1-img" />
                    <div className="d1-text">View Quantity</div>
                </Link>
                <Link to={'/dashboard/account'} className="d1-option">
                    <img src={AccountImg} alt="medicineChart" className="d1-img" />
                    <div className="d1-text">View Account</div>
                </Link>
            </div>
        </div>
    )
}
export default DashboardNav;