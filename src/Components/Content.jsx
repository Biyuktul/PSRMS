import Card from "./Card";
import '../styles/Main.css'
// const img_one = "https://images.pexels.com/photos/532001/pexels-photo-532001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
// const img_two = "";
// const img_three = "";
// const img_four = "";

function Content() {
    return (
        <div>
            <div className="card-container">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Content;