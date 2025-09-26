import React from "react";
import focusRobotImage from "@/assets/vybtor-focus-robot.jpg";

const ParentReassuranceSection = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-white" id="parent-reassurance">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="pulse-chip mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
            <span>For Parents</span>
          </div>
          
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Safe. Positive. Teen-first.
          </h2>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            VYBTOR offers a healthy digital space for teenagers: motivating, safe, and focused on growth. 
            Our mission is to help teens develop discipline, resilience, and emotional balance — away from toxic content.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="space-y-4">
              {/* Main teenager image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/lovable-uploads/f9d0d84d-4df4-4233-ba4d-1253819adbab.png" 
                  alt="Supportive teenage friendship with VYBTOR" 
                  className="w-full h-auto object-cover"
                />
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                
                {/* Trust indicators */}
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  ✓ Privacy First
                </div>
                <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  ✓ Expert Backed
                </div>
              </div>
              
              {/* Parent-teen supportive images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/lovable-uploads/2f4cdafb-fc57-430a-af2a-027e0f58064d.png" 
                    alt="Supportive teen friendship" 
                    className="w-full h-24 object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/lovable-uploads/f3a1eee6-460b-4295-b770-329142b7c7d1.png" 
                    alt="Happy teen couple" 
                    className="w-full h-24 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.36 6.64C19.78 8.05 19.78 10.29 18.36 11.7L12 18.07L5.64 11.7C4.22 10.29 4.22 8.05 5.64 6.64C7.05 5.22 9.29 5.22 10.7 6.64L12 7.93L13.3 6.64C14.71 5.22 16.95 5.22 18.36 6.64Z" stroke="#EF4444" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">No toxic feeds or harmful distractions</h3>
              </div>
              <p className="text-gray-600">Unlike social media, VYBTOR creates a positive environment focused purely on personal growth and achievement.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3B82F6" strokeWidth="2" fill="none"/>
                    <path d="M9 12L11 14L15 10" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Privacy & data security first</h3>
              </div>
              <p className="text-gray-600">End-to-end encryption, minimal data collection, and transparent privacy practices keep your teen's information safe.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14L9 11L7 9L9 7L12 10L15 7L17 9L15 11L12 14Z" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="#10B981" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Backed by experts in psychology, education, and technology</h3>
              </div>
              <p className="text-gray-600">Our coaching methodology is developed with child psychologists, educators, and youth development specialists.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentReassuranceSection;