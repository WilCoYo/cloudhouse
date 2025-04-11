import { useEffect } from 'react'
import './App.css';
import Home from './pages/Home'
import NavBar from './components/NavBar';
import CLOUDS from 'vanta/src/vanta.clouds'

function App() {

  useEffect(()=>{
    CLOUDS({
      el: "#app",
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x899651,
      backgroundColor: 0x032222,
      showDots: false
    })
  }, [])


  return (
    <div id='app'>
      < NavBar />
      < Home/>
    </div>
  );
}

export default App;
