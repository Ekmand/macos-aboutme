import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface AboutMeProps {
  isDark: boolean;
}

const AboutMe: React.FC<AboutMeProps> = ({ isDark }) => {
  return (
    <div className={`space-y-6 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
      <div className="flex items-center space-x-6">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQHMpCQQhAMmnw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714659423367?e=2147483647&v=beta&t=pTZVK1rO8PLGavBGVUb3Fw3df_QC1VmsrkAir-MLfxI"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold">Ethan Dutson</h1>
          <p className="text-lg opacity-80">Designer/Apple user</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/ekmand" className="hover:text-blue-500"><Github /></a>
            <a href="https://linkedin.com/in/ekmand" className="hover:text-blue-500"><Linkedin /></a>
            <a href="#" className="hover:text-blue-500"><Twitter /></a>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">About Me</h2>
        <p className="leading-relaxed">
          Hey! I'm Ethan, a designer of many great things and a developer of great
          websites like no-balls.com, seemslegit.email, oswars.org, serverse.org, and 
          many more. And a tech repair guy. 
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
            <span
              key={skill}
              className={`px-3 py-1 rounded-full text-sm ${
                isDark ? 'bg-gray-700' : 'bg-gray-200'
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;