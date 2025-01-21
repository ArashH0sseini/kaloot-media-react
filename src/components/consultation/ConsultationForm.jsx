import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaExclamationTriangle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ConsultationForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validatePhone = (phone) => {
    const phoneRegex = /^09\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "phone") {
      if (!validatePhone(value)) {
        setErrors({
          ...errors,
          phone: t("phoneError"), // استفاده از ترجمه
        });
      } else {
        const newErrors = { ...errors };
        delete newErrors.phone;
        setErrors(newErrors);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      toast.error(t("fillFieldsError")); // استفاده از ترجمه
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast.error(t("invalidPhoneError")); // استفاده از ترجمه
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(t("messageSentSuccess")); // استفاده از ترجمه
        setFormData({ name: "", phone: "", message: "" });
      } else {
        toast.error(t("messageSendError")); // استفاده از ترجمه
      }
    } catch (error) {
      console.error("خطا در ارسال پیام:", error);
      toast.error(t("connectionError")); // استفاده از ترجمه
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="max-w-md w-full">
        <h3 className="text-center text-white mb-4">{t("formConsultation")}</h3>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 px-4 block w-full rounded-md bg-black/30 text-white placeholder-white/60 shadow-sm focus:outline-none"
              placeholder={t("name")}
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 p-2 px-4 block w-full rounded-md bg-black/30 text-white placeholder-white/60 shadow-sm focus:outline-none ${
                errors.phone ? "border-red-500" : ""
              }`}
              placeholder={t("phone")}
              autoComplete="off"
            />
            {errors.phone && (
              <div className="flex items-center text-yellow-500 text-sm my-2">
                <FaExclamationTriangle className="mx-2" size={16} />
                {errors.phone}
              </div>
            )}
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 px-4 block w-full rounded-md bg-black/30 text-white placeholder-white/60 shadow-sm focus:outline-none"
              placeholder={t("subject")}
              autoComplete="off"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-green-600 ring-[3px] ring-green-400 text-lg shadow-lg text-white py-1 rounded-md focus:outline-none ${
              isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-green-700"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                <span>{t("sendingMessage")}</span> {/* استفاده از ترجمه */}
              </div>
            ) : (
              t("send")
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
