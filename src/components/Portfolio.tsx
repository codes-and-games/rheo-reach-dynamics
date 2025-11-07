import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";
import glaringEvolution from "@/assets/glaring-evolution.png";
import prishaInterior from "@/assets/prisha-interior.png";
import lifePillars from "@/assets/life-pillars.png";

const websites = [
  {
    name: "Glaring Evolution",
    url: "https://www.glaringevolution.com/",
    description: "Official website for a leading solar power EPC solutions company, designed to reflect technical expertise and years of industry experience.",
    features: [
      "Clean, responsive layout",
      "Structured workflow sections",
      "High-performance hosting",
      "SEO-optimized content",
      "Sustainable design theme"
    ],
    image: glaringEvolution
  },
  {
    name: "Prisha Interior Solutions",
    url: "https://www.prishainteriorsolutions.in/",
    description: "Modern, elegant website for a full-service interior design firm, capturing their creative philosophy and refined aesthetic.",
    features: [
      "Minimalist interface",
      "Mission & values sections",
      "Mobile-optimized layout",
      "Visual storytelling",
      "Sustainability focus"
    ],
    image: prishaInterior
  },
  {
    name: "Life Pillars",
    url: "https://life-pillars-compass.vercel.app/auth",
    description: "Full-featured productivity platform for organizing, tracking, and growing across every aspect of life with data-driven insights.",
    features: [
      "Goal tracking system",
      "Time management tools",
      "Reflective journaling",
      "Progress analytics",
      "Dark-mode dashboard"
    ],
    image: lifePillars
  }
];

const graphicDesignClients = [
  {
    name: "Prisha Interior Solutions",
    images: Array(13).fill("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop")
  },
  {
    name: "Vaishali Design Studio",
    images: Array(7).fill("https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?w=800&h=600&fit=crop")
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Websites Section */}
        <div className="mb-24">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold">
              Websites <span className="text-gradient">Designed & Developed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Crafting digital experiences that drive results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {websites.map((website, index) => (
              <Card
                key={website.name}
                className="glass-card overflow-hidden group hover:scale-105 transition-all duration-500 border-primary/10 hover:border-primary/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Screenshot */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={website.image}
                    alt={website.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      {website.name}
                    </h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0"
                      onClick={() => window.open(website.url, "_blank")}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {website.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-primary">Key Features</h4>
                    <ul className="space-y-1">
                      {website.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group/btn"
                    onClick={() => window.open(website.url, "_blank")}
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Graphic Design Section */}
        <div>
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold">
              Graphic <span className="text-gradient">Design Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Creative visual solutions that captivate and engage
            </p>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {graphicDesignClients.map((client, index) => (
              <div
                key={client.name}
                className="space-y-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-3xl font-bold text-center">
                  {client.name}
                </h3>

                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {client.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex} className="md:basis-1/2 lg:basis-1/3">
                        <Card className="glass-card overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300">
                          <div className="aspect-[4/3] relative overflow-hidden">
                            <img
                              src={image}
                              alt={`${client.name} design ${imgIndex + 1}`}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
