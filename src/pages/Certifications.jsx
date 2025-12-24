import Certifications from '../components/Certifications'

function CertificationsPage() {
    const certificateList = [
        {
          image: '/images/Statement of Achievement.jpg',
          title: 'JavaScript Essentials',
          issuer: 'Cisco Networking Academy',
          date: '12/2026',
          description:
            'Củng cố nền tảng JavaScript: biến, hàm, object, array, xử lý dữ liệu và tư duy lập trình.'
        },
        {
          image: '/images/networking-basics.png',
          title: 'Networking Basics',
          issuer: 'Cisco Networking Academy',
          date: '12/2026',
          description:
            'Kiến thức nền tảng về mạng máy tính: mô hình OSI, TCP/IP, IP Address, thiết bị mạng và nguyên lý hoạt động.'
        },
        {
          image: '/images/Certificate of Course Completion.jpg',
          title: 'Networking Basics (Updated)',
          issuer: 'Cisco Networking Academy',
          date: '11/202',
          description:
            'Phiên bản cập nhật nội dung mạng máy tính, phục vụ học phần Lập trình mạng.'
        }
      ]
      

  return (
    <section className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Chứng chỉ & Khóa học đã hoàn thành
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Các chứng chỉ trong quá trình học tập tại Cisco Networking Academy
            và CIS Academy, phục vụ cho học phần <strong>Lập trình mạng</strong>.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificateList.map((cert, index) => (
            <Certifications key={index} {...cert} />
          ))}
        </div>

        {/* SUMMARY */}
        <div className="max-w-3xl mx-auto mt-16 text-center text-gray-600">
          <p>
            Thông qua các chứng chỉ này, tôi đã củng cố kiến thức nền tảng
            về mạng máy tính và lập trình JavaScript, từ đó hỗ trợ tốt hơn
            cho việc học và thực hành trong học phần Lập trình mạng.
          </p>
        </div>

      </div>
    </section>
  )
}

export default CertificationsPage
