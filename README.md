# 🏆 The OM Lounge - High-Performance Service Landing Page

## 📝 Mô tả tổng quan (Overview)

**The OM Lounge** là một nền tảng Landing Page dịch vụ cao cấp, được thiết kế để tối ưu hóa tỷ lệ chuyển đổi (Lead Gen) và nâng tầm nhận diện thương hiệu. Dự án sử dụng những công nghệ web hiện đại nhất hiện nay như **Next.js 16 (App Router)** và **Tailwind CSS v4** để đạt được hiệu suất tối đa.

---

## ✨ Các tính năng nổi bật (Key Features)

- **🚀 High-Performance**: Tối ưu hóa tuyệt đối LCP, CLS và FID nhờ Server-First Architecture.
- **🌐 Đa ngôn ngữ (i18n)**: Hỗ trợ linh hoạt Tiếng Việt và Tiếng Anh thông qua `next-intl`.
- **🛒 Giỏ hàng & Đặt lịch**: Luồng đặt lịch dịch vụ mượt mà, bao gồm quản lý giỏ hàng toàn cục và Success Dialog cao cấp.
- **🎨 Giao diện Premium**: Thiết kế hiện đại theo phong cách tối giản, hiệu ứng animation từ Framer Motion.
- **🔌 API Factory**: Dễ dàng chuyển đổi giữa Mock Data và Real API chỉ qua biến môi trường.
- **🐳 Docker Ready**: Sẵn sàng triển khai container hóa với cấu hình Standalone tối ưu.

---

## 🛠 Công nghệ sử dụng (Tech Stack)

- **Framework**: Next.js 16.1 (App Router) & React 19.
- **Styling**: Tailwind CSS v4, Shadcn UI, OKLCH Color Engine.
- **State Management**: React Context & Hooks (Cart Service).
- **Animations**: Framer Motion.
- **Validation**: Zod + React Hook Form.
- **Internationalization**: next-intl.
- **Deployment**: Vercel & Docker Standalone.

---

## ⚙️ Hướng dẫn cài đặt (Installation)

### 1. Yêu cầu hệ thống

- Node.js 18.17 hoặc mới hơn.
- npm hoặc yarn.

### 2. Các bước cài đặt

```bash
# Clone dự án
git clone https://github.com/embanhanh/foso-test.git
cd foso-test

# Cài đặt dependencies
npm install

# Cấu hình biến môi trường
cp .env.example .env.local
```

### 3. Chạy dự án

```bash
# Chạy môi trường phát triển (Local)
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để xem kết quả.

---

## 🚀 Hướng dẫn sử dụng (Usage)

### Chuyển đổi trạng thái API

Trong file `.env.local`, bạn có thể thay đổi chế độ dữ liệu:

- `NEXT_PUBLIC_API_MODE=mock`: Sử dụng dữ liệu mẫu (local mocks).
- `NEXT_PUBLIC_API_MODE=real`: Kết nối với API thật.

### Thêm dịch vụ vào giỏ hàng

Người dùng có thể chọn dịch vụ từ trang `Services`, điều chỉnh số lượng và tiến hành đặt lịch qua `CartSheet`.

---

## 📂 Cấu trúc thư mục (Folder Structure)

```bash
src/
├── app/            # Next.js App Router (Layouts, Pages, APIs)
├── core/           # Cấu hình cốt lõi (i18n, common constants, api base)
├── features/       # Module hóa theo tính năng (Cart, Services)
│   ├── cart/       # Quản lý giỏ hàng và booking
│   └── services/   # Danh sách và chi tiết dịch vụ
├── shared/         # Reusable UI Components, Utils, Hooks
└── messages/       # File dịch (.json) của i18n
```

---

## 📄 Giấy phép (License)

Dự án được phát hành dưới giấy phép **MIT**. Xem file `LICENSE` để biết thêm chi tiết.

---

## 📧 Thông tin liên hệ (Contact)

- **Tác giả**: Đinh Như Thông
- **Email**: dinhnhuthong59@gmail.com
- **Dự án**: https://github.com/embanhanh/foso-test

---
