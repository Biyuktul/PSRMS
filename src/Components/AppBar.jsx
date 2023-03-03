import '../styles/Appbar.css';
import { 
    FaBell,
    FaSearch
} from 'react-icons/fa';
import { BsCircle } from "react-icons/bs";
import { RiMailOpenFill } from "react-icons/ri";


function AppBar() {
    return (
        <div className='navbar'>
            <h2>Overview</h2>
            <ul className="navbar-items">
                <li>
                    <FaSearch color='black' size={25}/>
                </li>
                <li>
                    <FaBell color='black' size={25}/>
                </li>
                <li>
                    <RiMailOpenFill color='black' size={25}/>
                </li>
                <h3>Yonatan Addis</h3>
                <li>
                    <BsCircle color='black' size={65}/>
                </li>
            </ul>
        </div>
    )
}

export default AppBar;