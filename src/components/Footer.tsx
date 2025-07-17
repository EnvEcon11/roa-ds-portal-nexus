import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">ROA-DS System</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Advanced data science platform providing comprehensive analytical methodologies for modern enterprises.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Methodologies</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Best Practices</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground">Contact</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Enterprise</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Partnership</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 ROA-DS System. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;