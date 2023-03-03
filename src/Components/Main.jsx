import Content from './Content';
import SideBar from './SideBar';
import '../styles/Main.css';

function Main() {
    return (
        <div className='main-section'>
            <SideBar />
            <Content />
        </div>
    );
}

export default Main;