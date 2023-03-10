import '../styles/Main.css';
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            width: 150
        }}
    />
);

function Card(props) {
    return (
        <div class="card">
            <div className='card-header'>
            {props.children}
            <h2>{props.text}</h2>
            <ColoredLine color='#1d1d2c'/>
            <h1>40</h1>
            </div>
        </div>
    );
}

export default Card;