import { Link } from 'react-router-dom'

/* ===== SKILL BAR ===== */
function SkillBar({ label, percent }) {
  return (
    <div>
      <div className="flex justify-between text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className="h-2 bg-indigo-600 rounded-full transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

function About() {
  return (
    <section className="bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 transition-colors duration-300">

      {/* ===== HERO ===== */}
      <div className="bg-slate-50 dark:bg-slate-800 pt-6 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={`/images/${encodeURIComponent('Anh_ca_nhan_TrongKhang (1).jpg')}`}
              alt="Nguyễn Trọng Khang"
              className="w-full h-[320px] sm:h-[360px] md:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />

            {/* ABOUT LABEL */}
            <div
              className="
                absolute left-4 sm:left-6 md:left-10
                top-1/2 -translate-y-1/2
                bg-white/80 dark:bg-slate-900/80
                backdrop-blur
                px-6 py-4 shadow-lg rounded
              "
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                ABOUT
              </h1>
            </div>
          </div>

          {/* ===== CONTENT CARD ===== */}
          <div className="max-w-3xl mx-auto -mt-16 relative z-10">
            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur rounded-2xl shadow-xl p-6 md:p-8 space-y-5 text-base md:text-lg text-justify leading-relaxed">

              <p>
                Tôi là <strong>Nguyễn Trọng Khang</strong>, sinh viên năm cuối ngành
                <strong> Công nghệ thông tin</strong>, chuyên ngành
                <strong> Công nghệ Phần mềm</strong> tại Đại học Công Nghệ TP.HCM.
                Tôi lựa chọn ngành học này xuất phát từ sự tò mò về cách một website
                hay ứng dụng có thể hoạt động và phục vụ người dùng.
              </p>

              <p>
                Trong giai đoạn đầu học tập, tôi gặp không ít khó khăn khi tiếp cận
                tư duy logic và các công nghệ mới. Việc làm quen với những khái niệm
                hoàn toàn xa lạ khiến tôi học chậm và thường xuyên gặp lỗi khi thực hành.
              </p>

              <p>
                Khoảnh khắc tôi tự xây dựng được một giao diện hoàn chỉnh, các chức năng
                hoạt động đúng và được đánh giá tốt đã giúp tôi nhận ra bản thân phù hợp
                với lĩnh vực này và tiếp tục theo đuổi con đường lập trình.
              </p>

              <p>
                Hiện tại, tôi định hướng phát triển theo mảng <strong>Backend</strong>
                và <strong>Kiểm thử phần mềm</strong>, với mong muốn hiểu rõ hơn cách
                một hệ thống phần mềm được xây dựng, vận hành và kiểm soát chất lượng
                trong thực tế.
              </p>

              <p className="italic text-gray-600 dark:text-gray-400">
                Blog này được xây dựng như một nhật ký học tập cho học phần
                <strong> Lập trình mạng</strong>, nơi tôi ghi lại các kiến thức,
                ví dụ thực hành và những vấn đề gặp phải trong quá trình học
                <strong> Java</strong> và <strong>JavaScript</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SKILLS ===== */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-900 dark:text-white">
          Kỹ năng cá nhân
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-indigo-600 mb-6">
              Frontend
            </h3>
            <div className="space-y-4">
              <SkillBar label="HTML / CSS" percent={70} />
              <SkillBar label="Tailwind CSS" percent={70} />
              <SkillBar label="React" percent={70} />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-indigo-600 mb-6">
              Backend & Database
            </h3>
            <div className="space-y-4">
              <SkillBar label="Node.js" percent={85} />
              <SkillBar label="MongoDB" percent={70} />
              <SkillBar label="MySQL" percent={70} />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-6 md:col-span-2">
            <h3 className="text-xl font-semibold text-indigo-600 mb-6">
              Ngôn ngữ & Kỹ năng khác
            </h3>
            <div className="space-y-4 max-w-md">
              <SkillBar label="C++" percent={40} />
              <SkillBar label="Git / GitHub" percent={70} />
              <SkillBar label="Tư duy logic & giải quyết vấn đề" percent={75} />
            </div>
          </div>
        </div>
      </div>

      {/* ===== ACTION ===== */}
      <div className="flex justify-center gap-4 py-20">
        <Link
          to="/blog"
          className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Xem Blog
        </Link>
        <Link
          to="/"
          className="px-6 py-3 bg-gray-100 dark:bg-slate-700 dark:text-gray-200 rounded hover:bg-gray-200 dark:hover:bg-slate-600 transition"
        >
          Về Home
        </Link>
      </div>
    </section>
  )
}

export default About
