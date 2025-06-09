import { useEffect, useRef } from 'react';

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    section.classList.add('opacity-0', 'translate-y-8');
    setTimeout(() => {
      section.classList.remove('opacity-0', 'translate-y-8');
      section.classList.add('opacity-100', 'translate-y-0');
    }, 100);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="container mx-auto p-8 pt-20 transition-all duration-1000 ease-out opacity-0 translate-y-8"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 animate-pulse">About Me</h2>
      <div className="bg-gradient-to-r from-blue-600 to-blue-200 rounded-xl shadow-lg p-8 text-white text-lg md:w-3/3 mx-auto">
        <p className="mb-4">
          I am a well-organized, energetic, and goal-oriented fresher with a positive attitude, problem-solving, and leadership skills.
          I have a flair for exploring suitable avenues in software development with strong knowledge in Java, frontend development, C, and Oracle.
          My goal is to work in an organization that provides ample opportunities to enhance my skills and contribute to its growth.
        </p>
        <p>
          <strong>Languages Known:</strong> English, Telugu, Hindi
        </p>
      </div>
    </section>
  );
}

export default About;