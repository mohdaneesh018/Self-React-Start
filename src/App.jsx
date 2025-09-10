import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import Home from './Pages/09-09/Home';
import Profile from './Pages/09-09/Profile';
import Register from './Pages/09-09/Register';
import Login from './Pages/09-09/Login'; 
import Navbar from './components/Navbar';
import UseState from './Pages/10-09/UseState';
import UseEffect from './Pages/10-09/UseEffect';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/use-state' element={<UseState />} />
        <Route path='/use-effect' element={<UseEffect />} />
      </Routes>
    </div>
  );
};

export default App;