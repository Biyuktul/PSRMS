import Card from "./Card";
import Report from './Report';
import Chart from "./Chart";
import '../styles/Main.css'
import { GiPoliceOfficerHead, GiHandcuffs } from 'react-icons/gi';
import { MdLocalPolice } from 'react-icons/md';
import { FaFlag } from 'react-icons/fa';


const card1_info = "Departments"
const card2_info = "Officers"
const card3_info = "Stations"
const card4_info = "Arrests"

function Content() {
    return (
        <div className="content-container">
            <div className="card-container">
                <Card text={card1_info}>
                    <MdLocalPolice size={50} style={{ fill: '#0E8388' }}/>
                </Card>
                <Card text={card2_info}>
                    <GiPoliceOfficerHead size={50} style={{ fill: '#4D455D' }}/>
                </Card>
                <Card text={card3_info}>
                    <FaFlag size={50} style={{ fill: '#698269' }}/>
                </Card>
                 <Card text={card4_info}>
                    <GiHandcuffs size={50} style={{ fill: '#DF2E38' }}/>
                </Card> 
            </div>

            <div className="report-section">
                <Chart />
                <Report />
            </div>
        </div>
    );
}

export default Content;