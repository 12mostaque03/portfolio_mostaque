
import { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Web Design', level: 95 },
    { name: 'UI/UX Design', level: 90 },
    { name: 'React/Next.js', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'CSS/Tailwind', level: 92 },
    { name: 'Figma/Adobe XD', level: 87 },
  ];

  const tools = [
    { name: 'Figma', icon: '🎨' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind', icon: '🎯' },
    { name: 'Next.js', icon: '🚀' },
    { name: 'Framer', icon: '🎬' },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and design principles that bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills Progress Bars */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className={`skill-progress ${isVisible ? 'w-full' : 'w-0'}`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="animate-scale-in">
            <h3 className="text-2xl font-semibold mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={tool.name} 
                  className="glass-card text-center hover:scale-105 transition-all duration-300 hover:bg-white/10 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <div className="text-gray-300">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
