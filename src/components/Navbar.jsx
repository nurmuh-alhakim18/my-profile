import { BsFillMoonStarsFill } from 'react-icons/bs'
import Resume from '../files/Nur Muhammad Alhakim\'s Resume.pdf'

function Navbar({isDark, handleDark}) {
  return (
    <div className={isDark ? "dark" : ""}>
      <nav className='py-5 mb-8 flex justify-between'>
        <h1 className='text-2xl font-semibold font-burtons dark:text-cyan-700'>hakim</h1>
        <ul className='flex items-center'>
          <li>
            <BsFillMoonStarsFill onClick={() => {handleDark(!isDark)}} className='cursor-pointer text-2xl dark:text-cyan-700'/>
          </li>
          <li>
            <a 
              href={Resume}
              download="Nur_Muhammad_Alhakim_Resume.pdf" 
              className='bg-gradient-to-r from-cyan-700 to-teal-400 text-white text-sm px-4 py-2 rounded-md ml-6'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar