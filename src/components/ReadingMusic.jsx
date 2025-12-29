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

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-700 dark:text-gray-200 transition-colors duration-300">

      <div className="fixed top-0 left-0 h-1 bg-indigo-600 z-50" style={{ width: `${readingProgress}%` }} />

      <div className="max-w-4xl mx-auto px-6 py-24">

        <Link to="/blog" className="text-indigo-500 mb-6 inline-block">← Quay lại Blog</Link>

        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
          {post?.title}
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mb-12">
          {new Date(post?.date).toLocaleDateString('vi-VN')}
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

              // Non-inline code blocks: show dark-styled code editor only, no white preview box
              return (
                <div className="my-10 p-4 rounded-xl bg-gray-900 text-white text-sm overflow-x-auto shadow-md border border-slate-700">
                  <LiveProvider code={String(children)}>
                    <LiveEditor className="rounded-md bg-transparent" />
                    <LiveError className="text-red-400 mt-2" />
                  </LiveProvider>
                </div>
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