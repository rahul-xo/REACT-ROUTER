import React from "react";
import { Form } from "react-router";

export const handleSubmit =async ({request}) => {
  try {
    const res=await request.formData();
    const data=Object.fromEntries(res);
    console.log(data);
    return null
  } catch (error) {
    
  }
};
const Contact = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center font-sans p-4">
      {/* Form Card */}
      <div className="w-full max-w-lg p-8 space-y-6 bg-slate-800 rounded-lg shadow-xl">
        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center">
          Contact Us
        </h1>

        <Form className="space-y-6" method="POST" action="/contact">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full p-3 bg-slate-700 border border-slate-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-3 bg-slate-700 border border-slate-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 bg-slate-700 border border-slate-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
