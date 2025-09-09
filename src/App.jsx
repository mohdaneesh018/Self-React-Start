import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Login from './Pages/Login'; 
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;