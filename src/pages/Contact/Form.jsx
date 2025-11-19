import React, { useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "emailjs-com";
const Form = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5sy75vp",
        "template_if4g0gi",
        formRef.current,
        "k_Fm1zc4-fHaor8oa"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Oops! something went wrong.", error.text);
        }
      );
  };
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-2xl w-full p-8 rounded-xl shadow-2xl bg-white space-y-6 mx-auto"
    >
      {/* Form Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Let's Talk About Your Project
      </h2>

      <div className="space-y-4">
        {/* ROW 1: Name and Email (Side-by-side on md+, stacked on mobile) */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Name Field */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-700 mb-1" // Corrected text-x to text-sm
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700 mb-1" // Corrected text-x to text-sm
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@email.com"
              className="p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
              required
            />
          </div>
        </div>

        {/* ROW 2: Subject Field (Full Width) */}
        <div className="flex flex-col">
          <label
            htmlFor="subject"
            className="text-sm font-semibold text-gray-700 mb-1" // Corrected text-x to text-sm
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Project proposal, query, etc."
            className="p-3 border border-gray-300 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
            required
          />
        </div>

        {/* ROW 3: Message Field (Full Width) */}
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-gray-700 mb-1" // Corrected text-x to text-sm
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Tell me about your project..."
            className="p-3 border border-gray-300 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y transition duration-150"
            required
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex justify-center items-center gap-2 p-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        <Send size={20} />
        Send Message
      </button>
    </form>
  );
};

export default Form;
