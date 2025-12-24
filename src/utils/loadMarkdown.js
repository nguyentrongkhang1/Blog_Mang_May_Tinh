// Utility to load markdown files
// This will be used to dynamically import markdown files

export const loadPost = async (slug) => {
  try {
    const module = await import(`../posts/${slug}.md?raw`)
    return module.default
  } catch (error) {
    console.error(`Error loading post: ${slug}`, error)
    return null
  }
}

// List of all blog posts
export const blogPosts = [
  {
    slug: 'tong-quan-lap-trinh-mang-va-mo-hinh-client-server',
    title: 'Tổng quan lập trình mạng và mô hình Client–Server',
    date: '2024-01-15',
    excerpt: 'Khám phá những khái niệm cơ bản về lập trình mạng và cách mô hình Client-Server hoạt động trong thực tế.'
  },
  {
    slug: 'http-va-vai-tro-cua-giao-thuc-mang-trong-ung-dung-web-java',
    title: 'HTTP và vai trò của giao thức mạng trong ứng dụng Web Java',
    date: '2024-01-20',
    excerpt: 'Tìm hiểu về giao thức HTTP và cách nó được sử dụng trong các ứng dụng web Java hiện đại.'
  },
  {
    slug: 'ip-address-va-cach-ung-dung-mang-xac-dinh-thiet-bi',
    title: 'IP Address và cách ứng dụng mạng xác định thiết bị',
    date: '2024-01-25',
    excerpt: 'Hiểu rõ về địa chỉ IP và cơ chế định danh thiết bị trong mạng máy tính.'
  },
  {
    slug: 'json-va-truyen-du-lieu-giua-client-va-server',
    title: 'JSON và truyền dữ liệu giữa Client và Server',
    date: '2024-02-01',
    excerpt: 'Khám phá định dạng JSON và cách nó được sử dụng để trao đổi dữ liệu giữa client và server.'
  },
  {
    slug: 'javascript-object-va-json-trong-giao-tiep-mang',
    title: 'JavaScript Object và JSON trong giao tiếp mạng',
    date: '2024-02-05',
    excerpt: 'Tìm hiểu mối quan hệ giữa JavaScript Object và JSON trong lập trình mạng.'
  },
  {
    slug: 'xu-ly-du-lieu-mang-bang-array-va-object-trong-javascript',
    title: 'Xử lý dữ liệu mạng bằng Array và Object trong JavaScript',
    date: '2024-02-10',
    excerpt: 'Các kỹ thuật xử lý dữ liệu mạng sử dụng Array và Object trong JavaScript.'
  },
  {
    slug: 'asynchronous-javascript-trong-mo-hinh-client-server',
    title: 'Asynchronous JavaScript trong mô hình Client–Server',
    date: '2024-02-15',
    excerpt: 'Hiểu về lập trình bất đồng bộ trong JavaScript và ứng dụng trong mô hình Client-Server.'
  },
  {
    slug: 'regular-expression-trong-kiem-tra-du-lieu-mang',
    title: 'Regular Expression trong kiểm tra dữ liệu mạng',
    date: '2024-02-20',
    excerpt: 'Sử dụng Regular Expression để kiểm tra và validate dữ liệu trong lập trình mạng.'
  },
  {
    slug: 'tu-duy-thuat-toan-khi-xu-ly-du-lieu-mang-bang-javascript',
    title: 'Tư duy thuật toán khi xử lý dữ liệu mạng bằng JavaScript',
    date: '2024-02-25',
    excerpt: 'Phát triển tư duy thuật toán để xử lý dữ liệu mạng một cách hiệu quả với JavaScript.'
  }
]



