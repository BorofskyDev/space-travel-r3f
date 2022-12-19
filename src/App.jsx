import { Html, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Earth from './components/home/Earth'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className='App'>
      <Canvas>
        <Stars
          radius={100}
          depth={70}
          count={10000}
          factor={3}
          saturation={1}
          fade
          speed={1}
        />
        {/* <Earth /> */}
        <Home />
      </Canvas>
      <Navbar />
    </div>
  )
}

export default App
