import React from "react";
import coachRobotImage from "@/assets/vybtor-coach-robot.jpg";
import teenRobotImage from "@/assets/vybtor-teen-robot.jpg";

const TeenBenefitsSection = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-gray-50" id="why-vybtor">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="pulse-chip mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
            <span>Benefits</span>
          </div>
          
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Why VYBTOR is Different
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L19 7L16.74 12.74L22 14L15.74 15.26L17 21L11.26 18.91L10 25L8.74 18.91L3 21L4.26 15.26L-2 14L3.26 12.74L1 7L6.91 8.26L8 2L9.09 8.26L15 7L12.74 12.74L18 14L11.74 15.26L13 21L7.26 18.91L6 25L4.74 18.91L-1 21L0.26 15.26L-6 14L-0.74 12.74L-3 7L2.91 8.26L4 2L5.09 8.26L11 7L8.74 12.74L14 14L7.74 15.26L9 21L3.26 18.91L2 25L0.74 18.91L-5 21L-3.74 15.26L-10 14L-3.74 12.74L-6 7L-0.09 8.26Z" stroke="#FC4D0A" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Daily micro-challenges adapted to your style</h3>
                <p className="text-gray-600">Personalized daily tasks that match your interests, schedule, and growth goals.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L15.09 8.26L23 9L17 14.74L18.18 22.02L12 19L5.82 22.02L7 14.74L1 9L8.91 8.26L12 1Z" stroke="#FC4D0A" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">An AI voice that motivates you like a real coach</h3>
                <p className="text-gray-600">Your personal AI companion speaks your language and adapts to your motivation style.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12ZM12 7V12L16 14" stroke="#FC4D0A" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Gamified levels, badges, and rewards</h3>
                <p className="text-gray-600">Track your progress through engaging achievements that celebrate every milestone.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pulse-100 rounded-full flex items-center justify-center shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18V5L12.5 12L16 5V18H9Z" stroke="#FC4D0A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Music-driven sessions that keep you in the zone</h3>
                <p className="text-gray-600">Focus sessions synchronized with beats and rhythms that enhance your concentration.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main teenager image */}
              <div className="col-span-2 relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/lovable-uploads/f6d355d1-ec10-4af8-99c0-158d3fe2b337.png" 
                  alt="Happy diverse teenagers using VYBTOR" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Teen photos */}
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="/lovable-uploads/group-students-celebrating.jpg" 
                  alt="Happy teenagers celebrating together" 
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                  Real VYBTOR Users
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="/lovable-uploads/3bab2cf6-5bcf-4822-a410-ed0dad0f0237.png" 
                  alt="Motivated teens with VYBTOR" 
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                  Growing Together
                </div>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-pulse-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">V</span>
                </div>
                <span className="font-semibold text-gray-900">VYBTOR Coach</span>
              </div>
              <p className="text-sm text-gray-600">"Ready to level up your focus today?"</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="#get-access" 
            className="inline-flex items-center justify-center group text-center" 
            style={{
              backgroundColor: '#FE5C02',
              borderRadius: '1440px',
              boxSizing: 'border-box',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontSize: '14px',
              lineHeight: '20px',
              padding: '16px 32px',
              border: '1px solid white',
            }}
          >
            Be one of the first beta testers
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeenBenefitsSection;