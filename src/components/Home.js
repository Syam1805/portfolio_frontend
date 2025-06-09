import { useEffect, useRef, useState } from 'react';

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Java Developer",
  "Cyber Security Enthusiast",
  "Java Developer",
  "React.js Developer",
  "Spring Boot Developer",
  "Software Engineer",
  "Web Developer",
  "Software Developer",

];

function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);
  const typingTimeout = useRef(null);

  useEffect(() => {
    if (typing) {
      if (displayedText.length < roles[currentRole].length) {
        typingTimeout.current = setTimeout(() => {
          setDisplayedText(roles[currentRole].slice(0, displayedText.length + 1));
        }, 80);
      } else {
        typingTimeout.current = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      typingTimeout.current = setTimeout(() => {
        setDisplayedText('');
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }, 400);
    }
    return () => clearTimeout(typingTimeout.current);
  }, [displayedText, typing, currentRole]);

  return (
    <section id="home" className="container mx-auto p-8 pt-24 flex flex-col md:flex-row items-center justify-center min-h-[60vh]">
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="/images/img_syam.jpeg"
          alt="Syam Panga"
          className="w-60 h-60 object-cover rounded-full shadow-lg border-4 border-blue-600"
        />
      </div>
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg text-gray-700 mb-4">
          Hi, I'm Syam Panga, a passionate Full Stack Developer with expertise in Java, React.js, and Spring Boot.
          Explore my projects and skills to learn more about my work.
        </p>
        <div className="mt-2 h-10">
          <span className="text-red-600 text-2xl font-semibold animate-pulse">
            {displayedText}
            <span className="border-r-2 border-red-600 ml-1 animate-blink"></span>
          </span>
        </div>
      </div>
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-end infinite;
          }
        `}
      </style>
    </section>
  );
}

export default Home;