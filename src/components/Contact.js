// import { useState, useRef, useEffect } from 'react';
// import axios from 'axios';

// function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [status, setStatus] = useState('');
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     section.classList.add('opacity-0', 'translate-y-8');
//     setTimeout(() => {
//       section.classList.remove('opacity-0', 'translate-y-8');
//       section.classList.add('opacity-100', 'translate-y-0');
//     }, 100);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:1805/api/contact', formData);
//       setStatus('Message sent successfully!');
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       setStatus('Error sending message. Please try again.');
//     }
//   };

//   return (
//     <section
//       id="contact"
//       ref={sectionRef}
//       className="container mx-auto p-8 pt-20 transition-all duration-1000 ease-out opacity-0 translate-y-8"
//     >
//       <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 animate-pulse">Contact Me</h2>
//       <div className="max-w-md mx-auto bg-gradient-to-r from-blue-400 to-blue-200 rounded-xl shadow-lg p-8 text-white">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label className="block text-white font-semibold mb-2">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 rounded bg-white text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-white font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 rounded bg-white text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-white font-semibold mb-2">Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full p-3 rounded bg-white text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
//               rows="5"
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-white text-blue-700 font-bold py-3 rounded hover:bg-blue-700 hover:text-white transition-colors duration-300 shadow-md"
//           >
//             Send Message
//           </button>
//         </form>
//         {status && (
//           <p className={`mt-6 text-center font-semibold transition-all duration-500 ${status.includes('successfully') ? 'text-green-200' : 'text-red-200'}`}>
//             {status}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Contact;

import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    section.classList.add('opacity-0', 'translate-y-8');
    setTimeout(() => {
      section.classList.remove('opacity-0', 'translate-y-8');
      section.classList.add('opacity-100', 'translate-y-0');
    }, 100);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:1805/api/contact', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus(error.response?.data || 'Error sending message. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="container mx-auto p-8 pt-20 transition-all duration-1000 ease-out opacity-0 translate-y-8"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 animate-pulse">Contact Me</h2>
      <div className="max-w-md mx-auto bg-gradient-to-r from-blue-400 to-blue-200 rounded-xl shadow-lg p-8 text-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-blue-700 font-bold py-3 rounded hover:bg-blue-700 hover:text-white transition-colors duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
        {status && (
          <p className={`mt-6 text-center font-semibold transition-all duration-500 ${status.includes('successfully') ? 'text-green-200' : 'text-red-200'}`}>
            {status}
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;