import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="bg-white dark:bg-slate-950 pb-28 text-gray-700 dark:text-gray-200 transition-colors duration-300">

      {/* ===== HERO / PROFILE ===== */}
      <div className="mx-auto px-8 max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center pt-10">

        {/* LEFT */}
        <div>
          <div className="inline-block bg-white dark:bg-slate-900 px-6 py-4 shadow-lg mb-6 border-l-4 border-indigo-600">
            <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 uppercase">
              Nguyen Trong Khang
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              TAKE ACTION <br />
              BEFORE YOU <br />
              THINK YOU <br />
              CAN’T
            </h1>
          </div>

          {/* GIỚI THIỆU */}
          <p className="max-w-md mb-8 leading-relaxed text-justify hyphens-auto text-gray-600 dark:text-gray-300">
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
            <Link to="/about" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition">
              Xem Profile
            </Link>
            <Link to="/blog" className="px-6 py-3 border border-gray-300 dark:border-slate-700 font-semibold rounded hover:bg-gray-100 dark:hover:bg-slate-800 transition">
              Xem Blog
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={`/images/${encodeURIComponent('Anh_ca_nhan_TrongKhang (1).jpg')}`}
            alt="Nguyễn Trọng Khang"
            className="w-full h-[520px] object-cover shadow-xl rounded-lg transition-transform duration-500 ease-out hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Các phần dưới giữ nguyên */}
    </section>
  )
}

export default Home
