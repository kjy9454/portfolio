import React from "react";
import {
  Code,
  Smartphone,
  Database,
  Cloud,
  GitBranch,
  Palette,
} from "lucide-react";
import { getCareer } from "@/lib/data";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      color: "blue",
      skills: [
        {
          name: "React",
          level: 95,
          description: `${getCareer()} 실무 경험, 대규모 프로젝트 리딩`,
        },
        {
          name: "TypeScript",
          level: 90,
          description: "타입 안전성을 고려한 설계 및 구현",
        },
        {
          name: "Next.js",
          level: 85,
          description: "SSR/SSG 최적화 및 성능 튜닝",
        },
        {
          name: "JavaScript",
          level: 95,
          description: "ES6+ 문법 및 모던 JS 패턴 활용",
        },
        {
          name: "HTML/CSS",
          level: 90,
          description: "시맨틱 마크업 및 반응형 디자인",
        },
      ],
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      color: "green",
      skills: [
        {
          name: "React Native",
          level: 90,
          description: "크로스플랫폼 앱 개발 및 배포 경험",
        },
        {
          name: "CodePush",
          level: 85,
          description: "무중단 배포 파이프라인 구축",
        },
        {
          name: "Fastlane",
          level: 80,
          description: "자동화된 빌드 및 배포 시스템",
        },
        {
          name: "App Store 배포",
          level: 85,
          description: "iOS/Android 스토어 배포 및 관리",
        },
      ],
    },
    {
      title: "State Management",
      icon: <Database className="w-6 h-6" />,
      color: "purple",
      skills: [
        {
          name: "React Query",
          level: 90,
          description: "서버 상태 관리 및 캐싱 최적화",
        },
        {
          name: "Context API",
          level: 85,
          description: "전역 상태 관리 및 컴포넌트 간 통신",
        },
        { name: "Redux", level: 80, description: "복잡한 상태 로직 관리" },
        { name: "Recoil", level: 75, description: "원자 단위 상태 관리" },
      ],
    },
    {
      title: "Backend & Infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      color: "orange",
      skills: [
        {
          name: "Node.js",
          level: 80,
          description: "서버 사이드 개발 및 API 구축",
        },
        {
          name: "NestJS",
          level: 75,
          description: "엔터프라이즈급 백엔드 아키텍처",
        },
        {
          name: "AWS",
          level: 80,
          description: "EC2, S3, Route 53 활용한 인프라 구성",
        },
        {
          name: "SQL",
          level: 75,
          description: "데이터베이스 설계 및 쿼리 최적화",
        },
      ],
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="w-6 h-6" />,
      color: "indigo",
      skills: [
        {
          name: "Git/GitHub",
          level: 90,
          description: "버전 관리 및 협업 워크플로우",
        },
        {
          name: "Docker",
          level: 70,
          description: "컨테이너화 및 개발 환경 구성",
        },
        {
          name: "Webpack/Vite",
          level: 80,
          description: "빌드 도구 설정 및 최적화",
        },
        {
          name: "ESLint/Prettier",
          level: 85,
          description: "코드 품질 관리 및 포맷팅",
        },
      ],
    },
    {
      title: "Design & Collaboration",
      icon: <Palette className="w-6 h-6" />,
      color: "pink",
      skills: [
        {
          name: "Figma",
          level: 80,
          description: "디자이너와의 협업 및 디자인 시스템 구축",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          description: "유틸리티 퍼스트 CSS 프레임워크",
        },
        {
          name: "Styled Components",
          level: 85,
          description: "CSS-in-JS 스타일링",
        },
        {
          name: "UX/UI Design",
          level: 75,
          description: "사용자 경험 최적화 및 인터페이스 설계",
        },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        progress: "bg-blue-600",
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-600",
        progress: "bg-green-600",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        progress: "bg-purple-600",
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-600",
        progress: "bg-orange-600",
      },
      indigo: {
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        text: "text-indigo-600",
        progress: "bg-indigo-600",
      },
      pink: {
        bg: "bg-pink-50",
        border: "border-pink-200",
        text: "text-pink-600",
        progress: "bg-pink-600",
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 bg-gray-50"
      aria-labelledby="skills-title"
      role="region"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="skills-title"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            기술 스택
          </h2>
          <div
            className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"
            aria-hidden="true"
          ></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            {`${getCareer()}간의 실무 경험을 통해 쌓아온 기술 스택과 각 분야별 전문성입니다.`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <article
                key={categoryIndex}
                className={`${colorClasses.bg} ${colorClasses.border} border rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-lg focus-within:shadow-lg transition-shadow duration-300`}
                role="article"
                aria-labelledby={`skill-category-${categoryIndex}-title`}
                tabIndex={0}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2 sm:p-3 bg-white rounded-lg shadow-sm ${colorClasses.text}`}
                    aria-hidden="true"
                  >
                    {category.icon}
                  </div>
                  <h3
                    id={`skill-category-${categoryIndex}-title`}
                    className="text-xl sm:text-2xl font-bold text-gray-900"
                  >
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="space-y-2"
                      role="group"
                      aria-labelledby={`skill-${categoryIndex}-${skillIndex}-name`}
                    >
                      <div className="flex items-center justify-between">
                        <h4
                          id={`skill-${categoryIndex}-${skillIndex}-name`}
                          className="text-base sm:text-lg font-semibold text-gray-900"
                        >
                          {skill.name}
                        </h4>
                        <span
                          className={`text-sm font-medium ${colorClasses.text}`}
                          aria-label={`숙련도 ${skill.level}퍼센트`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="w-full bg-white rounded-full h-2 shadow-inner"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-labelledby={`skill-${categoryIndex}-${skillIndex}-name`}
                      >
                        <div
                          className={`h-2 rounded-full ${colorClasses.progress} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div
              className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200"
              role="group"
              aria-label="경력 통계"
            >
              <div
                className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2"
                aria-label={getCareer()}
              >
                {getCareer()}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">경력</div>
            </div>
            <div
              className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200"
              role="group"
              aria-label="기술 스택 통계"
            >
              <div
                className="text-2xl sm:text-3xl font-bold text-green-600 mb-2"
                aria-label="20개 이상"
              >
                20+
              </div>
              <div className="text-xs sm:text-sm text-gray-600">기술 스택</div>
            </div>
            <div
              className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200"
              role="group"
              aria-label="프로젝트 통계"
            >
              <div
                className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2"
                aria-label="10개 이상"
              >
                10+
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                완성 프로젝트
              </div>
            </div>
            <div
              className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200"
              role="group"
              aria-label="협업 통계"
            >
              <div
                className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2"
                aria-label="50명 이상"
              >
                50+
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                협업 개발자
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
