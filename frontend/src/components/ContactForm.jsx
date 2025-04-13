import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", form);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Now</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 rounded border" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 rounded border" required />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" className="w-full p-3 rounded border h-32" required />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-800">Submit</button>
        {success && <p className="text-green-600 mt-2">Thank you! Your message has been sent.</p>}
      </form>
    </div>
  );
};

export default ContactForm;