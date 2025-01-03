import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { X } from 'lucide-react';
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

const CardItem = ({ item }) => {
  const { addCartItemNumber, subCartItemNumber } = useContext(CartContext);
  const { addWishItemNumber, subWishItemNumber } = useContext(WishlistContext);

  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = Math.ceil(item.length / 12);
  const [likedCards, setLikedCards] = useState({});
  const [cardItem, setCardItem] = useState([]);
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  const [comparisonList, setComparisonList] = useState(() => {
    const savedList = localStorage.getItem('comparisonList');
    return savedList ? JSON.parse(savedList) : [];
  });
  const [isComparisonView, setIsComparisonView] = useState(false);


  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("Item-Id")) || [];
    setCardItem(storedItems);
  }, []);

  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    return storedWishlist;
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const likedCardsObj = {};
    storedWishlist.forEach((id) => {
      likedCardsObj[id] = true;
    });
    setLikedCards(likedCardsObj);
  }, []);

  // Comparison functions
  const addToComparison = (product) => {
    if (comparisonList.length >= 3) {
      alert("Danh sách so sánh đã đủ 3 sản phẩm!");
      setIsComparisonModalOpen(true);
      return;
    }
    if (comparisonList.find(item => item.id === product.id)) {
      alert("Sản phẩm đã được thêm vào danh sách so sánh!");
    } else {
      const newList = [...comparisonList, product];
      setComparisonList(newList);
      localStorage.setItem('comparisonList', JSON.stringify(newList));
      setIsComparisonModalOpen(true);
    }
  };

  const removeFromComparison = (productId) => {
    const newList = comparisonList.filter(item => item.id !== productId);
    setComparisonList(newList);
    localStorage.setItem('comparisonList', JSON.stringify(newList));
  };

  // Cart functions
  const addingItemToCart = (ItemId) => {
    let updatedItems;
    if (cardItem.includes(ItemId)) {
      updatedItems = cardItem.filter((id) => id !== ItemId);
    } else {
      updatedItems = [...cardItem, ItemId];
    }
    setCardItem(updatedItems);
    localStorage.setItem("Item-Id", JSON.stringify(updatedItems));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLike = (id) => {
    let updatedWishlist;
    if (likedCards[id]) {
      updatedWishlist = wishlist.filter((item) => item !== id);
    } else {
      updatedWishlist = [...wishlist, id];
    }
    setWishlist(updatedWishlist);
    setLikedCards((prev) => ({ ...prev, [id]: !prev[id] }));
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Comparison Modal Component
  const ComparisonModal = () => {
    if (!isComparisonModalOpen) return null;

    const compareAttributes = [
      { label: 'Product Name', key: 'name' },
      { label: 'Type', key: 'category' },
      { label: 'Brand', key: 'brands' },
      { label: 'Key Ingredients', key: 'ingredients' },
      { label: 'Benefits', key: 'benefits' },
      { label: 'Price', key: 'price' },
      { label: 'Target Users', key: 'targetUsers' }
    ];

    const handleCompareClick = () => {
      setIsComparisonView(true);
    };

    if (isComparisonView) {
      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-6xl w-full m-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex flex-1 justify-center text-[#800020]">Compare products</h2>
                <button
                  onClick={() => {
                    setIsComparisonView(false);
                    setIsComparisonModalOpen(false);
                  }}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(100px,1fr))] gap-8">
                <div className="mt-20 ml-6 pt-28">
                  {compareAttributes.map(attr => (
                    <div key={attr.key} className="mt-4 flex items-center font-medium">
                      {attr.label}
                    </div>
                  ))}
                </div>

                {comparisonList.map((product) => (
                  <div key={product.id} className="flex-1 flex-col flex items-center">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-48 h-48"
                      />
                      <button
                        onClick={() => removeFromComparison(product.id)}
                        className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 text-rose-600">{product.name}</div>
                    <div className="mt-4">{product.category}</div>
                    <div className="mt-4">{product.brands}</div>
                    <div className="mt-4">
                      • Micelles
                    </div>
                    <div className="mt-4">{product.benefits || 'Removes makeup, gently cleanses.'}</div>
                    <div className="mt-4">${product.price}</div>
                    <div className="mt-4 text-center">
                      {product.targetUsers || (
                        <>
                          All skin types, especially sensitive skin.
                          <br />
                          Suitable for those who need daily cleansing without dryness.
                        </>
                      )}
                    </div>
                    <Link to={`/product-description/${product.id}`}>
                      <button
                        className="bg-rose-600 text-white px-4 mt-4 py-2 rounded-lg hover:bg-rose-700 transition-colors w-64"
                      >
                        View product details
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Product selection view (original modal)
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 max-w-4xl w-full m-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#800020]">Product list</h2>
            <button
              onClick={() => setIsComparisonModalOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {comparisonList.map((product) => (
              <div key={product.id} className="relative">
                <button
                  onClick={() => removeFromComparison(product.id)}
                  className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                >
                  <X className="h-4 w-4" />
                </button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="mt-2 text-sm font-medium">{product.name}</h3>
              </div>
            ))}
            {[...Array(3 - comparisonList.length)].map((_, index) => (
              <div
                key={`empty-${index}`}
                className="border-2 border-dashed border-gray-300 rounded-lg h-48"
              />
            ))}
          </div>

          {comparisonList.length > 0 && (
            <button
              onClick={handleCompareClick}
              className="mt-4 bg-[#800020] text-white px-4 py-2 rounded-lg w-full hover:bg-[#600018] transition-colors"
            >
              Add to comparison list
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderImages = () => {
    const startIndex = (currentPage - 1) * 12;
    const endIndex = startIndex + 12;
    const currentPageImages = item.slice(startIndex, endIndex);

    return (
      <>
        <div className="grid gap-x-4 gap-y-2 grid-cols-[repeat(2,_0.6fr)] lg:gap-y-12 md:gap-x-14 xl:gap-x-8 md:grid-cols-[repeat(3,_0.6fr)] xl:grid-cols-[repeat(4,_0.8fr)]">
          {currentPageImages.map((p) => {
            const isInCart = cardItem.includes(p.id);
            const isInWishlist = wishlist.includes(p.id);

            return (
              <div key={p.id} className="">
                <Link
                  to={`/product-description/${p.id}`}
                  className="group relative mb-2 block h-60 md:h-72 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
                >
                  <img
                    src={p.image}
                    alt="image"
                    className="h-full w-full object-center object-cover transition duration-200 group-hover:scale-110"
                  />
                  <div className="absolute left-0 top-0 right-0 px-3 py-1.5 flex items-center justify-between">
                    <p className="text-xs font-bold text-[#E11D48] bg-[#EBE700] px-2 py-1 rounded-full">
                      {p.discount}% OFF
                    </p>
                  </div>
                </Link>

                <div className="relative h-36 lg:px-4 md:h-32">
                  <div className="flex">
                    <Link
                      to="/product-description"
                      className="hover:text-gray-800 tracking-tighter mb-1 transition duration-100 text-[0.8rem] lg:text-[1rem]"
                    >
                      {p.name} - {p.category} - {p.shade} - {p.material} - {p.brands}
                    </Link>
                    <div
                      className="text-xs text-rose-600 bg-white p-2 rounded-full md:text-sm cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        if (isInWishlist) {
                          subWishItemNumber();
                          handleLike(p.id);
                        } else {
                          addWishItemNumber();
                          handleLike(p.id);
                        }
                      }}
                    >
                      <div className="rounded-full border-2 p-1">
                        {likedCards[p.id] ? <FaHeart /> : <FaRegHeart />}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-start lg:mt-1">
                    <p className="mr-2 text-sm tracking-wider">{p.rating}/5</p>
                    <div className="text-[#ffa200] text-sm flex items-center">
                      <FaStar />
                    </div>
                  </div>

                  <div className="flex justify-between items-center absolute bottom-6 md:bottom-2 sm:gap-2 lg:-bottom-4 xl:-bottom-0 left-0 right-0 xl:px-4">
                    <div className="flex gap-2 items-center">
                      <span className="font-[530] text-[0.8rem] md:text-lg">
                        <span>$</span>
                        {p.price - (p.discount / 100) * p.price}/-
                      </span>
                      <del className="text-green-600 text-xs md:text-sm">
                        <span>$</span>
                        {p.price}/-
                      </del>
                    </div>
                    <button
                      className={`${isInCart ? "bg-black" : "bg-rose-700"
                        } text-white hover:bg-rose-600 md:w-fit rounded-md text-[0.7rem] sm:text-[0.8rem] px-4 py-1 md:p-2`}
                      onClick={() => {
                        if (isInCart) {
                          subCartItemNumber();
                          addingItemToCart(p.id);
                        } else {
                          addCartItemNumber();
                          addingItemToCart(p.id);
                        }
                      }}
                    >
                      {isInCart ? "Remove" : "Add to Cart"}
                    </button>
                  </div>
                </div>
                <div className="flex justify-center pt-4 pe-4">
                  <button
                    className="btn bg-slate-300 hover:bg-slate-400 py-1 px-2 rounded text-[0.7rem] sm:text-[0.8rem] transition-colors"
                    onClick={() => addToComparison(p)}
                  >
                    Add to Comparison List
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <ComparisonModal />
      </>
    );
  };

  return (
    <div className="w-full m-4">
      {renderImages()}
      <div className="flex my-10 items-center justify-between">
        <button
          className="border p-2 px-12 border-gray-400 rounded-xl flex max-sm:px-4 hover:bg-gray-100"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg
            className="h-6 w-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Previous
        </button>

        <p className="text-[15px] sm:text-[20px] mt-1">
          {currentPage} of {lastPage}
        </p>

        <button
          className="border p-2 px-12 border-gray-400 rounded-xl text-base max-sm:px-4 flex hover:bg-gray-100"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === lastPage}
        >
          Next
          <svg
            className="h-6 w-6 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardItem;