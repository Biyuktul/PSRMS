import Card from "./Card";
import Report from './Report';
import Chart from "./Chart";
import '../styles/Main.css'
import { GiPoliceOfficerHead, GiHandcuffs } from 'react-icons/gi';
import { MdLocalPolice } from 'react-icons/md';
import { FaFlag } from 'react-icons/fa';
import EmployeeTable from "./EmployeeTable";
import PermissionBox from "./PermissionBox";
import SideMenu from './SettingSideMenu';
import ProfileSettings from "./ProfileSettings";


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

    // const employees = [
    //     { id: 1, name: 'Alice', email: 'alice@example.com', department: 'Marketing', salary: 50000, photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 2, name: 'Bob', email: 'bob@example.com', department: 'Engineering', salary: 75000, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 3, name: 'Charlie', email: 'charlie@example.com', department: 'Sales', salary: 60000, photoUrl: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 4, name: 'Dave', email: 'dave@example.com', department: 'Marketing', salary: 55000, photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 5, name: 'Emma', email: 'emma@example.com', department: 'Engineering', salary: 80000, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 6, name: 'Yonatan', email: 'alice@example.com', department: 'Marketing', salary: 50000, photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 7, name: 'Addis', email: 'bob@example.com', department: 'Engineering', salary: 75000, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 8, name: 'Handino', email: 'charlie@example.com', department: 'Sales', salary: 60000, photoUrl: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 9, name: 'Anjejo', email: 'dave@example.com', department: 'Marketing', salary: 55000, photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 10, name: 'Gebru', email: 'emma@example.com', department: 'Engineering', salary: 80000, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 11, name: 'Alice', email: 'alice@example.com', department: 'Marketing', salary: 50000, photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 12, name: 'Bob', email: 'bob@example.com', department: 'Engineering', salary: 75000, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 13, name: 'Charlie', email: 'charlie@example.com', department: 'Sales', salary: 60000, photoUrl: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 14, name: 'Dave', email: 'dave@example.com', department: 'Marketing', salary: 55000, photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 15, name: 'Emma', email: 'emma@example.com', department: 'Engineering', salary: 80000, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 16, name: 'Yonatan', email: 'alice@example.com', department: 'Marketing', salary: 50000, photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 17, name: 'Addis', email: 'bob@example.com', department: 'Engineering', salary: 75000, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 18, name: 'Handino', email: 'charlie@example.com', department: 'Sales', salary: 60000, photoUrl: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 19, name: 'Anjejo', email: 'dave@example.com', department: 'Marketing', salary: 55000, photoUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    //     { id: 20, name: 'Gebru', email: 'emma@example.com', department: 'Engineering', salary: 80000, photoUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
    //   ];
    
    //   return (
    //     <div>
    //       <EmployeeTable employees={employees} />
    //     </div>
    //   );
}

export default Content;