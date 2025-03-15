
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AuthForm from '@/components/AuthForm';
import ThemeToggle from '@/components/ThemeToggle';
import { ArrowRight, BarChart2, Shield, Repeat, CreditCard } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const navigate = useNavigate();
  
  const openAuth = () => setIsAuthOpen(true);
  const closeAuth = () => setIsAuthOpen(false);
  
  const handleDemoAccess = () => {
    // In a real app, you might log in with demo credentials
    // For now, just navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div>
          <h1 className="text-2xl font-bold">Aura Banking</h1>
          <p className="text-muted-foreground">Modern financial solutions</p>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" onClick={openAuth}>Log In</Button>
          <Button onClick={openAuth}>Sign Up</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Banking reimagined for the digital age
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Experience seamless finance management with our intuitive dashboard, real-time insights, and powerful tools.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" onClick={openAuth}>
                Get Started <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button size="lg" variant="outline" onClick={handleDemoAccess}>
                View Demo
              </Button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div className="h-80 bg-gradient-to-br from-finance-positive to-finance-gradient-end flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Dashboard Preview</h3>
                <p>Interactive demo would display here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<BarChart2 size={24} />} 
              title="Real-time Analytics" 
              description="Monitor your finances with live updates and detailed insights."
            />
            <FeatureCard 
              icon={<Shield size={24} />} 
              title="Secure Banking" 
              description="State-of-the-art security to keep your financial data protected."
            />
            <FeatureCard 
              icon={<Repeat size={24} />} 
              title="Instant Transfers" 
              description="Send and receive funds instantly with zero waiting time."
            />
            <FeatureCard 
              icon={<CreditCard size={24} />} 
              title="Virtual Cards" 
              description="Create virtual cards for safer online shopping experiences."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Banking Experience?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of satisfied customers who have made the switch to modern, intuitive banking.
          </p>
          <Button size="lg" onClick={openAuth}>
            Create Your Account <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-muted/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2023 Aura Banking. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthForm isOpen={isAuthOpen} onClose={closeAuth} />
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="dashboard-card p-6">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default LandingPage;
