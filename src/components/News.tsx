import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      title: "MICT SETA DISCRETIONARY GRANT WINDOW FOR 2025/26 IS NOW OPEN",
      excerpt: "MICT and Dynamic DNA invites constituent and eligible stakeholders within MICT sub sectors to apply for the MICT SETA Discretionary Grant 2025/26 funding.",
      date: "June 5, 2024",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=450",
      category: "News Articles"
    },
    {
      title: "3rd Annual Workplace Skills Plan, B-BBEE, Skills Development and 4ir4her Workshop",
      excerpt: "Dynamic DNA is hosting its annual 3rd Workplace Skills Plan, B-BBEE, Skills Development and 4IR4HER Workshop and inviting you to join!",
      date: "January 22, 2024",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=534",
      category: "News Articles"
    },
    {
      title: "Graduation of 2023!",
      excerpt: "Congratulations to our graduates of 2023!",
      date: "January 16, 2024",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      category: "News Articles"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">WHAT'S NEWS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </div>
                  
                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Additional News List */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="space-y-6">
            {newsItems.concat([
              {
                title: "CompTIA Cybersecurity Analyst CySA+",
                date: "November 19, 2023",
                image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
                category: "Courses"
              },
              {
                title: "Uplifting Disabled Women in IT",
                date: "October 4, 2023",
                image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
                category: "News Articles"
              },
              {
                title: "What are discretionary and mandatory seta grants?",
                date: "August 22, 2023",
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
                category: "News Articles"
              }
            ]).map((item, index) => (
              <div key={index + 3} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                    {item.title}
                  </h4>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;