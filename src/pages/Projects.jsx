import { Link } from 'react-router-dom'

function Projects() {
  const projects = [
    {
      title: 'Hệ thống đặt phòng khách sạn tích hợp AI Chatbot',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      description:
        'Website đặt phòng khách sạn tích hợp AI Chatbot hỗ trợ chăm sóc khách hàng, tư vấn phòng, hỗ trợ đặt lịch và quản lý thông tin. Chatbot sử dụng AI để trả lời tự động và hỗ trợ người dùng theo ngữ cảnh.',
      tech: [
        'React',
        'Tailwind CSS',
        'Node.js',
        'MongoDB',
        'Google Gemini',
        'Google Calendar',
        'Google Sheets'
      ],
      role: 'Fullstack Developer',
      github: [
        {
          label: 'Frontend',
          url: 'https://github.com/nguyentrongkhang1/Do-an-chuyen-nganh'
        },
        {
          label: 'Backend',
          url: 'https://github.com/vanquy0911/BE-HOTEL'
        }
      ]
    },
    {
      title: 'Ứng dụng đọc Kinh Thánh',
      image:
        'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80',
      description:
        'Ứng dụng di động hỗ trợ đọc Kinh Thánh theo ngày, tìm kiếm nội dung và quản lý dữ liệu. Giao diện đơn giản, tập trung vào trải nghiệm đọc.',
      tech: ['Flutter', 'Dart'],
      role: 'Mobile App Developer',
      github: [
        {
          label: 'Source code',
          url: 'https://github.com/NerdKandev/Sang03_Nhom01_AppTimBaiDocTheoNgay'
        }
      ]
    }
  ]

  return (
    <section className="min-h-screen py-20 bg-slate-50 dark:bg-slate-950 text-gray-700 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Dự án cá nhân
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Các dự án tiêu biểu trong quá trình học tập và thực hành phát triển
            ứng dụng web và mobile.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-white dark:bg-slate-900
                rounded-xl shadow
                hover:shadow-lg transition
                overflow-hidden
                border border-gray-200 dark:border-slate-700
              "
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1 rounded-full text-xs font-medium
                        bg-indigo-50 text-indigo-600
                        dark:bg-indigo-500/15 dark:text-indigo-400
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Vai trò: <strong>{project.role}</strong>
                </p>

                {/* GITHUB LINKS */}
                <div className="flex gap-4 items-center">
                  {project.github.map((repo, i) => (
                    <a
                      key={i}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        text-indigo-600 dark:text-indigo-400
                        hover:underline
                      "
                    >
                      {/* GitHub Icon */}
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .5C5.73.5.5 5.74.5 12.03c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.18-1.18 3.18-1.18.62 1.57.23 2.73.11 3.02.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.2.66.79.55A11.53 11.53 0 0 0 23.5 12.03C23.5 5.74 18.27.5 12 .5z" />
                      </svg>
                      <span className="text-sm">{repo.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BACK */}
        <div className="flex justify-center mt-20">
          <Link
            to="/"
            className="
              px-6 py-3 font-semibold rounded
              bg-gray-100 dark:bg-slate-800
              text-gray-800 dark:text-gray-200
              hover:bg-gray-200 dark:hover:bg-slate-700
              transition
            "
          >
            Về Home
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Projects
