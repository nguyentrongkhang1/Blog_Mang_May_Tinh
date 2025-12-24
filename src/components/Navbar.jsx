import { NavLink } from 'react-router-dom'

function Navbar() {
  const baseClass =
    'font-semibold tracking-wide pb-1 transition-colors duration-200'

  const activeClass =
    'text-indigo-600 border-b-2 border-indigo-600'

  const inactiveClass =
    'text-gray-700 hover:text-indigo-600'

  return (
    <nav className="w-full bg-white border-b">
      <div className="
                      flex items-center justify-center
                      gap-4 sm:gap-6 md:gap-10
                      text-sm sm:text-base
  flex-wrap
">


        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Blog
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Projects
        </NavLink>


        <NavLink
          to="/certifications"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Certifications
          
        </NavLink>

        

      </div>
    </nav>
  )
}

export default Navbar
