import { NavLink } from 'react-router-dom'
import useDarkMode from '../hooks/useDarkMode'

function Navbar() {
  const { isDark, toggleDarkMode } = useDarkMode()

  const baseClass =
    'font-semibold tracking-wide pb-1 transition-colors duration-200'

  const activeClass =
    'text-indigo-600 border-b-2 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'

  const inactiveClass =
    'text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'

  return (
    <nav className="w-full bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800">
      <div
        className="
          flex items-center justify-center
          gap-4 sm:gap-6 md:gap-10
          text-sm sm:text-base
          flex-wrap
          py-3
        "
      >
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

        {/* 🌙 / ☀️ DARK MODE TOGGLE */}
        <button
          onClick={toggleDarkMode}
          className="
            ml-2 w-9 h-9
            flex items-center justify-center
            rounded-full
            border border-gray-300 dark:border-slate-700
            bg-white dark:bg-slate-900
            text-gray-700 dark:text-gray-200
            hover:bg-gray-100 dark:hover:bg-slate-800
            transition
          "
          aria-label="Toggle dark mode"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
