import React from 'react';

export function Education(): React.ReactElement {
  return (
    <section id="education" className="py-24">
      <h2 className="section-heading">Education</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-[var(--lightest-slate)]">
            Lexicon
          </h3>
          <p className="text-lg text-[var(--slate)]">
            Java Fullstack Developer | June 2024 - Present
          </p>
          <ul className="list-disc list-inside text-[var(--slate)] mt-2">
            <li>
              Java and Spring Framework for building scalable web applications.
            </li>
            <li>
              HTML, CSS, and JavaScript for crafting responsive user interfaces.
            </li>
            <li>Database management with SQL and NoSQL systems.</li>
            <li>
              RESTful API development for seamless integration of web services.
            </li>
            <li>
              Version control systems like Git and GitHub for collaboration.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
