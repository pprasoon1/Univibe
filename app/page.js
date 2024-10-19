import React from 'react';
import Link from 'next/link';
import { ChevronRight, Search, Star, Users, ArrowRight, BookOpen, CheckCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="absolute inset-0 bg-black/30"></div>
          {/* <img 
            src="/api/placeholder/1920/1080" 
            alt="Campus background" 
            className="w-full h-full object-cover mix-blend-overlay opacity-50"
          /> */}
        </div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white [text-shadow:_0_1px_12px_rgb(0_0_0_/_20%)]">
            Find The Best University 
            <span className="block mt-2 bg-gradient-to-r from-blue-200 to-purple-200 text-transparent bg-clip-text">
              For Your Future
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-50 max-w-3xl mx-auto leading-relaxed">
            Compare colleges, read genuine reviews, and connect with students to make an informed decision about your future.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input 
                type="text"
                placeholder="Search universities, courses, or programs..."
                className="w-full px-6 py-4 rounded-full text-gray-900 bg-white/95 backdrop-blur-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
              <button className="absolute right-2 top-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/explore" 
              className="group bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center">
              Get Started
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" 
              className="group bg-blue-700/30 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Learn More
            </Link>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <div className="relative -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Universities", value: "1,000+" },
            { label: "Student Reviews", value: "50,000+" },
            { label: "Active Students", value: "25,000+" },
            { label: "Success Rate", value: "94%" }
          ].map((stat, index) => (
            <div key={index} 
              className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                {stat.value}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-4xl font-bold mb-16 text-gray-800">
            Why Choose 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"> UniVibe?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "College Comparison",
                desc: "Compare a wide range of colleges based on fees, courses, and placements.",
                icon: <Search className="w-8 h-8 text-blue-600" />
              },
              {
                title: "Genuine Reviews",
                desc: "Read reviews from students and alumni to get real insights into campus life.",
                icon: <Star className="w-8 h-8 text-blue-600" />
              },
              {
                title: "Connect with Students",
                desc: "Directly interact with current students to get authentic answers.",
                icon: <Users className="w-8 h-8 text-blue-600" />
              }
            ].map((feature, index) => (
              <div key={index} 
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h3 className="text-4xl font-bold text-center mb-16">
            How It 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"> Works</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
            {/* Connecting line in background */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200"></div>
            
            {[
              {
                title: "Search Colleges",
                desc: "Find the best colleges that match your criteria.",
                icon: <Search className="w-8 h-8" />
              },
              {
                title: "Read Reviews",
                desc: "Get feedback from genuine students and alumni.",
                icon: <BookOpen className="w-8 h-8" />
              },
              {
                title: "Connect & Apply",
                desc: "Connect with current students and apply easily.",
                icon: <ArrowRight className="w-8 h-8" />
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">{step.title}</h4>
                  <p className="mt-4 text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-16 text-gray-800">
            What Our 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"> Users Say</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "UniVibe helped me compare colleges easily, and I found my dream university!",
                name: "Sarah Lee",
                role: "Business Student"
              },
              {
                text: "Connecting with students before applying was a game changer. Best platform ever!",
                name: "Jason Kumar",
                role: "Engineering Student"
              },
              {
                text: "The genuine reviews gave me clarity. Love how easy the platform is to use.",
                name: "Priya Sen",
                role: "Arts Student"
              }
            ].map((testimonial, index) => (
              <div key={index} 
                className="group p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-6">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto" />
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <h4 className="text-blue-600 font-semibold">{testimonial.name}</h4>
                <span className="text-gray-400 text-sm">{testimonial.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h3 className="text-4xl font-bold mb-6 text-white">Ready to Find Your Dream College?</h3>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Start comparing colleges, reading reviews, and connecting with students now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/signup" 
              className="group bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center">
              Sign Up for Free
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/explore" 
              className="group bg-blue-700/30 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Explore Universities
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}