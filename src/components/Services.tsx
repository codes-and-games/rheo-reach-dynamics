import { Card } from "@/components/ui/card";
import { MessageSquare, Video, Target, Share2, Globe, Code } from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "At RheoReach, we design impactful social media campaigns that boost visibility, engagement, and brand awareness across platforms like Instagram, LinkedIn, and Facebook. We combine creative content with targeted ads to connect your brand with the right audience. Our data-driven approach ensures measurable growth and maximum ROI.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800", // social media
  },
  {
    icon: Video,
    title: "Content Creation",
    description:
      "We craft high-quality, engaging content that tells your brand’s story and captures audience attention. From blogs and articles to graphics and videos, our team ensures every piece aligns with your brand’s voice. This helps you build trust, authority, and stronger connections with your customers.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800", // video/content
  },
  {
    icon: Target,
    title: "Lead Generation",
    description:
      "Our lead generation strategies are designed to attract and convert potential customers into qualified leads. Using targeted campaigns, optimized funnels, and proven outreach methods, we connect your business with the right audience. This approach drives measurable growth and boosts your sales pipeline.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800", // target/marketing
  },
  {
    icon: MessageSquare,
    title: "Social Media Management",
    description:
      "We manage your social media presence with consistency and creativity, ensuring your brand stays active and relevant. Our team handles content scheduling, audience engagement, and performance tracking across all platforms. This allows you to focus on your business while we grow your online community.",
    image: "https://images.unsplash.com/photo-1657974361095-4d5f3fb381fb?w=800", // communication
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Our web development services focus on creating modern, responsive, and user-friendly websites tailored to your business needs. We combine clean design with seamless functionality to deliver the best user experience. Every site we build is optimized for performance, security, and scalability.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800", // web development
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "We develop custom software solutions designed to solve your unique business challenges. Our team ensures every product is scalable, efficient, and tailored to improve productivity and performance. From concept to deployment, we deliver software that supports long-term growth.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", // coding
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end digital solutions designed to accelerate your growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="glass-card p-6 group hover:scale-105 transition-all duration-500 cursor-pointer animate-fade-in-up border-primary/10 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Image */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Icon */}
                <div className="relative inline-block mt-4">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:bg-primary/40 transition-all duration-500" />
                  <div className="relative bg-primary/10 p-4 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
