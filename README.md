# Blog CV - Nguyễn Trọng Khang

Website Blog/CV cá nhân được xây dựng bằng React (Vite) và TailwindCSS, phục vụ đồ án học phần "Lập trình mạng".

## 🚀 Công nghệ sử dụng

- **React** - UI Framework
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **React Router** - Routing
- **React Markdown** - Render Markdown
- **Static Site Generation** - Build ra HTML tĩnh

## 📋 Yêu cầu

- Node.js (version 16 trở lên)
- npm hoặc yarn

## 🛠️ Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

## 📁 Cấu trúc project

```
src/
├── components/       # React components
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── Blog.jsx
│   └── Post.jsx
├── posts/           # Markdown blog posts
│   └── *.md
├── utils/           # Utility functions
│   └── loadMarkdown.js
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## 📝 Nội dung Blog

Website bao gồm 9 bài viết về lập trình mạng:

1. Tổng quan lập trình mạng và mô hình Client–Server
2. HTTP và vai trò của giao thức mạng trong ứng dụng Web Java
3. IP Address và cách ứng dụng mạng xác định thiết bị
4. JSON và truyền dữ liệu giữa Client và Server
5. JavaScript Object và JSON trong giao tiếp mạng
6. Xử lý dữ liệu mạng bằng Array và Object trong JavaScript
7. Asynchronous JavaScript trong mô hình Client–Server
8. Regular Expression trong kiểm tra dữ liệu mạng
9. Tư duy thuật toán khi xử lý dữ liệu mạng bằng JavaScript

## 🌐 Deploy

Website có thể deploy lên:

- **GitHub Pages**: Sử dụng GitHub Actions
- **Netlify**: Kết nối với GitHub repo
- **Vercel**: Deploy trực tiếp từ GitHub

### Deploy lên GitHub Pages

1. Build project: `npm run build`
2. Push folder `dist` lên branch `gh-pages`
3. Cấu hình GitHub Pages trong repository settings

## 👤 Tác giả

**Nguyễn Trọng Khang**
- Sinh viên năm cuối - Công nghệ Phần mềm
- Đại học Công Nghệ TP.HCM
- Email: Khangnguyen3k@gmail.com
- GitHub: [nguyentrongkhang1](https://github.com/nguyentrongkhang1)

## 📄 License

MIT License


