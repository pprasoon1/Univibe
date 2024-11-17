'use client'
import React, { useState } from 'react';
import { Search, MapPin, Star, GraduationCap, Users, ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';

// Mock data for colleges
const colleges = [
    {
        id: 1,
        name: "Bennett University",
        address: "Greater Noida, Uttar Pradesh, India",
        rating: 4.0,
        studentCount: "10,000",
        image: "https://www.highereducationdigest.com/wp-content/uploads/2021/12/2-550x330.jpg",
        tags: ["Research", "Engineering", "Arts"],
        featured: true
    },
    {
        id: 2,
        name: "Indian Institute of Technology",
        address: "Bombay, Maharastra, India",
        rating: 5.0,
        studentCount: "5000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1QeSCfOMamo7zdIUCMetskJr-tMI4IMTVg&s",
        tags: ["Technology", "Science", "Innovation"],
        featured: true
    },
    {
        id: 3,
        name: "Harvard University",
        address: "Cambridge, MA 02138, United States",
        rating: 4.9,
        studentCount: "23,731",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcBPzsOSMoi7eFUwZOkaX06sx7qtpdsE52jg&s",
        tags: ["Liberal Arts", "Research", "Law"],
        featured: false
    },
    {
      id: 1,
      name: "Stanford University",
      address: "Stanford, CA 94305, United States",
      rating: 4.8,
      studentCount: "16,937",
      image: "https://assets.simpleviewinc.com/simpleview/image/upload/crm/sanmateoca/shutterstock_4189008910-9b68011a5056a36_9b6802fa-5056-a36a-0bbb53c8e971b411.jpg",
      tags: ["Research", "Engineering", "Arts"],
      featured: false
  },
  {
      id: 2,
      name: "Massachusetts Institute of Technology",
      address: "Cambridge, MA 02139, United States",
      rating: 4.9,
      studentCount: "11,376",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKBwnxzxpuCJ1TZyTjEHYxvObYO5UqQE_-A&s",
      tags: ["Technology", "Science", "Innovation"],
      featured: false
  },
  {
      id: 3,
      name: "National Institute of Technology",
      address: "Delhi, India",
      rating: 4.9,
      studentCount: "23,731",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-CfBc6BV4m6hFj-WCmy4cqEF5yKlViHv9g&s",
      tags: ["Liberal Arts", "Research", "Law"],
      featured: false
  },
    // Add more colleges as needed
];

const OnboardingPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [showFilters, setShowFilters] = useState(false);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredColleges = colleges.filter(college => 
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.address.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h1 className="text-3xl font-bold text-gray-900">Find Your Perfect College</h1>
                    <p className="mt-2 text-sm text-gray-600">Discover top institutions that match your aspirations</p>
                </div>
            </header>

            {/* Search and Filter Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative flex-1 w-full">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search by college name or location..."
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <SlidersHorizontal className="h-5 w-5" />
                        Filters
                    </button>
                </div>

                {/* Filter Tags */}
                {showFilters && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {['all', 'featured', 'top-rated', 'research', 'engineering', 'arts'].map(filter => (
                            <button
                                key={filter}
                                onClick={() => setSelectedFilter(filter)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    selectedFilter === filter
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* College Cards Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredColleges.map(college => (
                        <div
                            key={college.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative">
                                <Image
                                    src={college.image}
                                    alt={college.name}
                                    className="w-full h-48 object-cover"
                                    width={500} // Set appropriate dimensions
                                    height={192}
                                />
                                {college.featured && (
                                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        Featured
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-semibold text-gray-900">{college.name}</h3>
                                    <div className="flex items-center">
                                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                                        <span className="ml-1 text-gray-700">{college.rating}</span>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-center text-gray-600">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    <span className="text-sm">{college.address}</span>
                                </div>
                                <div className="mt-4 flex items-center text-gray-600">
                                    <Users className="h-4 w-4 mr-1" />
                                    <span className="text-sm">{college.studentCount} Students</span>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {college.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                    View Details
                                    <ArrowUpRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h2 className="text-2xl font-bold">Need Help Choosing?</h2>
                            <p className="mt-2">Get personalized college recommendations based on your interests and goals</p>
                        </div>
                        <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Take Our Quiz
                        </button>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {[
                        {
                            question: "How do I choose the right college for me?",
                            answer: "Choosing the right college involves considering factors such as location, size, programs offered, and campus culture. It's important to visit campuses and talk to current students."
                        },
                        {
                            question: "What should I look for in a college?",
                            answer: "Look for a college that aligns with your academic and career goals, offers the programs you're interested in, and has a supportive community."
                        },
                        {
                            question: "How can I afford college?",
                            answer: "Research scholarships, grants, and financial aid options available to you. Many colleges offer financial aid resources to help students manage costs."
                        },
                        {
                            question: "What are the benefits of attending a college with a strong alumni network?",
                            answer: "A strong alumni network can provide valuable connections for internships, job opportunities, and mentorship. It's beneficial for building a career."
                        }
                    ].map((faq, index) => (
                        <div key={index} className="border-b pb-4">
                            <h3 className="font-semibold">{faq.question}</h3>
                            <p className="text-gray-600">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-100 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">What Students Are Saying</h2>
                <div className="space-y-4">
                    {[
                        {
                            name: "Jane Doe",
                            testimonial: "Finding the right college was overwhelming, but this site made it easy to compare my options and find the perfect fit!"
                        },
                        {
                            name: "John Smith",
                            testimonial: "The personalized recommendations helped me discover colleges I never considered but turned out to be exactly what I was looking for."
                        },
                        {
                            name: "Emily Johnson",
                            testimonial: "I love the detailed information provided about each college. It really helped me make an informed decision!"
                        }
                    ].map((testimonial, index) => (
                        <div key={index} className="border p-4 bg-white rounded-lg shadow-sm">
<p className="italic">&quot;{testimonial.testimonial}&quot;</p>
<p className="mt-2 font-semibold">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white border-t">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-600">© 2024 College Finder. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default OnboardingPage;
