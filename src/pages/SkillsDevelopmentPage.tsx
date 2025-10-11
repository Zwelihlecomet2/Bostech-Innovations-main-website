import React from 'react';

const SkillsDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[340px] md:h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/590570/pexels-photo-590570.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 md:bg-white/60" />
        {/* Content */}
        <div className="relative z-10 text-left px-4 w-full max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 pt-8 md:pt-0">
            Skills Development
          </h1>
          <p className="text-lg md:text-xl font-medium text-[#f79630] drop-shadow-lg max-w-2xl">
            Skills development can enhance your employees value and in turn contribute to the success of your business.
          </p>
        </div>
      </section>

      {/* Unlock Potential Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Unlock Potential"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2e83] mb-2">Unlock Potential</h2>
            <p className="text-[#2d2e83] text-base md:text-lg font-semibold mb-4">
              Enhance your workforce's Information, Communication and Technology knowledge and improve skills through corporate short courses offered through an easy to use platform.
            </p>
            <p className="text-[#2d2e83] text-base md:text-lg mb-2">
              At Dynamic DNA we offer a wide variety of Skills Development Solutions and help meet your Skills Development Targets.
            </p>
            <ul className="list-disc pl-6 text-[#2d2e83] text-base md:text-lg mb-4">
              <li>Skills Development Facilitation</li>
              <li>Skills Gap Analysis</li>
              <li>Skills Development Interventions</li>
              <li>Skills Development Courses</li>
            </ul>
            <p className="text-[#2d2e83] text-base md:text-lg mb-6">
              We also assist in all your Workplace Skills Plan and Annual Training Pivotal Plan
            </p>
            <a href='#skills-development-enquire' className="bg-[#f79630] text-white font-bold px-8 py-3 rounded transition-colors hover:bg-[#e6861c] focus:outline-none focus:ring-2 focus:ring-[#f79630]">
              ENQUIRE NOW
            </a>
          </div>
        </div>
      </section>

      {/* Skills Development Courses We Offer Section */}
      <section className="relative py-16 bg-[#2d2e83] bg-blend-multiply" style={{backgroundImage: "url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-[#2d2e83] opacity-90"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#f79630] mb-10">Skills Development Courses we Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white text-lg font-medium">
            <ul className="space-y-2">
              <li>CompTIA</li>
              <li>Microsoft Azure Fundamentals</li>
              <li>Microsot Azure Data Scientist</li>
              <li>Developing Solutions for Microsoft Azure</li>
              <li>Analyzing Data with Microsoft Power BI</li>
              <li>Oracle Java Programmer</li>
            </ul>
            <ul className="space-y-2">
              <li>Microsoft Azure Security Technologies</li>
              <li>AWS Cloud Practitioner</li>
              <li>Fundamentals of Project Management</li>
              <li>Training the Trainer</li>
              <li>Problem Solving & Decision Making</li>
              <li>Business Communications</li>
            </ul>
          </div>
        </div>
      </section>

            {/* Empowering Your Workforce Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d2e83] mb-1">Empowering Your Workforce</h2>
          <h3 className="text-lg md:text-xl text-[#2d2e83] mb-6 font-medium">Importance of Investing in Skills Development for Business Growth.</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Skills development is vital for businesses in South Africa as it helps to improve the competencies of the workforce, enhance productivity and efficiency, and ultimately contribute to economic growth. With a high unemployment rate and a large pool of unskilled workers, we have a responsibility to invest in skills development to address the skills gap and increase the employability of individuals. Investing in staff development promotes employee retention and loyalty, leading to a more stable and committed workforce. It also helps businesses remain competitive by ensuring they have the necessary skills and knowledge to adapt to changing market and technological trends.
          </p>
        </div>
      </section>

            {/* Enquire Now Section */}
      <section id='skills-development-enquire' className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#f79630] mb-4">Enquire Now</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            For more information on our skills development courses, skills development facilitation, and how we can upskill your employees, call us at <a href="tel:0117595940" className="text-[#2d2e83] font-semibold hover:underline">011 759 5940</a> or submit your info in the enquiry form below.
          </p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" />
              <input type="text" placeholder="Surname" className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Contact Number" className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" />
              <input type="email" placeholder="Email Address" className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Company Name" className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" />
              <input type="text" placeholder="Position at Company" className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630]" />
            </div>
            <textarea placeholder="Message" rows={4} className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#f79630] resize-none" />
            <div className="flex justify-center pt-2">
              <button type="submit" className="bg-[#2d2e83] text-white font-bold px-12 py-3 rounded transition-colors hover:bg-[#23245c] focus:outline-none focus:ring-2 focus:ring-[#f79630]">SUBMIT</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SkillsDevelopmentPage;
