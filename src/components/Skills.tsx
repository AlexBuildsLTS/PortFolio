<<<<<<< HEAD
// src/components/Skills.tsx
import React, { useEffect, useState } from 'react'; // React is needed if using JSX without automatic runtime
// Import Radar component and necessary Chart.js elements
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
  TooltipItem, // Import TooltipItem for typing callbacks
  TooltipModel // Import TooltipModel for typing callbacks
} from 'chart.js';
// Using CheckCircle import for the list below the chart
import { CheckCircle } from 'lucide-react';
// Using MUI Tooltip for the list below the chart
import { Tooltip as MuiTooltip } from '@mui/material';
import { title } from 'process';


// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// Interface for a single skill
interface Skill {
  name: string;
  level: number; // Proficiency level 0-100
  certified?: boolean; // Flag for verified skills
}

// Interface for a category of skills
interface SkillCategory {
  category: string;
  skills: Skill[];
}

// Define the categorized skills data
// TODO: IMPORTANT: You MUST review and adjust 'level' values (0-100) based on your academic performance from the diploma.
// Set 'certified: true' for skills verified by your diploma.
// Add/remove/categorize skills as you wish them to appear on the chart and in the list.
const categorizedSkills: SkillCategory[] = [
   {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', level: 95, certified: true },
      { name: 'JavaScript', level: 88, certified: true },
      { name: 'TypeScript', level: 75 }, // Example from your previous list
      { name: 'Kotlin', level: 65 }, // Example
    ],
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML', level: 85, certified: true },
      { name: 'CSS', level: 80, certified: true },
      { name: 'Bootstrap', level: 75, certified: true },
      { name: 'React', level: 90, certified: true },
      { name: 'React Native', level: 70 }, // Example
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
      { name: 'PostgreSQL', level: 85 }, // Example
      { name: 'Prisma ORM', level: 70 }, // Example
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
      { name: 'VMware', level: 90 }, // Example
      { name: 'Oracle VM', level: 85 }, // Example
    ],
  },
  {
    category: 'Operating Systems', // Added from your previous list
    skills: [
      { name: 'Ubuntu', level: 85 }, // Example
      { name: 'Kubuntu', level: 80 }, // Example
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
    category: 'AI & Development', // Added from your previous list
    skills: [
      { name: 'Artificial Intelligence', level: 65 }, // Example
      { name: 'Unit Testing', level: 85 }, // Example
    ],
  },
  // Add any other categories and skills you want to display
];

// Flatten the categorized skills for use in the radar chart data structure
const allSkills: Skill[] = categorizedSkills.flatMap(cat => cat.skills);

// Generate data for the Radar Chart
const data = {
  labels: allSkills.map(skill => skill.name), // Skill names as axes labels
  datasets: [
    {
      label: 'My Proficiency',
      data: allSkills.map(skill => skill.level), // Skill levels as data points
      backgroundColor: 'rgba(34, 197, 94, 0.4)', // Example green with opacity (area color)
      borderColor: 'rgba(34, 197, 94, 1)', // Example green (line color)
      pointBackgroundColor: allSkills.map(skill => skill.certified ? 'orange' : 'rgba(34, 197, 94, 1)'), // Orange point for certified
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: allSkills.map(skill => skill.certified ? 'darkorange' : 'rgba(34, 197, 94, 1)'), // Darker orange hover for certified
    },
  ],
};

