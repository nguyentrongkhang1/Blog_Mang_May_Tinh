import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import GlobalMusicPlayer from './components/GlobalMusicPlayer'

import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Post from './pages/Post'
import CertificationsPage from './pages/Certifications'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-slate-950 dark:text-gray-200 transition-colors duration-300">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<CertificationsPage />} />
        </Routes>

        <Footer />
        <GlobalMusicPlayer />
      </BrowserRouter>
    </div>
  )
}

export default App
