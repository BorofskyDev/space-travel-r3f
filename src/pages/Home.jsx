import { Html } from '@react-three/drei'
import Earth from '../components/home/Earth'

function Home() {
  return (
    <>
      <Html>
        <main className='grid-container grid-container--Home' id='main'>
          <div className='Home dark-glass'>
            <h1 className='text-accent fs-500 ff-sans-cond uppercase letter-spacing-1'>
              Explore our system with{' '}
              <span className='fs-900 ff-serif text-white d-block active'>
                solit
              </span>
            </h1>
            <p>
              <span className='fs-600 ff-serif text-white uppercase letter-spacing-3'>
                solit
              </span>
              (Sol Interplanetary Travel) provides you with the opportunity of a
              lifetime. Cruise the solar system at sub-light speeds. View the
              rings of Saturn in luxurious accommodations. Travel to
              destinations only dreamed of by our ancestors. With{' '}
              <span class='fs-600 ff-serif text-white gradient-text active'>
                SOLIT
              </span>
              , the sky isn't the limit, but the start of your next adventure.
            </p>
          </div>
        </main>
      </Html>
      <Earth />
    </>
  )
}

export default Home
