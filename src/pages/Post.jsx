import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { loadPost, blogPosts } from '../utils/loadMarkdown'

function Post() {
  const { slug } = useParams()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [readingProgress, setReadingProgress] = useState(0)

  const post = blogPosts.find((p) => p.slug === slug)

  /* ICON THEO BÀI */
  const getPostIcon = (postSlug) => {
    const iconMap = {
      'tong-quan-lap-trinh-mang-va-mo-hinh-client-server': (
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      ),
      'http-va-vai-tro-cua-giao-thuc-mang-trong-ung-dung-web-java': (
        <path d="M21 12a9 9 0 01-9 9m9-9H3" />
      ),
      'ip-address-va-cach-ung-dung-mang-xac-dinh-thiet-bi': (
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5a2.5 2.5 0 00-5 0v3.5" />
      )
    }

    return iconMap[postSlug] || (
      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5" />
    )
  }

  /* LOAD MARKDOWN */
  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true)
        const markdown = await loadPost(slug)
        markdown ? setContent(markdown) : setError('Không tìm thấy bài viết')
      } catch (err) {
        setError('Lỗi khi tải bài viết')
      } finally {
        setLoading(false)
      }
    }

    if (slug) fetchContent()
  }, [slug])

  /* PROGRESS BAR */
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="animate-spin h-12 w-12 border-4 border-indigo-300 border-t-indigo-600 rounded-full" />
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <p className="text-gray-600 dark:text-gray-400">
          {error || 'Không tìm thấy bài viết'}
        </p>
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-700 dark:text-gray-200 transition-colors">

      {/* PROGRESS */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-slate-700 z-50">
        <div
          className="h-full bg-indigo-600"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="container px-5 py-24 mx-auto">

        {/* BACK */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-8"
        >
          ← Quay lại Blog
        </Link>

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-6">
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

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>

          <p className="text-gray-500 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString('vi-VN')}
          </p>
        </div>

        {/* CONTENT */}
        <div className="max-w-4xl mx-auto prose prose-lg prose-indigo dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>

        {/* FOOTER */}
        <div className="text-center mt-16">
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            Nguyễn Trọng Khang
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Sinh viên năm cuối – Công nghệ Phần mềm
          </p>
        </div>

      </div>
    </section>
  )
}

export default Post
