import { Heart, Award, Clock, Star, User2, CalendarCheck, Phone, CheckCircle2 } from 'lucide-react';
// import heroImg from "../assets/images/hero/1.jpg";
interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-white to-pink-50">
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center"> */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            
            <div className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
              Welcome to Children's Gastrolvier Center
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Your Partner in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-pink-600">
                Gut & Liver Care
              </span>{" "}
              for Children!
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Expert pediatric gastroenterology, hepatology, and nutrition
              services with compassionate care in Dhaka's leading children's
              health center.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <User2 className="w-6 h-6 text-green-600" />
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  18+ Years Experience
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-pink-600" />
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  BMDC Certified
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-blue-600" />
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  Flexible Hours
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-6 h-6 text-red-500" />
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  Child-Friendly Care
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-base hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <CalendarCheck className="w-5 h-5 me-2" />
                Request Appointment
              </button>
              <button
                onClick={() => window.open('tel:+8801924365934', '_self')}
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-green-600 text-green-600 font-semibold text-base bg-white hover:bg-green-50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Phone className="w-5 h-5 me-2" />
                Call Now
              </button>
            </div>
          </div>

      
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-pink-200 rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:rotate-1 transition-transform duration-300">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Meet Dr. Rafia Rashid
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    BMDC Certified pediatric gastroenterologist with over 18
                    years of experience providing compassionate, evidence-based
                    care for children with digestive and liver conditions.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Our Mission
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    To provide exceptional, child-friendly gastroenterology
                    care that helps every young patient thrive. We believe in
                    treating the whole child, not just symptoms, with kindness
                    and expertise.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="text-3xl font-bold text-green-600">18+</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-pink-50 rounded-xl p-4">
                    <div className="text-3xl font-bold text-pink-600">2K+</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Happy Patients
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="text-3xl font-bold text-green-600">98%</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Satisfaction Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* </div>
      </div> */}
    </div>
  );
};

export default Hero;
