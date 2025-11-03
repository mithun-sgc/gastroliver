import {
  GraduationCap,
  BadgeCheck,
  Building2 as Hospital,
  UserRound,
  CalendarCheck,
  CheckCircle,
  Quote,
  BookOpenCheck,
  Stethoscope,
  Microscope,
  HeartPulse,
  Apple,
  Utensils,
  Award,
  Users,
  Globe,
  BookText,
  Brain,
} from "lucide-react";

import doctorImage from "../assets/images/doctor/13.jpg";

const DoctorSection = () => {
  const qualifications = [
    "MBBS, DCH, FCPS (Pediatrics)",
    "Pediatric Gastroenterology",
    "Hepatology Specialist",
    "Clinical Nutrition Expert",
  ];

  const education = [
    {
      icon: GraduationCap,
      title: "Fellowship - Pediatric Gastroenterology",
      institution: "Bangabandhu Sheikh Mujib Medical University (BSMMU)",
      year: "2012 - 2015",
      desc: "Specialized training in pediatric gastroenterology, hepatology, and nutrition. Completed advanced pediatric endoscopy and liver disease management.",
    },
    {
      icon: UserRound,
      title: "Residency - Pediatrics",
      institution: "Dhaka Shishu Hospital",
      year: "2007 - 2011",
      desc: "Comprehensive pediatric residency with experience in child health, emergency medicine, and inpatient care.",
    },
    {
      icon: BookOpenCheck,
      title: "Medical Degree - MBBS",
      institution: "Dhaka Medical College",
      year: "2000 - 2006",
      desc: "Graduated with honors and a strong foundation in medical sciences, clinical skills, and patient care.",
    },
  ];

  const specializations = [
    { icon: Stethoscope, title: "Inflammatory Bowel Disease", desc: "Expert management of Crohn's disease and ulcerative colitis in children" },
    { icon: HeartPulse, title: "Liver Diseases", desc: "Comprehensive care for pediatric hepatitis, fatty liver, and metabolic disorders" },
    { icon: Utensils, title: "Nutrition & Growth", desc: "Nutritional assessment and management for optimal child development" },
    { icon: Apple, title: "Celiac Disease", desc: "Diagnosis and management of gluten-related disorders" },
    { icon: Brain, title: "GERD & Reflux", desc: "Treatment of gastroesophageal reflux disease in infants and children" },
    { icon: Microscope, title: "Endoscopy", desc: "Pediatric upper and lower endoscopy with child-sized equipment" },
  ];

  const certifications = [
    { icon: Award, title: "Board Certification", desc: "Bangladesh College of Physicians & Surgeons (BCPS)" },
    { icon: CheckCircle, title: "Subspecialty Certification", desc: "Pediatric Gastroenterology" },
    { icon: Users, title: "Professional Member", desc: "Bangladesh Society of Pediatric Gastroenterology & Nutrition" },
    { icon: Globe, title: "International Member", desc: "World Organization of Pediatric Gastroenterology" },
    { icon: Award, title: "Clinical Excellence", desc: "Recognized for outstanding patient care and teaching" },
    { icon: BookText, title: "Research Publications", desc: "Multiple peer-reviewed international publications" },
  ];

  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-pink-50">
      {/* Hero / Intro Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column - Doctor Image */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="bg-green-50 p-6 rounded-2xl shadow-md relative">
              <Quote className="absolute top-4 left-4 text-green-400 w-8 h-8 opacity-30" />
              <h3 className="text-xl font-bold text-green-700 mb-4">My Philosophy</h3>
              <blockquote className="text-gray-700 italic mb-4">
                “Every child deserves compassionate, expert care delivered in a comfortable environment. 
                I believe in treating not just the condition, but the whole child, working closely with families 
                to achieve the best possible outcomes.”
              </blockquote>
              <div className="text-right">
                <p className="font-bold text-gray-900">- Dr. Rafia Rashid</p>
                <p className="text-sm text-gray-600">Pediatric Gastroenterologist</p>
              </div>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="w-full lg:w-1/2">
            <div className="mb-4 inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              <UserRound className="w-4 h-4 mr-2" />
              Meet Our Founder
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">Dr. Rafia Rashid</h2>
            <p className="text-xl text-gray-600 mb-4">
              Founder & Lead Pediatric Gastroenterologist
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Dr. Rafia Rashid is a dedicated pediatrician with over 18 years of
              specialized experience in gastroenterology, hepatology, and
              nutrition. As an Assistant Professor at Bangladesh Shishu Hospital,
              she combines expert patient care with advanced medical procedures,
              teaching, and global research contributions.
            </p>

            <div className="mb-8">
              <h6 className="text-lg font-semibold text-gray-900 mb-3">Key Qualifications:</h6>
              <div className="grid sm:grid-cols-2 gap-3">
                {qualifications.map((q, i) => (
                  <div key={i} className="flex items-center text-gray-700 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" /> {q}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105"
              >
                <UserRound className="w-5 h-5 mr-2" />
                View Full Profile
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-700 rounded-full font-semibold hover:bg-green-50 transition-all duration-300"
              >
                <CalendarCheck className="w-5 h-5 mr-2" />
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Doctor */}
      <section id="about" className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            About Dr. Rafia Rashid
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              Dr. <strong>Rafia Rashid</strong> is a highly experienced and compassionate
              pediatric gastroenterologist with over 15 years of dedicated service
              to children's digestive and liver health. With a patient-centered approach,
              she has helped thousands of children and their families navigate
              complex gastrointestinal conditions with care and expertise.
            </p>

            <p>
              Known for her gentle bedside manner, Dr. Rafia believes in making
              healthcare a positive and comfortable experience for both children and
              their parents. Every consultation is thorough, and she ensures that
              families are actively involved in understanding their child’s condition
              and available treatment options.
            </p>

            <p>
              Dr. Rafia continues to stay at the forefront of pediatric gastroenterology
              through ongoing medical education, active participation in research,
              and attendance at national and international conferences. This commitment
              ensures that her patients benefit from the most current and effective
              treatment practices available.
            </p>

            <p>
              Beyond her medical expertise, Dr. Rafia is deeply dedicated to fostering
              trust, empathy, and open communication with every family she meets —
              making her not only a skilled clinician but also a compassionate advocate
              for children’s health and well-being.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Education */}
      <div className="bg-gradient-to-r from-green-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Education & Training
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {education.map((item, i) => (
              <div
                key={i}
                className="flex items-start bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                <item.icon className="w-10 h-10 text-green-600 mr-6 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-green-700 font-medium">{item.institution}</p>
                  <p className="text-gray-500 mb-2">{item.year}</p>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specializations */}
      {/* <div className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Areas of Specialization
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((s, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-green-50 to-pink-50 p-6 rounded-2xl shadow hover:shadow-md transition-all"
              >
                <s.icon className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-700">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Certifications */}
      <div className="bg-gradient-to-br from-pink-50 via-white to-green-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Certifications & Professional Memberships
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((c, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <c.icon className="w-10 h-10 text-green-600 mb-3" />
                <h4 className="text-xl font-bold text-gray-900 mb-1">{c.title}</h4>
                <p className="text-gray-700">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
