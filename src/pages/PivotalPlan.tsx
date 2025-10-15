import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';

const PivotalPlanPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] md:h-[560px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/70 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2e83] mb-4 leading-tight">
              Workplaces Skills Plan &amp; Annual Training Pivotal Plan
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-6 max-w-2xl">
              We prepare, submit and manage your WSP/ATR and Pivotal Plans — ensuring compliance, maximising funding opportunities and simplifying reporting to the SETA.
            </p>
          </div>
        </div>
      </section>

      {/* NEW: Two-column section (text left, image right) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2d2e83] mb-6">
                Workplace Skills Plan and Annual Training Pivotal Plans with our help!
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                As part of our Corporate Services, we are here to assist you with your Workplace Skills Plan and Annual Training Pivotal Plan.
                This is an important aspect of any business, as it helps to identify skills gaps within the organisation and develop training plans to address these gaps.
                We provide guidance on developing effective training programmes, identifying appropriate training providers, and help with the SETA compliance and submission process.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Our goal is to help ensure your business has a skilled and competent workforce which drives growth and success.
                By working with us you can be confident you are meeting your legal obligations as an employer while investing in your employees’ future.
                Contact us to find out more about how we can assist with your Workplace Skills Plan and Annual Training Pivotal Plan.
              </p>

              <a
                href="#pivotal-enquire"
                className="inline-block border border-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Enquire
              </a>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src="https://www.dynamicdna.co.za/wp-content/uploads/2022/02/ddna-laptop-female.jpg"
                alt="Hands typing on laptop"
                className="w-full max-w-md rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Skills Development categories (full-width, overlay) */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')",
        }}
      >
        <div className="absolute inset-0 bg-[#2d2e83]/90"></div>

        <div className="relative z-10 container mx-auto px-4 max-w-6xl text-white">
          <h3 className="text-center text-xl md:text-2xl font-semibold text-[#f79630] mb-10">
            The defined categories of Skills Development in which we can assist you are:
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="font-semibold">Bursaries or Scholarships</li>
              <li className="font-semibold">Internships</li>
              <li className="font-semibold">Learnerships</li>
              <li className="font-semibold">Learnerships or Apprenticeships</li>
            </ul>

            <ul className="space-y-4">
              <li className="font-semibold">Work Integrated Learning</li>
              <li className="font-semibold">Informal Training (Occupationally directed informal instruction programmes)</li>
              <li className="font-semibold">Informal Training (Work-based informal programmes)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Skills facilitation functions (image left, content right) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-start">
              <img
                src="https://www.dynamicdna.co.za/wp-content/uploads/2022/02/ddna-laptop-female.jpg"
                alt="Consultation meeting"
                className="w-full max-w-sm rounded shadow"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#2d2e83] mb-4">
                Contact us to secure assistance from Bostech Innovations as your Skills Development Facilitator whereby we can execute the below functions for you:
              </h3>

              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Registration with the respective SETA as the appointed ISDF, including Inter-Seta transfers</li>
                <li>Compile and submit WSP (Workplace Skills Plan), ATR (Annual Training Report) to the relevant SETA</li>
                <li>Develop relevant training plans and solutions that speak to your holistic development needs</li>
                <li>Assist with Bursaries — end to end solution</li>
                <li>Assessment and recruitment of learners where necessary for interventions</li>
                <li>Register projects with your relevant SETA, where applicable</li>
                <li>Facilitate training and project management end-to-end for 12 - 18 months</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ADDED: Enquire Now section (reuses existing ContactForm component) */}
      <section id="pivotal-enquire" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#f79630] mb-3">Enquire Now</h2>
          <p className="text-gray-600 mb-8">
            Get in touch with us today to chat about how we can assist your business. Call us at <a href="tel:+27 15 001 2309" className="font-semibold text-[#2d2e83]">+27 15 001 2309</a> or submit your info in the enquiry form below.
          </p>

          <div className="w-full mt-6">
            <PivotalContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

const PivotalContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    contact: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Using Web3Forms for form submission
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '388d14e6-3676-41bf-a5f0-cb31c11c9ea8');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('surname', formData.surname);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('contact', formData.contact);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', 'Workplaces Skills Plan & Annual Training Pivotal Plan Enquiry - Bostech Innovations');
      formDataToSend.append('from_name', `${formData.name} ${formData.surname}`);
      formDataToSend.append('reply_to', formData.email);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          surname: '',
          email: '',
          contact: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to submit enquiry. Please try again or contact us directly at info@bostechtraining.co.za');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact-us-it-courses' className="max-w-2xl mx-auto">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
          <svg className="h-6 w-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-green-800 font-semibold">Message Sent Successfully!</h3>
            <p className="text-green-700">Thank you for your interest in our IT courses. We'll get back to you soon.</p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
          <svg className="h-6 w-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-red-800 font-semibold">Submission Failed</h3>
            <p className="text-red-700">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Surname Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>
          <div>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              placeholder="Surname"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email address"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        {/* Contact Number */}
        <div>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            placeholder="Contact number"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        {/* Message Textarea */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows={8}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 resize-vertical disabled:bg-gray-100 disabled:cursor-not-allowed"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-left">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PivotalPlanPage;