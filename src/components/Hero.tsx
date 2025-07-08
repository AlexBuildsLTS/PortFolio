import Alex_Youssef_Java_Certificate from "../assets/Alex_Youssef_Java_Certificate.pdf";
import Resume from "../assets/Resume.pdf";
export default function Hero() {
  return (
    <section id="home" className="flex items-center min-h-screen px-4 sm:px-12 bg-background text-text">
      <div className="max-w-4xl mx-auto animate-slide-up">
        <h1 className="mb-4 text-2xl font-bold text-accent sm:text-4xl">
          Hi, my name is
        </h1>
        <h2 className="mb-4 text-3xl font-bold sm:text-6xl">Alex Youssef</h2>
        <h3 className="mb-6 text-xl font-bold sm:text-5xl text-text">
          I’m passionate about crafting accessible, human-centered web
          applications.
        </h3>
        <p className="max-w-xl mb-8 text-base sm:text-lg text-text">
          With a strong focus on scalable backend architecture and intuitive
          user interfaces, I specialize in building exceptional digital
          experiences. My recent work includes developing a Marketplace website
          and application, AI Assistant bot, Schedule app, Website for ordering
          for example food, and more projects ive done can be found in my github
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
          <a href="#projects" className="w-full text-center btn-primary sm:w-auto">
            Check out my work
          </a>
          <a href={Alex_Youssef_Java_Certificate} download="Alex_Youssef_Java_Certificate.pdf" className="w-full text-center btn-primary sm:w-auto">
            Java Fullstack-Certificate
          </a>
          <a href={Resume} download="Alex_Youssef_Resume.pdf" className="w-full text-center btn-primary sm:w-auto">
            CV
          </a>
        </div>
      </div>
    </section>
  );
}
