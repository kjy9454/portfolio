import React from "react";
import { Smartphone, Globe, Database, Zap, Users, Award } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/data";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            주요 프로젝트
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            다양한 환경에서 기획부터 운영까지 전 과정을 경험하며 완성한
            프로젝트들입니다.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg border border-blue-200 overflow-hidden hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="lg:flex">
                <div className="lg:w-1/3">
                  <div className="h-64 lg:h-full relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      width={800}
                      height={600}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-20`}
                    ></div>
                  </div>
                </div>

                <div className="lg:w-2/3 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm`}
                        >
                          {project.type.includes("앱") ? (
                            <Smartphone className="w-5 h-5" />
                          ) : (
                            <Globe className="w-5 h-5" />
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <span className="font-medium">{project.company}</span>
                        <span>•</span>
                        <span>{project.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                        <Award className="w-4 h-4" />
                        {project.type}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-600" />
                      주요 성과
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.achievements.map(
                        (achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Database className="w-4 h-4 text-gray-600" />
                      기술 스택
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-600" />
                      핵심 키워드
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className={`px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium shadow-sm`}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-lg border border-gray-200">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 font-medium">
              총 4개의 주요 프로젝트 완성
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
