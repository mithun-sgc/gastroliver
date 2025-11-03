// import React from "react";
import { Stethoscope, Smile, Users, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Stethoscope className="w-8 h-8 text-pink-600" />,
      title: "Expert Care",
      description:
        "Specialized expertise in pediatric gastroenterology and liver conditions.",
    },
    {
      icon: <Smile className="w-8 h-8 text-pink-600" />,
      title: "Child-Friendly",
      description:
        "Welcoming environment designed to comfort children and reduce anxiety.",
    },
    {
      icon: <Users className="w-8 h-8 text-pink-600" />,
      title: "Family-Centered",
      description:
        "Involving parents in every step of diagnosis and treatment planning.",
    },
    {
      icon: <Clock className="w-8 h-8 text-pink-600" />,
      title: "Timely Care",
      description:
        "Flexible appointment scheduling to accommodate your family's needs.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 via-white to-pink-50" id="why-choose-us">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 mx-auto bg-pink-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
