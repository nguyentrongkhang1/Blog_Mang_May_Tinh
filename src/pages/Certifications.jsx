import Certifications from '../components/Certifications'

function CertificationsPage() {
  const certificateList = [
    {
      image: '/images/Statement of Achievement.jpg',
      title: 'JavaScript Essentials 1',
      issuer: 'Cisco Networking Academy',
      date: '12/2025',
      description:
        'Hoàn thành khóa học JavaScript Essentials do Cisco Networking Academy tổ chức. Củng cố nền tảng JavaScript gồm biến, hàm, object, array, xử lý dữ liệu và tư duy lập trình.'
    },
    {
      image: '/images/js-essentials-2.jpg',
      title: 'JavaScript Essentials 2',
      issuer: 'Cisco Networking Academy',
      date: '12/2025',
      description:
        'Nâng cao JavaScript: xử lý lỗi, làm việc với dữ liệu phức tạp, tư duy thuật toán và xây dựng ứng dụng thực tế.'
    },
    {
      image: '/images/networking-basics.png',
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      date: '12/2025',
      description:
        'Trang bị kiến thức nền tảng về mạng máy tính: mô hình OSI, TCP/IP, IP Address, các thiết bị mạng và nguyên lý hoạt động.'
    },
    {
      image: '/images/Certificate of Course Completion.jpg',
      title: 'Networking Basics (Updated)',
      issuer: 'Cisco Networking Academy',
      date: '11/2025',
      description:
        'Phiên bản cập nhật nội dung mạng máy tính, hỗ trợ trực tiếp cho việc học và thực hành học phần Lập trình mạng.'
    }
  ]

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Chứng chỉ & Khóa học đã hoàn thành
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Các chứng chỉ đạt được trong quá trình học tập tại
            <strong> Cisco Networking Academy</strong>, phục vụ cho học phần
            <strong> Lập trình mạng</strong> và định hướng phát triển chuyên môn.
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificateList.map((cert, index) => (
            <Certifications key={index} {...cert} />
          ))}
        </div>

        {/* ===== SUMMARY ===== */}
        <div className="max-w-3xl mx-auto mt-16 text-center text-gray-600 dark:text-gray-400">
          <p>
            Thông qua các chứng chỉ này, tôi đã củng cố kiến thức nền tảng
            về mạng máy tính và lập trình JavaScript, góp phần nâng cao
            khả năng học tập, thực hành và phát triển các ứng dụng phần mềm
            trong môi trường thực tế.
          </p>
        </div>

      </div>
    </section>
  )
}

export default CertificationsPage
