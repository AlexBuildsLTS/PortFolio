import { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  certified?: boolean;
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  const skills: Skill[] = [
    // Languages
    { name: 'Java', level: 90, category: 'Languages', certified: true },
    { name: 'JavaScript', level: 80, category: 'Languages', certified: true },
    { name: 'TypeScript', level: 70, category: 'Languages', certified: true },
    { name: 'Kotlin', level: 65, category: 'Languages', certified: true },

    // Backend
    { name: 'Spring Boot', level: 85, category: 'Backend', certified: true },
    { name: 'Node.js', level: 75, category: 'Backend', certified: true },
    { name: 'PostgreSQL', level: 80, category: 'Backend', certified: true },
    { name: 'MySQL', level: 75, category: 'Backend', certified: true },
    { name: 'Prisma ORM', level: 70, category: 'Backend', certified: true },

    // Frontend
    { name: 'React', level: 85, category: 'Frontend', certified: true },
    { name: 'React Native', level: 70, category: 'Frontend', certified: true },
    { name: 'HTML/CSS', level: 80, category: 'Frontend', certified: true },

    // Tools & Technologies
    { name: 'Git', level: 85, category: 'Tools', certified: true },
    { name: 'VMware', level: 90, category: 'Tools' },
    { name: 'Oracle VM', level: 85, category: 'Tools' },

    // Operating Systems
    { name: 'Ubuntu', level: 85, category: 'Operating Systems' },
    { name: 'Kubuntu', level: 80, category: 'Operating Systems' },

    // AI & Development
    {
      name: 'Artificial Intelligence',
      level: 65,
      category: 'AI & Development',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const getSkillColor = (level: number) => {
    const hue = (level * 120) / 100;
    return `hsl(${hue}, 100%, 50%)`;
  };

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="py-24">
      <h2 className="section-heading">Skills</h2>
      <div id="skills-section" className="grid gap-12 md:grid-cols-2">
        {categories.map((category) => (
          <div key={category} className="space-y-6">
            <h3 className="mb-4 text-xl font-semibold text-green">
              {category}
            </h3>
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-light-slate">{skill.name}</span>
                      {skill.certified && (
                        <CheckCircle size={16} className="text-green" />
                      )}
                    </div>
                    <span className="text-green">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-navy-lightest">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        backgroundColor: getSkillColor(skill.level),
                      }}
                    />
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}
