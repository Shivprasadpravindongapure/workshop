import React, { useState } from 'react';
import Button from '../Button/Button';
import './BookingForm.css';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  college: '',
};

/**
 * BookingForm handles student registration for a workshop.
 *
 * Props:
 *  - workshop: the workshop being booked
 *  - onSubmit: function(formData, workshop) — called on successful submit
 *  - onCancel: function() — called when user dismisses the form
 */
const BookingForm = ({ workshop, onSubmit, onCancel }) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit phone number.';
    }
    if (!form.college.trim()) newErrors.college = 'College / Institute is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear per-field error on change
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
    // Simulate async submission
    await new Promise((res) => setTimeout(res, 600));
    setSubmitting(false);
    onSubmit(form, workshop);
  };

  return (
    <div className="booking-form-overlay" role="dialog" aria-modal="true" aria-label="Booking form">
      <div className="booking-form">
        <div className="booking-form__header">
          <h2 className="booking-form__title">Book Workshop</h2>
          <p className="booking-form__subtitle">{workshop?.title}</p>
        </div>

        <form id="booking-form-element" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="field-name" className="form-label">Full Name</label>
            <input
              id="field-name"
              name="name"
              type="text"
              className={`form-input ${errors.name ? 'form-input--error' : ''}`}
              placeholder="e.g. Priya Sharma"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
            {errors.name && <p className="form-error" role="alert">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="field-email" className="form-label">Email Address</label>
            <input
              id="field-email"
              name="email"
              type="email"
              className={`form-input ${errors.email ? 'form-input--error' : ''}`}
              placeholder="e.g. priya@college.edu"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
            {errors.email && <p className="form-error" role="alert">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="field-phone" className="form-label">Phone Number</label>
            <input
              id="field-phone"
              name="phone"
              type="tel"
              className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
              placeholder="10-digit mobile number"
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel"
              inputMode="numeric"
            />
            {errors.phone && <p className="form-error" role="alert">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="field-college" className="form-label">College / Institute</label>
            <input
              id="field-college"
              name="college"
              type="text"
              className={`form-input ${errors.college ? 'form-input--error' : ''}`}
              placeholder="e.g. IIT Bombay"
              value={form.college}
              onChange={handleChange}
              autoComplete="organization"
            />
            {errors.college && <p className="form-error" role="alert">{errors.college}</p>}
          </div>

          <div className="booking-form__actions">
            <Button
              id="form-submit-btn"
              type="submit"
              variant="primary"
              size="md"
              fullWidth
              disabled={submitting}
            >
              {submitting ? 'Submitting…' : 'Confirm Booking'}
            </Button>
            <Button
              id="form-cancel-btn"
              type="button"
              variant="secondary"
              size="md"
              fullWidth
              onClick={onCancel}
              disabled={submitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
