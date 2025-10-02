import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    company: "AvatarMurti",
    text: "I entrusted RheoReach with the marketing, social media handling, and lead generation for my business, Avatar Murti, and the experience was outstanding. Their team worked professionally and delivered excellent results. Their expertise in social media management and marketing significantly boosted my business. A special thanks to my friend Shaurya! He has always given me the best advice and guided me in the right direction. For reliable and result-oriented digital solutions, RheoReach is definitely the best choice.",
    image: "https://framerusercontent.com/images/V57EA5AKefLTF5g8hBi5FKP2Ri8.jpg?scale-down-to=1024", // Replace with better
  },
  {
    company: "Lok Seva E-School Pratishthan",
    text: "स्वप्न मोठी असू द्या, मेहनतीला दिशा द्या! लोकसेवा प्रतिष्ठान संचालित लोकसेवा ई-स्कूल कडून शौर्य व विभ्रम यांच्या उद्योजकीय प्रवासाला मनःपूर्वक शुभेच्छा! केवळ १५ व्या वर्षी स्वतःची सोशल मीडिया मार्केटिंग कंपनी सुरु करून त्यांनी दाखवून दिले की वय महत्वाचे नाही, तर जिद्द आणि प्रबळ महत्वाकांक्षा असतात. त्यांच्या या कर्तृत्वाचा सन्मान करताना आम्हाला अभिमान वाटतो. अपार मेहनत आणि नवकल्पना घेऊन ते यशाच्या शिखरावर पोहोचतील ही आम्हाला शुभेच्छा! लोकसेवा ई-स्कूल तुझ्या सोबत आहे - पुढे चल, जग जिंक!",
    image: "/img/lokseva.jpg", // Replace with better
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
              className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up border-primary/10 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <img 
                src={testimonial.image} 
                alt={testimonial.company} 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-8 relative">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-primary" />
                </div>
                
                <div className="space-y-6 relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Testimonial text */}
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.text}
                  </p>
                  
                  {/* Company */}
                  <div className="pt-4 border-t border-primary/10">
                    <p className="font-semibold text-primary">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
