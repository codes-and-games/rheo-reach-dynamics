import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import prishaLogo from "@/assets/prisha-logo.png";
import glaringLogo from "@/assets/glaring-logo.png";

const testimonials = [
  {
    company: "Prisha Interior Solutions",
    role: "Interior Design Firm at Design & Aesthetics",
    text: "The website beautifully captures our design philosophy and values. RheoReach Associates understood our vision and created an elegant, user-friendly platform that showcases our work perfectly.",
    logo: prishaLogo,
  },
  {
    company: "Glaring Evolution Technologies",
    role: "Solar Power EPC at Engineering Solutions",
    text: "RheoReach Associates delivered a professional website that perfectly represents our technical expertise in solar energy. The clean design and structured workflow sections have significantly improved our client engagement.",
    logo: glaringLogo,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about working with us
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.company}
              className="glass-card p-8 group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up border-primary/10 hover:border-primary/20 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote icon background */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-primary" />
              </div>
              
              <div className="space-y-6 relative z-10">
                {/* Client logo */}
                <div className="flex items-center gap-4">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:bg-primary/30 transition-all duration-500" />
                    <div className="relative bg-background/80 p-3 rounded-lg group-hover:bg-background transition-all duration-300">
                      <img 
                        src={testimonial.logo} 
                        alt={testimonial.company}
                        className="w-20 h-20 object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {testimonial.text}
                </p>
                
                {/* Company & role */}
                <div className="pt-4 border-t border-primary/10">
                  <p className="font-semibold text-lg">{testimonial.company}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
