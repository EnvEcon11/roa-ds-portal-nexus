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
    title: "Machine Learning",
    description: "Advanced ML algorithms for predictive analytics and pattern recognition in complex datasets.",
    icon: Brain,
    features: [
      "Supervised & Unsupervised Learning",
      "Neural Networks & Deep Learning",
      "Real-time Model Training",
      "Automated Feature Selection"
    ]
  },
  {
    title: "Statistical Analysis",
    description: "Comprehensive statistical methods for hypothesis testing and data validation.",
    icon: TrendingUp,
    features: [
      "Regression & Correlation Analysis",
      "Time Series Forecasting",
      "Bayesian Statistics",
      "Multivariate Analysis"
    ]
  },
  {
    title: "Optimization",
    description: "Mathematical optimization techniques for resource allocation and decision making.",
    icon: Target,
    features: [
      "Linear & Non-linear Programming",
      "Genetic Algorithms",
      "Monte Carlo Simulation",
      "Multi-objective Optimization"
    ]
  },
  {
    title: "Real-time Analytics",
    description: "Stream processing and real-time data analysis for immediate insights.",
    icon: Zap,
    features: [
      "Stream Processing",
      "Event-driven Architecture",
      "Real-time Dashboards",
      "Anomaly Detection"
    ]
  },
  {
    title: "Business Intelligence",
    description: "Comprehensive BI solutions for strategic decision making and reporting.",
    icon: BarChart3,
    features: [
      "Interactive Dashboards",
      "KPI Monitoring",
      "Executive Reporting",
      "Trend Analysis"
    ]
  },
  {
    title: "Network Analysis",
    description: "Graph theory and network analytics for relationship mapping and influence analysis.",
    icon: Network,
    features: [
      "Social Network Analysis",
      "Community Detection",
      "Centrality Measures",
      "Link Prediction"
    ]
  },
  {
    title: "Data Mining",
    description: "Advanced data mining techniques for discovering hidden patterns and insights.",
    icon: Database,
    features: [
      "Association Rule Learning",
      "Clustering Analysis",
      "Classification Trees",
      "Pattern Recognition"
    ]
  },
  {
    title: "Experimental Design",
    description: "Scientific methodology for controlled experiments and A/B testing frameworks.",
    icon: Microscope,
    features: [
      "A/B Testing Framework",
      "Factorial Design",
      "Randomized Trials",
      "Statistical Power Analysis"
    ]
  },
  {
    title: "AI & Automation",
    description: "Artificial intelligence solutions for process automation and intelligent decision making.",
    icon: Cpu,
    features: [
      "Natural Language Processing",
      "Computer Vision",
      "Robotic Process Automation",
      "Intelligent Agents"
    ]
  }
];

const Methodologies = () => {
  const handleExplore = (methodology: string) => {
    console.log(`Exploring ${methodology}`);
    // Navigation logic will be added later
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Methodologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive suite of data science methodologies, each designed to extract maximum value from your data through proven analytical frameworks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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