import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface MethodologyCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  onExplore: () => void;
}

const MethodologyCard = ({ title, description, icon: Icon, features, onExplore }: MethodologyCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-secondary opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
      <div className="relative z-10">
        <CardHeader className="pb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
          
          <div className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                {feature}
              </div>
            ))}
          </div>
          
          <Button 
            onClick={onExplore}
            className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            Explore Method
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default MethodologyCard;