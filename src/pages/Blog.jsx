import { Link } from 'react-router-dom'
import { blogPosts } from '../utils/loadMarkdown'

function Blog() {

  // =========================
  // ICON cho từng bài blog
  // =========================
  const blogIcons = [
    <path key="1" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>,
    <path key="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>,
    <path key="3" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5a2.5 2.5 0 00-5 0v3.5m5 0h-5m5 0v3.5a2.5 2.5 0 005 0V19m0 0h5M9 6a3 3 0 105 0 3 3 0 00-5 0zm12 0a3 3 0 105 0 3 3 0 00-5 0z"></path>,
    <path key="4" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>,
    <path key="5" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>,
    <path key="6" d="M4 6h16M4 12h16M4 18h16"></path>,
    <path key="7" d="M13 10V3L4 14h7v7l9-11h-7z"></path>,
    <path key="8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>,
    <path key="9" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>,
  ]

  // =========================
  // FORMAT NGÀY CHUẨN VN
  // =========================
  const formatDateVN = (dateStr) => {
    if (!dateStr) return ''

    const full = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr)
    if (full) {
      const [, y, m, d] = full
      return new Date(y, m - 1, d).toLocaleDateString('vi-VN')
    }

    const short = /^(\d{4})-(\d{2})$/.exec(dateStr)
    if (short) {
      const [, y, m] = short
      return new Date(y, m - 1, 1).toLocaleDateString('vi-VN', {
        month: '2-digit',
        year: 'numeric',
      })
    }

    return dateStr
  }

  return (
    <section className="text-gray-600 body-font min-h-screen bg-gray-50">
      <div className="container px-5 pt-16 pb-24 mx-auto">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-semibold mb-2 text-gray-900">
            Blog Học Tập – Lập trình mạng
          </h1>

          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Blog học tập phục vụ học phần <strong>Lập trình mạng</strong>, 
            ghi lại kiến thức và ví dụ thực hành về <strong>Java</strong> và 
            <strong> JavaScript</strong> trong quá trình học tập và rèn luyện.
          </p>

          {/* DÒNG DẪN HƯỚNG HỌC TẬP */}
          <p className="text-sm text-gray-400 mt-2">
            Các bài viết được sắp xếp theo tiến trình học từ cơ bản đến nâng cao
          </p>
        </div>

        {/* ================= BLOG GRID ================= */}
        <div className="flex flex-wrap -m-4">
          {blogPosts.map((post, index) => (
            <div key={post.slug} className="xl:w-1/3 md:w-1/2 p-4">
              <Link to={`/blog/${post.slug}`}>
                <div
                  className="border border-gray-200 bg-white p-6 rounded-xl h-full
                             hover:shadow-lg hover:border-indigo-200
                             transition-all duration-300
                             cursor-pointer group hover:-translate-y-1"
                >

                  {/* ICON + DATE */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 inline-flex items-center justify-center
                                 rounded-full bg-indigo-100 text-indigo-500
                                 group-hover:bg-indigo-500 group-hover:text-white
                                 transition-colors"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        {blogIcons[index]}
                      </svg>
                    </div>

                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {formatDateVN(post.date)}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h2
                    className="text-lg text-gray-900 font-medium mb-2
                               group-hover:text-indigo-600 transition-colors"
                  >
                    <span className="text-indigo-500 font-semibold mr-1">
                      Bài {index + 1}.
                    </span>
                    {post.title}
                  </h2>

                  {/* EXCERPT */}
                  <p className="text-base text-gray-500 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-indigo-600 font-medium">
                      Đọc thêm →
                    </span>
                    <span className="text-xs text-gray-400">
                      📖 ~5 phút
                    </span>
                  </div>

                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Blog
