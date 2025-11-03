import { Stethoscope, Heart, FacebookIcon, Linkedin, YoutubeIcon } from 'lucide-react';
import logoIcon from '../assets/images/logo/logo-icon.png';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-xl"> */}
                {/* <Stethoscope className="w-6 h-6 text-white" /> */}
                <img src={logoIcon} alt="Logo" style={{ height: "60px"}} />
              {/* </div> */}
              <div>
                <h3 className="text-xl font-bold text-green-700">
                  Children's GastroLiver Clinic
                </h3>
                <p className="text-sm text-gray-600">
                  Pediatric Digestive & Liver Care
                </p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dedicated to providing compassionate, expert care for children
              with digestive and liver conditions. Your child's health and
              comfort are our top priorities.
            </p>
            <div className="flex items-center space-x-2 text-gray-700">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-500 fill-current" />
              <span>for healthier, happier children</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <span className="font-semibold">Phone:</span>
                <br />
                (+880) 1924 365 934
              </li>
              <li>
                <span className="font-semibold">Email:</span>
                <br />
                hello@childrensgastroliver.org
              </li>
              <li>
                <span className="font-semibold">Address:</span>
                <br />
                2A, 158 Lake Circus, Kalabagan, Dhaka
              </li>
              <li>
                <span className="font-semibold">Hours:</span>
                <br />
                Saturday - Thursday | 5 - 8 PM
              </li>
            </ul>
          </div> */}
          <div className="flex flex-col space-x-6 text-sm">
              <button
                onClick={() =>
                  openLink("https://www.facebook.com/profile.php?id=61578240487495")
                }
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-200"
              >
                <FacebookIcon className="w-4 h-4" />
                <span>Facebook</span>
              </button>

              <button
                onClick={() =>
                  openLink(
                    "https://www.linkedin.com/company/children-s-gastroliver-center/about/"
                  )
                }
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </button>

              <button
                onClick={() =>
                  openLink("https://www.youtube.com/@ChildrensGastroliverCenter")
                }
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-200"
              >
                <YoutubeIcon className="w-4 h-4" />
                <span>YouTube</span>
              </button>

              <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onNavigate('home')}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('blog')}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
        </div>

        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © {currentYear} Children's GastroLiver Clinic. All rights
              reserved.
            </p>
            

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




