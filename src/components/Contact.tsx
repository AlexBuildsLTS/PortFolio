import * as Icons from 'lucide-react';
<<<<<<< HEAD
import React, { useState } from 'react';

export default function Contact() {
=======
import React, {useState} from 'react';

export default function Contact() {

>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

<<<<<<< HEAD
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

=======

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
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
<<<<<<< HEAD
        setResponseMessage(
          'Failed to send your message. Please try again later.'
        );
=======
        setResponseMessage('Failed to send your message. Please try again later.');
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
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
<<<<<<< HEAD
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
=======
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
        </p>
      </div>
      <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
<<<<<<< HEAD
            <label
              htmlFor="firstName"
              className="block text-[var(--light-slate)] mb-2"
            >
=======
            <label htmlFor="firstName" className="block text-[var(--light-slate)] mb-2">
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
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
<<<<<<< HEAD
            <label
              htmlFor="lastName"
              className="block text-[var(--light-slate)] mb-2"
            >
=======
            <label htmlFor="lastName" className="block text-[var(--light-slate)] mb-2">
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
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
<<<<<<< HEAD
          <label
            htmlFor="email"
            className="block text-[var(--light-slate)] mb-2"
          >
=======
          <label htmlFor="email" className="block text-[var(--light-slate)] mb-2">
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
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
<<<<<<< HEAD
          <label
            htmlFor="message"
            className="block text-[var(--light-slate)] mb-2"
          >
=======
          <label htmlFor="message" className="block text-[var(--light-slate)] mb-2">
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
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
<<<<<<< HEAD
          <p className="mt-4 text-center text-[var(--green)]">
            {responseMessage}
          </p>
=======
          <p className="mt-4 text-center text-[var(--green)]">{responseMessage}</p>
>>>>>>> 9af85ae396b67f543fcb2d1e65b76ce51e39a42b
        )}
      </form>
    </section>
  );
}
