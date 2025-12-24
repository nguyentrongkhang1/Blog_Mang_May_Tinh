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
      <div className="max-w-screen-2xl mx-auto px-8 h-16
                      flex items-center justify-center gap-10">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          ABOUT
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          BLOG
        </NavLink>

        <NavLink
          to="/certifications"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          CERTIFICATIONS
        </NavLink>

      </div>
    </nav>
  )
}

export default Navbar
