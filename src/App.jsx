import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/home';
import Hospitals from './components/pages/hospitals';
import LoginForm from './components/pages/LoginForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LoginForm' element={<LoginForm />} />
        <Route path='/hospitals' element={<Hospitals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
