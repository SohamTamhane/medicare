import "./Dashboard.css";
import CrossImg from "../../assets/cross.png";
import DashboardNav from "./DashboardNav";
import { useContext, useEffect, useRef, useState } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { Context } from "../../config/Context";
import EditImg from "../../assets/edit.png";


function YourMedicine() {

    const { loginInfo } = useContext(Context);
    const [allMed, setAllMed] = useState(undefined);

    const blackDiv = useRef();
    const editBlackDiv = useRef();
    const [message, setMessage] = useState("");
    const [editMessage, setEditMessage] = useState("");

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [medType, setMedType] = useState("pills");
    const [location, setLocation] = useState("");

    
    const [editOldName, setEditOldName] = useState("");
    const [editName, setEditName] = useState("");
    const [editQuantity, setEditQuantity] = useState(1);
    const [editMedType, setEditMedType] = useState("");
    const [editLocation, setEditLocation] = useState("");

    const usersCollectionRef = collection(db, "users");

    async function fetchUserDetails() {
        const data = await getDocs(usersCollectionRef);
        const mainData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const filterData = mainData.filter((elm) => { return elm.email === loginInfo?.user?.email })
        setAllMed(filterData[0]?.medicine);
    }

    async function handleSumbit() {
        if (name !== "" && quantity !== "") {
            try {
                const data = await getDocs(usersCollectionRef);
                const mainData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                const filterData = mainData.filter((elm) => { return elm.email === loginInfo?.user?.email })

                if (filterData.length === 0) {
                    await addDoc(usersCollectionRef, { email: loginInfo?.user?.email, medicine: [{ name: name, qty: quantity, type: medType, location: location }] });
                    setMessage("Medicine Added Successfully!!");
                    fetchUserDetails();
                }
                else {
                    const id = filterData[0].id;
                    const userDoc = doc(db, "users", id);
                    const med = filterData[0].medicine;
                    const filterMed = med.filter((elm) => { return elm.name === name })
                    if (filterMed.length !== 0) {
                        setMessage("Medicine Already Exists");
                    }
                    else {
                        med.push({ name: name, qty: quantity, type: medType, location: location });
                        await updateDoc(userDoc, { medicine: med });
                        setMessage("Medicine Added Successfully!!");
                        fetchUserDetails();
                    }
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

    async function handleUpdate() {
        if (editName !== "" && editQuantity !== "") {
            try {
                const data = await getDocs(usersCollectionRef);
                const mainData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                const filterData = mainData.filter((elm) => { return elm.email === loginInfo?.user?.email })

                
                const id = filterData[0].id;
                const userDoc = doc(db, "users", id);
                const med = filterData[0].medicine;
                const filterMed = med.filter((elm) => { return elm.name !== editOldName })
                
                filterMed.push({ name: editName, qty: editQuantity, type: editMedType, location: editLocation });
                await updateDoc(userDoc, { medicine: filterMed });
                setEditMessage("Medicine Updated Successfully!!");
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

    function openBlackDiv() {
        blackDiv.current.style.display = "flex";
    }

    function closeBlackDiv() {
        blackDiv.current.style.display = "none";
    }

    function openEditBlackDiv(name, qty, type, location) {
        setEditName(name);
        setEditOldName(name);
        setEditQuantity(qty);
        setEditMedType(type);
        setEditLocation(location);
        editBlackDiv.current.style.display = "flex";
    }

    function closeEditBlackDiv() {
        editBlackDiv.current.style.display = "none";
    }

    useEffect(() => {
        fetchUserDetails();
    }, [loginInfo])

    return (
        <>
            <div className="dashboard-main-div">
                <DashboardNav />
                <div className='dashboard-s1 home-section'>
                    <div className='section-heading'>
                        Your <span className='highlight-span'>Medicine</span>
                    </div>
                    <div className="filter-bar-main-div">
                        <input type="text" className="filter-bar" placeholder="Enter Medicine Name" />
                        <button onClick={openBlackDiv} className="add-medi-btn primary-btn">+</button>
                    </div>
                    <div className="all-medi-details-main-div">
                        {
                            allMed?.map((med) => (
                                <div key={med.name} className="medicine-details-div">
                                    <div className="medicine-name-qty-div">
                                        <div className="medicine-name">{med.name}</div>
                                        <div className="medicine-qty">({med.qty})</div>
                                    </div>
                                    <div className="medicine-location">Type: {med.type}</div>
                                    <div className="medicine-location">Location: {med.location}</div>
                                    <div onClick={()=>openEditBlackDiv(med.name, med.qty, med.type, med.location)} className="edit-btn">
                                        <img src={EditImg} className="edit-img" alt="edit" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div ref={blackDiv} className="add-medi-chart-main-black-div">
                <div className="add-medi-chart-div">
                    <div className="add-medi-chart-text1">Add Medicine</div>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="input-field" type="text" placeholder="Medicine Name" /> <br />
                    <input value={quantity} onChange={(e) => setQuantity(e.target.value)} className="input-field" type="number" placeholder="Quantity" /> <br />
                    <select value={medType} onChange={(e) => setMedType(e.target.value)} className="input-field">
                        <option selected value="pills">Pills</option>
                        <option value="drops">Drops</option>
                    </select> <br />
                    <input value={location} onChange={(e) => setLocation(e.target.value)} className="input-field" type="text" placeholder="Last Location" /> <br />
                    <div className="add-medi-chart-text2">{message}</div>
                    <div className="login-btn-div">
                        <button onClick={handleSumbit} className='primary-btn'>Add</button>
                    </div>
                    <div onClick={closeBlackDiv} className="cross-btn-div">
                        <img src={CrossImg} alt="cross" className="cross-img" />
                    </div>
                </div>
            </div>
            <div ref={editBlackDiv} className="edit-medi-chart-main-black-div">
                <div className="add-medi-chart-div">
                    <div className="add-medi-chart-text1">Edit Medicine</div>
                    <input value={editName} onChange={(e) => setEditName(e.target.value)} className="input-field" type="text" placeholder="Medicine Name" /> <br />
                    <input value={editQuantity} onChange={(e) => setEditQuantity(e.target.value)} className="input-field" type="number" placeholder="Quantity" /> <br />
                    <select value={editMedType} onChange={(e) => setEditMedType(e.target.value)} className="input-field">
                        <option selected value="pills">Pills</option>
                        <option value="drops">Drops</option>
                    </select> <br />
                    <input value={editLocation} onChange={(e) => setEditLocation(e.target.value)} className="input-field" type="text" placeholder="Last Location" /> <br />
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
export default YourMedicine;