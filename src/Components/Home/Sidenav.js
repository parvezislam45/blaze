import { Link, NavLink } from "react-router-dom";
import { FaBars, FaLock, FaMoneyBill, FaUser,FaQuestionCircle,FaBlogger } from "react-icons/fa";
import { MdMessage,MdOutlineSportsFootball,MdCasino,MdOutlineSupportAgent } from "react-icons/md";
import { PiWalletFill } from "react-icons/pi";
import { BiAnalyse } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "../Sidebar/SidebarMenu";

const routes = [
  {
    name: "BLAZE ORIGINALS",
    icon: <PiWalletFill />,
    subRoutes: [
      {
        name: "Crash",
        icon: <FaUser />,
      },
      {
        path: "",
        name: "Crash2",
        icon: <FaLock />,
      },
      {
        path: "",
        name: "Double",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Fortune Double",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Slide",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Mines",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Dice",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Plinko",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Limbo",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Tower",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Fruit Slice",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Coin Flip",
        icon: <FaMoneyBill />,
      },
    ],
  },

  {
    name: "CASINO",
    icon: <MdCasino />,
    subRoutes: [
      { name: "Favorite", icon: <FaUser /> },
      { path: "", name: "Slots", icon: <FaLock /> },
      { path: "", name: "Live Casino", icon: <FaMoneyBill /> },
      { path: "", name: "Fortune Games", icon: <FaMoneyBill /> },
      { path: "", name: "Games Shows", icon: <FaMoneyBill /> },
      { path: "", name: "Table Games", icon: <FaMoneyBill /> },
      { path: "", name: "Bonus Buy", icon: <FaMoneyBill /> },
      { path: "", name: "Providers", icon: <FaMoneyBill /> },
      { path: "", name: "Spinner", icon: <FaMoneyBill /> },
      { path: "", name: "Challenges", icon: <FaMoneyBill /> },
    ],
  },
  {
    name: "SPORTS",
    icon: <MdOutlineSportsFootball />,
    subRoutes: [
      {
        name: "My Bits",
        icon: <FaUser />,
      },
      {
        path: "",
        name: "Live Events",
        icon: <FaLock />,
      },
      {
        path: "",
        name: "Upcoming Events",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Brasileiro Series A",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "La Liga",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Premier League",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "UEFA Champion League",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Italy Seria A",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Germany Bundesliga",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "France Ligue 1",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Soccer",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "FIFA",
        icon: <FaMoneyBill />,
      },
      {
        name: "American Football",
        icon: <FaUser />,
      },
      {
        path: "",
        name: "Badminton",
        icon: <FaLock />,
      },
      {
        path: "",
        name: "Baseball",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Basketball",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Biathlon",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Bowls",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Counterstrike",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Cricket",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Cycling",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Darts",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Formula 1",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Futsal",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Golf",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Handball",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Ice Hockey",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "League of Legend",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "MLB",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "MMA",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "NFL",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Motorcycle Racing",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Politics & Entertainment",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Rainbow Six",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Rugby",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Skl Jumping",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Snooker",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Table Tennis",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Tennis",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Volleyball",
        icon: <FaMoneyBill />,
      },
      {
        path: "",
        name: "Waterpolo",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/",
    name: "Live Support",
    icon: <MdOutlineSupportAgent />,
  },
  {
    path: "/",
    name: "Promotions",
    icon: <MdMessage />,
  },
  {
    path: "/",
    name: "Refer A Friend",
    icon: <BiAnalyse />,
  },
  {
    path: "/",
    name: "Sponsorship",
    icon: <AiFillHeart />,
  },
  {
    path: "/",
    name: "FAQ",
    icon: <FaQuestionCircle />,
  },
  {
    path: "/",
    name: "Blog",
    icon: <FaBlogger />,
  },
];

const Sidenav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [selectedBonus, setSelectedBonus] = useState("noBonus");

  const handleCheckboxChange = (e) => {
    setSelectedBonus(e.target.value);
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div>
      <div>
        <nav class="bg-white border-b border-gray-200 fixed z-30 w-full">
          <div class="">
            <div className="navbar bg-black border-b border-gray-600 fixed">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <Link className="text-black dark:text-white" to="/">
                      <li>
                        <a href="/">Home</a>
                      </li>
                    </Link>
                    <Link className="text-black dark:text-white" to="/casino">
                      <li>
                        <a href="/">Casino</a>
                      </li>
                    </Link>
                    <Link className="text-black dark:text-white" to="/sports">
                      <li>
                        <a href="/">Sports</a>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="navbar-center hidden lg:flex gap-5 mx-10">
                <div className="flex items-center gap-1">
                  <img
                    className="w-6"
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/playing-cards-6588867-5499655.png"
                    alt=""
                  />
                  <NavLink
                    to="/casino"
                    className={({ isActive }) =>
                      isActive
                        ? "text-xs font-semibold border-b-2 border-red-600"
                        : "text-xs font-semibold"
                    }
                    activeClassName="active"
                  >
                    CASINO
                  </NavLink>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    className="w-6"
                    src="https://img.icons8.com/emoji/256w/basketball-emoji.png"
                    alt=""
                  />
                  <NavLink
                    to="/sports"
                    className={({ isActive }) =>
                      isActive
                        ? "text-xs font-semibold border-b-2 border-red-600"
                        : "text-xs font-semibold"
                    }
                    activeClassName="active"
                  >
                    SPORTS
                  </NavLink>
                </div>
              </div>
              <div className="navbar-end px-20">
                <div className="hidden gap-3 lg:flex items-center mx-10 border-b-4 border-gray-600">
                  <div className="flex items-center">
                    <img
                      className="w-6"
                      src="https://cdn-icons-png.flaticon.com/512/4942/4942719.png"
                      alt=""
                    />
                    <h1 className="text-xs font-semibold mx-2">Unranked</h1>
                  </div>
                  <h1 className="text-xs font-semibold mx-5">Lavel1</h1>
                </div>
                <div className="flex gap-7 mx-5">
                  <div className="indicator hidden lg:flex">
                    <svg
                      className="w-6 color-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4ZM5,6H19a1,1,0,0,1,1,1l-8,4.88L4,7A1,1,0,0,1,5,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9.28l7.48,4.57a1,1,0,0,0,1,0L20,9.28Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span className="badge badge-sm indicator-item bg-red-600 text-white h-4 w-4 mt-1">
                      4
                    </span>
                  </div>
                  <svg
                    className="w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <div className="flex gap-3 mx-10">
                  <button
                    disabled
                    type="button"
                    class="text-white bg-black border-solid border border-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-xs px-7 h-12 text-center"
                  >
                    ₹0.00
                  </button>
                  <button
                    className="btn rounded-none bg-red-600 text-white"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Deposit
                  </button>
                </div>
              </div>
            </div>
            <dialog id="my_modal_3" className="modal mt-20">
              <div className="modal-box w-96 min-h-screen">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <p className="text-xs text-center text-white font-normal mt-3">
                    Select Bonus ! Payment Type ! Payment Details
                  </p>
                </form>
                <h3 className="font-bold text-md text-center mt-5">
                  Choose Your Bonus
                </h3>
                <div className="border-solid border-2 border-red-600 h-10">
                  <label
                    className="flex items-center mt-2 px-5"
                    htmlFor="noBonus"
                  >
                    <input
                      type="checkbox"
                      id="noBonus"
                      value="noBonus"
                      checked={selectedBonus === "noBonus"}
                      onChange={handleCheckboxChange}
                      className="mr-2 h-3 w-3 bg-red-600 focus:ring-red-600 border-red-600"
                    />
                    <span className="text-xs font-medium text-white mx-3">
                      No Bonus
                    </span>
                  </label>
                  <div className="mt-10">
                    <label
                      className="flex items-center mt-2 px-5"
                      htmlFor="depositBonus"
                    >
                      <input
                        type="checkbox"
                        id="depositBonus"
                        value="depositBonus"
                        checked={selectedBonus === "depositBonus"}
                        onChange={handleCheckboxChange}
                        className="mr-2 h-3 w-3 text-red-600 focus:ring-red-600 border-gray-300"
                      />
                      <span className="text-xs font-medium text-white mx-3">
                        100 % Deposit Bonus
                      </span>
                    </label>
                    <div
                      style={{
                        display:
                          selectedBonus === "depositBonus" ? "block" : "none",
                      }}
                    >
                      <p className="mt-7 text-sm uppercase font-medium">
                        Bonus Terms
                      </p>
                      <span class="flex items-center gap-5 text-sm font-medium text-gray-900 dark:text-white me-3 mt-5">
                        <span class="flex w-2 h-2 font-medium bg-white rounded-full gap-5 me-1.5 flex-shrink-0"></span>
                        Deposit & Receive 100% Bonus Cash 40 Free Rounds
                      </span>
                      <span class="flex items-center gap-5 text-sm font-medium text-gray-900 dark:text-white me-3 mt-5">
                        <span class="flex w-2 h-2 font-medium bg-white rounded-full gap-5 me-1.5 flex-shrink-0"></span>
                        Minimum deposit required is €10 to receive the 40 Free
                        Rounds
                      </span>
                      <span class="flex items-center gap-5 text-sm font-medium text-gray-900 dark:text-white me-3 mt-5">
                        <span class="flex w-2 h-2 font-medium bg-white rounded-full gap-5 me-1.5 flex-shrink-0"></span>
                        Free Rounds are only credited on the first deposit
                      </span>
                      <span class="flex items-center gap-5 text-sm font-medium text-gray-900 dark:text-white me-3 mt-5">
                        <span class="flex w-2 h-2 font-medium bg-white rounded-full gap-5 me-1.5 flex-shrink-0"></span>
                        Bonus Cash is given on any deposit up to a maximum of
                        €200
                      </span>
                      <span class="flex items-center gap-5 text-sm font-medium text-gray-900 dark:text-white me-3 mt-5">
                        <span class="flex w-2 h-2 font-medium bg-white rounded-full gap-5 me-1.5 flex-shrink-0"></span>
                        Maximum allowed bet with bonus money is €5 / $5
                      </span>
                      <span class="flex items-center gap-5 text-sm font-medium text-gray-900 dark:text-white me-3 mt-5">
                        <span class="flex w-2 h-2 font-medium bg-white rounded-full gap-5 me-1.5 flex-shrink-0"></span>
                        Bonus Terms & Welcome Bonus Terms apply to this offer
                      </span>
                      <div className="text-center">
                        <button
                          onClick={() =>
                            document.getElementById("my_modal_3").showModal()
                          }
                          className="btn text-white bg-red-600 w-full lg:w-40 rounded-none mt-10 mx-auto"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </nav>
        <div class="main-container">
          <aside id="sidebar" class=" " aria-label="Sidebar">
            <div class="">
              <div class="flex-1 flex flex-col overflow-y-auto">
                <motion.div
                  animate={{
                    width: isOpen ? "250px" : "45px",
                    transition: {
                      duration: 0.5,
                      type: "spring",
                      damping: 10,
                    },
                  }}
                  className={`sidebar ${isOpen ? "show" : "hide-on-small"}`}
                >
                  <div className="top_section">
                    <div className="bars">
                      <FaBars onClick={toggle} />
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.h1
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className=""
                        >
                            <Link to="/"><img
                            className="w-20 mx-20 fixed"
                            src="https://blaze1.space/static/media/logo.cf45d2ad.svg"
                            alt=""
                          /></Link>
                          
                        </motion.h1>
                      )}
                    </AnimatePresence>
                  </div>
                  <section className="routes">
                    {routes.map((route, index) => {
                      if (route.subRoutes) {
                        return (
                          <SidebarMenu
                            setIsOpen={setIsOpen}
                            route={route}
                            showAnimation={showAnimation}
                            isOpen={isOpen}
                            key={index}
                          />
                        );
                      }

                      return (
                        <NavLink
                          to={route.path}
                          key={index}
                          className="link"
                          activeClassName="active"
                        >
                          <div className="icon">{route.icon}</div>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="link_text"
                              >
                                {route.name}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </NavLink>
                      );
                    })}
                  </section>
                </motion.div>
              </div>
            </div>
          </aside>

          <div
            id="main-content"
            class="h-full w-full bg-black relative overflow-y-auto"
          >
            <main>
              <div class="pt-6 px-4">{children}</div>
            </main>
            <footer class="bg-black md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
              <nav>
                <img
                  src="https://blaze1.space/static/media/logo.cf45d2ad.svg"
                  alt=""
                />
                <div className="grid grid-flow-col gap-4 mt-5">
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </a>
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                </div>
              </nav>
              <nav>
                <h6 className="footer-title text-white">HELPFUL LINKS</h6>
                <a href="/" className="link link-hover">Crash</a>
                <a href="/" className="link link-hover">Double</a>
                <a href="/" className="link link-hover">Blaze Mirror</a>
                <a href="/" className="link link-hover">Fairness</a>
                <a href="/" className="link link-hover">VIP Club</a>
              </nav>
              <nav>
                <h6 className="footer-title">Company</h6>
                <a href="/" className="link link-hover">About us</a>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Jobs</a>
                <a href="/" className="link link-hover">Press kit</a>
              </nav>

              <div class="flex sm:justify-center space-x-6">
                <a href="/" class="text-gray-500 hover:text-gray-900">
                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a href="/" class="text-gray-500 hover:text-gray-900">
                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a href="/" class="text-gray-500 hover:text-gray-900">
                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="/" class="text-gray-500 hover:text-gray-900">
                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a href="/" class="text-gray-500 hover:text-gray-900">
                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </footer>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-8" />
            <div className="container mx-auto grid grid-cols-4 md:grid-cols-10 gap-3 mt-14 gap-y-6">
              <img
                class="w-28"
                src="https://i.postimg.cc/FzMk2FVb/Screenshot-from-2024-05-15-15-43-26.png"
                alt=" description"
              />
              <img
                class="w-28"
                src="https://i.postimg.cc/y8Pyt5kJ/Screenshot-from-2024-05-15-15-43-57.png"
                alt=" description"
              />
              <a href="/">
                <img
                  class="w-28"
                  src="https://i.postimg.cc/L4LfG7WH/Screenshot-from-2024-05-15-15-44-24.png"
                  alt=" description"
                />
              </a>
              <img
                class="w-28"
                src="https://i.postimg.cc/RFf656XP/Screenshot-from-2024-05-15-15-44-52.png"
                alt=" description"
              />
              <a href="/">
                <img
                  class="w-28"
                  src="https://i.postimg.cc/6Q4Tn4J9/Screenshot-from-2024-05-15-15-48-08.png"
                  alt=" description"
                />
              </a>
              <a href="/">
                <img
                  class="w-28"
                  src="https://i.postimg.cc/xTsdZ39f/Screenshot-from-2024-05-15-15-45-32.png"
                  alt=" description"
                />
              </a>
              <a href="/">
                <img
                  class="w-28"
                  src="https://i.postimg.cc/cL2Lx1KP/Screenshot-from-2024-05-15-15-46-34.png"
                  alt=" description"
                />
              </a>
              <a href="/">
                <img
                  class="w-28"
                  src="https://i.postimg.cc/j2xsgL9n/Screenshot-from-2024-05-15-15-47-17.png"
                  alt=" description"
                />
              </a>
              <a href="">
                <img
                  class="w-28"
                  src="https://i.postimg.cc/j2xsgL9n/Screenshot-from-2024-05-15-15-47-17.png"
                  alt=" description"
                />
              </a>
              <a href="/">
                <img
                  class="w-28"
                  src="https://i.postimg.cc/TYHR02ch/Screenshot-from-2024-05-15-15-47-44.png"
                  alt=" description"
                />
              </a>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-8" />
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-20">
              <img
                className="w-40"
                src="https://i.postimg.cc/7PsmWptN/Screenshot-from-2024-05-15-16-03-55.png"
                alt=""
              />
              <div>
                <p className="text-sm">
                  Prolific Trade N.V. is licensed and regulated by Antillephone
                  N.V, under License No 8048/JAZ2024-009
                </p>
                <p className="text-sm">
                  Gambling can be addictive. Please play responsibly. Blaze only
                  accepts customers over 18 years of age.
                </p>
              </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-8 mt-10" />

            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-20">
              <p>© 2024 blaze.com All rights reserved.</p>
              <select className="select text-xs">
                <option disabled selected>
                  Country
                </option>
                <option>United State</option>
                <option>Brazil</option>
                <option>Spain</option>
                <option>England</option>
                <option>Germany</option>
              </select>
            </div>
            <p class="text-center text-sm text-gray-500 my-10">
              Support support@blaze.com | Partners partners@blaze.com | Legal
              legal@blaze.com | Press press@blaze.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;