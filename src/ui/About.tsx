import React from "react";
import { Code, Users, Lightbulb, Target } from "lucide-react";
import { getCareer } from "@/lib/data";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "기술적 전문성",
      description: "React/React Native 기반 프로젝트 전 주기 경험",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "협업 리더십",
      description: "20명 이상 개발자와의 대규모 협업 경험",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "문제 해결",
      description: "복잡한 기술적 문제를 창의적으로 해결",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "사용자 중심",
      description: "UX와 성능 최적화를 통한 사용자 경험 개선",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-white"
      aria-labelledby="about-title"
      role="region"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="about-title"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            소개
          </h2>
          <div
            className="w-16 h-1 bg-blue-600 mx-auto rounded-full"
            aria-hidden="true"
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              {`${getCareer()}간의 프론트엔드 개발 여정`}
            </h3>
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                기능 구현을 넘어서 <strong>서비스 구조의 일관성</strong>,{" "}
                <strong>사용자 경험</strong>,<strong>협업 효율성</strong>까지
                통합적으로 고민하며 실질적인 가치를 만드는 개발을 추구합니다.
              </p>
              <p>
                {
                  "'Exercite'에서는 기술 스택 선정부터 구조 설계, 운영 자동화까지 전 주기를 책임지며 사용자 중심의 앱을 완성했습니다."
                }
              </p>
              <p>
                {
                  "'배달공제회'에서는 20명 이상의 프론트엔드 개발자와 협업하며 공통 컴포넌트 설계 및 문제 해결로 프로젝트 품질 향상에 기여했습니다."
                }
              </p>
              <p>
                {
                  "'코어뱅크' 프로젝트에서는 복잡한 조직 구조 속에서도 자발적으로 데모 프로젝트를 기획하고 리딩하며, 스타트업과 같은 민첩한 문제 해결 방식을 실현했습니다."
                }
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-gray-50 rounded-xl hover:shadow-lg focus-within:shadow-lg transition-shadow duration-300"
                role="article"
                aria-labelledby={`highlight-${index}-title`}
              >
                <div className="mb-4" aria-hidden="true">
                  {item.icon}
                </div>
                <h4
                  id={`highlight-${index}-title`}
                  className="text-base sm:text-lg font-semibold text-gray-900 mb-2"
                >
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
