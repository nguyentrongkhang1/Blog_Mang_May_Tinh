import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { loadPost, blogPosts } from '../utils/loadMarkdown'
import ReadingMusic from '../components/ReadingMusic'

function Post() {
  const { slug } = useParams()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [readingProgress, setReadingProgress] = useState(0)

  const post = blogPosts.find((p) => p.slug === slug)

  // Icon theo bài viết
  const getPostIcon = (postSlug) => {
    const iconMap = {
      'tong-quan-lap-trinh-mang-va-mo-hinh-client-server': (
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      ),
      'http-va-vai-tro-cua-giao-thuc-mang-trong-ung-dung-web-java': (
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3"></path>
      ),
      'ip-address-va-cach-ung-dung-mang-xac-dinh-thiet-bi': (
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5a2.5 2.5 0 00-5 0v3.5"></path>
      )
    }

    return iconMap[postSlug] || (
      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5"></path>
    )
  }

  // Load markdown
  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true)
        const markdown = await loadPost(slug)
        markdown ? setContent(markdown) : setError('Không tìm thấy bài viết')
      } catch (err) {
        setError('Lỗi khi tải bài viết')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    if (slug) fetchContent()
  }, [slug])

  // Progress bar
  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = Math.min(
        (scrollTop / (documentHeight - windowHeight)) * 100,
        100
      )
      setReadingProgress(progress)
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()
    return () => window.removeEventListener('scroll', updateProgress)
  }, [content])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-indigo-300 border-t-indigo-600 rounded-full"></div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">{error || 'Không tìm thấy bài viết'}</p>
      </div>
    )
  }

  return (
    <section className="bg-gray-50 min-h-screen">

      {/* Progress */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-indigo-600"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="container px-5 py-24 mx-auto">

        {/* Back */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-indigo-600 mb-8"
        >
          ← Quay lại Blog
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-100 text-indigo-600 mb-6">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {getPostIcon(slug)}
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <p className="text-gray-500">
            {new Date(post.date).toLocaleDateString('vi-VN')}
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto prose prose-lg prose-indigo">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="font-semibold text-gray-800">
            Nguyễn Trọng Khang
          </p>
          <p className="text-gray-500 text-sm">
            Sinh viên năm cuối – Công nghệ Phần mềm
          </p>
        </div>

      </div>
    </section>
  )
}

export default Post
