
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "VYBTOR helped me finally stick to my study schedule and build better habits. The daily challenges are actually fun and I look forward to them!",
  author: "Maya, 16",
  role: "High School Student, California",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "As a parent, I love seeing my daughter engaged with something positive instead of endless scrolling. VYBTOR has helped her become more confident and focused.",
  author: "Jennifer Martinez",
  role: "Parent of VYBTOR Beta User",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "The AI coach feels like having a real mentor who understands my goals and keeps me motivated. I've improved my grades and feel more in control of my life.",
  author: "Alex, 17",
  role: "Beta User, New York", 
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "Finally, a tech platform that's actually helping my teen develop discipline and focus instead of being another distraction. The results speak for themselves.",
  author: "David Chen",
  role: "Parent and Educational Consultant",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  // Determine which teen photo to use based on author
  let teenPhoto = null;
  if (author.includes("Maya") || author.includes("16")) {
    teenPhoto = "/lovable-uploads/teens-relaxing-together.jpg";
  } else if (author.includes("Alex") || author.includes("17")) {
    teenPhoto = "/lovable-uploads/group-students-celebrating.jpg";
  }

  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      {teenPhoto && (
        <div className="absolute top-4 right-4 w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
          <img 
            src={teenPhoto}
            alt="Testimonial user"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Testimonials</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">What teens and parents are saying</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
