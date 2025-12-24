import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="bg-white text-gray-700">

      {/* KHỐI NỀN NHẠT – GOM HERO + CONTENT */}
      <div className="bg-slate-50 pt-6 pb-16">
        <div className="max-w-5xl mx-auto px-6">

          {/* HERO */}
          <div className="relative overflow-hidden rounded-xl shadow-lg mb-12">
            <img
              src={`/images/${encodeURIComponent('Anh_ca_nhan_TrongKhang (1).jpg')}`}
              alt="Nguyễn Trọng Khang"
              className="w-full h-[360px] md:h-[420px] object-cover"
              onError={(e) => {
                e.target.src =
                  'https://dummyimage.com/1200x600/4f46e5/ffffff&text=Nguy%E1%BB%85n+Tr%E1%BB%8Dng+Khang'
              }}
            />

            {/* overlay nhẹ */}
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

          {/* CONTENT – ĐÃ CĂN ĐỀU */}
          <div
            className="max-w-3xl mx-auto space-y-6
                       text-base md:text-lg leading-relaxed
                       text-justify hyphens-auto"
          >
            <p>
              Tôi là <strong>Nguyễn Trọng Khang</strong>, sinh viên năm cuối ngành học
              <strong> Công nghệ thông tin </strong> chuyên ngành
              <strong> Công nghệ Phần mềm</strong> tại Đại học Công Nghệ TP.HCM.
              Tôi chọn ngành này xuất phát từ sự tò mò về cách một website hay ứng dụng
              có thể hoạt động và phục vụ người dùng.
            </p>

            <p>
              Trong giai đoạn đầu học tập, tôi gặp nhiều khó khăn khi tiếp cận tư duy logic
              và các công nghệ mới. Việc làm quen với những khái niệm hoàn toàn xa lạ
              khiến tôi học chậm và thường xuyên gặp lỗi khi thực hành.
            </p>

            <p>
              Khoảnh khắc tôi tự xây dựng được một giao diện hoàn chỉnh,
              các chức năng hoạt động đúng và được đánh giá tốt đã giúp tôi nhận ra
              mình phù hợp với lĩnh vực này và tiếp tục theo đuổi con đường lập trình.
            </p>

            <p>
              Hiện tại, tôi định hướng theo mảng <strong>Kiểm thử phần mềm</strong>
              và từng bước tìm hiểu <strong>Backend</strong>, với mục tiêu hiểu rõ hơn
              cách một hệ thống phần mềm được xây dựng, vận hành và kiểm soát chất lượng
              trong thực tế. Đối với tôi, việc nắm vững nền tảng lập trình và tư duy hệ thống
              là yếu tố quan trọng trước khi đi sâu vào bất kỳ hướng chuyên môn nào.
            </p>

            <p className="italic text-gray-600">
              Xuất phát từ định hướng đó, blog này được xây dựng như một nhật ký học tập
              cho học phần <strong>Lập trình mạng</strong>, nơi tôi ghi lại các kiến thức,
              ví dụ thực hành và những vấn đề gặp phải trong quá trình học
              <strong> Java</strong> và <strong>JavaScript</strong>. Thông qua việc
              tổng hợp và trình bày lại nội dung học, tôi vừa củng cố kiến thức cho bản thân,
              vừa rèn luyện khả năng phân tích, hệ thống hóa và diễn đạt các khái niệm
              kỹ thuật một cách rõ ràng.
            </p>
          </div>
        </div>
      </div>

      {/* ACTION */}
      <div className="flex justify-center gap-4 py-16">
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
