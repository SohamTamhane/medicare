import "./MedicineChart.css";
import EditImg from "../../../assets/edit.png";

function MedicineChart(){
    return(
        <div className="medi-chart-main-div">
            <div className="chart-patient-name">Soham Tamhane</div>
            <div className="medi-desc">
                <div className="medi-name">1. China 30</div>
                <div className="medi-dose">(4 pills x 2)</div>
            </div>
            <div className="medi-desc">
                <div className="medi-name">2. China 30</div>
                <div className="medi-dose">(4 pills x 2)</div>
            </div>
            <div className="edit-btn">
                <img src={EditImg} className="edit-img" alt="edit" />
            </div>            
        </div>
    )
}
export default MedicineChart;