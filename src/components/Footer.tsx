
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-gray-50 border-t border-gray-100 py-8 sm:py-12">
      <div className="container px-6 lg:px-8 mx-auto">
        {/* Logo and Brand Section */}
        <div className="flex flex-col items-center mb-8 footer-brand-section rounded-xl">
          <div className="mb-4">
            <img 
              src="/lovable-uploads/02764fa8-2399-4f1e-8f30-7a4b571143d6.png" 
              alt="VYBTOR Logo" 
              className="h-12 sm:h-14 md:h-16 w-auto object-contain logo-enhanced vybtor-brand-shadow" 
              style={{
                maxWidth: '250px'
              }}
            />
          </div>
          <p className="text-gray-600 text-center max-w-md text-sm sm:text-base font-medium">
            Your AI Coach. Your Growth. Your Flow.
          </p>
        </div>
        
        {/* Links Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-8">
          <a href="#features" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm font-medium">
            About
          </a>
          <a href="#get-access" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm font-medium">
            Join Beta
          </a>
          <a href="mailto:hello@vybtor.com" className="text-gray-600 hover:text-pulse-500 transition-colors text-sm font-medium">
            Contact
          </a>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-gray-500 text-xs sm:text-sm">
            © 2025 VYBTOR. All rights reserved. Built for teens, by experts.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
