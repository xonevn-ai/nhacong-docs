import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '👋 Giới thiệu chung',
    },
    {
      type: 'category',
      label: '🔐 Truy cập & Bảo mật',
      items: [
        { type: 'doc', id: 'auth/login', label: 'Hướng dẫn Đăng nhập' },
        { type: 'doc', id: 'auth/registration', label: 'Đăng ký tài khoản' },
        { type: 'doc', id: 'auth/forgot-password', label: 'Quên mật khẩu & OTP' },
      ],
    },
    {
      type: 'category',
      label: '💬 Công cụ Giao tiếp',
      items: [
        { type: 'doc', id: 'tools/chat', label: 'Hệ thống Chat' },
        { type: 'doc', id: 'tools/notifications', label: 'Thông báo & Email' },
      ],
    },
    {
      type: 'category',
      label: '🏠 Dành cho Chủ nhà',
      items: [
        {
          type: 'category',
          label: 'Tổng quan Dashboard',
          items: [
            { type: 'doc', id: 'host/overview/buildings', label: 'Tổng quan Tòa nhà' },
            { type: 'doc', id: 'host/overview/finance', label: 'Tổng quan Tài chính' },
            { type: 'doc', id: 'host/overview/contracts', label: 'Tổng quan Hợp đồng' },
            { type: 'doc', id: 'host/overview/tasks', label: 'Tổng quan Công việc' },
            { type: 'doc', id: 'host/overview/assets', label: 'Tổng quan Tài sản' },
          ],
        },
        {
          type: 'category',
          label: 'Quản lý Bất động sản',
          items: [
            { type: 'doc', id: 'host/real-estate/rooms', label: 'Sơ đồ phòng (Map)' },
            { type: 'doc', id: 'host/real-estate/manage-buildings', label: 'Thao tác: Tòa nhà' },
            { type: 'doc', id: 'host/real-estate/manage-rooms', label: 'Thao tác: Phòng' },
            { type: 'doc', id: 'host/real-estate/services', label: 'Danh mục dịch vụ' },
            { type: 'doc', id: 'host/real-estate/manage-services', label: 'Thao tác: Dịch vụ' },
            { type: 'doc', id: 'host/real-estate/assets', label: 'Quản lý thiết bị' },
          ],
        },
        {
          type: 'category',
          label: 'Cư dân & Hồ sơ',
          items: [
            { type: 'doc', id: 'host/residents/contracts', label: 'Quản lý hợp đồng' },
            { type: 'doc', id: 'host/residents/kyc', label: 'Xác thực cư dân (KYC)' },
            { type: 'doc', id: 'host/residents/points', label: 'Hệ thống điểm & Xếp hạng' },
          ],
        },
        {
          type: 'category',
          label: 'Tài chính & Thanh toán',
          items: [
            { type: 'doc', id: 'host/finance/stats-guide', label: 'Giải mã Chỉ số' },
            { type: 'doc', id: 'host/finance/meter-readings', label: 'Ghi chỉ số (Điện/Nước)' },
            { type: 'doc', id: 'host/finance/invoices', label: 'Hóa đơn & Đối soát' },
            { type: 'doc', id: 'host/finance/payouts', label: 'Rút tiền & Dòng tiền' },
          ],
        },
        {
          type: 'category',
          label: 'Vận hành & Hỗ trợ',
          items: [
            { type: 'doc', id: 'host/service-desk/tasks', label: 'Xử lý sự cố (Ticket)' },
          ],
        },
        {
          type: 'category',
          label: 'Báo cáo & Thiết lập',
          items: [
            { type: 'doc', id: 'host/reports/performance', label: 'Báo cáo hiệu suất' },
            { type: 'doc', id: 'host/settings/profile', label: 'Thiết lập tài khoản' },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '👤 Dành cho Cư dân',
      items: [
        { type: 'doc', id: 'customer/dashboard/overview', label: 'Bảng điều khiển' },
        {
          type: 'category',
          label: 'Ví & Tài chính',
          items: [
            { type: 'doc', id: 'customer/profile/wallet', label: 'Tổng quan ví' },
            { type: 'doc', id: 'customer/billing/invoices', label: 'Hóa đơn & Thanh toán' },
            { type: 'doc', id: 'customer/billing/wallet-methods', label: 'Phương thức thanh toán' },
          ],
        },
        {
          type: 'category',
          label: 'Nhà của tôi',
          items: [
            { type: 'doc', id: 'customer/home/contract-details', label: 'Chi tiết hợp đồng' },
            { type: 'doc', id: 'customer/home/contracts-guide', label: 'Hướng dẫn Ký kết' },
            { type: 'doc', id: 'customer/home/members', label: 'Quản lý thành viên' },
            { type: 'doc', id: 'customer/home/vehicles', label: 'Quản lý phương tiện' },
          ],
        },
        {
          type: 'category',
          label: 'Hỗ trợ & Tiện ích',
          items: [
            { type: 'doc', id: 'customer/support/tickets', label: 'Yêu cầu hỗ trợ' },
            { type: 'doc', id: 'customer/support/complaints', label: 'Quy trình khiếu nại' },
            { type: 'doc', id: 'customer/billing-support', label: 'Dịch vụ & Phản hồi' },
            { type: 'doc', id: 'customer/support/services', label: 'Đăng ký dịch vụ mới' },
            { type: 'doc', id: 'customer/community/news', label: 'Tin tức tòa nhà' },
            { type: 'doc', id: 'customer/community/marketplace-guide', label: 'Chợ cư dân' },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🤝 Dành cho CTV',
      items: [
        { type: 'doc', id: 'agent/dashboard/overview', label: 'Bảng điều phối thu nhập' },
        {
          type: 'category',
          label: 'Công cụ Tiếp thị',
          items: [
            { type: 'doc', id: 'agent/marketing/tools', label: 'Link Affiliate & QR' },
            { type: 'doc', id: 'agent/customers/leads', label: 'Quản lý khách (Leads)' },
            { type: 'doc', id: 'agent/appointments/schedule', label: 'Lịch xem phòng' },
            { type: 'doc', id: 'agent/contracts/list', label: 'Hợp đồng thành công' },
            { type: 'doc', id: 'agent/commissions/history', label: 'Lịch sử hoa hồng' },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🌐 Công cộng',
      items: [
        { type: 'doc', id: 'public/search-360', label: 'Tìm phòng VR 360°' },
        { type: 'doc', id: 'public/search-guide', label: 'Hướng dẫn tìm kiếm' },
      ],
    },
  ],
};

export default sidebars;
