import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/home';
import Hospitals from './components/pages/hospitals';
import Notification from './components/pages/Notif'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Notif' element={<Notification/>} />
        <Route path='/hospitals' element={<Hospitals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
