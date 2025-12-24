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
      github: '',
      demo: ''
    },
    {
      title: 'Ứng dụng đọc Kinh Thánh',
      image:
        'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80',
      description:
        'Ứng dụng di động hỗ trợ đọc Kinh Thánh, tìm kiếm nội dung và quản lý dữ liệu người dùng. Giao diện đơn giản, dễ sử dụng, hướng đến trải nghiệm đọc tập trung.',
      tech: ['Flutter', 'Dart', 'MongoDB'],
      role: 'Mobile App Developer',
      github: '',
      demo: ''
    }
  ]

  return (
    <section className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Dự án cá nhân
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Các dự án tiêu biểu trong quá trình học tập và thực hành phát triển
            ứng dụng web và mobile.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h2>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600
                                 rounded-full text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-500 mb-4">
                  Vai trò: <strong>{project.role}</strong>
                </p>

                {/* LINKS */}
                <div className="flex gap-4 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BACK */}
        <div className="flex justify-center mt-20">
          <Link
            to="/"
            className="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded
                       hover:bg-gray-200 transition"
          >
            Về Home
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Projects
