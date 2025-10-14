import React, { useState } from "react";
// --- Add this component inside the same file ---
const BBBEEEnquiryForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    surname: '',
    contact: '',
    email: '',
    company: '',
    position: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setError('');

    try {
      const formData = new FormData();
      formData.append('access_key', '388d14e6-3676-41bf-a5f0-cb31c11c9ea8'); // <-- Replace with your key
      formData.append('First Name', form.firstName);
      formData.append('Surname', form.surname);
      formData.append('Contact Number', form.contact);
      formData.append('Email', form.email);
      formData.append('Company Name', form.company);
      formData.append('Position at Company', form.position);
      formData.append('Message', form.message);
      formData.append('_subject', 'New BBBEE Consulting Enquiry');
      formData.append('from_name', `${form.firstName} ${form.surname}`);
      formData.append('reply_to', form.email);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setForm({
          firstName: '',
          surname: '',
          contact: '',
          email: '',
          company: '',
          position: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err: any) {
      setStatus('error');
      setError('Submission failed. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-green-800 text-center">
          Thank you! Your enquiry has been submitted.
        </div>
      )}
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded text-red-800 text-center">
          {error}
        </div>
      )}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" disabled={isSubmitting} />
          <input type="text" name="surname" value={form.surname} onChange={handleChange} placeholder="Surname" required className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" disabled={isSubmitting} />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="contact" value={form.contact} onChange={handleChange} placeholder="Contact Number" required className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" disabled={isSubmitting} />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" disabled={isSubmitting} />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company Name" className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" disabled={isSubmitting} />
          <input type="text" name="position" value={form.position} onChange={handleChange} placeholder="Position at Company" className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" disabled={isSubmitting} />
        </div>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={4} className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630] resize-none" disabled={isSubmitting} />
        <div className="flex justify-center pt-2">
          <button type="submit" disabled={isSubmitting} className="bg-[#2d2e83] text-white font-bold px-12 py-3 rounded transition-colors hover:bg-[#23245c] focus:outline-none focus:ring-2 focus:ring-[#f79630]">
            {isSubmitting ? 'Submitting...' : 'SUBMIT'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BBBEEEnquiryForm;