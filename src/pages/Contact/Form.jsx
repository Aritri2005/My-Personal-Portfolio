import React, { useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
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
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Let's Talk About Your Project
      </h2>

      <div className="space-y-4">
        {/* Name + Email */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Name */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Your name"
              className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="name@email.com"
              className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col">
          <label
            htmlFor="subject"
            className="text-sm font-semibold text-gray-700 mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Project proposal, query, etc."
            className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Tell me about your project..."
            className="p-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            required
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center items-center gap-2 p-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        <Send size={20} />
        Send Message
      </button>
    </form>
  );
};

export default Form;
