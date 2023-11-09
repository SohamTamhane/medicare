import { Link } from "react-router-dom";
import "./Dashboard.css";
import CrossImg from "../../assets/cross.png";
import DashboardNav from "./DashboardNav";
import { useRef, useState } from "react";

function YourMedicine(){

    const blackDiv = useRef();
    const [message, setMessage] = useState("");

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [medType, setMedType] = useState("");
    const [location, setLocation] = useState("");

    async function handleSumbit(){
        if(name!=="" && quantity!=="" && medType!==""){
            console.log(name, quantity, medType, location);
        }
        else{
            setMessage("Please Fill All the Details");
        }
    }

    function openBlackDiv(){
        blackDiv.current.style.display = "flex";
    }

    function closeBlackDiv(){
        blackDiv.current.style.display = "none";
    }

    return(
        <>
            <div className="dashboard-main-div">
                <DashboardNav/>
                <div className='dashboard-s1 home-section'>
                    <div className='section-heading'>
                        Your <span className='highlight-span'>Medicine</span>
                    </div>
                    <div className="filter-bar-main-div">
                        <input type="text" className="filter-bar" placeholder="Enter Medicine Name"/>
                        <button onClick={openBlackDiv} className="add-medi-btn primary-btn">+</button>
                    </div>
                </div>
            </div>
            <div ref={blackDiv} className="add-medi-chart-main-black-div">
                <div className="add-medi-chart-div">
                    <div className="add-medi-chart-text1">Add Medicine</div>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="input-field" type="text" placeholder="Medicine Name" /> <br />
                    <input value={quantity} onChange={(e) => setQuantity(e.target.value)} className="input-field" type="number" placeholder="Quantity" /> <br />
                    <select value={medType} onChange={(e) => setMedType(e.target.value)} className="input-field">
                        <option value="pills">Pills</option>
                        <option value="drops">Drops</option>
                    </select> <br />
                    <input value={location} onChange={(e) => setLocation(e.target.value)} className="input-field" type="text" placeholder="Last Location" /> <br />
                    <div className="add-medi-chart-text2">{message}</div>
                    <div className="login-btn-div">
                        <button onClick={handleSumbit} className='primary-btn'>Add</button>
                    </div>
                    <div onClick={closeBlackDiv} className="cross-btn-div">
                        <img src={CrossImg} alt="cross" className="cross-img"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default YourMedicine;