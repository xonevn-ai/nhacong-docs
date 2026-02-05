# Quản lý Hóa đơn & Đối soát

Đường dẫn trong ứng dụng: `/quan-ly-chu-nha/finance/invoices`

Nơi quản lý tập trung toàn bộ phiếu thu, hóa đơn phát sinh hàng tháng của cư dân.

## 1. Trạng thái Hóa đơn
Hệ thống phân loại hóa đơn theo các mã màu:
- **Chờ gửi (Nháp)**: Hóa đơn đã tạo nhưng chưa gửi cho cư dân.
- **Đã gửi**: Cư dân đã nhận được thông báo qua App/Zalo.
- **Vượt hạn**: Hóa đơn đã quá hạn thanh toán (Số ngày quá hạn hiển thị màu đỏ).
- **Đã thanh toán**: Tiền đã về tài khoản và hệ thống đã tự động gạch nợ.

## 2. Quy trình đối soát tự động
- **QR Động**: Mỗi hóa đơn có một QR định danh cho từng giao dịch.
- **Auto-Matching**: Khi cư dân chuyển khoản đúng nội dung, hệ thống ngân hàng liên kết sẽ báo về và hóa đơn được chuyển sang trạng thái "Đã thanh toán" ngay lập tức mà không cần kế toán thao tác thủ công.

## 3. Thao tác bổ trợ
- **Gửi lại thông báo**: Nhấn để gửi nhắc nợ lần 2, lần 3 qua SMS/App.
- **Hủy hóa đơn**: Sử dụng trong trường hợp tính toán sai hoặc cư dân đổi ý (Cần nhập lý do hủy).
- **Xuất báo cáo thuế**: Tải về file Excel tổng hợp doanh thu theo tháng/năm.
