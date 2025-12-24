import { Link } from 'react-router-dom'

/* ===== SKILL BAR COMPONENT ===== */
function SkillBar({ label, percent }) {
  return (
    <div>
      <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="h-2 bg-indigo-600 rounded-full transition-all duration-700"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  )
}

function About() {
  return (
    <section className="bg-white text-gray-700">

      {/* ===== KHỐI HERO + CONTENT ===== */}
      <div className="bg-slate-50 pt-6 pb-20">
        <div className="max-w-5xl mx-auto px-6">

          {/* HERO */}
          <div className="relative overflow-hidden rounded-xl shadow-lg mb-14">
            <img
              src={`/images/${encodeURIComponent('Anh_ca_nhan_TrongKhang (1).jpg')}`}
              alt="Nguyễn Trọng Khang"
              className="w-full h-[360px] md:h-[420px] object-cover"
              onError={(e) => {
                e.target.src =
                  'https://dummyimage.com/1200x600/4f46e5/ffffff&text=Nguy%E1%BB%85n+Tr%E1%BB%8Dng+Khang'
              }}
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* ABOUT box */}
            <div
              className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2
                         bg-white/80 backdrop-blur
                         px-8 py-5 shadow-lg rounded"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                ABOUT
              </h1>
            </div>
          </div>

          {/* ===== CONTENT (CĂN ĐỀU) ===== */}
          <div
            className="max-w-3xl mx-auto space-y-6
                       text-base md:text-lg leading-relaxed
                       text-justify hyphens-auto"
          >
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

            <p className="italic text-gray-600">
              Blog này được xây dựng như một nhật ký học tập cho học phần
              <strong> Lập trình mạng</strong>, nơi tôi ghi lại các kiến thức,
              ví dụ thực hành và những vấn đề gặp phải trong quá trình học
              <strong> Java</strong> và <strong>JavaScript</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* ===== SKILLS ===== */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">
          Kỹ năng cá nhân
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* FRONTEND */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-indigo-600 mb-6">
              Frontend
            </h3>
            <div className="space-y-4">
              <SkillBar label="HTML / CSS" percent={70} />
              <SkillBar label="Tailwind CSS" percent={70} />
              <SkillBar label="React" percent={70} />
            </div>
          </div>

          {/* BACKEND */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-indigo-600 mb-6">
              Backend & Database
            </h3>
            <div className="space-y-4">
              <SkillBar label="Node.js" percent={85} />
              <SkillBar label="MongoDB" percent={70} />
              <SkillBar label="MySQL" percent={70} />
            </div>
          </div>

          {/* OTHER */}
          <div className="bg-white rounded-xl shadow p-6 md:col-span-2">
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
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded
                     hover:bg-indigo-700 transition"
        >
          Xem Blog
        </Link>
        <Link
          to="/"
          className="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded
                     hover:bg-gray-200 transition"
        >
          Về Home
        </Link>
      </div>
    </section>
  )
}

export default About
