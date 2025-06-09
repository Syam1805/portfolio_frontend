import { useEffect, useRef } from 'react';

function Skills() {
  const skills = [
    "HTML and CSS", "JavaScript", "Core Java", "Advanced Java", "Oracle SQL/PL",
    "Spring Boot & Microservices", "React", "C Language", "Cyber Security",
    "Software Development Lifecycle", "Waterfall & Agile Methodologies", "Software Testing"
  ];

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
      id="skills"
      ref={sectionRef}
      className="container mx-auto p-8 pt-20 transition-all duration-1000 ease-out opacity-0 translate-y-8"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 animate-pulse">Core Competencies</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-gradient-to-r from-blue-400 to-blue-200 text-white p-6 rounded-xl shadow-lg text-center font-semibold text-lg transform hover:scale-105 transition-transform duration-500"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;