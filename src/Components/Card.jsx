import '../styles/Main.css';
import { SlBadge } from "react-icons/sl";
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
           
            // marginTop: 50
        }}
    />
);

function Card(props) {
    const img_url = "https://images.pexels.com/photos/532001/pexels-photo-532001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const img_alt = Math.random()
    return (
        <div class="card">
            <div className='card-header'>
            <SlBadge size={70}/>
            <h1>DEPARTMENTS: 40</h1>
            <ColoredLine color='white'/>
            </div>
            <img src={img_url} alt={img_alt}/>
        </div>
    );
}

export default Card;