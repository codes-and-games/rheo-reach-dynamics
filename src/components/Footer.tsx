import { Zap, Instagram, Facebook, AtSign } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-primary/10 bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md" />
                <div className="relative bg-primary/20 p-2 rounded-lg">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </div>
              <span className="text-2xl font-bold">
                RheoReach <span className="text-gradient">Associates</span>
              </span>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Digital Solutions at your thumbprints.</p>
              <p className="text-primary font-medium">For You, By Us.</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/rheoreach/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/people/Rheo-Reach/pfbid02S6knfvdeNZfAb9mbdEpa3KiRNW86GxotwJhwCBGvCKg2K8koPB4CN16MLygmAXqjl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.threads.com/@rheoreach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <AtSign className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Additional Phone Numbers */}
          <div className="space-y-2 text-sm text-muted-foreground md:text-right">
            <p>Additional Contact:</p>
            <div className="space-y-1">
              <p>+91 86001 29571</p>
              <p>+91 98225 74643</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} RheoReach Associates. All rights reserved.</p>
        </div>
      </div>

      {/* Bottom gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-primary/5 blur-[100px] pointer-events-none" />
    </footer>
  );
};
