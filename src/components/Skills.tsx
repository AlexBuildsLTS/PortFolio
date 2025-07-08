// src/components/Skills.tsx
import { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem
} from 'chart.js';
import { CheckCircle } from 'lucide-react';
import { Tooltip as MuiTooltip } from '@mui/material';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface Skill {
  name: string;
  level: number;
  certified?: boolean;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const categorizedSkills: SkillCategory[] = [
   {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', level: 95, certified: true },
      { name: 'JavaScript', level: 88, certified: true },
      { name: 'TypeScript', level: 75 },
      { name: 'Kotlin', level: 65 },
    ],
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML', level: 85, certified: true },
      { name: 'CSS', level: 80, certified: true },
      { name: 'Bootstrap', level: 75, certified: true },
      { name: 'React', level: 90, certified: true },
      { name: 'React Native', level: 70 },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'JavaEE', level: 70, certified: true },
      { name: 'Spring', level: 85, certified: true },
      { name: 'Spring Boot', level: 92, certified: true },
      { name: 'Spring Data JPA', level: 88, certified: true },
      { name: 'RESTful API', level: 90, certified: true },
      { name: 'Spring AI', level: 60, certified: true },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'SQL and RDBMS', level: 85, certified: true },
      { name: 'MySQL', level: 80, certified: true },
      { name: 'H2', level: 78, certified: true },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Prisma ORM', level: 70 },
    ],
  },
  {
    category: 'IDEs and Tools',
    skills: [
      { name: 'IntelliJ IDEA', level: 95, certified: true },
      { name: 'Visual Studio Code', level: 90, certified: true },
      { name: 'Postman', level: 88, certified: true },
      { name: 'Git VCS', level: 92, certified: true },
      { name: 'Github', level: 94, certified: true },
      { name: 'VMware', level: 90 },
      { name: 'Oracle VM', level: 85 },
    ],
  },
  {
    category: 'Operating Systems',
    skills: [
      { name: 'Ubuntu', level: 85 },
      { name: 'Kubuntu', level: 80 },
    ],
  },
  {
    category: 'Designs and Principles',
    skills: [
      { name: 'OOP', level: 90, certified: true },
      { name: 'SOLID', level: 85, certified: true },
      { name: 'Design Patterns', level: 80, certified: true },
      { name: 'Class & ER Diagrams', level: 88, certified: true },
    ],
  },
   {
    category: 'AI & Development',
    skills: [
      { name: 'Artificial Intelligence', level: 65 },
      { name: 'Unit Testing', level: 85 },
    ],
  },
];

const allSkills: Skill[] = categorizedSkills.flatMap(cat => cat.skills);

const data = {
  labels: allSkills.map(skill => skill.name),
  datasets: [
    {
      label: 'My Proficiency',
      data: allSkills.map(skill => skill.level),
      backgroundColor: 'rgba(34, 197, 94, 0.4)',
      borderColor: 'rgba(34, 197, 94, 1)',
      pointBackgroundColor: allSkills.map(skill => skill.certified ? 'rgba(34, 197, 94, 1)' : 'rgba(34, 197, 94, 1)'),
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: allSkills.map(skill => skill.certified ? 'rgba(16, 185, 84, 1)' : 'rgba(34, 197, 94, 1)'),
    },
  ],
};

const options: ChartOptions<'radar'> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      angleLines: {
        color: 'hsl(var(--color-text) / 0.5)',
      },
      grid: {
        color: 'hsl(var(--color-text) / 0.5)',
      },
      pointLabels: {
        color: 'hsl(var(--color-text))',
        font: {
            size: 12,
        },
         callback: function(label: string | number) {
             const skillName = label.toString();
             const skill = allSkills.find(s => s.name === skillName);
             if (skill?.certified) {
                 return '✓ ' + label;
             }
             return label;
         }
      },
      suggestedMin: 0,
      suggestedMax: 100,
      ticks: {
          display: false,
          stepSize: 25,
          color: 'hsl(var(--color-text) / 0.8)'
      }
    },
  },
  plugins: {
    legend: {
      labels: {
        color: 'hsl(var(--color-text))',
      },
    },
    tooltip: {
        callbacks: {
            label: function(context: TooltipItem<'radar'>) {
                let label = context.dataset.label || '';
                if (label) {
                    label += ': ';
                }
                const skillName = context.chart.data.labels?.[context.dataIndex] as string;
                const skill = allSkills.find(s => s.name === skillName);

                label += context.raw + '%';

                if (skill?.certified) {
                    label += ' (Verified)';
                }
                return label;
            },
            labelTextColor: function(context: TooltipItem<'radar'>) {
                 const skillName = context.chart.data.labels?.[context.dataIndex] as string;
                 const skill = allSkills.find(s => s.name === skillName);
                 return skill?.certified ? 'rgba(34, 197, 94, 1)' : context.dataset.borderColor as string;
            },
        }
    }
  },
};


export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
   const chartHeight = 600;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills-radar-section');
    if (element) observer.observe(element);

    return () => {
        if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-accent">
          Skills Proficiency (Radar Chart)
        </h2>

        <div
          id="skills-radar-section"
          className={`w-full max-w-6xl mx-auto ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <Radar data={data} options={options} height={chartHeight} />
        </div>

         <div className="w-full max-w-6xl mx-auto mt-12">
           <h3 className="mb-8 text-2xl font-semibold text-center text-accent">
             Skill Details
           </h3>
           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
               {categorizedSkills.map(cat => (
                   <div
                     key={cat.category}
                     className="p-6 transition-shadow rounded-lg shadow-md bg-primary hover:shadow-accent/20"
                   >
                     <h4 className="pb-2 mb-4 text-xl font-medium border-b border-gray-700 text-accent">
                       {cat.category}
                     </h4>
                     <ul className="space-y-3">
                         {cat.skills.map(skill => (
                             <li key={skill.name} className="flex items-center justify-between">
                                 <span className="text-text">
                                     {skill.name}
                                 </span>
                                 <div className="flex items-center">
                                     {skill.certified && (
                                        <span className="ml-2 text-accent">
                                          <MuiTooltip title="Verified Skill">
                                            <CheckCircle size={20} className="text-current" />
                                          </MuiTooltip>
                                        </span>
                                      )}
                                 </div>
                             </li>
                         ))}
                     </ul>
                   </div>
               ))}
           </div>
         </div>
      </div>
    </section>
  );
}
