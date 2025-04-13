import * as Icons from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Your message was sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' }); // Reset form
      } else {
        setResponseMessage(
          'Failed to send your message. Please try again later.'
        );
      }
    } catch (error) {
      console.error(error);
      setResponseMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <h2 className="section-heading">Get In Touch</h2>
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <p className="text-lg text-[var(--slate)]">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>
      <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-[var(--light-slate)] mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-[var(--navy-light)] border border-[var(--navy-lightest)] rounded px-4 py-2 text-[var(--light-slate)] focus:outline-none focus:border-[var(--green)]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-[var(--light-slate)] mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-[var(--navy-light)] border border-[var(--navy-lightest)] rounded px-4 py-2 text-[var(--light-slate)] focus:outline-none focus:border-[var(--green)]"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-[var(--light-slate)] mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[var(--navy-light)] border border-[var(--navy-lightest)] rounded px-4 py-2 text-[var(--light-slate)] focus:outline-none focus:border-[var(--green)]"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-[var(--light-slate)] mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-[var(--navy-light)] border border-[var(--navy-lightest)] rounded px-4 py-2 text-[var(--light-slate)] focus:outline-none focus:border-[var(--green)]"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex items-center gap-2 mx-auto btn-primary"
          disabled={isSubmitting}
        >
          <Icons.Send size={18} />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {responseMessage && (
          <p className="mt-4 text-center text-[var(--green)]">
            {responseMessage}
          </p>
        )}
      </form>
    </section>
  );
}
