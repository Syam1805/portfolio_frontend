import { useEffect, useRef } from 'react';

function Education() {
  const education = [
    {
      degree: "B.Tech (Computer Science & Engineering)",
      institute: "CT University, Punjab",
      year: 2020,
      cgpa: "7.2"
    },
    {
      degree: "Intermediate (M.P.C)",
      institute: "Sri Chaithanya Junior College, Visakhapatnam",
      year: 2018,
      cgpa: "8.7"
    },
    {
      degree: "S.S.C",
      institute: "Bradlaugh School",
      year: 2018,
      cgpa: "9.2"
    }
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
      id="education"
      ref={sectionRef}
      className="container mx-auto p-8 pt-20 transition-all duration-1000 ease-out opacity-0 translate-y-8"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700 animate-pulse">Education</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-lg rounded-xl overflow-hidden bg-white">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
              <th className="border p-3 text-lg">Degree/Examination</th>
              <th className="border p-3 text-lg">School/Institute</th>
              <th className="border p-3 text-lg">Year of Passing</th>
              <th className="border p-3 text-lg">CGPA/Percentage</th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu, index) => (
              <tr
                key={index}
                className={`border transition-all duration-700 ${
                  index % 2 === 0 ? "bg-blue-50" : "bg-white"
                } hover:bg-blue-100 hover:scale-105`}
              >
                <td className="border p-3 font-semibold">{edu.degree}</td>
                <td className="border p-3">{edu.institute}</td>
                <td className="border p-3">{edu.year}</td>
                <td className="border p-3">{edu.cgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Education;