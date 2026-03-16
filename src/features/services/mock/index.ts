import { ServiceCategory } from "../types";

export const MOCK_SERVICE_CATEGORIES: Readonly<ServiceCategory[]> = [
  {
    id: "c-1",
    type: "COMBO",
    title: "Gói Combo",
    services: [
      {
        id: "s-combo-1",
        name: "Morning Glow",
        description:
          "Gói chăm sóc buổi sáng bao gồm Mani cơ bản, chà gót chân và một ly trà thảo mộc.",
        price: 450000,
        image:
          "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "s-combo-2",
        name: "Signature Retreat",
        description:
          "Combo làm móng tay & chân chuyên sâu kết hợp massage cổ vai gáy trong 90 phút.",
        price: 890000,
        image:
          "https://images.unsplash.com/photo-1762114461850-4129adf70cb8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "s-combo-3",
        name: "Bridal Party",
        description:
          "Thiết kế móng nghệ thuật cho cô dâu kèm dưỡng trắng da tay bằng paraffin.",
        price: 1200000,
        image:
          "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "s-combo-4",
        name: "Gentleman's Care",
        description:
          "Gói chăm sóc tối giản dành cho nam: cắt tỉa gọn gàng và lấy da chết chuyên nghiệp.",
        price: 350000,
        image:
          "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "c-2",
    type: "MEDICURE",
    title: "Medicure",
    services: [
      {
        id: "s-medi-1",
        name: "Basic Mani",
        description:
          "Chăm sóc móng tay cơ bản, tạo form và sơn màu gel bền màu từ 2-3 tuần.",
        price: 250000,
        image:
          "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "s-medi-2",
        name: "Bio-Organic Therapy",
        description:
          "Sử dụng sản phẩm hữu cơ lành tính cho móng nhạy cảm, phục hồi móng hư tổn.",
        price: 420000,
        image:
          "https://images.unsplash.com/photo-1709813610121-e2a51545e212?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "s-medi-3",
        name: "Hard Gel Overlay",
        description:
          "Củng cố móng thật bằng lớp gel cứng, giúp móng dài tự nhiên mà không lo gãy.",
        price: 550000,
        image:
          "https://images.unsplash.com/photo-1612887390768-fb02affea7a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmFpbHN8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: "s-medi-4",
        name: "French Classic",
        description:
          "Phong cách Pháp thanh lịch với đầu móng trắng tinh tế và lớp dưỡng bóng.",
        price: 320000,
        image:
          "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "c-3",
    type: "PEDICURE",
    title: "Pedicure",
    services: [
      {
        id: "s-pedi-1",
        name: "Deep Sea Soak",
        description:
          "Ngâm chân muối biển chết, loại bỏ độc tố và làm mềm các vết chai sần.",
        price: 300000,
        image:
          "https://images.unsplash.com/photo-1656859966845-1a2118828822?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "s-pedi-2",
        name: "Healing Herbs",
        description:
          "Trị liệu nứt gót chân bằng thảo mộc đông y và kem dưỡng ẩm sâu.",
        price: 450000,
        image:
          "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpbHN8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: "s-pedi-3",
        name: "Hot Stone Foot",
        description:
          "Massage chân bằng đá nóng giúp lưu thông khí huyết và giảm mệt mỏi.",
        price: 500000,
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "s-pedi-4",
        name: "Citrus Refresh",
        description:
          "Thư giãn với lát chanh tươi và tinh dầu bưởi giúp làm sáng da chân.",
        price: 380000,
        image:
          "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "c-4",
    type: "EFFECT",
    title: "Hiệu Ứng",
    services: [
      {
        id: "s-eff-1",
        name: "Cat Eye 9D",
        description:
          "Hiệu ứng mắt mèo huyền ảo, thay đổi màu sắc theo góc nhìn và ánh sáng.",
        price: 150000,
        image:
          "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "s-eff-2",
        name: "Chrome Mirror",
        description:
          "Tráng gương bạc hoặc vàng hồng, tạo độ bóng loáng sang trọng tuyệt đối.",
        price: 1200000,
        image:
          "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "s-eff-3",
        name: "Ombre Sunset",
        description:
          "Kỹ thuật loang màu mượt mà giữa hai tone sắc thái khác nhau.",
        price: 180000,
        image:
          "https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbHN8ZW58MHx8MHx8fDA%3D",
      },
      {
        id: "s-eff-4",
        name: "Hand-painted Art",
        description:
          "Vẽ móng nghệ thuật thủ công bởi các kỹ thuật viên tay nghề cao.",
        price: 200000,
        image:
          "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5haWxzfGVufDB8fDB8fHww",
      },
    ],
  },
  {
    id: "c-5",
    type: "DRINKS",
    title: "Drinks",
    services: [
      {
        id: "s-dr-1",
        name: "Iced Hibiscus",
        description:
          "Trà bụp giấm đỏ rực, vị chua thanh giúp thanh nhiệt cơ thể.",
        price: 45000,
        image:
          "https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "s-dr-2",
        name: "Cold Brew Tea",
        description:
          "Trà ủ lạnh trong 12 giờ, giữ trọn hương vị tinh tế của lá trà.",
        price: 55000,
        image:
          "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "s-dr-3",
        name: "Lavender Lemonade",
        description: "Nước chanh oải hương mát lạnh với màu tím nhạt mộng mơ.",
        price: 60000,
        image:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "s-dr-4",
        name: "Wellness Detox",
        description:
          "Nước ép cần tây, táo và dưa leo cho làn da khỏe mạnh từ bên trong.",
        price: 65000,
        image:
          "https://images.unsplash.com/photo-1592150311591-d668da8095f0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFdlbGxuZXNzJTIwRGV0b3h8ZW58MHx8MHx8fDA%3D",
      },
    ],
  },
];
