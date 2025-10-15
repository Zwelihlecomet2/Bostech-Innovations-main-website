import React, { useState } from 'react'

const FourIR = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[340px] md:h-[420px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/src/assets/Screenshot (252) copy.png')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2d2e83]/50" />
        {/* Content */}
        <div className="relative z-10 px-8 md:px-20 lg:px-32 w-full flex flex-col items-start justify-center h-full">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">4IR4Youth</h1>
          <p className="text-lg md:text-2xl text-[#2d2e83] bg-white/40 font-medium" style={{marginTop: '-0.3rem'}}>
            Fourth Industrial Revolution For the Youth
          </p>
        </div>
      </section>

      {/* No youth Left Behind Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2e83] mb-3">No Youth Left Behind!</h2>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              4IR4Youth is a movement! A movement with the purpose to empower YOUTH to enter the world of technology. The ICT industry in SA has a shortage of skills, which is a great opportunity to include more youth into the trade, through a movement like 4IR4Youth. Bostech Innovation's 4IR4Youth initiative aims to train and equip 10 000 South African Youth with ICT skills which will lead to job creation and employment opportunities within the next 5 years. We strive to create technological and social impact through various digitalization activities that will empower the youth and create a new digital eco-system, while promoting Tech-preneurship. Bostech Innovations fully advocates and walks the journey with the youth in our accelerator programmes to ensure they are supported, trained, and fast-tracked into 4IR related job roles and businesses.
            </p>
            <a href='#get-involved' className="bg-[#f79630] text-white font-bold px-8 py-3 rounded transition-colors hover:bg-[#e6861c] focus:outline-none focus:ring-2 focus:ring-[#f79630]">
              GET INVOLVED
            </a>
          </div>
          {/* 4IR4HER Logo/Graphic */}
          <div className="flex justify-center md:justify-end">
            <svg width="260" height="160" viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="120" fontFamily="Arial Black, Arial, sans-serif" fontWeight="bold" fontSize="120" fill="#888">4</text>
              <text x="60" y="120" fontFamily="Arial Black, Arial, sans-serif" fontWeight="bold" fontSize="120" fill="#888">iR</text>
              <text x="60" y="120" fontFamily="Arial Black, Arial, sans-serif" fontWeight="bold" fontSize="40" fill="#f79630">HE</text>
              <circle cx="120" cy="50" r="8" stroke="#f79630" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </div>
      </section>

           {/* Packages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d2e83] mb-4">Packages</h2>
          <p className="text-center text-gray-700 mb-10 max-w-4xl mx-auto text-sm md:text-base">
            4ir4youth accelerator packages include both SAQA credit bearing qualification USD's, along with internationally recognised certification. We build and customize programmes according to your specifications and budget! SAQA USD path to be determined based on customization of required initiative.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
            {/* Security */}
            <div>
              <h3 className="text-2xl font-semibold text-[#2d2e83] mb-2">Security</h3>
              <div className="text-[#2d2e83] font-medium mb-1">CompTIA | Microsoft</div>
              <ul className="list-disc pl-5 text-gray-700 text-sm md:text-base">
                <li>System Admin and Networking</li>
                <li>Network Security Control Knowledge of Operating Systems and Virtual Machines</li>
                <li>Coding</li>
                <li>Cloud Security</li>
                <li>Blockchain Security</li>
                <li>The Internet of Things (IoT) Artificial Intelligence (AI)</li>
              </ul>
            </div>
            {/* Programming */}
            <div>
              <h3 className="text-2xl font-semibold text-[#2d2e83] mb-2">Programming</h3>
              <div className="text-[#2d2e83] font-medium mb-1">Python | Microsoft | Ruby</div>
              <ul className="list-disc pl-5 text-gray-700 text-sm md:text-base">
                <li>Python</li>
                <li>C++</li>
                <li>Javascript</li>
                <li>Ruby</li>
                <li>PowerShell</li>
              </ul>
            </div>
            {/* Systems & Networks */}
            <div>
              <h3 className="text-2xl font-semibold text-[#2d2e83] mb-2">Systems & Networks</h3>
              <div className="text-[#2d2e83] font-medium mb-1">CompTIA | Microsoft | CISCO | AWS</div>
              <ul className="list-disc pl-5 text-gray-700 text-sm md:text-base">
                <li>Windows</li>
                <li>Installing & Configuring Hardware & Software</li>
                <li>Cloud administration & Applications</li>
                <li>LAN, WAN, SAN</li>
                <li>Troubleshooting</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
            {/* Data Analysis */}
            <div>
              <h3 className="text-2xl font-semibold text-[#2d2e83] mb-2">Data Analysis</h3>
              <div className="text-[#2d2e83] font-medium mb-1">Microsoft | AWS</div>
              <ul className="list-disc pl-5 text-gray-700 text-sm md:text-base">
                <li>Security</li>
                <li>Azure</li>
                <li>Statistics</li>
                <li>Python</li>
              </ul>
            </div>
            {/* Devops */}
            <div>
              <h3 className="text-2xl font-semibold text-[#2d2e83] mb-2">Devops</h3>
              <div className="text-[#2d2e83] font-medium mb-1">Microsoft | AWS</div>
              <ul className="list-disc pl-5 text-gray-700 text-sm md:text-base">
                <li>Development and Operations</li>
                <li>Delivery methods and theories</li>
                <li>Docker</li>
                <li>Scripting Languages</li>
                <li>Cloud Operations</li>
              </ul>
            </div>
            {/* Cloud Computing */}
            <div>
              <h3 className="text-2xl font-semibold text-[#2d2e83] mb-2">Cloud Computing</h3>
              <div className="text-[#2d2e83] font-medium mb-1">Oracle</div>
              <ul className="list-disc pl-5 text-gray-700 text-sm md:text-base">
                <li>Oracle</li>
                <li>Azure</li>
                <li>Google Cloud</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Machine Learning */}
            <div>
              <h3 className="text-2xl font-semibold text-[#2d2e83] mb-2">Machine Learning</h3>
              <div className="text-[#2d2e83] font-medium mb-1">Google AI | AWS</div>
              <ul className="list-disc pl-5 text-gray-700 text-sm md:text-base">
                <li>Kernels</li>
                <li>Clustering</li>
                <li>Parametric and nonparametric algorithms</li>
                <li>Deep learning techniques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

            {/* New Recruits and Workplace Sponsorship Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="w-full h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center bg-gray-100">
            <img
              src="https://www.dynamicdna.co.za/wp-content/uploads/2023/03/Students-150x150@2x.png"
              alt="Learners at computers"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2e83] mb-3">New Recruits and Workplace Sponsorship</h2>
            <p className="text-gray-700 text-base md:text-lg">
              Bostech Innovations welcome host companies the benefit to offer our youth learners an opportunity to explore and apply their theoretical knowledge in your workplace, thus adding benefit to your workforce with extra sets of hands, as well as the opportunity to be groomed into your culture and ethos. Collectively we can all create an enjoyable, developmental, and sustainable learning and career journey that determines lucrative and sustainable job opportunities for our talented and determined youth of SA!
            </p>
          </div>
        </div>
      </section>

        {/* Enquire Now Section */}
        <section id='get-involved' className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#f79630] mb-4">Get Involved</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">For more information, contact Lucky Sello Matsobane or fill out our form below to get involved:</p>

          {/* --- Web3Forms-powered form --- */}
          <BBBEEEnquiryForm />
        </div>
      </section>
    </div>
  );
};


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
      formData.append('_subject', '4IR4Youth Getting Involved - Bostech Innovations');
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
      setError('Submission failed. Please try again or contact us directly at info@bostechtraining.co.za');
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


export default FourIR;