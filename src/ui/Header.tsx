"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/lib/data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 키보드 네비게이션을 위한 핸들러
  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleEscapeKey = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white shadow-sm`}
      role="banner"
      aria-label="메인 네비게이션"
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation">
        <div className="flex justify-between items-center h-16">
          <Link
            href={"/"}
            className="font-bold text-lg sm:text-xl text-gray-900"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8" role="menubar">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 transition-colors duration-200 font-medium"
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, item.href)}
                aria-label={`${item.label} 섹션으로 이동`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={handleEscapeKey}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="mobile-menu-button"
          >
            <div
              className="px-2 pt-2 pb-3 space-y-1"
              onKeyDown={handleEscapeKey}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:text-blue-600 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  role="menuitem"
                  tabIndex={0}
                  aria-label={`${item.label} 섹션으로 이동`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
