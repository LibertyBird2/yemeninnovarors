"use client";
import React, { useState } from "react";
import { Button, FloatingLabel, Toast } from "flowbite-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission with a timeout
    setTimeout(() => {
      setLoading(false);
      Toast({
        title: "Message Sent!",
        // description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <FloatingLabel
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder=" "
            label={"Your Name"}
            variant={"outlined"}
          />
        </div>

        <div>
          <FloatingLabel
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder=" "
            label={"Your Email"}
            variant={"outlined"}
          />
        </div>
      </div>

      <div>
        <FloatingLabel
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can we help you?"
          label={"Subject"}
          variant={"outlined"}
        />
      </div>
      <div className="relative w-full">
        <textarea
          id="floatingTextarea"
          className="peer w-full h-32 p-4 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder=" "
        ></textarea>
        <label
          htmlFor="name"
          className="absolute left-1 top-7 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Your Message
        </label>
      </div>

      <Button
        type="submit"
        className="w-full md:w-auto bg-brand-blue hover:bg-brand-blue-light btn-hover"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
