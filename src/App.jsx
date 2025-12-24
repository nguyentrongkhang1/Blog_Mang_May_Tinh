import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Post from './pages/Post'
import CertificationsPage from './pages/Certifications'
import ScrollToTop from './components/ScrollToTop'
import GlobalMusicPlayer from './components/GlobalMusicPlayer'
import Projects from './pages/Projects'

function App() {
  return (
    <BrowserRouter>
    <GlobalMusicPlayer />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
