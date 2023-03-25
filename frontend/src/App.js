import './App.css';
import Profile from './Components/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topnav from './Components/Navbars.js/Topnav';
import SideNav from './Components/Navbars.js/SideNav';
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
      <Profile />

    </div>
  );
}

export default App;
