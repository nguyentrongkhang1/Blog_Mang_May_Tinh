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

export default function About() {
  return (
    <section className="bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200 transition-colors duration-300">

      {/* ===== HERO ===== */}
      <div className="bg-slate-50 dark:bg-slate-800 pt-6 pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/Anh_ca_nhan_TrongKhang (1).jpg"
              alt="Nguyễn Trọng Khang"
              className="w-full h-[360px] object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-900/80 backdrop-blur px-6 py-4 rounded shadow">
              <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
                ABOUT
              </h1>
            </div>
          </div>

          <div className="max-w-3xl mx-auto -mt-16 relative z-10">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 space-y-5 text-justify">
              <p>
                Tôi là <strong>Nguyễn Trọng Khang</strong>, sinh viên năm cuối ngành
                <strong> Công nghệ thông tin</strong>, chuyên ngành
                <strong> Công nghệ Phần mềm</strong> tại Đại học Công Nghệ TP.HCM.
              </p>
              <p>
                Tôi định hướng phát triển theo mảng <strong>Backend</strong> và
                <strong> Kiểm thử phần mềm</strong>, với mong muốn xây dựng các hệ
                thống ổn định, có chất lượng và dễ mở rộng.
              </p>
              <p className="italic text-gray-600 dark:text-gray-400">
                Blog này được xây dựng như một nhật ký học tập cho học phần
                <strong> Lập trình mạng</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SKILLS ===== */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <h2 className="text-3xl font-bold text-center mb-14">Kỹ năng cá nhân</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-indigo-600 mb-6">Frontend</h3>
            <SkillBar label="HTML / CSS" percent={70} />
            <SkillBar label="Tailwind CSS" percent={70} />
            <SkillBar label="React" percent={70} />
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-indigo-600 mb-6">
              Backend & Database
            </h3>
            <SkillBar label="Node.js" percent={85} />
            <SkillBar label="MongoDB" percent={70} />
            <SkillBar label="MySQL" percent={70} />
          </div>
        </div>
      </div>

      {/* ===== ACHIEVEMENTS ===== */}
      <div className="max-w-5xl mx-auto px-6 mt-28">
        <h2 className="text-3xl font-bold text-center mb-14">
          Thành tích học tập & học thuật
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              img: 'sinh-vien-tieu-bieu-2024-2025.jpg',
              title: 'Sinh viên tiêu biểu năm học 2024 – 2025',
              desc: 'Được tuyên dương tại Khoa Công nghệ Thông tin – HUTECH.'
            },
            {
              img: 'database-design-champion-2024.jpg',
              title: 'Database Design Champion 2024',
              desc: 'Tham gia cuộc thi thiết kế cơ sở dữ liệu.'
            },
            {
              img: 'net-cracking-challenges-2024.jpg',
              title: 'HUTECH’s Net Cracking Challenges 2024',
              desc: 'Cuộc thi học thuật về mạng máy tính.'
            }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl shadow overflow-hidden">
              <img src={`/images/${item.img}`} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== COMMUNITY ===== */}
      <div className="max-w-5xl mx-auto px-6 mt-28">
        <h2 className="text-3xl font-bold text-center mb-14">
          Hoạt động xã hội & thiện nguyện
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/xuan-tinh-nguyen-giap-thin-2024.jpg"
            className="rounded-xl shadow-lg"
          />
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-600">
              Xuân tình nguyện – Giáp Thìn 2024
            </h3>
            <p>
              Tham gia chương trình thiện nguyện do Khoa Công nghệ Thông tin
              HUTECH tổ chức, góp phần hỗ trợ cộng đồng và lan tỏa tinh thần sẻ chia.
            </p>
          </div>
        </div>
      </div>

      {/* ===== ACTION ===== */}
      <div className="flex justify-center gap-4 py-24">
        <Link to="/blog" className="px-6 py-3 bg-indigo-600 text-white rounded">
          Xem Blog
        </Link>
        <Link
          to="/"
          className="px-6 py-3 bg-gray-100 dark:bg-slate-700 rounded"
        >
          Về Home
        </Link>
      </div>
    </section>
  )
}
