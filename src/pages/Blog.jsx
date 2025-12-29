import { Link } from 'react-router-dom'
import { blogPosts } from '../utils/loadMarkdown'
import useFavoriteBlog from '../utils/useFavoriteBlog'
import { useState } from 'react'

function Blog() {

  const [favorite, setFavorite] = useFavoriteBlog()
  const [page, setPage] = useState(1)
  const itemsPerPage = 3

  const blogIcons = [
    <path key="1" d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    <path key="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
    <path key="3" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5a2.5 2.5 0 00-5 0v3.5m5 0h-5m5 0v3.5a2.5 2.5 0 005 0V19m0 0h5M9 6a3 3 0 105 0 3 3 0 00-5 0zm12 0a3 3 0 105 0 3 3 0 00-5 0z" />,
    <path key="4" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
    <path key="5" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
    <path key="6" d="M4 6h16M4 12h16M4 18h16" />,
    <path key="7" d="M13 10V3L4 14h7v7l9-11h-7z" />,
    <path key="8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0" />,
    <path key="9" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
  ]

  const formatDateVN = (dateStr) => {
    // Luôn hiển thị vào tháng 12 (tháng index 11) năm 2025.
    // Nếu dateStr có dạng YYYY-MM-DD thì giữ ngày từ đó, ngược lại dùng ngày 1.
    const defaultDay = 1
    if (!dateStr) return new Date(2025, 11, defaultDay).toLocaleDateString('vi-VN')
    const full = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr)
    if (full) {
      const day = Number(full[3]) || defaultDay
      return new Date(2025, 11, day).toLocaleDateString('vi-VN')
    }
    return new Date(2025, 11, defaultDay).toLocaleDateString('vi-VN')
  }

  const favoritePost = blogPosts.find(p => p.slug === favorite)

  // Pagination
  const totalPages = Math.max(1, Math.ceil(blogPosts.length / itemsPerPage))
  const startIdx = (page - 1) * itemsPerPage
  const endIdx = startIdx + itemsPerPage
  const pagePosts = blogPosts.slice(startIdx, endIdx)

  const toggleFavorite = (e, slug) => {
    e.preventDefault()
    if (favorite === slug) {
      setFavorite(null)
      localStorage.removeItem('favorite_blog')
    } else {
      setFavorite(slug)
    }
  }

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-600 dark:text-gray-300">
      <div className="container px-5 pt-16 pb-24 mx-auto">

        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
            Blog Học Tập – Lập Trình Mạng
          </h1>
        </div>

        {favoritePost && (
          <div className="mb-12 p-6 bg-indigo-50 dark:bg-slate-800 border-l-4 border-indigo-500 rounded">
            <p className="text-sm text-indigo-600 font-semibold">⭐ Blog yêu thích</p>
            <Link to={`/blog/${favoritePost.slug}`} className="text-lg font-bold hover:text-indigo-600">
              {favoritePost.title}
            </Link>
          </div>
        )}

        <div className="flex flex-wrap -m-4">
          {pagePosts.map((post, index) => (
            <div key={post.slug} className="xl:w-1/3 md:w-1/2 p-4">
              <Link to={`/blog/${post.slug}`}>
                <div className="h-full p-6 bg-white dark:bg-slate-800 border rounded-xl hover:shadow-lg transition">

                  <div className="flex justify-between mb-4">
                    <svg className="w-6 h-6 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      {blogIcons[(startIdx + index) % blogIcons.length]}
                    </svg>
                    <span className="text-xs">{formatDateVN(post.date)}</span>
                  </div>

                  <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                  <p className="text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex justify-between items-center">
                    <span className="text-indigo-600">Đọc thêm →</span>
                    <button
                      onClick={(e) => toggleFavorite(e, post.slug)}
                      className={`text-xl ${favorite === post.slug ? 'text-red-500' : 'text-gray-400'}`}
                      aria-label={favorite === post.slug ? 'Bỏ yêu thích' : 'Yêu thích'}
                    >
                      {favorite === post.slug ? '❤️' : '🤍'}
                    </button>
                  </div>

                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center items-center mt-8 space-x-3">
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            className="px-3 py-1 rounded-md bg-white dark:bg-slate-800 border disabled:opacity-40"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => {
            const p = i + 1
            return (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`px-3 py-1 rounded-md border ${p === page ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-slate-800'}`}
                aria-current={p === page ? 'page' : undefined}
              >
                {p}
              </button>
            )
          })}

          <button
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            className="px-3 py-1 rounded-md bg-white dark:bg-slate-800 border disabled:opacity-40"
          >
            Next
          </button>
        </div>

      </div>
    </section>
  )
}

export default Blog