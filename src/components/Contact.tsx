import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@rheoreach.com",
    href: "mailto:contact@rheoreach.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98225 74643",
    href: "tel:+919359315488",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "C-101, Jubliee Park, Warje, Pune",
    href: "https://maps.google.com/?q=C-101,+Jubliee+Park,+Warje,+Pune",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to scale your business? Get in touch with us today
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card 
              key={info.label}
              className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up border-primary/10 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a 
                href={info.href}
                target={info.label === "Address" ? "_blank" : undefined}
                rel={info.label === "Address" ? "noopener noreferrer" : undefined}
                className="space-y-4 block"
              >
                {/* Icon with glow */}
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/40 transition-all" />
                  <div className="relative bg-primary/10 p-5 rounded-full group-hover:bg-primary/20 transition-all">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {info.value}
                  </p>
                </div>
              </a>
            </Card>
          ))}
        </div>
        
        <div 
  className="text-center mt-12 animate-fade-in-up flex justify-center space-x-6" 
  style={{ animationDelay: "0.4s" }}
>
  <div 
  className="text-center mt-12 animate-fade-in-up flex flex-col sm:flex-row justify-center gap-4 sm:space-x-6" 
  style={{ animationDelay: "0.4s" }}
>
  <Button 
    variant="hero" 
    size="xl"
    onClick={() => window.location.href = 'mailto:rheoreach@gmail.com'}
  >
    Send us a Message
    <Mail className="w-5 h-5" />
  </Button>

  <Button 
    variant="glass" 
    size="xl"
    onClick={() => window.open("https://cal.com/rheoreach/30min", "_blank")}
  >
    Book a Call
  </Button>
</div>

</div>
      </div>
    </section>
  );
};
