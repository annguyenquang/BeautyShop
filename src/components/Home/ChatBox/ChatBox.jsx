import { useState } from "react";
import { FaPaperPlane, FaCommentDots } from "react-icons/fa6";
import { product_2, Pic60, Pic58, Pic57 } from "../../../assets/assets";
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
      label: "Moisture Matte Long Stay",
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
      id: "skincare",
      topic: "Kem dưỡng da",
      label: "Dear Klairs",
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
      id: "makeup",
      topic: "Trang điểm",
      label: "Shiseido",
      image: `${Pic58}`,
      link: "/product-description/3",
      buyLink: "/buy-now/3",
      features: [
        "Bộ trang điểm đầy đủ từ cơ bản đến chuyên nghiệp",
        "Phấn phủ lâu trôi",
        "Không gây kích ứng cho da nhạy cảm",
      ],
      ingredients: ["Mineral Powder", "Vitamin C", "Jojoba Oil"],
    },
    {
      id: "perfume",
      topic: "Nước hoa",
      label: "Christian Dior",
      image: `${product_2}`,
      link: "/product-description/4",
      buyLink: "/buy-now/4",
      features: [
        "Hương thơm quyến rũ, đa dạng",
        "Thích hợp cho cả nam và nữ",
        "Lưu hương lâu trên da và quần áo",
      ],
      ingredients: ["Essential Oils", "Alcohol Denat", "Aqua"],
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
                text: `Chủ đề: ${selected.label}.`,
              },
              {
                sender: "bot",
                text: (
                  <div className="flex flex-col items-center py-3">
                    <img
                      src={selected.image}
                      alt={selected.label}
                      className="w-24 h-24 mb-2 rounded-md"
                    />
                    <p className="text-lg font-semibold mb-2">
                      {selected.label}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {selected.ingredients.map((ingredient, index) => (
                        <span
                          key={index}
                          className="bg-[#F7F8C5] text-black text-xs font-medium px-2 py-1 rounded-full"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                    <ul className="list-disc pl-5 text-sm text-gray-700">
                      {selected.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <div className="flex justify-center gap-2 mt-3">
                      <a
                        href={selected.link}
                        rel="noopener noreferrer"
                        className="bg-rose-400 text-sm text-white px-4 py-2 rounded-lg hover:bg-red-600"
                      >
                        Xem chi tiết
                      </a>
                      <a
                        href={selected.buyLink}
                        rel="noopener noreferrer"
                        className=" px-4 py-2 text-sm border border-rose-400 bg-white hover:bg-rose-50 text-rose-400 rounded-lg"
                      >
                        Mua ngay
                      </a>
                    </div>
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
        <div className="w-[350px] bg-[#BE123C] text-white shadow-xl rounded-lg mt-2 overflow-hidden">
          <div className="bg-[#BE123C] text-white p-3 font-bold">
            Beauty Chatbox Assistant
          </div>
          <div className="p-3 h-80 overflow-y-auto bg-white text-black">
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

          <div className="p-3 flex bg-gray-100">
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
