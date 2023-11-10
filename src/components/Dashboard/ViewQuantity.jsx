import { useRef, useState } from "react";
import "./Dashboard.css";
import DashboardNav from "./DashboardNav";
import CrossImg from "../../assets/cross.png";


function ViewQuantity(){

    const today = new Date();

    const blackDiv = useRef();
    const [message, setMessage] = useState("");

    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`);
    const [desc, setDesc] = useState("");

    function openBlackDiv() {
        blackDiv.current.style.display = "flex";
    }

    function closeBlackDiv() {
        blackDiv.current.style.display = "none";
    }

    function handleSubmit(){
        console.log(amount, date, desc);
    }
    
    return(
        <>
            <div className="dashboard-main-div">
                <DashboardNav/>
                <div className='dashboard-s1 home-section'>
                    <div className='section-heading'>
                        Your <span className='highlight-span'>Expenses</span>
                    </div>
                    <div className="new-expense-main-div">
                        <button onClick={openBlackDiv} className="primary-btn">New Expense</button>
                    </div>
                </div>
            </div>
            <div ref={blackDiv} className="add-medi-dashboard-main-black-div">
                <div className="add-medi-chart-div">
                    <div className="add-medi-chart-text1">New Expense</div>
                    <input value={date} onChange={(e)=>setDate(e.target.value)} className="input-field" type="date" placeholder="Date" /> <br />
                    <input value={amount} onChange={(e)=>setAmount(e.target.value)} className="input-field" type="text" placeholder="Amount" /> <br />
                    <input value={desc} onChange={(e)=>setDesc(e.target.value)} className="input-field" type="text" placeholder="Description" /> <br />
                    <div className="add-medi-chart-text2">{message}</div>
                    <div className="login-btn-div">
                        <button onClick={handleSubmit} className='primary-btn'>Create</button>
                    </div>
                    <div onClick={closeBlackDiv} className="cross-btn-div">
                        <img src={CrossImg} alt="cross" className="cross-img" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewQuantity;