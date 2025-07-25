"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    text: "",
    howMet: "",
    websiteType: "",
    appType: "",
    budget: "",
    contactPreference: "",
  });

  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setShowPopup(true);
      setFormData({
        name: "",
        email: "",
        message: "",
        text: "",
        howMet: "",
        websiteType: "",
        appType: "",
        budget: "",
        contactPreference: "",
      });
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="max-w-4xl lg:ml-[350px] mx-auto py-16 mt-12">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        Get In Touch
      </h2>

      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto p-2">
        Ready to bring your idea to life? Whether you need a portfolio, business
        site, e-commerce store, or a full-featured mobile app — I`m here to
        help. Fill out the form below with as much detail as possible so I can
        understand your project and get back to you with a tailored solution.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded-2xl space-y-6 border border-gray-100"
      >
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

        <select
          name="websiteType"
          value={formData.websiteType}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">Select Website Type</option>
          <option value="Portfolio">Portfolio</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Business">Business</option>
          <option value="Blog">Blog</option>
          <option value="Other">Other (specify in the message)</option>
        </select>

        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        >
          <option value="">Select Website Budget</option>
          <option value="₦200,000 - ₦500,000">₦200,000 - ₦500,000</option>
          <option value="₦500,000 - ₦1,500,000">₦500,000 - ₦1,500,000</option>
          <option value="₦1,500,000 - ₦10,000,000">
            ₦1,500,0000 - ₦10,000,000
          </option>
          <option value="₦10,000,000 - ₦100,000,000">
            ₦10,000,000 - ₦100,000,000
          </option>
          <option value="₦100,000,000 - ₦500,000,000">
            ₦100,000,000 - ₦300,000,000
          </option>
          <option value="₦300,000,000">₦300,000,000+</option>
        </select>

        <input
          name="appType"
          value={formData.appType}
          onChange={handleChange}
          placeholder="If it's an app, describe the type (optional)"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <select
          name="contactPreference"
          value={formData.contactPreference}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        >
          <option value="">Preferred way to contact you</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>
        </select>

        <input
          name="text" // ✅ Correct name
          value={formData.text}
          onChange={handleChange}
          placeholder="Contact , Email , Whatsapp"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

        {/* How Did You Meet Us */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            How did you meet me?
          </label>
          <div className="space-y-2">
            {[
              "Website",
              "Instagram",
              "Facebook",
              "Twitter",
              "WhatsApp",
              "YouTube",
              "Referral",
            ].map((option) => (
              <label
                key={option}
                className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 p-3 rounded-md border cursor-pointer"
              >
                <input
                  type="radio"
                  name="howMet"
                  value={option}
                  checked={formData.howMet === option}
                  onChange={handleChange}
                  className="text-blue-600"
                />
                <span className="capitalize text-gray-800">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Any additional information?"
          className="w-full p-3 border border-gray-300 resize-none rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold text-white transition ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="text-center text-red-500">{status}</p>}
      </form>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md mx-auto"
            >
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                🎉 Message Sent!
              </h3>
              <p className="text-gray-600 mb-4">
                Thank you for reaching out. I`ll respond to your message soon.
              </p>
              <Link
                href="/"
                onClick={() => setShowPopup(false)}
                className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Close
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
