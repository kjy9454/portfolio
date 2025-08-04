import React from "react";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { MY_PHONE, MY_EMAIL } from "@/lib/consts";
import { getCareer } from "@/lib/data";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "이메일",
      value: "kjy9454@naver.com",
      href: `"mailto:${MY_EMAIL}`,
      color: "blue",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "전화번호",
      value: "+82 10-2046-5225",
      href: `"tel:${MY_PHONE}`,
      color: "green",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "위치",
      value: "대한민국, 서울",
      href: null,
      color: "purple",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "경력",
      value: `${getCareer()} (2021 - 현재)`,
      href: null,
      color: "orange",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-white"
      aria-labelledby="contact-title"
      role="region"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="contact-title"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            연락처
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}

          <div>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group"
                  role="group"
                  aria-labelledby={`contact-${index}-label`}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-blue-600`}
                      aria-label={`${info.label}: ${info.value}`}
                    >
                      <div className="flex-shrink-0" aria-hidden="true">
                        {info.icon}
                      </div>
                      <div>
                        <div
                          id={`contact-${index}-label`}
                          className="text-sm font-medium text-gray-600"
                        >
                          {info.label}
                        </div>
                        <div className="text-base sm:text-lg font-semibold text-gray-900">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-blue-600`}
                    >
                      <div className="flex-shrink-0" aria-hidden="true">
                        {info.icon}
                      </div>
                      <div>
                        <div
                          id={`contact-${index}-label`}
                          className="text-sm font-medium text-gray-600"
                        >
                          {info.label}
                        </div>
                        <div className="text-base sm:text-lg font-semibold text-gray-900">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
