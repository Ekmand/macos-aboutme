import React from 'react';

interface PortfolioProps {
  isDark: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ isDark }) => {
  const projects = [
    {
      title: 'Project Alpha',
      description: 'A modern e-commerce platform built with React and Node.js',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Project Beta',
      description: 'Real-time chat application with WebSocket integration',
      image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&w=500&q=80',
      tags: ['WebSocket', 'Express', 'Redis']
    },
    {
      title: 'Project Gamma',
      description: 'AI-powered data visualization dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80',
      tags: ['Python', 'TensorFlow', 'D3.js']
    }
  ];

  return (
    <div className={`space-y-8 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-lg ${
              isDark ? 'bg-gray-700' : 'bg-white'
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 rounded-full text-xs ${
                      isDark ? 'bg-gray-600' : 'bg-gray-200'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;