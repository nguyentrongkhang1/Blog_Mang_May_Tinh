import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="bg-white dark:bg-slate-950 pb-28 text-gray-700 dark:text-gray-200 transition-colors duration-300">

      {/* ===== HERO / PROFILE ===== */}
      <div
        className="
          mx-auto px-8 max-w-screen-2xl
          grid grid-cols-1 md:grid-cols-2
          gap-16 items-center
          pt-10
        "
      >

        {/* LEFT */}
        <div>
          <div
            className="
              inline-block bg-white dark:bg-slate-900
              px-6 py-4 shadow-lg mb-6
              border-l-4 border-indigo-600
            "
          >
            <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 uppercase">
              Nguyen Trong Khang
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              WORK HARD <br />
              IN SILENCE <br />
              LET SKILLS <br />
              SPEAK
            </h1>
          </div>

          {/* ===== GIỚI THIỆU ===== */}
          <p
            className="
              max-w-md mb-8 leading-relaxed
              text-justify hyphens-auto
              text-gray-600 dark:text-gray-300
            "
          >
            Tôi là <strong>Nguyễn Trọng Khang</strong>, sinh viên năm cuối ngành
            <strong> Công nghệ Phần mềm</strong> tại Đại học Công Nghệ TP.HCM.
            <br />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Blog này được xây dựng để phục vụ học phần
              <strong> Lập trình mạng</strong>, ghi chép kiến thức về
              <strong> Java</strong> và <strong>JavaScript</strong>.
            </span>
          </p>

          <div className="flex gap-4">
            <Link
              to="/about"
              className="
                px-6 py-3 bg-indigo-600 text-white
                font-semibold rounded
                hover:bg-indigo-700 transition
              "
            >
              Xem Profile
            </Link>
            <Link
              to="/blog"
              className="
                px-6 py-3 border border-gray-300 dark:border-slate-700
                font-semibold rounded
                hover:bg-gray-100 dark:hover:bg-slate-800
                transition
              "
            >
              Xem Blog
            </Link>
          </div>
        </div>

        {/* RIGHT – IMAGE */}
        <div>
          <img
            src={`/images/${encodeURIComponent('Anh_ca_nhan_TrongKhang (1).jpg')}`}
            alt="Nguyễn Trọng Khang"
            className="
              w-full h-[520px] object-cover shadow-xl rounded-lg
              transition-transform duration-500 ease-out
              hover:scale-[1.02]
            "
          />
        </div>
      </div>

      {/* ===== BLOG INTRO ===== */}
      <section className="bg-slate-50 dark:bg-slate-900 mt-28 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Blog học tập – Lập trình mạng
          </h2>

          <p className="leading-relaxed max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
            Đây là blog học tập cá nhân được xây dựng trong quá trình học
            học phần <strong>Lập trình mạng</strong>. Nội dung tập trung vào
            các kiến thức nền tảng và ví dụ thực hành với
            <strong> Java</strong> và <strong>JavaScript</strong>,
            được trình bày bằng tiếng Việt, dễ hiểu và có tính hệ thống.
          </p>

          <Link
            to="/blog"
            className="
              inline-block px-6 py-3 bg-indigo-600 text-white
              font-semibold rounded
              hover:bg-indigo-700 transition
            "
          >
            Khám phá Blog →
          </Link>
        </div>
      </section>

      {/* ===== CORE TOPICS ===== */}
      <section className="bg-white dark:bg-slate-950 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Các chủ đề chính trong blog
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              {
                title: 'Client – Server',
                desc: 'Nguyên lý giao tiếp giữa client và server trong ứng dụng mạng.'
              },
              {
                title: 'HTTP & IP',
                desc: 'Giao thức HTTP, địa chỉ IP và cơ chế truyền dữ liệu.'
              },
              {
                title: 'JavaScript & JSON',
                desc: 'Xử lý dữ liệu mạng bằng JavaScript và JSON.'
              },
              {
                title: 'Tư duy xử lý dữ liệu',
                desc: 'Phân tích dữ liệu, tư duy thuật toán cơ bản.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="
                  border border-gray-200 dark:border-slate-700
                  rounded-lg p-6
                  bg-white dark:bg-slate-900
                  hover:shadow-md transition
                "
              >
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </section>
  )
}

export default Home
