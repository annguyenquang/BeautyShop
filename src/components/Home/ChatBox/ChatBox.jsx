import { useState } from "react";
import { FaPaperPlane, FaCommentDots } from "react-icons/fa6";
import {
  Pic60,
  Pic58,
  Pic57,
  product_3,
  product_4,
  product_5,
} from "../../../assets/assets";
import "./pulse.css";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    {
      id: "lipstick",
      topic: "Son môi",
      products: [
        {
          label: "Moisture Matte Long Stay",
          price: 437.99,
          origin_price: "500.00",
          image: `${Pic57}`,
          link: "/product-description/1",
          buyLink: "/buy-now/1",
          features: [
            "Giữ ẩm tốt cho môi khô",
            "Lâu trôi, bền màu",
            "Phù hợp cho mọi phong cách trang điểm",
          ],
          ingredients: ["Vitamin E", "Shea Butter", "Hyaluronic Acid"],
        },
        {
          label: "Silky Soft Lipstick",
          price: 399.99,
          origin_price: "450.00",
          image: `${Pic58}`,
          link: "/product-description/5",
          buyLink: "/buy-now/5",
          features: [
            "Chất son mềm mịn, thành phần thiên nhiên",
            "Màu sắc tự nhiên",
            "Không gây khô môi",
          ],
          ingredients: ["Aloe Vera", "Vitamin C", "Collagen"],
        },
        {
          label: "Matte Velvet Lips",
          price: 480.0,
          origin_price: "520.00",
          image: `${Pic60}`,
          link: "/product-description/6",
          buyLink: "/buy-now/6",
          features: [
            "Giữ màu suốt 8 giờ",
            "Dễ dàng tẩy trang, đánh bay bụi khuẩn",
            "Thành phần thiên nhiên",
          ],
          ingredients: ["Jojoba Oil", "Vitamin E", "Natural Waxes"],
        },
      ],
    },
    {
      id: "skincare",
      topic: "Kem dưỡng da",
      products: [
        {
          label: "Dear Klairs",
          price: 380.99,
          origin_price: "450.00",
          image: `${Pic60}`,
          link: "/product-description/2",
          buyLink: "/buy-now/2",
          features: [
            "Dành cho da khô và da dầu",
            "Cung cấp độ ẩm tự nhiên",
            "Giúp da sáng mịn, căng bóng",
          ],
          ingredients: ["Aloe Vera", "Ceramide", "Niacinamide"],
        },
        {
          label: "Hydrating Gel Cream",
          price: 299.99,
          origin_price: "350.00",
          image: `${product_4}`,
          link: "/product-description/7",
          buyLink: "/buy-now/7",
          features: [
            "Thẩm thấu nhanh",
            "Không gây bết dính",
            "Thành phần an toàn",
          ],
          ingredients: ["Hyaluronic Acid", "Green Tea", "Vitamin B5"],
        },
        {
          label: "Brightening Night Cream",
          price: 450.0,
          origin_price: "500.00",
          image: `${product_3}`,
          link: "/product-description/8",
          buyLink: "/buy-now/8",
          features: [
            "Làm sáng da qua đêm",
            "Tăng độ đàn hồi",
            "Hương thơm nhẹ nhàng",
          ],
          ingredients: ["Retinol", "Peptides", "Shea Butter"],
        },
      ],
    },
    {
      id: "makeup",
      topic: "Trang Điểm",
      products: [
        {
          label: "Bảng mắt Urban Decay",
          price: 750.99,
          origin_price: "800.00",
          image: `${product_5}`,
          link: "/product-description/9",
          buyLink: "/buy-now/9",
          features: [
            "12 màu sắc đa dạng",
            "Độ bám màu cao",
            "Thiết kế nhỏ gọn, dễ mang theo",
          ],
          ingredients: ["Mineral Pigments", "Talc-Free", "Paraben-Free"],
        },
        {
          label: "Phấn má NARS",
          price: 650.0,
          origin_price: "700.00",
          image: `${Pic60}`,
          link: "/product-description/10",
          buyLink: "/buy-now/10",
          features: [
            "Màu sắc tự nhiên",
            "Không gây kích ứng da",
            "Phù hợp với mọi tông da",
          ],
          ingredients: ["Vitamin E", "Mineral Powders"],
        },
      ],
    },
    {
      id: "perfume",
      topic: "Nước Hoa",
      products: [
        {
          label: "Chanel No.5",
          price: 1500.99,
          origin_price: "1600.00",
          image: `${Pic57}`,
          link: "/product-description/11",
          buyLink: "/buy-now/11",
          features: [
            "Hương thơm cổ điển, sang trọng",
            "Lưu hương suốt 12 giờ",
            "Thích hợp cho các dịp đặc biệt",
          ],
          ingredients: ["Rose", "Jasmine", "Citrus"],
        },
        {
          label: "Dior Sauvage",
          price: 1400.0,
          origin_price: "1500.00",
          image: `${product_5}`,
          link: "/product-description/12",
          buyLink: "/buy-now/12",
          features: [
            "Hương gỗ trầm ấm",
            "Phù hợp với mọi lứa tuổi",
            "Lưu hương lâu",
          ],
          ingredients: ["Bergamot", "Amber", "Cedarwood"],
        },
      ],
    },
  ];

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");

      if (selectedOption) {
        const selected = options.find((option) => option.id === selectedOption);
        if (selected) {
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                sender: "bot",
                text: `Danh sách sản phẩm thuộc chủ đề: ${selected.topic}`,
              },
              {
                sender: "bot",
                text: (
                  <div className="flex flex-col space-y-4">
                    {selected.products.map((product, index) => (
                      <div
                        key={index}
                        className="flex-none w-[350px] p-4 bg-white rounded-lg shadow-md"
                      >
                        <img
                          src={product.image}
                          alt={product.label}
                          className="w-32 h-32 mb-2 mx-auto rounded-md"
                        />
                        <p className="text-lg font-semibold text-center mb-1">
                          {product.label}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-md font-semibold mb-2">
                          <p className="text-[#BE123C]">
                            ${product.price.toString()}
                          </p>
                          <p className="text-gray-400 text-xs line-through">
                            ${product.origin_price.toString()}
                          </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 mb-2">
                          {product.ingredients.map((ingredient, index) => (
                            <span
                              key={index}
                              className="bg-[#F7F8C5] text-black text-xs font-medium px-2 py-1 rounded-full"
                            >
                              {ingredient}
                            </span>
                          ))}
                        </div>
                        <ul className="list-disc pl-5 text-sm text-gray-700">
                          {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                        <div className="flex justify-center gap-2 mt-3">
                          <a
                            href={product.link}
                            rel="noopener noreferrer"
                            className="bg-rose-400 text-sm text-white px-4 py-2 rounded-lg hover:bg-red-600"
                          >
                            Xem chi tiết
                          </a>
                          <a
                            href={product.buyLink}
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm border border-rose-400 bg-white hover:bg-rose-50 text-rose-400 rounded-lg"
                          >
                            Mua ngay
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ),
              },
            ]);
          }, 1000);
        }
      } else {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: "Hãy chọn chủ đề sản phẩm và cho chúng tôi biết sở thích của bạn đi!",
            },
          ]);
        }, 1000);
      }
    }
  };

  return (
    <div className="fixed bottom-[15%] right-[2%] z-50 flex flex-col items-end">
      <button
        className="pulse bg-rose-400 text-white p-4 rounded-full shadow-lg hover:bg-red-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaCommentDots size={24} />
      </button>

      {isOpen && (
        <div className="w-[400px] bg-[#BE123C] text-white shadow-xl rounded-lg mt-2 overflow-hidden">
          <div className="bg-[#BE123C] text-white p-3 font-bold">
            Beauty Chatbox Assistant
          </div>
          <div className="p-3 h-[360px] overflow-y-auto bg-white text-black">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 new-message ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-[#EFF4FF] text-black"
                      : "bg-[#F3F3F3] text-black"
                  }`}
                >
                  {typeof msg.text === "string" ? msg.text : msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="px-3 py-2 bg-gray-100 flex flex-col">
            <label htmlFor="product-select" className="mb-1 text-black text-sm">
              Chọn chủ đề sản phẩm:
            </label>
            <select
              id="product-select"
              className="border border-gray-300 rounded-lg p-2 text-black text-sm"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">-- Chọn sản phẩm --</option>
              {options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.topic}
                </option>
              ))}
            </select>
          </div>

          <div className="px-3 pb-3 pt-1 flex bg-gray-100">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-l-lg p-2 text-black focus:outline-none focus:ring-2 focus:ring-[#BE123C]"
              placeholder="Nhập câu hỏi..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              className="bg-[#BE123C] text-white px-4 rounded-r-lg hover:bg-red-600"
              onClick={handleSendMessage}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
