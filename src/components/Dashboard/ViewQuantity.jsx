import { useContext, useEffect, useRef, useState } from "react";
import "./Dashboard.css";
import DashboardNav from "./DashboardNav";
import CrossImg from "../../assets/cross.png";
import EditImg from "../../assets/edit.png";
import { db } from "../../config/firebase";
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { Context } from "../../config/Context";

function ViewQuantity(){

    const today = new Date();
    const usersCollectionRef = collection(db, "users");
    const { loginInfo } = useContext(Context);

    const [expense, setExpense] = useState();

    // Edit Remaining
    const blackDiv = useRef();
    const editBlackDiv = useRef();
    

    const [message, setMessage] = useState("");
    const [editMessage, setEditMessage] = useState("");

    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`);
    const [desc, setDesc] = useState("");

    const [editAmount, setEditAmount] = useState("");
    const [editID, setEditID] = useState("");
    const [editDate, setEditDate] = useState("");
    const [editDesc, setEditDesc] = useState("");

    function openBlackDiv() {
        blackDiv.current.style.display = "flex";
    }

    function closeBlackDiv() {
        blackDiv.current.style.display = "none";
    }

    async function fetchUserDetails() {
        const data = await getDocs(usersCollectionRef);
        const mainData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const filterData = mainData.filter((elm) => { return elm.email === loginInfo?.user?.email })
        setExpense(filterData[0]?.expense);
    }

    useEffect(()=>{
        fetchUserDetails();
    }, [])

    async function handleSumbit() {
        if (amount !== "" && amount!==0 && date !== "" && desc !== "") {
            try {
                const data = await getDocs(usersCollectionRef);
                const mainData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                const filterData = mainData.filter((elm) => { return elm.email === loginInfo?.user?.email })

                if (filterData[0].expense === undefined) {
                    const id = filterData[0].id;
                    const userDoc = doc(db, "users", id);
                    await updateDoc(userDoc, { expense: [{ id: Date.now(), date: date, amount: amount, desc: desc }] });
                    setMessage("Expense Created Successfully!!");
                    fetchUserDetails();
                }
                else {
                    const id = filterData[0].id;
                    const userDoc = doc(db, "users", id);
                    const med = filterData[0].expense;
                
                    med.push({ id: Date.now(), date: date, amount: amount, desc: desc });
                    await updateDoc(userDoc, { expense: med });
                    setMessage("Expense Created Successfully!!");
                    fetchUserDetails();
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            setMessage("Please Fill All the Details");
        }
    }

    function openEditBlackDiv(amount, date, desc, id) {
        setEditAmount(amount);
        setEditID(id);
        setEditDate(date);
        setEditDesc(desc);
        editBlackDiv.current.style.display = "flex";
    }

    function closeEditBlackDiv() {
        editBlackDiv.current.style.display = "none";
    }

    async function handleUpdate() {
        if (editAmount !== "" && editDate !== "" && editDesc!=="") {
            try {
                const data = await getDocs(usersCollectionRef);
                const mainData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                const filterData = mainData.filter((elm) => { return elm.email === loginInfo?.user?.email })
                
                const id = filterData[0].id;
                const userDoc = doc(db, "users", id);
                const med = filterData[0].expense;
                const filterMed = med.filter((elm) => { return elm.id !== editID })
                
                filterMed.push({ id: editID, date: editDate, amount: editAmount, desc: editDesc });
                await updateDoc(userDoc, { expense: filterMed });
                setEditMessage("Expense Updated Successfully!!");
                fetchUserDetails();

            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            setEditMessage("Please Fill All the Details");
        }
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
                    <div className="all-medi-details-main-div">
                        {
                            expense?.map((exp) => (
                                <div key={exp.id} className="medicine-details-div">
                                    <div className="medicine-name-qty-div">
                                        <div className="medicine-name">₹{exp.amount}/-</div>
                                        <div className="medicine-qty">({exp.date})</div>
                                    </div>
                                    <div className="medicine-location">Desc: {exp.desc}</div>
                                    <div onClick={()=>openEditBlackDiv(exp.amount, exp.date, exp.desc, exp.id)} className="edit-btn">
                                        <img src={EditImg} className="edit-img" alt="edit" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div ref={blackDiv} className="add-medi-dashboard-main-black-div">
                <div className="add-medi-chart-div">
                    <div className="add-medi-chart-text1">New Expense</div>
                    <input value={date} onChange={(e)=>setDate(e.target.value)} className="input-field" type="date" placeholder="Date" /> <br />
                    <input value={amount} onChange={(e)=>setAmount(e.target.value)} className="input-field" type="number" placeholder="Amount" /> <br />
                    <input value={desc} onChange={(e)=>setDesc(e.target.value)} className="input-field" type="text" placeholder="Description" /> <br />
                    <div className="add-medi-chart-text2">{message}</div>
                    <div className="login-btn-div">
                        <button onClick={handleSumbit} className='primary-btn'>Create</button>
                    </div>
                    <div onClick={closeBlackDiv} className="cross-btn-div">
                        <img src={CrossImg} alt="cross" className="cross-img" />
                    </div>
                </div>
            </div>
            <div ref={editBlackDiv} className="edit-medi-chart-main-black-div">
                <div className="add-medi-chart-div">
                    <div className="add-medi-chart-text1">Edit Expense</div>
                    <input value={editDate} onChange={(e)=>setEditDate(e.target.value)} className="input-field" type="date" placeholder="Date" /> <br />
                    <input value={editAmount} onChange={(e)=>setEditAmount(e.target.value)} className="input-field" type="number" placeholder="Amount" /> <br />
                    <input value={editDesc} onChange={(e)=>setEditDesc(e.target.value)} className="input-field" type="text" placeholder="Description" /> <br />
                    <div className="add-medi-chart-text2">{editMessage}</div>
                    <div className="login-btn-div">
                        <button onClick={handleUpdate} className='primary-btn'>Update</button>
                    </div>
                    <div onClick={closeEditBlackDiv} className="cross-btn-div">
                        <img src={CrossImg} alt="cross" className="cross-img" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewQuantity;