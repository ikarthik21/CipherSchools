import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topnav from './Components/Navabars/Topnav';
import SideNav from './Components/Navabars/SideNav';
import Profile from './Components/Profile/Profile';
 

function App() {
  return (
    <div className="App">


      <BrowserRouter>

        <Topnav />
        <SideNav />
        <Routes>
          <Route exact path="/" element={<Profile />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
