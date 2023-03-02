import { BsCircle } from "react-icons/bs";
import { MdDocumentScanner, MdGroups } from "react-icons/md";
import { 
    RiLogoutBoxLine, 
    RiDashboardFill,
    RiSettings5Fill
} from "react-icons/ri";
import '../Sidebar.css';

function SideBar() {
    return (
        <div class='side-bar'>
            <ul className="sidebar-items">
                <li>
                    <BsCircle color='black' size={65}/>
                </li>
                <li>
                    <RiDashboardFill color='black' size={35}/>
                </li>
                <li>
                    <MdDocumentScanner color='black' size={35}/>
                </li>
                <li>
                    <MdGroups color='black' size={35}/>
                </li>
                <li>
                    <RiSettings5Fill color='black' size={35}/>
                </li>
                <li>
                    <RiLogoutBoxLine color='black' size={35}/>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;