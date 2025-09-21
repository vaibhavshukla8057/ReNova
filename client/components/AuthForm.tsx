





import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

type Mode = 'login' | 'signup';

export default function AuthForm({ mode }: { mode: Mode }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState(''); // Mobile ki state
  const [role, setRole] = useState<'user' | 'rider' | 'admin'>('user');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const endpoint = mode === 'signup' ? '/api/auth/register' : '/api/auth/login';
    // body mein 'mobile' add karein
    const body = mode === 'signup' ? { name, email, password, role, mobile } : { email, password };
    
    try {
      const response = await fetch(`http://localhost:8080${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      
      toast.success(data.message);
      
      // Sirf login function ko call karein, yeh localStorage aur state dono ko handle kar lega
      if (data.token && data.user) {
        login(data.token, data.user);
      }
      
      navigate("/"); // Seedha home page par bhej dein

    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {mode === 'signup' && (
        <>
          <div className="space-y-2">
            <Label>I am a</Label>
            <div className="grid grid-cols-3 gap-2 rounded-lg bg-secondary p-1">
              {['user', 'rider', 'admin'].map((r) => (
                <button
                  type="button"
                  key={r}
                  onClick={() => setRole(r as any)}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-sm font-medium transition-all",
                    role === r ? "bg-primary text-primary-foreground shadow-sm" : "hover:bg-background/50"
                  )}
                >
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" placeholder="John Doe" required value={name} onChange={e => setName(e.target.value)} />
          </div>

          {/* --- NAYI 'MOBILE NUMBER' INPUT FIELD --- */}
          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input id="mobile" type="tel" placeholder="Enter 10-Digit Number" required value={mobile} onChange={e => setMobile(e.target.value)} />
          </div>
        </>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" required value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="••••••••" required value={password} onChange={e => setPassword(e.target.value)} />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {mode === 'signup' ? 'Create Account' : 'Login'}
      </Button>
    </form>
  );
}