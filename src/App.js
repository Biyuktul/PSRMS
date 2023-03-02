import AppBar from "./Components/AppBar";
import SideBar from "./Components/SideBar";
import Main from './Components/Main';
import './App.css';

function App() {
  return (
    <div>
        {/* <div className="nav-menu"> */}
            <AppBar />
            <SideBar />
        {/* </div> */}
        <Main />
    </div>
  );
}
export default App;
