"use client";
import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import useStickyHeader from "@/app/hooks/headerSticy";
import useMobileView from "@/app/hooks/headerMobile";
import Logo from "@/app/_components/header/Logo";
import Navigation from "@/app/_components/header/Navigation";
import SearchBar from "@/app/_components/header/SearchBar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { sticky, headerRef } = useStickyHeader();
  const isMobile = useMobileView();

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
      <header
          ref={headerRef}
          className={`${
              sticky.isSticky
                  ? "fixed top-0 left-0 right-0 z-50 shadow-md max-w-full"
                  : "relative desktop:max-w-screen-2xl"
          } ${
              isOpen ? "h-full" : ""
          } bg-primary-20 text-primary-7 md:bg-[#ffff] md:text-primary-20 p-[20px] md:p-[40px] md:pb-[16px] mx-auto w-full transition-all duration-300`}
          style={{ marginTop: "0" }}
      >
        <div className="md:flex justify-between items-center">
          <div className="flex justify-between items-center">
            <Logo />
            <button
                className="md:hidden bg-primary-800 text-primary-7 text-2xl py-1 px-2 rounded-lg"
                onClick={toggleMenu}
            >
              {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
            </button>
          </div>
          {isMobile ? (
              <>
                <SearchBar isOpen={isOpen} />
                {isOpen && <Navigation isOpen={isOpen} />}
              </>
          ) : (
              <>
                <Navigation isOpen={isOpen} />
                <SearchBar isOpen={isOpen} />
              </>
          )}
        </div>
      </header>
  );
}

export default Header;