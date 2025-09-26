import React, { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Demo form submission
    toast.success("Message sent successfully!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="w-full bg-white py-12 sm:py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>Contact</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">Get in touch</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about VYBTOR? Want to learn more about how our AI coach can help? Send us a message.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-elegant p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your questions or how we can help..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent resize-vertical"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-2">Prefer to email us directly?</p>
            <a 
              href="mailto:hello@vybtor.com"
              className="text-pulse-500 hover:text-pulse-600 font-medium transition-colors"
            >
              hello@vybtor.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;