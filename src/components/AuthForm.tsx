
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { LockKeyhole, Mail, User, ArrowRight } from 'lucide-react';

type AuthFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AuthForm: React.FC<AuthFormProps> = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    // Reset form when switching modes
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a mock authentication - in a real app, you'd call an API
    if (isSignUp) {
      // Sign up logic
      console.log('Signing up with:', { name, email, password });
      toast({
        title: "Account created!",
        description: "Welcome to Aura Banking.",
      });
    } else {
      // Login logic
      console.log('Logging in with:', { email, password });
      toast({
        title: "Welcome back!",
        description: "Successfully logged in.",
      });
    }
    
    // Close the dialog and navigate to dashboard
    onClose();
    navigate('/dashboard');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {isSignUp ? 'Create an Account' : 'Welcome Back'}
          </DialogTitle>
          <DialogDescription>
            {isSignUp 
              ? 'Sign up to start managing your finances with Aura Banking.' 
              : 'Log in to access your Aura Banking dashboard.'}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input 
                  id="name"
                  placeholder="John Doe"
                  className="pl-10"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                id="email"
                type="email"
                placeholder="name@example.com"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          
          <DialogFooter className="pt-4">
            <div className="w-full flex flex-col gap-4">
              <Button type="submit" className="w-full">
                {isSignUp ? 'Create Account' : 'Log In'} 
                <ArrowRight size={16} />
              </Button>
              
              <Button 
                type="button" 
                variant="ghost" 
                onClick={toggleAuthMode} 
                className="w-full"
              >
                {isSignUp 
                  ? 'Already have an account? Log In' 
                  : 'Need an account? Sign Up'}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthForm;
