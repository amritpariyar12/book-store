import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have questions about our books or publications? We'd love to hear from you.
                        Reach out to us using the form below or visit our office.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Our Office</h3>
                                    <p className="mt-1 text-gray-600">
                                        Milan Chowk, Butwal<br />
                                        Nepal
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                                    <p className="mt-1 text-gray-600">
                                        +977-1-4223344<br />
                                        +977-9841000000
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                                    <p className="mt-1 text-gray-600">
                                        info@bookstore.com.np<br />
                                        support@bookstore.com.np
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-shadow"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-shadow"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-shadow resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                            >
                                <Send className="h-4 w-4 mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
