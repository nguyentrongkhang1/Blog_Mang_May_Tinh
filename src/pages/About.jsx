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

          {/* ===== ABOUT CONTENT (RÚT GỌN) ===== */}
          <div className="max-w-3xl mx-auto -mt-16 relative z-10">
            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur rounded-2xl shadow-xl p-6 md:p-8 space-y-4 text-base md:text-lg leading-relaxed">

              <p>
                Tôi là <strong>Nguyễn Trọng Khang</strong>, sinh viên năm cuối ngành
                <strong> Công nghệ thông tin</strong>, chuyên ngành
                <strong> Công nghệ Phần mềm</strong> tại
                <strong> Đại học Công Nghệ TP.HCM (HUTECH)</strong>.
              </p>

              <p>
                Tôi định hướng phát triển theo mảng <strong>Backend</strong> và
                <strong> Kiểm thử phần mềm</strong>, với mong muốn xây dựng các hệ
                thống ổn định, dễ mở rộng và có chất lượng cao.
              </p>

              <p>
                Trong quá trình học tập, tôi chú trọng <strong>thực hành song song
                với lý thuyết</strong>, từng bước hình thành tư duy lập trình thông
                qua việc xây dựng chức năng và xử lý các vấn đề thực tế.
              </p>

              <p>
                Bên cạnh học tập chuyên môn, tôi đã đạt một số
                <strong> thành tích học thuật</strong> và tham gia các
                <strong> hoạt động thiện nguyện</strong> do Khoa và Nhà trường tổ
                chức, qua đó rèn luyện kỹ năng làm việc nhóm và tinh thần trách nhiệm.
              </p>

              <p className="italic text-gray-600 dark:text-gray-400">
                Blog này được xây dựng như một <strong>nhật ký học tập</strong> cho
                học phần <strong>Lập trình mạng</strong>, nơi tôi hệ thống hóa kiến
                thức và ghi lại quá trình học <strong>Java</strong> và
                <strong> JavaScript</strong>.
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

      {/* ===== KINH NGHIEM LAM THEM ===== */}
      <div className="max-w-5xl mx-auto px-6 mt-8">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-6 mb-8">
          <h3 className="text-xl font-semibold text-indigo-600 mb-3">Kinh nghiệm làm thêm</h3>
          <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700 dark:text-gray-300">
            <li>F&B — phục vụ & quản lý ca: rèn kỹ năng giao tiếp với khách, xử lý tình huống và làm việc nhóm hiệu quả.</li>
            <li>Quản lý thời gian và ưu tiên công việc, giữ hiệu suất cao khi ca đông hoặc dưới áp lực.</li>
            <li>Áp dụng vào lập trình: tổ chức công việc, phối hợp team, xử lý sự cố nhanh khi phát triển feature.</li>
          </ul>
        </div>
      </div>

      {/* ===== SO THICH & THE MANG (SỞ THÍCH & THẾ MẠNH) ===== */}
      <div className="max-w-5xl mx-auto px-6 mt-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-6 mb-8">
          <h3 className="text-xl font-semibold text-indigo-600 mb-3">Sở thích & Thế mạnh</h3>
          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <p>• Sở thích: thích du lịch, ngắm cảnh — giúp tôi mở rộng tầm nhìn và tạo nguồn cảm hứng khi làm việc.</p>
            <p>• Thế mạnh cá nhân: dễ dàng hòa nhập, mang lại không khí vui vẻ cho đồng đội và thích nghi nhanh trong môi trường mới.</p>
            <p>• Thể thao: chơi cầu lông và bóng rổ — rèn kỹ năng phối hợp đội, tinh thần cạnh tranh lành mạnh và sức bền khi làm việc dưới áp lực.</p>
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