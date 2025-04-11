import { useEffect, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from '../src/pages/home/Home'
import NavBar from './components/NavBar';
import CLOUDS from 'vanta/src/vanta.clouds'
import BookingPage from './pages/bookingPage/BookingPage';

function App() {

  const vantaEffect = useRef(null);

  useEffect(()=>{
    vantaEffect.current = CLOUDS({
      el: "#app",
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x899651,
      backgroundColor: 0x032222,
      showDots: false,
      cloudColor: 0xadc1de,
      cloudShadowColor: 0x183550,
      speed: 0.6, 
      texturePath: null, 
    })

    
  return () => {
    if(vantaEffect.current) {
      vantaEffect.current.destroy();
    }
  }

  }, [])


  return (
    <div id='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book' element={<BookingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
