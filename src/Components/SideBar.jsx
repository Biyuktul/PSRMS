import { BsCircle } from "react-icons/bs";
import { MdDocumentScanner, MdGroups } from "react-icons/md";
import { 
    RiLogoutBoxLine, 
    RiDashboardFill,
    RiSettings5Fill
} from "react-icons/ri";
import '../styles/Sidebar.css';

function SideBar() {
    return (
        <div class='side-bar'>
            <ul className="sidebar-items">
                <li className="logo-item">
                    <BsCircle color='#EDF1D6' size={65}/>
                </li>
                <li>
                    <RiDashboardFill color='#EDF1D6' size={35}/>
                </li>
                <li>
                    <MdDocumentScanner color='#EDF1D6' size={35}/>
                </li>
                <li className="group-item">
                    <MdGroups color='#EDF1D6' size={35}/>
                </li>
                <li>
                    <RiSettings5Fill color='#EDF1D6' size={35}/>
                </li>
                <li>
                    <RiLogoutBoxLine color='#EDF1D6' size={35}/>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;