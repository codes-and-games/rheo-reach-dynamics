import { Card } from "@/components/ui/card";
import { Search, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Analysis",
    description: "Deep dive into your business, audience, and goals. We map out the perfect strategy.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy",
    description: "Tailored marketing plan designed specifically for your objectives and market.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Execution",
    description: "Results delivered with speed, accuracy, and efficiency. Watch your business grow.",
  },
];

export const Process = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, effective, and results-driven approach
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <Card className="glass-card p-8 relative overflow-hidden group hover:scale-105 transition-all duration-500 border-primary/10 hover:border-primary/30">
                {/* Number background */}
                <div className="absolute top-4 right-4 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {step.number}
                </div>
                
                <div className="space-y-6 relative z-10">
                  {/* Icon */}
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-500" />
                    <div className="relative bg-primary/10 p-5 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-primary font-mono">{step.number}</span>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
