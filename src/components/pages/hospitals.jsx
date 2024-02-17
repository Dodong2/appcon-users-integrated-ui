import { useEffect } from 'react';
import Load from './Loading';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import Host from '../images/Host.png'
import mem1 from '../images/mem1.jpg'
import bruh from '../images/bruh.jpg'

const Hospitals = () => {
  useEffect(() => {
    document.title = 'Hospitals | HEAN';
  }, []);

  const searchParams = new URLSearchParams(window.location.search);
  const latitude = searchParams.get('lat');
  const longitude = searchParams.get('long');

  return (
    <>
    <Load />
    
    </>
  );
};

export default Hospitals;
