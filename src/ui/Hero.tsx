import React from "react";
import { ArrowDown, Github, Mail, Phone } from "lucide-react";
import { MY_PHONE, MY_EMAIL } from "@/lib/consts";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16"
      role="banner"
      aria-labelledby="hero-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              김재영
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium">
              Frontend Developer
            </p>
            <div
              className="w-16 sm:w-20 md:w-24 h-1 bg-blue-600 mx-auto rounded-full"
              aria-hidden="true"
            ></div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            React 및 React Native 기반의 프로젝트를 주도하며
            <br />
            기획, 개발, 운영 전 과정을 경험해 온 프론트엔드 개발자입니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <a
              href={`mailto:${MY_EMAIL}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
              aria-label="김재영에게 이메일 보내기"
            >
              <Mail size={20} aria-hidden="true" />
              이메일 보내기
            </a>
            <a
              href={`tel:${MY_PHONE}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 focus:border-blue-600 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
              aria-label="김재영에게 전화하기"
            >
              <Phone size={20} aria-hidden="true" />
              전화하기
            </a>
            <a
              href={"https://github.com/kjy9454"}
              target="_blank"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:bg-graty-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
              aria-label="김재영 깃허브 링크"
            >
              <Github size={20} aria-hidden="true" />
              Github
            </a>
          </div>

          <div className="pt-12">
            <a
              href="#about"
              className="inline-flex flex-col items-center text-gray-500 hover:text-blue-600 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2 transition-colors duration-200"
              aria-label="소개 섹션으로 스크롤"
            >
              <span className="text-sm mb-2">더 알아보기</span>
              <ArrowDown
                size={24}
                className="animate-bounce"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
