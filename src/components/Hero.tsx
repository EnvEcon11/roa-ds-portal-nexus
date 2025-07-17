import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Target } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">TCO Analysis Platform</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              ROA-DS System
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Total Cost of Ownership Analysis & Strategic Decision Making
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              Advanced TCO methodologies to optimize costs, analyze scenarios, and drive strategic business decisions with data-driven insights.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroIllustration} 
              alt="TCO Analysis Illustration" 
              className="w-full h-auto rounded-lg shadow-card"
            />
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-card transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Scenario Analysis</h3>
            <p className="text-muted-foreground text-sm">Multi-scenario TCO modeling for comprehensive cost evaluation</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-card transition-all duration-300">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Cost Optimization</h3>
            <p className="text-muted-foreground text-sm">Advanced algorithms to identify cost reduction opportunities</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-card transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Strategic Insights</h3>
            <p className="text-muted-foreground text-sm">Data-driven insights for strategic business decisions</p>
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