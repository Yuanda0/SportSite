import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
export default function NavBar() {
   const [isAnimating, setIsAnimating] = useState(false);
   const [bar, setBar] = useState(false);
  const toggleAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
    setBar(!bar)
  };
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`z-10 p-4 top-0 left-0 w-full h-[75px] sticky hidden md:flex ${
          isScrolled
            ? "bg-gray-800 duration-300 ease-in-out text-white"
            : "text-black bg-transparent duration-300 ease-in-out"
        }`}
      >
        <h1
          className="ml-2 cursor-pointer font-bold text-[24px]"
          onClick={() => navigate("/")}
        >
          SportSite
        </h1>
        <div className="mx-auto flex gap-8">
          <NavLink to="/" className={isScrolled ? "text-white" : ""}>
            Home
          </NavLink>
          <NavLink to="/store" className={isScrolled ? "text-white" : ""}>
            Store
          </NavLink>
          <NavLink to="/blogs" className={isScrolled ? "text-white" : ""}>
            Blogs
          </NavLink>
          <NavLink to="/workouts" className={isScrolled ? "text-white" : ""}>
            Workouts
          </NavLink>
          <NavLink
            to="/question-and-answer"
            className={isScrolled ? "text-white" : ""}
          >
            Q&A
          </NavLink>
          <NavLink to="/contact" className={isScrolled ? "text-white" : ""}>
            Contact
          </NavLink>
        </div>
      </div>
      <button
        className={`z-10 transition-transform duration-300 fixed top-4 right-2 md:hidden flex ${
          isAnimating ? "rotate-180" : ""
        }`}
        onClick={toggleAnimation}
      >
        {bar ? <AiOutlineClose size={30} /> : <HiOutlineMenu size={30} />}
      </button>
      {bar ? (
        <div
          className={
            bar
              ? "z-10 text-center gap-10 font-bold text-xl fixed top-10 right-5 flex flex-col md:hidden bg-zinc-800 rounded-md h-[380px] w-[25%] opacity-100 transform translate-x-0 transition-all duration-300"
              : "fixed top-0 left-[-110%] duration-200 ease-in-out"
          }
        >
          <NavLink to="/" className="text-white">
            Home
          </NavLink>
          <NavLink to="/store" className="text-white">
            Store
          </NavLink>
          <NavLink to="/blogs" className="text-white">
            Blogs
          </NavLink>
          <NavLink to="/workouts" className="text-white">
            Workouts
          </NavLink>
          <NavLink to="/question-and-answer" className="text-white">
            Q&A
          </NavLink>
          <NavLink to="/contact" className="text-white">
            Contact
          </NavLink>
        </div>
      ) : null}
    </>
  );
}
