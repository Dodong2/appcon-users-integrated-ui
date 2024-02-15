import { useEffect } from 'react';
import Load from './Loading';

const Hospitals = () => {
  useEffect(() => {
    document.title = 'Hospitals | HEAN';
  }, []);

  const searchParams = new URLSearchParams(window.location.search);
  const latitude = searchParams.get('lat');
  const longitude = searchParams.get('long');

  return (
    <div>
      <Load />
      <div>Latitude: {latitude}</div>
      <div>Longitude: {longitude}</div>
    </div>
  );
};

export default Hospitals;
