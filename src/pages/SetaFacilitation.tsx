import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';

const SETAFacilitationPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] md:h-[560px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-purple-900/75 to-blue-800/85"></div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SETA Facilitation Services</h1>
            <p className="text-lg md:text-xl text-yellow-400 mb-6">
              At Bostech Innovations, our goal is to make your SETA applications, documentation, and compliance processes effortless — from grant applications to WSP/ATR facilitation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#seta-enquire"
                className="inline-block border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                ENQUIRE NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Existing two-column section (text left, image right) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2d2e83] mb-6">
                SETA made easy with our SETA Facilitation Services
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                With our SETA Facilitation Services, our goal is to make your SETA applications, documentation, and compliance processes effortless.
                We understand these can be time-consuming and challenging tasks, and with our expert assistance, we can simplify everything for you.
                We will guide you through the entire process — from gathering the necessary information and filling out the required paperwork to ensuring full compliance with relevant regulations.
                Our team has the experience and deep understanding of SETA requirements to provide high-quality, personalized service and timely delivery.
                With our support, your SETA applications will be submitted accurately and on time, allowing you to focus on your core business operations.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              {/* Replace the src below with your local image path if you add the image to the project */}
              <img
                src="https://www.dynamicdna.co.za/wp-content/uploads/2022/02/ddna-laptop-female.jpg"
                alt="Hands typing on laptop"
                className="w-full max-w-md rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Enquire section (uses existing ContactForm component) */}
      <section id="seta-enquire" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#f79630] mb-3">Enquire Now</h2>
          <p className="text-gray-600 mb-8">
            Get in touch with us today to chat about how we can assist your business. Call us at <a href="tel:+27 15 001 2309" className="font-semibold text-[#2d2e83]">+27 15 001 2309</a> or submit your info in the enquiry form below.
          </p>

          <div className="w-full mt-6">
            {/* reuse project's ContactForm component */}
            <SetaContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

// IT Courses Contact Form Component
const SetaContactForm = () => {
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
      formDataToSend.append('_subject', 'Seta Facilitation Services Enquiry - Bostech Innovations');
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

export default SETAFacilitationPage;