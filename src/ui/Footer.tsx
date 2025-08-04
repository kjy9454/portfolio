import React from "react";
import { Code } from "lucide-react";
import { MY_PHONE, MY_EMAIL } from "@/lib/consts";
import { navItems } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Personal Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">김재영</h3>
            <p className="text-gray-300 leading-relaxed">
              React 및 React Native 기반의 프로젝트를 주도하며
              <br />
              기획, 개발, 운영 전 과정을 경험해 온 프론트엔드 개발자
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <Code className="w-4 h-4" />
              <span className="text-sm">4년 경력 • Frontend Developer</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">빠른 링크</h4>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label={`${item.label} 섹션으로 이동`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">연락처</h4>
            <div className="space-y-2 text-gray-300">
              <a
                href={`mailto:${MY_EMAIL}`}
                className="block hover:text-white transition-colors duration-200"
              >
                kjy9454@naver.com
              </a>
              <a
                href={`tel:${MY_PHONE}`}
                className="block hover:text-white transition-colors duration-200"
              >
                +82 10-2046-5225
              </a>
              <p>대한민국, 서울</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span>Made by 김재영</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 김재영. All rights reserved.
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              이 포트폴리오는 다음 기술로 제작되었습니다
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
