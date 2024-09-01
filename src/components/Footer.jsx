import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <div className="bg-gradient-to-r from-[#071c39] to-[#143d72] text-white py-10 px-5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-1/3 mb-8 lg:mb-0 p-4">
                    <h2 className="text-3xl font-bold mb-4">EtherealCash</h2>
                    <p className="text-gray-300">
                        Empowering traders on Signal Vase with secure and efficient digital transactions. EtherealCash is the backbone of trading on the platform, facilitating seamless purchases and investments.
                    </p>
                </div>
                <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                    <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                    <ul>
                        <li className="mb-2"><Link href="/" className="hover:underline">Home</Link></li>
                        <li className="mb-2"><Link href="/#about" className="hover:underline">About Us</Link></li>
                        <li className="mb-2"><Link href="/whitepaper" className="hover:underline">Whitepaper</Link></li>
                        <li className="mb-2"><Link href="/roadMap" className="hover:underline">Roadmap</Link></li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/3">
                    <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                    <p className="text-gray-300 mb-2">Email: contact@etherealcash.com</p>
                    <Link href="/contact" className="hover:underline">Contact Form</Link>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-600 pt-5 text-center">
                <p className="text-gray-400">&copy; 2024 EtherealCash. All rights reserved.</p>
            </div>
        </div>
    );
}
