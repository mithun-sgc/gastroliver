// import { useState } from 'react';
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   Send,
//   CheckCircle,
// } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({ name: '', email: '', phone: '', message: '' });
//     }, 3000);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="py-20 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
//             Get In Touch
//           </div>
//           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//             Contact{' '}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-pink-600">
//               Our Clinic
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             We're here to answer your questions and schedule appointments. Reach
//             out today to give your child the care they deserve.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                 Contact Information
//               </h3>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-white p-3 rounded-xl shadow-sm">
//                     <MapPin className="w-6 h-6 text-green-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900 mb-1">
//                       Clinic Address
//                     </h4>
//                     <p className="text-gray-700">
//                       123 Medical Center Drive
//                       <br />
//                       Suite 456
//                       <br />
//                       Your City, State 12345
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="bg-white p-3 rounded-xl shadow-sm">
//                     <Phone className="w-6 h-6 text-green-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
//                     <p className="text-gray-700">(555) 123-4567</p>
//                     <p className="text-sm text-gray-600 mt-1">
//                       Call for appointments
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="bg-white p-3 rounded-xl shadow-sm">
//                     <Mail className="w-6 h-6 text-green-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
//                     <p className="text-gray-700">info@childrensgastro.com</p>
//                     <p className="text-sm text-gray-600 mt-1">
//                       We'll respond within 24 hours
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="bg-white p-3 rounded-xl shadow-sm">
//                     <Clock className="w-6 h-6 text-green-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900 mb-1">
//                       Office Hours
//                     </h4>
//                     <div className="text-gray-700 space-y-1">
//                       <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
//                       <p>Saturday: 9:00 AM - 1:00 PM</p>
//                       <p>Sunday: Closed</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-100 rounded-2xl overflow-hidden h-64">
//               <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-200 to-pink-200">
//                 <div className="text-center">
//                   <MapPin className="w-16 h-16 text-white mx-auto mb-2" />
//                   <p className="text-gray-700 font-medium">
//                     Google Maps Integration
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Add your actual location coordinates
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-xl">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">
//               Send Us a Message
//             </h3>
//             {isSubmitted ? (
//               <div className="flex flex-col items-center justify-center py-12">
//                 <div className="bg-green-100 p-4 rounded-full mb-4">
//                   <CheckCircle className="w-16 h-16 text-green-600" />
//                 </div>
//                 <h4 className="text-2xl font-bold text-gray-900 mb-2">
//                   Message Sent!
//                 </h4>
//                 <p className="text-gray-600 text-center">
//                   Thank you for contacting us. We'll get back to you soon.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-semibold text-gray-700 mb-2"
//                   >
//                     Parent/Guardian Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors outline-none"
//                     placeholder="Your full name"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-semibold text-gray-700 mb-2"
//                   >
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors outline-none"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="block text-sm font-semibold text-gray-700 mb-2"
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors outline-none"
//                     placeholder="(555) 123-4567"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-semibold text-gray-700 mb-2"
//                   >
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors outline-none resize-none"
//                     placeholder="Tell us about your child's needs or any questions you have..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
//                 >
//                   <span>Send Message</span>
//                   <Send className="w-5 h-5" />
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-pink-600">
              Our Clinic
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to answer your questions and schedule appointments. Reach
            out today to give your child the care they deserve.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Clinic Address
                    </h4>
                    <p className="text-gray-700">
                      2/A, 158 Lake Circus
                      <br />
                      Kalabagan
                      <br />
                      Dhaka 1205, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-700">(+880) 1924 365 934</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Call for appointments
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">hello@childrensgastroliver.org</p>
                    <p className="text-sm text-gray-600 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Office Hours
                    </h4>
                    <div className="text-gray-700 space-y-1">
                      {/* <p>Monday - Friday: 9:00 AM - 5:00 PM</p> */}
                      <p>Saturday - Thursday: 5:00 PM - 8:00 PM</p>
                      {/* <p>Saturday: 9:00 AM - 1:00 PM</p> */}
                      <p>Friday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Card */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 flex items-start space-x-4 shadow-md border border-red-200">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-red-700 mb-2">
                  In Case of Emergency
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  If your child is experiencing a medical emergency, please call{' '}
                  <span className="font-semibold text-red-600">999</span> or visit
                  your nearest emergency room immediately.
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            {/* <div className="bg-gray-100 rounded-2xl overflow-hidden h-64 shadow-lg"> */}
      {/* Google Map Embed */}
              {/* <iframe
                title="Children's Gastroliver Center Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902257352946!2d89.0165675746375!3d25.744860883625164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e327adbb55bfa5%3A0xb4f226f1a1eb8dc!2sChildren&#39;s%20Gastroliver%20Center!5e0!3m2!1sen!2sbd!4v1730480400000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
                  

              {/* Fallback overlay (if map fails to load) */}
              {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-200 to-pink-200 text-center text-gray-700">
                <div>
                  <MapPin className="w-16 h-16 text-white mx-auto mb-2" />
                  <p className="font-medium">Google Maps Integration</p>
                  <p className="text-sm text-gray-600">
                    Add your actual location coordinates
                  </p>
                </div>
              </div> */}
            {/* </div> */}
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-xl">
              <iframe
                      title="Children's Gastroliver Center Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9276053857257!2d90.3766176761932!3d23.749960878670766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8adf60925f5%3A0xfbb2615818351a39!2sSinger%20Beko!5e0!3m2!1sen!2sbd!4v1762078379799!5m2!1sen!2sbd"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
            {/* <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <CheckCircle className="w-16 h-16 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-600 text-center">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors outline-none resize-none"
                    placeholder="Tell us about your child's needs or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
