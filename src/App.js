import { useEffect, useRef } from 'react'
import './App.css';
import Home from './pages/Home'
import NavBar from './components/NavBar';
import CLOUDS from 'vanta/src/vanta.clouds'

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
      // Try reducing these values to improve performance
      cloudColor: 0xadc1de,
      cloudShadowColor: 0x183550,
      speed: 0.6, // Reduce the speed slightly
      texturePath: null, // Use simpler texture
    })

    
  return () => {
    if(vantaEffect.current) {
      vantaEffect.current.destroy();
    }
  }

  }, [])


  return (
    <div id='app'>
      < NavBar />
      < Home/>
    </div>
  );
}

export default App;
