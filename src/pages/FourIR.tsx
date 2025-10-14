import React from 'react'

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
        <div className="absolute inset-0 bg-[#2d2e83]/70" />
        {/* Content */}
        <div className="relative z-10 px-8 md:px-20 lg:px-32 w-full flex flex-col items-start justify-center h-full">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">4IR4HER</h1>
          <p className="text-lg md:text-2xl text-[#2d2e83] bg-white/0 font-medium" style={{marginTop: '-0.5rem'}}>
            Fourth Industrial Revolution For Her
          </p>
        </div>
      </section>
      {/* No Women Left Behind Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2e83] mb-3">No Women Left Behind!</h2>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              4IR4HER is a movement! A movement with the purpose to empower WOMEN to enter the world of technology. The ICT industry in SA has a shortage of skills, which is a great opportunity to include more females into the trade, through a movement like 4IR4HER. Dynamic DNA’s 4IR4HER initiative aims to train and equip 10 000 females with ICT skills which will lead to job creation and employment opportunities within the next 5 years. We strive to create technological and social impact through various digitalization activities that will empower females and create a new digital eco-system, while promoting Tech-preneurship. Dynamic DNA fully advocates and walks the journey with women in our accelerator programmes to ensure they are supported, trained, and fast-tracked into 4IR related job roles and businesses.
            </p>
            <button className="bg-[#f79630] text-white font-bold px-8 py-3 rounded transition-colors hover:bg-[#e6861c] focus:outline-none focus:ring-2 focus:ring-[#f79630]">
              GET INVOLVED
            </button>
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
            4ir4her accelerator packages include both SAQA credit bearing qualification USD’s, along with internationally recognised certification. We build and customize programmes according to your specifications and budget! SAQA USD path to be determined based on customization of required initiative.
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
              src="/src/assets/Screenshot (256) copy.png"
              alt="Learners at computers"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2e83] mb-3">New Recruits and Workplace Sponsorship</h2>
            <p className="text-gray-700 text-base md:text-lg">
              Dynamic DNA welcome host companies the benefit to offer our female learners an opportunity to explore and apply their theoretical knowledge in your workplace, thus adding benefit to your workforce with extra sets of hands, as well as the opportunity to be groomed into your culture and ethos. Collectively we can all create an enjoyable, developmental, and sustainable learning and career journey that determines lucrative and sustainable job opportunities for our talented and determined women of SA!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FourIR;