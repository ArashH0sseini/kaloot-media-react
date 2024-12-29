import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // ارسال داده‌ها به سرور
  };

  return (
    <div className="flex items-center justify-center my-8">
      <div className="max-w-md w-full p-6 rounded-lg shadow-lg bg-black/20 backdrop-blur-md border border-white/30">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md bg-black/30 text-white placeholder-white/60 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="نام:"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md bg-black/30 text-white placeholder-white/60 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="شماره تماس:"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 block w-full rounded-md bg-black/30 text-white placeholder-white/60 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="در چه زمینه ای نیاز به تبلیغات دارید؟"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-white/20 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-lg"
          >
            ارسال پیام
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
