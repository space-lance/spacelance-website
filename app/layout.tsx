import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SpaceLance | Premium Digital Studio",
  description: "Precision-crafted digital products for real-world performance. Web development, UI/UX design, and software solutions that drive growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-[#0a0a0a]`}
      >
        {/* Navigation */}
        <nav className="fixed w-full top-0 z-50 px-4 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="glass rounded-2xl px-6 py-4 flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">SpaceLance</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <a href="#" className="text-sm font-medium text-white hover:text-indigo-400 transition-colors">Home</a>
                <a href="#services" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Services</a>
                <a href="#projects" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Projects</a>
                <a href="#testimonials" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Testimonials</a>
              </div>

              {/* CTA Button */}
              <div className="flex items-center gap-4">
                <button className="hidden sm:block text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                  Contact
                </button>
                <button className="px-5 py-2.5 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-[#1f1f1f] bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 md:px-12 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              {/* Brand column */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-white tracking-tight">SpaceLance</span>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                  Precision-crafted digital products for real-world performance. We transform ideas into market-leading solutions.
                </p>
                <div className="flex gap-4">
                  {['twitter', 'linkedin', 'github', 'dribbble'].map((social) => (
                    <a key={social} href="#" className="w-10 h-10 rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center text-neutral-500 hover:text-white hover:border-[#404040] transition-all">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Links columns */}
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-3">
                  {['Web Development', 'UI/UX Design', 'Software Systems', 'Motion & VFX', 'Brand Identity'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-neutral-500 text-sm hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-3">
                  {['About Us', 'Careers', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-neutral-500 text-sm hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
                <ul className="space-y-3">
                  <li className="text-neutral-500 text-sm">hello@spacelance.io</li>
                  <li className="text-neutral-500 text-sm">+1 (555) 123-4567</li>
                  <li className="text-neutral-500 text-sm">San Francisco, CA</li>
                </ul>
                <button className="mt-6 px-5 py-2.5 rounded-full border border-[#262626] text-white text-sm font-medium hover:bg-[#141414] transition-colors">
                  Book a Call
                </button>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-8 border-t border-[#1f1f1f] flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-neutral-600 text-sm">
                © 2025 SpaceLance. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-neutral-600 text-sm hover:text-neutral-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-neutral-600 text-sm hover:text-neutral-400 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
