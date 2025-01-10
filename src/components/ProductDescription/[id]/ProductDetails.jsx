import React from "react";
import { Link, useParams } from "react-router-dom";
import productDetails from "../../ProductList/ProductListItemData";
import productData from "../productData";
import QuantitySelector from "../QuantitySelector";
import RelatedProducts from "../RelatedProducts";
import ProductsYouMightLike from "../ProductsYouMightLike";
import { TbArrowNarrowRight } from "react-icons/tb";
import profileImg from "./../../../assets/DivueenNetwork/Ellipse.png";
import { FaStar } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const products = productDetails;
  const [productDetail, setProductDetail] = React.useState({});
  React.useEffect(() => {
    const filterData = products.filter((p) => p.id == id);
    setProductDetail(filterData[0]);
  }, [id]);

  console.log(productDetail);

  const [selectedSize, setSelectedSize] = React.useState("106 cm (42)");
  const [quantity, setQuantity] = React.useState(1);
  const [selectedProduct, setSelectedProduct] = React.useState(productData[0]);
  const [productImage, setProductImage] = React.useState(productDetail.image);
  const [activeTab, setActiveTab] = React.useState("description");
  const [view, changeview] = React.useState(false);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (newQuantity) => {
    if (selectedProduct.availability === "Out of Stock") {
      alert("Out of Stock");
      return;
    }
    setQuantity(newQuantity);
  };

  React.useEffect(() => changeview(false), [activeTab]);

  const RenderContent = ({ val }) => {
    return (
      <div>
        <h3 className="text-xl font-bold text-gray-800">
          Product <span className="capitalize">{val}</span>
        </h3>
        <div className="text-sm text-gray-500 mt-4">
          {view
            ? selectedProduct[val]
            : selectedProduct[val].slice(0, 300) + " ..."}
          <button className="text-rose-600 " onClick={() => changeview(!view)}>
            {view ? "Less" : "More"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {productDetail && (
        <div className="mx-auto w-80 md:w-fit  ">
          <div className="font-sans ">
            <div className="p-4 lg:max-w-6xl max-w-2xl max-lg:mx-auto">
              <div className="grid items-start justify-items-center grid-cols-1 lg:grid-cols-2 w-full gap-8 max-lg:gap-16">
                <div className="w-80 lg:justify-self-end lg:sticky top-0">
                  <div className="  flex gap-3">
                    <div className="w-20 mx-auto flex flex-col max-sm:mb-4 gap-3">
                      {["", "", "", ""].map((item, idx) => {
                        return (
                          <img
                            key={idx}
                            src={productDetail.image}
                            alt="Product1"
                            onClick={(e) => {
                              setProductImage(e.target.src);
                            }}
                            className="cursor-pointer rounded-lg"
                          />
                        );
                      })}
                    </div>
                    <img
                      src={productDetail.image}
                      alt="Product"
                      className="w-3/4 rounded-lg object-cover"
                    />
                  </div>
                  <div className="mt-6 max-w-2xl">
                    <h3 className="text-xl font-bold text-gray-800">
                      Product Features
                    </h3>

                    <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                      {[
                        "UV Protection",
                        "Stylish Design",
                        "Lightweight Frame",
                        "Scratch-Resistant Lenses",
                        "Polarized Lenses",
                        "Comfortable Fit",
                      ].map((featureName, idx) => {
                        return (
                          <li
                            key={idx}
                            className="grid grid-cols-5 gap-2 items-center text-sm text-gray-600"
                          >
                            <FaCheckCircle className="text-base text-rose-600 col-span-1 justify-self-end gap-1" />
                            <h1 className="col-span-4">{featureName}</h1>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-start gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {productDetail.name}
                      </h2>
                      {/* <div className="">
                        {[
                          {
                            title: "Brand",
                            value: `${productDetail.brands}`,
                          },
                          {
                            title: "Model",
                            value: `${productDetail.model}`,
                          },
                          {
                            title: "Availability",
                            value: `${productDetail.availability}`,
                          },
                        ].map((item) => {
                          return (
                            <p className="text-sm">
                              <span className="text-gray-500 mt-2">
                                {item.title}:
                              </span>{" "}
                              {item.value}
                            </p>
                          );
                        })}
                      </div> */}
                      <div className="flex space-x-2 mt-4">
                        <FaStar className="text-orange-400" />
                        <FaStar className="text-orange-400" />
                        <FaStar className="text-orange-400" />
                        <FaStar className="text-orange-400" />
                        <FaStar className="text-gray-300" />
                      </div>
                    </div>
                  </div>

                  <hr className="my-5" />

                  <div className="flex flex-wrap gap-4 items-start">
                    <div>
                      <p className="text-gray-800 text-4xl font-bold">
                        $ {productDetail.price}
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        <strike>$ {productDetail.price * 1.5}</strike>{" "}
                        <span className="text-sm ml-1">Tax included</span>
                      </p>
                    </div>
                  </div>

                  <hr className="my-5" />

                  {/* <div>
                    <h3 class="text-xl md:text-start text-center font-bold text-gray-800">
                      Choose a Size
                    </h3>
                    <div class="flex flex-wrap gap-4 mt-4">
                      <SizeSelector
                        selectedSize={selectedSize}
                        onSizeChange={handleSizeChange}
                      />
                    </div>
                  </div> */}

                  {/* <hr class="my-5" /> */}

                  <div>
                    <h3 className="text-xl md:text-start  font-bold text-gray-800">
                      Choose a Shade
                    </h3>
                    <div className="flex  w-fit flex-wrap gap-4 mt-3">
                      <button
                        type="button"
                        className="w-10 h-10 bg-rose-400 border border-white hover:border-gray-800 rounded-md shrink-0"
                      ></button>
                      <button
                        type="button"
                        className="w-10 h-10 bg-rose-600 border border-white hover:border-gray-800 rounded-md shrink-0"
                      ></button>
                      <button
                        type="button"
                        className="w-10 h-10 bg-rose-800 border-white hover:border-gray-800 border-2 rounded-md shrink-0"
                      ></button>
                      <button
                        type="button"
                        className="w-10 h-10 bg-rose-950 border border-white hover:border-gray-800 rounded-md shrink-0"
                      ></button>
                    </div>
                  </div>

                  <hr className="my-5" />
                  <QuantitySelector
                    quantity={quantity}
                    onQuantityChange={handleQuantityChange}
                  />
                  <hr className="my-5" />

                  <div className="flex flex-wrap gap-4">
                    <Link
                      type="button"
                      to={`/order-now/${productDetail.id}`}
                      class="min-w-[200px] text-center px-4 py-3 bg-rose-700 hover:bg-rose-900 text-white text-sm font-semibold rounded-md"
                    >
                      Buy now
                    </Link>
                    {/* <Link
                      to={`/order-now/${productDetail.id}`}
                      className="bg-rose-700 text-white px-5 py-2 hover:bg-rose-500 rounded-xl"
                    >
                      Buy Now */}
                    {/* </Link> */}
                    <button
                      type="button"
                      className="min-w-[200px] px-4 py-2.5 border border-rose-800 bg-transparent hover:bg-rose-50 text-rose-800 text-sm font-semibold rounded-md"
                    >
                      Add to cart
                    </button>
                  </div>
                  <hr className="my-5" />

                  <div className="mt-8">
                    <div className="flex  flex-row justify-between">
                      <h3 className="text-xl font-bold text-gray-800">
                        Reviews(10)
                      </h3>
                      <button
                        type="button"
                        className="w-fit text-gray-800 font-semibold flex gap-1 items-center md:flex-nowrap text-sm"
                      >
                        Read all reviews <TbArrowNarrowRight />
                      </button>
                    </div>
                    <div className="space-y-3 mt-4">
                      <div className="flex items-center">
                        <p className="text-sm text-gray-800 font-bold">5.0</p>
                        <FaStar className="text-orange-400 mx-1" />

                        <div className="bg-gray-300 rounded w-full h-2 ml-3">
                          <div className="w-2/3 h-full rounded bg-orange-400"></div>
                        </div>
                        <p className="text-sm text-gray-800 font-bold ml-3">
                          66%
                        </p>
                      </div>

                      <div className="flex items-center">
                        <p className="text-sm text-gray-800 font-bold">4.0</p>
                        <FaStar className="text-orange-400 mx-1" />

                        <div className="bg-gray-300 rounded w-full h-2 ml-3">
                          <div className="w-1/3 h-full rounded bg-orange-400"></div>
                        </div>
                        <p className="text-sm text-gray-800 font-bold ml-3">
                          33%
                        </p>
                      </div>

                      <div className="flex items-center">
                        <p className="text-sm text-gray-800 font-bold">3.0</p>
                        <FaStar className="text-orange-400 mx-1" />

                        <div className="bg-gray-300 rounded w-full h-2 ml-3">
                          <div className="w-1/6 h-full rounded bg-orange-400"></div>
                        </div>
                        <p className="text-sm text-gray-800 font-bold ml-3">
                          16%
                        </p>
                      </div>

                      <div className="flex items-center">
                        <p className="text-sm text-gray-800 font-bold">2.0</p>
                        <FaStar className="text-orange-400 mx-1" />

                        <div className="bg-gray-300 rounded w-full h-2 ml-3">
                          <div className="w-1/12 h-full rounded bg-orange-400"></div>
                        </div>
                        <p className="text-sm text-gray-800 font-bold ml-3">
                          8%
                        </p>
                      </div>

                      <div className="flex items-center">
                        <p className="text-sm text-gray-800 font-bold">1.0</p>
                        <FaStar className="text-orange-400 mx-1" />

                        <div className="bg-gray-300 rounded w-full h-2 ml-3">
                          <div className="w-[6%] h-full rounded bg-orange-400"></div>
                        </div>
                        <p className="text-sm text-gray-800 font-bold ml-3">
                          6%
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start mt-8">
                      <img
                        src={profileImg}
                        className="w-12 h-12 rounded-full border-2 border-white"
                      />
                      <div className="ml-3">
                        <h4 className="text-sm font-bold">Alina Doe</h4>
                        <div className="flex space-x-1 mt-1">
                          <FaStar className="text-orange-400" />

                          <FaStar className="text-orange-400" />

                          <FaStar className="text-orange-400" />

                          <FaStar className="text-gray-300" />
                          <FaStar className="text-gray-300" />
                          <p className="text-xs !ml-2 font-semibold">
                            2 mins ago
                          </p>
                        </div>
                        <p className="text-xs mt-4">
                          The service was amazing. I never had to wait that long
                          for my food. The staff was friendly and attentive, and
                          the delivery was impressively prompt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tabs */}
              <div className="w-fit mx-auto max-w-5xl mt-10">
                <ul className="flex border-b">
                  <li
                    className={` font-semibold text-sm  py-3 px-8 cursor-pointer transition-all ${
                      activeTab === "description"
                        ? "text-rose-800 bg-rose-100  border-b-2 border-rose-800"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("description")}
                  >
                    Description
                  </li>
                  <li
                    className={`text-gray-500 font-semibold text-sm hover:bg-rose-100 py-3 px-8 cursor-pointer transition-all ${
                      activeTab === "specification"
                        ? "text-rose-800 hover:bg-rose-100  border-b-2 border-rose-800"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("specification")}
                  >
                    Specification
                  </li>
                </ul>

                <div className="mt-4">
                  <RenderContent val={activeTab} />
                </div>
              </div>
              {/*Combo Offer */}
              <div className="mt-2">
                <ComboOffer product={productDetail} />
              </div>
              <hr className="my-5" />

              <div className="mx-auto max-w-5xl">
                <ProductsYouMightLike />
                <hr className="my-5" />
                <RelatedProducts />
              </div>
              <hr className="my-5" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ComboOffer = (props) => {
  // const productDetails = productData;
  // const [productInCombos, setProductInCombos] = React.useState(
  //   productData.slice(0, 3)
  // );

  return (
    <div>
      <h1 className="text-xl font-bold">Recommended Combos for you</h1>
      <div className="flex p-1 items-center gap-2">
        <div className="w-[200px] shadow p-1 rounded flex flex-col items-center relative">
          <input
            className="right-[15px] top-[15px] absolute"
            type="checkbox"
          ></input>
          <img
            className="border w-[180px] h-[250px]"
            src={props.product.image}
          ></img>
          <p className="text-sm font-light w-[100%] ">{props.product.name}</p>
          <p className="text-lg text-start w-[100%] font-bold">
            ${props.product.price}
          </p>
        </div>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M5 12h14m-7 7V5"
          />
        </svg>
        <div className="w-[200px] shadow p-1 rounded flex flex-col items-center relative">
          <input
            className="right-[15px] top-[15px] absolute"
            type="checkbox"
          ></input>
          <img
            className="border w-[180px] h-[250px]"
            src="https://sieuthilamdep.com/images/ab__webp/detailed/18/bo-4-mon-duong-da-sk-ii-skin-power-mini-pitera-experience-kit-2_png.webp"
          ></img>
          <p className="text-sm font-light">
            Ohui Miracle Moisture Emulsion - Elasticity & Hydration Care,
            Reduces Sagging & Dullness - Hydrolyzed Collagen For Glowing
          </p>
          <p className="text-lg text-start w-[100%] font-bold">$200</p>
        </div>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M5 12h14m-7 7V5"
          />
        </svg>
        <div className="w-[200px] shadow p-1 rounded flex flex-col items-center relative">
          <input
            className="right-[15px] top-[15px] absolute"
            type="checkbox"
          ></input>
          <img
            className="border w-[180px] h-[250px]"
            src="https://sieuthilamdep.com/images/ab__webp/detailed/18/bo-4-mon-duong-da-sk-ii-skin-power-mini-pitera-experience-kit-2_png.webp"
          ></img>
          <p className="text-sm font-light">
            Ohui Miracle Moisture Emulsion - Elasticity & Hydration Care,
            Reduces Sagging & Dullness - Hydrolyzed Collagen For Glowing
          </p>
          <p className="text-lg text-start w-[100%] font-bold">$200</p>
        </div>
        <div className="flex">
          <svg
            className="w-[31px] h-[31px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="ml-1 text-gray-800 dark:text-white">
            Buy entire combo for <span className="font-bold">7%</span> off
          </p>
          <p className="text-xl w-[100%] animate-bounce">
            <span className="line-through text-gray-400 italic">$960</span>
            <span className="mx-2">-</span>
            <span className="text-green-400 font-bold"> $900</span>
          </p>
        </div>
      </div>
      <ComboDetail />
    </div>
  );
};
const ComboDetail = () => {
  return (
    <div id="accordion-open" data-accordion="open">
      <h2 id="accordion-open-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-open-body-1"
          aria-expanded="true"
          aria-controls="accordion-open-body-1"
        >
          <span className="flex items-center">
            <svg
              className="w-5 h-5 me-2 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              ></path>
            </svg>{" "}
            Ohui Miracle Moisture Hydration Combo – New Edition (2pcs Special
            Set)
          </span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-1"
        className="hidden"
        aria-labelledby="accordion-open-heading-1"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{" "}
            <a
              href="/docs/getting-started/introduction/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </div>
      <h2 id="accordion-open-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-open-body-2"
          aria-expanded="false"
          aria-controls="accordion-open-body-2"
        >
          <span className="flex items-center">
            <svg
              className="w-5 h-5 me-2 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              ></path>
            </svg>
            How to use it ?
          </span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-2"
        className="hidden"
        aria-labelledby="accordion-open-heading-2"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{" "}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </div>
      </div>
      <h2 id="accordion-open-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-open-body-3"
          aria-expanded="false"
          aria-controls="accordion-open-body-3"
        >
          <span className="flex items-center">
            <svg
              className="w-5 h-5 me-2 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              ></path>
            </svg>{" "}
            Transformative Benefits
          </span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-3"
        className="hidden"
        aria-labelledby="accordion-open-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
