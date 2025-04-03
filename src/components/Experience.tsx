import React from "react";

export default function Experience() {
    return (
      <section id="experience" className="py-24">
        <h2 className="section-heading">Work Experience</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[var(--lightest-slate)]">Bröd och Salt</h3>
            <p className="text-lg text-[var(--slate)]">Team Leader | 2022–2023</p>
            <ul className="list-disc list-inside text-[var(--slate)] mt-2">
              <li>Overseeing inventory management to ensure all orders were filled accurately.</li>
              <li>Streamlining operations to enhance delivery efficiency and customer satisfaction.</li>
              <li>Training team members to maintain high standards in food preparation and service.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--lightest-slate)]">GRF Redovisning</h3>
            <p className="text-lg text-[var(--slate)]">IT Support | 2018–2022</p>
            <ul className="list-disc list-inside text-[var(--slate)] mt-2">
              <li>Managing IT systems to ensure smooth operations and minimal downtime.</li>
              <li>Troubleshooting technical issues and providing solutions to improve productivity.</li>
              <li>Implementing best practices in IT management to enhance service delivery.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  