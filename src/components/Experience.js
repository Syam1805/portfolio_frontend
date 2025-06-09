import { useEffect, useRef } from 'react';

function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="container mx-auto p-8 pt-20 transition-all duration-1000 ease-out opacity-0 translate-y-8"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 animate-pulse">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform duration-500">
          <h3 className="text-2xl font-semibold mb-2">Full Stack Java Developer</h3>
          <p className="mb-2 font-medium">Bluepal Solution</p>
          <p className="mb-2 text-sm">2023 - Present</p>
          <ul className="list-disc list-inside text-base pl-2">
            <li>Developing scalable web applications using Java, Spring Boot, and React.</li>
            <li>Collaborating with cross-functional teams to deliver high-quality solutions.</li>
            <li>Implementing REST APIs and integrating with databases.</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-gray-800 hover:shadow-2xl transition-shadow duration-500">
          <h3 className="text-2xl font-semibold mb-2">Full Stack Developer</h3>
          <p className="mb-2 font-medium">XYZ Company</p>
          <p className="mb-2 text-sm">2022 - 2023</p>
          <ul className="list-disc list-inside text-base pl-2">
            <li>Worked on end-to-end development of web applications.</li>
            <li>Maintained and enhanced existing codebase.</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-gray-800 hover:shadow-2xl transition-shadow duration-500">
          <h3 className="text-2xl font-semibold mb-2">Intern</h3>
          <p className="mb-2 font-medium">ABC Solutions</p>
          <p className="mb-2 text-sm">2021 - 2022</p>
          <ul className="list-disc list-inside text-base pl-2">
            <li>Assisted in software development and testing.</li>
            <li>Learned best practices in agile environments.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;