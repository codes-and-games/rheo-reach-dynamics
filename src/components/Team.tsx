import { Card } from "@/components/ui/card";

export const WhoWeAre = () => {
  return (
    <section id="team" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold">
            Who <span className="text-gradient">We Are</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="glass-card p-8 text-center animate-fade-in-up border-primary/10 hover:border-primary/20 transition-all duration-300">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              RheoReach was founded with the mission to help businesses thrive 
              through strategic marketing and digital solutions. We are 
              passionate about creativity and driven by results, committed to 
              helping our clients grow and succeed in their industries.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};