import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Floating Book a Call Button */}
      <Button
        variant="hero"
        size="xl"
        className="
          group fixed bottom-4 right-4 z-50 shadow-lg
          px-4 py-2 text-sm
          sm:px-6 sm:py-3 sm:text-base
          md:bottom-6 md:right-6
        "
        onClick={() => window.open("https://cal.com/rheoreach/30min", "_blank")}
      >
        {/* On small screens just the phone icon */}
        <span className="sm:hidden">
          <Phone className="w-5 h-5" />
        </span>
        {/* On sm+ screens show full text */}
        <span className="hidden sm:inline-flex items-center gap-2">
          Book a Call
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </Button>

      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm animate-scale-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">
              Digital Solutions at your thumbprints
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block">Build Businesses</span>
            <span className="block text-gradient">That Scale</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategic marketing & web solutions that turn clicks into customers
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={() =>
                window.open("https://cal.com/rheoreach/30min", "_blank")
              }
            >
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="glass"
              size="xl"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Our Services
            </Button>
          </div>

          {/* Stats or Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                10+
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Delivered
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">
                Support Available
              </div>
            </div>
            <div className="space-y-2 col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                4.8★
              </div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
