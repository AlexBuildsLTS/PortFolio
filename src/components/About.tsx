import * as Icons from 'lucide-react';
import neoFetchImage from '../assets/neo-fetch.png';

const About = () => {
  return (
    <section id="about">
      <div className="space-y-6">
        <p className="text-lg">
          Hello! I'm Alex Youssef, a dedicated Java Fullstack Developer
          currently studying at Lexicon. My passion for Java Fullstack
          development stems from the opportunity to work seamlessly across both
          front-end and back-end technologies, allowing me to gain a
          comprehensive understanding of the entire software development
          lifecycle.
        </p>
        <p className="text-lg">
          During my time at Lexicon, I developed a web application that
          streamlined user interactions, reinforcing my desire to create
          impactful solutions. With each passing week, my enthusiasm for this
          field grows, solidifying my confidence that Java Fullstack development
          is the career path I am committed to for the long term.
        </p>
        <p className="text-lg">
          Looking ahead, I aspire to build my own projects, embracing the
          endless opportunities in this field and finding immense satisfaction
          in crafting solutions that are uniquely my own. I am eager to leverage
          my skills in Java, Spring Boot, React, and database management to
          contribute to innovative projects and advance my career in a
          forward-thinking organization.
        </p>
        <p className="text-lg">
          I'm also passionate about cybersecurity and ethical hacking,
          constantly seeking to expand my knowledge in these areas. This
          interest drives me to create secure and robust applications, ensuring
          the safety and integrity of user data.
        </p>
        {/* Updated Grid Section */}
        <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-3">
          <div className="flex items-center gap-3 text-green">
            <Icons.Code2 size={20} />
            <span>Frontend</span>
          </div>
          <div className="flex items-center gap-3 text-green">
            <Icons.Layout size={20} />
            <span>UI/UX</span>
          </div>
          <div className="flex items-center gap-3 text-green">
            <Icons.ShieldCheck size={20} />
            <span>Security</span>
          </div>
          <div className="flex items-center gap-3 text-green">
            <Icons.Database size={20} />
            <span>Database</span>
          </div>
          <div className="flex items-center gap-3 text-green">
            <Icons.MessageCircleCodeIcon size={20} />
            <span>Backend</span>
          </div>
        </div>

        {/* Adjusted Image Section */}
        <div className="relative mt-12 group">
          <div className="relative z-10">
            <img
              src={neoFetchImage}
              alt="Neo Fetch"
              className="w-auto h-auto max-w-4xl mx-auto transition-transform duration-300 rounded-lg shadow-lg group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
