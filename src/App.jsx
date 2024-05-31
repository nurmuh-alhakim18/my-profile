import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import ProfileImage from './assets/kims.jpg'
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className='bg-white px-10 dark:bg-gray-900'>
        <section className='min-h-screen flex flex-col'>
          <Navbar isDark={darkMode} handleDark={setDarkMode}/>

          <div className='mx-auto'>
            <img src={ProfileImage} alt="Profile Image" className='rounded-full h-48'/>
          </div>

          <div className='text-center p-'>
            <h2 className='text-3xl py-2 text-cyan-700 font-bold'>Nur Muhammad Alhakim</h2>
            <h3 className='text-md py-2 font-semibold dark:text-white'>CS Student at BINUS University</h3>
            <p className='text-md py-5 font-medium leading-8 mx-auto text-gray-400 '>I am a passionate computer science student currently pursuing my education at Binus University. My areas of interest lie in the fascinating realms of cloud computing and business. Continuously strive to expand my knowledge and skills in the ever-evolving field of technology.</p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href="https://www.instagram.com/nurmuh.alhakim/" className='hover:text-sky-800' target='_blank'><AiFillInstagram/></a>
            <a href="https://www.linkedin.com/in/nurmuh-alhakim/" className='hover:text-sky-800' target='_blank'><AiFillLinkedin/></a>
            <a href="https://github.com/nurmuh-alhakim18" className='hover:text-sky-800' target='_blank'><AiFillGithub/></a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
