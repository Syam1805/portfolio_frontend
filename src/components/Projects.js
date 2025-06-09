import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:1805/api/projects')
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching projects. Please try again later.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      section.classList.add('opacity-0', 'translate-y-8');
      setTimeout(() => {
        section.classList.remove('opacity-0', 'translate-y-8');
        section.classList.add('opacity-100', 'translate-y-0');
      }, 100);
    }
  }, [loading, error]);

  if (loading) return <section id="projects" className="container mx-auto p-8 pt-20 text-center">Loading...</section>;
  if (error) return <section id="projects" className="container mx-auto p-8 pt-20 text-center text-red-600">{error}</section>;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="container mx-auto p-8 pt-20 transition-all duration-1000 ease-out opacity-0 translate-y-8"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 animate-pulse">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-gradient-to-r from-blue-400 to-blue-200 rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform duration-500 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-white/90 mb-4">{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-white text-blue-700 font-semibold px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition-colors duration-300 text-center"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;