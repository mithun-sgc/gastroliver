// import {
//   Activity,
//   Stethoscope,
//   Heart,
//   Apple,
//   FileText,
//   Users,
// } from 'lucide-react';

// const Services = () => {
//   const services = [
//     {
//       icon: Activity,
//       title: 'Digestive Disorders',
//       description:
//         'Comprehensive care for acid reflux, constipation, diarrhea, abdominal pain, and other gastrointestinal issues affecting children.',
//       color: 'from-green-500 to-green-600',
//       bgColor: 'bg-green-50',
//     },
//     {
//       icon: Stethoscope,
//       title: 'Liver Disease Management',
//       description:
//         'Expert diagnosis and treatment of pediatric liver conditions including hepatitis, fatty liver disease, and metabolic disorders.',
//       color: 'from-pink-500 to-pink-600',
//       bgColor: 'bg-pink-50',
//     },
//     {
//       icon: Heart,
//       title: 'Inflammatory Bowel Disease',
//       description:
//         'Specialized care for Crohn\'s disease and ulcerative colitis with personalized treatment plans to help children live comfortably.',
//       color: 'from-green-500 to-green-600',
//       bgColor: 'bg-green-50',
//     },
//     {
//       icon: Apple,
//       title: 'Nutritional Support',
//       description:
//         'Dietary counseling and nutrition therapy for food allergies, malabsorption, growth concerns, and feeding difficulties.',
//       color: 'from-pink-500 to-pink-600',
//       bgColor: 'bg-pink-50',
//     },
//     {
//       icon: FileText,
//       title: 'Endoscopy Procedures',
//       description:
//         'Safe, child-friendly diagnostic procedures including upper endoscopy and colonoscopy performed with care and precision.',
//       color: 'from-green-500 to-green-600',
//       bgColor: 'bg-green-50',
//     },
//     {
//       icon: Users,
//       title: 'Family-Centered Care',
//       description:
//         'Collaborative approach involving parents and caregivers in every step, with education and support throughout treatment.',
//       color: 'from-pink-500 to-pink-600',
//       bgColor: 'bg-pink-50',
//     },
//   ];

//   return (
//     <div className="py-20 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
//             Our Services
//           </div>
//           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//             Comprehensive Pediatric{' '}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-pink-600">
//               GI Care
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Providing specialized gastroenterology and liver care tailored to
//             the unique needs of children and adolescents
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
//               >
//                 <div
//                   className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   <Icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {service.description}
//                 </p>
//                 <div className="mt-6 pt-6 border-t border-gray-100">
//                   <button className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center space-x-2 group">
//                     <span>Learn More</span>
//                     <span className="group-hover:translate-x-1 transition-transform">
//                       →
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-16 bg-gradient-to-br from-green-50 to-pink-50 rounded-3xl p-8 sm:p-12">
//           <div className="text-center max-w-3xl mx-auto">
//             <h3 className="text-3xl font-bold text-gray-900 mb-4">
//               Not Sure Which Service You Need?
//             </h3>
//             <p className="text-lg text-gray-700 mb-8">
//               Every child is unique, and we're here to help you understand your
//               child's digestive health needs. Contact us for a consultation to
//               discuss the best care plan.
//             </p>
//             <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
//               Schedule a Consultation
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;






import {
  Activity,
  Stethoscope,
  Heart,
  Apple,
  FileText,
  Users,
  Syringe,
  ArrowRight
} from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}


const Services = ({onNavigate} : HeroProps) => {
  
  const handleNavClick = (section: string) => {
    onNavigate(section);
    // setIsMobileMenuOpen(false);
  };


  const services = [
    {
      icon: Activity,
      title: 'Digestive Disorders',
      description:
        'Comprehensive care for acid reflux, constipation, diarrhea, abdominal pain, and other gastrointestinal issues affecting children.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Stethoscope,
      title: 'Liver Disease Management',
      description:
        'Expert diagnosis and treatment of pediatric liver conditions including hepatitis, fatty liver disease, and metabolic disorders.',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Heart,
      title: 'Inflammatory Bowel Disease',
      description:
        'Specialized care for Crohn\'s disease and ulcerative colitis with personalized treatment plans to help children live comfortably.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Apple,
      title: 'Nutritional Support',
      description:
        'Dietary counseling and nutrition therapy for food allergies, malabsorption, growth concerns, and feeding difficulties.',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: FileText,
      title: 'Endoscopy Procedures',
      description:
        'Safe, child-friendly diagnostic procedures including upper endoscopy and colonoscopy performed with care and precision.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Users,
      title: 'Family-Centered Care',
      description:
        'Collaborative approach involving parents and caregivers in every step, with education and support throughout treatment.',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Syringe,
      title: "Vaccination",
      description: [
        "Routine immunizations for infants, children & adolescents",
        "Catch-up vaccination plans for missed doses",
        "Expert guidance on vaccine schedules & safety",
      ],
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Pediatric{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-pink-600">
              GI Care
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing specialized gastroenterology and liver care tailored to
            the unique needs of children and adolescents
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                {/* <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center space-x-2 group">
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div> */}
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-green-50 to-pink-50 rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Every child is unique, and we're here to help you understand your
              child's digestive health needs. Contact us for a consultation to
              discuss the best care plan.
            </p>
            <button onClick={() => handleNavClick("contact")} className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

