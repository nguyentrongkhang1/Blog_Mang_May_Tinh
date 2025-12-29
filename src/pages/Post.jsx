import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { LiveProvider, LiveEditor, LiveError } from 'react-live'
import { loadPost, blogPosts } from '../utils/loadMarkdown'

function Post() {
  const { slug } = useParams()
  const [content, setContent] = useState('')
  const [readingProgress, setReadingProgress] = useState(0)

  const post = blogPosts.find(p => p.slug === slug)

  useEffect(() => {
    loadPost(slug).then(setContent)
  }, [slug])

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / total) * 100
      setReadingProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getLanguageFromClassName = (className) => {
    if (!className) return null
    const m = className.match(/language-(\w+)/)
    return m ? m[1].toLowerCase() : null
  }

  const formatPostDate = (dateStr) => {
    // Luôn hiển thị vào tháng 12 năm 2025.
    // Nếu post.date dạng YYYY-MM-DD thì giữ ngày đó, còn không thì dùng ngày 1.
    const defaultDay = 1
    if (!dateStr) return new Date(2025, 11, defaultDay).toLocaleDateString('vi-VN')
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr)
    const day = m ? Number(m[3]) : defaultDay
    return new Date(2025, 11, day).toLocaleDateString('vi-VN')
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-700 dark:text-gray-200 transition-colors duration-300">

      <div className="fixed top-0 left-0 h-1 bg-indigo-600 z-50" style={{ width: `${readingProgress}%` }} />

      <div className="max-w-4xl mx-auto px-6 py-24">

        <Link to="/blog" className="text-indigo-500 mb-6 inline-block">← Quay lại Blog</Link>

        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
          {post?.title}
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mb-12">
          {formatPostDate(post?.date)}
        </p>

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => (
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-10 mb-4">
                {children}
              </h2>
            ),
            p: ({ children }) => (
              <p className="leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                {children}
              </p>
            ),
            code({ inline, className, children }) {
              if (inline) {
                return (
                  <code className="bg-gray-200 dark:bg-slate-700 px-1 rounded text-sm">
                    {children}
                  </code>
                )
              }

              const codeString = String(children).replace(/\n$/, '')
              const lang = getLanguageFromClassName(className)

              // Nếu là JavaScript -> cho react-live (không render preview trắng)
              if (lang === 'js' || lang === 'javascript') {
                return (
                  <div className="my-10 p-4 rounded-xl bg-gray-900 text-white text-sm overflow-x-auto shadow-md border border-slate-700">
                    <LiveProvider code={codeString} noInline={true}>
                      <LiveEditor className="rounded-md bg-transparent" />
                      <LiveError className="text-red-400 mt-2" />
                    </LiveProvider>
                  </div>
                )
              }

              // Mọi ngôn ngữ khác -> hiển thị tĩnh, không dùng LiveProvider
              return (
                <pre className="my-10 p-6 rounded-lg bg-slate-900 text-slate-100 text-sm overflow-x-auto shadow-md border border-slate-700">
                  <code className="font-mono leading-relaxed whitespace-pre">
                    {codeString}
                  </code>
                </pre>
              )
            }
          }}
        >
          {content}
        </ReactMarkdown>

        <div className="text-center mt-20">
          <p className="font-semibold">Nguyễn Trọng Khang</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Sinh viên năm cuối – Công nghệ Phần mềm
          </p>
        </div>

      </div>
    </section>
  )
}

export default Post