// Radar Chart Options
const options: ChartOptions<'radar'> = {
  responsive: true,
  maintainAspectRatio: false, // Allow control over aspect ratio
  scales: {
    r: {
      angleLines: {
        color: '#444', // Darker lines for the web
      },
      grid: {
        color: '#444', // Darker grid lines for the web
      },
      pointLabels: {
        color: '#ccc', // Lighter text color for skill labels
        font: {
            size: 12,
        },
         // Customize point labels to highlight certified skills
         callback: function(label: string | number) { // Type annotation
             const skillName = label.toString(); // Ensure label is a string
             const skill = allSkills.find(s => s.name === skillName);
             if (skill?.certified) {
                 // Prepend a checkmark to the label for certified skills
                 return '✓ ' + label;
             }
             return label;
         }
      },
      suggestedMin: 0, // Minimum level for the scale
      suggestedMax: 100, // Maximum level for the scale
      ticks: {
          display: false, // Hide the numerical ticks on the scale
          stepSize: 25,
          color: '#777' // Color for ticks if displayed
      }
    },
  },
  plugins: {
    legend: {
      labels: {
        color: '#ccc', // Color for legend text
      },
    },
    tooltip: {
        // Customize tooltip to show verification status and attempt styling
        callbacks: {
            label: function(context: TooltipItem<'radar'>) { // Type annotation
                let label = context.dataset.label || '';
                if (label) {
                    label += ': ';
                }
                // Safely access skill name from labels array
                const skillName = context.chart.data.labels?.[context.dataIndex] as string;
                const skill = allSkills.find(s => s.name === skillName);

                label += context.raw + '%'; // Display level as percentage in tooltip

                if (skill?.certified) {
                    label += ' (Verified)'; // Add Verified status to tooltip
                }
                return label;
            },
             // Attempt to set tooltip label text color - 'orange' for verified
             // Using TooltipItem type for context
            labelTextColor: function(context: TooltipItem<'radar'>) { // Type annotation
                 // Safely access skill name
                 const skillName = context.chart.data.labels?.[context.dataIndex] as string;
                 const skill = allSkills.find(s => s.name === skillName);
                 return skill?.certified ? 'orange' : context.dataset.borderColor as string; // Use orange for verified text, dataset border color otherwise
            },
            // Removed invalid titleColor callback as it's not a valid option
        }
    }
  },
};


export default function Skills() {
  // State and effect for scroll visibility animation
  const [isVisible, setIsVisible] = useState(false);
   // Set chart height (adjust as needed) - Important for maintainAspectRatio: false
   // Increased chart height for more space
   const chartHeight = 600; // Increased height
=======
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
>>>>>>> 74b7f6236ea99624ffccda761af2768e45c1944f

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
<<<<<<< HEAD
          // Optional: Disconnect observer if you only want the animation once
          // observer.disconnect();
        } else {
           // Optional: Reset state to replay animation when scrolling back
           // setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    // Ensure this ID is on the div containing the chart
    const element = document.getElementById('skills-radar-section');
    if (element) observer.observe(element);

    // Cleanup function to unobserve when the component unmounts
    return () => {
        if (element) observer.unobserve(element);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount


  return (
    <section id="skills" className="py-24 bg-gray-900"> {/* Ensure this ID matches your navigation if applicable */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-500">
          Skills Proficiency (Radar Chart)
        </h2>

        {/* --- Primary Chart Rendering Block ---
          // Use this div to contain the Radar Chart.
          // Ensure it has height/width defined by Tailwind or style.
        */}
        <div
          id="skills-radar-section" // Specific ID for the radar chart container - MUST match ID in useEffect
          // Increased max-width for more space for the chart
          className="w-full max-w-3xl mx-auto bg-gray-800 rounded-xl p-6 shadow-lg" // Increased max-width
          style={{ height: `${chartHeight}px` }} // Apply height - crucial for maintainAspectRatio: false
        >
          {/* Render the Radar chart */}
          {/* Add a check for isVisible if you want the chart to only appear/animate when in view */}
          {isVisible && <Radar data={data} options={options} />}
        </div>

        {/* --- Optional: Text list of skills below the chart ---
          // Modified to remove percentage and use a better checkmark for verified skills.
          // Keep or remove this section as desired.
        */}
         <div className="w-full max-w-6xl mx-auto mt-12">
           <h3 className="text-2xl font-semibold text-green-500 mb-8 text-center">
             Skill Details
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {categorizedSkills.map(cat => (
                   <div
                     key={cat.category}
                     className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-green-500/20 transition-shadow"
                   >
                     <h4 className="text-xl font-medium text-green-500 mb-4 pb-2 border-b border-gray-700">
                       {cat.category}
                     </h4>
                     <ul className="space-y-3">
                         {cat.skills.map(skill => (
                             <li key={skill.name} className="flex justify-between items-center">
                                 <span className="text-gray-300">
                                     {skill.name}
                                 </span>
                                 <div className="flex items-center"> {/* Container for icons */}
                                     {/* Removed percentage display */}
                                     {skill.certified && (
                                          /* Use MUI Tooltip wrapping Lucide CheckCircle icon for verified */
                                          <MuiTooltip title="Verified" placement="top">
                                               <span className="flex items-center text-orange-500"> {/* Span to apply color and flex for alignment */}
                                                   <CheckCircle size={20} /> {/* Lucide CheckCircle icon */}
                                               </span>
                                          </MuiTooltip>
                                          
                                          
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
  // Closing section tag
  );
};
=======
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
>>>>>>> 74b7f6236ea99624ffccda761af2768e45c1944f
