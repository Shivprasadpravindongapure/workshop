import React, { useState } from 'react';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  college: '',
};

const BookingForm = ({ workshop, onSubmit, onCancel }) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Valid email is required.';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone is required.';
    } else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a 10-digit number.';
    }
    if (!form.college.trim()) newErrors.college = 'College is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 600));
    setSubmitting(false);
    onSubmit(form, workshop);
  };

  const inputStyles = "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors";
  const errorStyles = "border-red-500 focus:border-red-500 focus:ring-red-500";

  return (
    <div className="fixed inset-0 bg-gray-900/50 flex items-end sm:items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-t-xl sm:rounded-xl shadow-lg flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex-shrink-0">
          <h2 className="text-lg font-semibold text-gray-800">Register for Workshop</h2>
          <p className="text-sm text-gray-500 mt-1">{workshop?.title}</p>
        </div>

        {/* Form body */}
        <form onSubmit={handleSubmit} noValidate className="p-5 overflow-y-auto flex-1">
          <div className="space-y-4">
            
            {/* Name */}
            <div>
              <label htmlFor="field-name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="field-name"
                name="name"
                type="text"
                className={`${inputStyles} ${errors.name ? errorStyles : ''}`}
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="field-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="field-email"
                name="email"
                type="email"
                className={`${inputStyles} ${errors.email ? errorStyles : ''}`}
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="field-phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                id="field-phone"
                name="phone"
                type="tel"
                className={`${inputStyles} ${errors.phone ? errorStyles : ''}`}
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
            </div>

            {/* College */}
            <div>
              <label htmlFor="field-college" className="block text-sm font-medium text-gray-700 mb-1">
                College / Institute
              </label>
              <input
                id="field-college"
                name="college"
                type="text"
                className={`${inputStyles} ${errors.college ? errorStyles : ''}`}
                value={form.college}
                onChange={handleChange}
              />
              {errors.college && <p className="text-xs text-red-600 mt-1">{errors.college}</p>}
            </div>

          </div>

          {/* Actions */}
          <div className="mt-6 space-y-2 pb-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-600 text-white font-medium py-2 rounded text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:opacity-50 transition-colors"
            >
              {submitting ? 'Confirming...' : 'Confirm Registration'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              disabled={submitting}
              className="w-full bg-gray-100 text-gray-700 font-medium py-2 rounded text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-1 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default BookingForm;
