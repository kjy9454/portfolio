import React from "react";
import { Calendar, MapPin, Users, Code, Zap, Target } from "lucide-react";
import { experiences, getCareer } from "@/lib/data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 bg-gray-50"
      aria-labelledby="experience-title"
      role="region"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="experience-title"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            경력
          </h2>
          <div
            className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"
            aria-hidden="true"
          ></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            {`${getCareer()}간의 프론트엔드 개발 여정을 통해 다양한 환경에서 기술적 전문성과
            협업 능력을 키워왔습니다.`}
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className={`border-blue-200 bg-blue-50 border-l-4 rounded-lg p-4 sm:p-6 lg:p-8 hover:shadow-lg focus-within:shadow-lg transition-shadow duration-300`}
              role="article"
              aria-labelledby={`experience-${index}-title`}
              tabIndex={0}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`p-2 rounded-lg bg-white shadow-sm`}
                      aria-hidden="true"
                    >
                      <Code className={`w-4 h-4 sm:w-5 sm:h-5 text-blue-600`} />
                    </div>
                    <h3
                      id={`experience-${index}-title`}
                      className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900"
                    >
                      {exp.company}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
                    {exp.position}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        aria-hidden="true"
                      />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        aria-hidden="true"
                      />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="lg:text-right mt-2 lg:mt-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-sm">
                    <Target
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      aria-hidden="true"
                    />
                    {exp.project}
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Zap
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-blue-600`}
                    aria-hidden="true"
                  />
                  주요 성과
                </h4>
                <ul className="space-y-2" role="list">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="flex items-start gap-3"
                      role="listitem"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0`}
                        aria-hidden="true"
                      ></div>
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Users
                    className={`w-4 h-4 text-blue-600`}
                    aria-hidden="true"
                  />
                  주요 기술
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 sm:px-3 py-1 bg-white text-gray-700 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200">
            <Calendar className="w-5 h-5 text-blue-600" aria-hidden="true" />
            <span className="text-sm sm:text-base text-gray-700 font-medium">
              {`총 경력: ${getCareer()}`}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
