import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">ROA-DS Analytics Platform</span>
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            ROA-DS System
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Advanced data science methodologies and analytics platform that transforms your data into actionable insights through proven analytical frameworks.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-primary shadow-glow hover:shadow-xl transition-all duration-300">
              Explore Methodologies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
              View Documentation
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">12+</h3>
              <p className="text-sm text-muted-foreground">Methodologies</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">99.5%</h3>
              <p className="text-sm text-muted-foreground">Accuracy Rate</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">500+</h3>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/5 rounded-full blur-xl" />
    </section>
  );
};

export default Hero;