import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Handles form submission using fetch to Web3Forms API
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus("submitting");

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();

    if (result.success) {
      setStatus("success");
      form.reset();
    } else {
      console.error("Error:", result);
      setStatus("error");
    }
  } catch (err) {
    console.error("Fetch failed:", err);
    setStatus("error");
  }
};

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative flex items-center h-[320px] md:h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080)`,
        }}
      >
        {/* Overlay for left side gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-transparent"></div>
        <div className="relative z-10 flex items-center h-full pl-12 md:pl-32">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c3878]">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Info, Map & Form Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Info & Map */}
        <div>
          {/* Contact Info */}
          <div className="mb-10 space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#2c3878] p-3 rounded">
                <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[#2c3878]">Call Us</div>
                <div className="text-gray-700">+27 (0) 15 001 2309</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#2c3878] p-3 rounded">
                <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.29 6.59a1 1 0 001.42 0L20 10.01V20H4z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[#2c3878]">E-mail Us</div>
                <div className="text-gray-700">info@bostechtraining.co.za</div>
              </div>
            </div>
          </div>
          {/* Location Title */}
          <h2 className="text-3xl font-semibold text-[#2c3878] mb-4">Polokwane</h2>
          {/* Map */}
          <div className="rounded overflow-hidden shadow border">
            <iframe
              title="Polokwane Map"
              src="https://www.google.com/maps?q=Office%20LU29,%20IT%20Park,%2011%20Pierre%20Street%20Bendor,%20Polokwane,%200699&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Right: Form */}
        <div>
          <h3 className="text-xl font-semibold text-[#2c3878] mb-6">Send us a message</h3>
          {/* Success Message Block */}
          {status === "success" && (
            <div className="mb-6">
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded text-center font-medium shadow">
                Thank you! Your message has been sent successfully.
              </div>
            </div>
          )}
          {status === "error" && (
            <div className="mb-6">
              <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded text-center font-medium shadow">
                Oops! Something went wrong. Please try again.
              </div>
            </div>
          )}
          <form
            className="space-y-4"
            onSubmit={handleSubmit}
            onReset={() => setStatus("idle")}
          >
            <input type="hidden" name="access_key" value="388d14e6-3676-41bf-a5f0-cb31c11c9ea8" />
            <div className="flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-1/2 border border-gray-400 rounded px-3 py-2"
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                required
                className="w-1/2 border border-gray-400 rounded px-3 py-2"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full border border-gray-400 rounded px-3 py-2"
            />
            <input
              type="text"
              name="Contact Us"
              placeholder="Contact number"
              required
              className="w-full border border-gray-400 rounded px-3 py-2"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              required
              className="w-full border border-gray-400 rounded px-3 py-2"
            ></textarea>
            <button
              type="submit"
              className="bg-[#2c3878] text-white px-8 py-2 rounded hover:bg-[#1a2554] transition"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sent" : "Send"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;