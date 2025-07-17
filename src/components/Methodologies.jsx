import MethodologyCard from "./MethodologyCard";
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Zap, 
  BarChart3, 
  Network,
  Database,
  Microscope,
  Cpu
} from "lucide-react";

const methodologies = [
  {
    title: "Scenario Based Total Cost of Ownership Analysis",
    description: "Comprehensive TCO analysis using multiple scenarios to evaluate total ownership costs across different business contexts and decision parameters.",
    icon: BarChart3,
    features: [
      "Multi-scenario cost modeling",
      "Risk assessment integration",
      "Comparative scenario analysis",
      "What-if scenario planning",
      "Monte Carlo simulations",
      "Sensitivity analysis"
    ]
  },
  {
    title: "Simple vs Advanced TCO",
    description: "Flexible TCO analysis framework offering both simplified quick assessments and detailed advanced evaluations for comprehensive cost understanding.",
    icon: TrendingUp,
    features: [
      "Quick assessment mode",
      "Detailed cost breakdown",
      "Advanced cost modeling",
      "Lifecycle cost analysis",
      "ROI calculations",
      "Cost optimization recommendations"
    ]
  }
];

const Methodologies = () => {
  const handleExplore = (methodology) => {
    console.log(`Exploring ${methodology}`);
    // Navigation logic will be added later
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            TCO Analysis Methodologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our advanced Total Cost of Ownership analysis methodologies to gain comprehensive insights into your cost structures and optimize strategic decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {methodologies.map((methodology, index) => (
            <MethodologyCard
              key={index}
              title={methodology.title}
              description={methodology.description}
              icon={methodology.icon}
              features={methodology.features}
              onExplore={() => handleExplore(methodology.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodologies;