import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Lock, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  User, 
  Sparkles,
  CheckCircle2,
  KeyRound
} from 'lucide-react';
import bocLogoPng from '../assets/boc-logo.png';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 600);
  };

  const handleDemoLogin = () => {
    setEmail('sajish.m@bocmember.in');
    setPassword('••••••••••••');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#020713] text-white pt-24 sm:pt-28 pb-20 flex items-center justify-center px-4 selection:bg-[#D4AF37] selection:text-[#07172C]">
      
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md bg-gradient-to-b from-[#06172E] to-[#040E1E] border border-[#D4AF37]/45 rounded-3xl p-7 sm:p-9 shadow-2xl z-10 backdrop-blur-md">
        
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
            <img src={bocLogoPng} alt="BOC" className="w-12 h-12 object-contain group-hover:scale-105 transition-transform" />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
            Member Portal
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Access your chapter directory, referrals, and conclaves
          </p>
        </div>

        {/* Demo Login Quick Access Banner */}
        <div className="mb-6 p-3.5 rounded-2xl bg-[#092244]/80 border border-[#D4AF37]/40 flex items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#F9D678] shrink-0" />
            <span className="text-xs text-slate-200">Want to test as a verified member?</span>
          </div>
          <button
            onClick={handleDemoLogin}
            type="button"
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#F9D678] to-[#D4AF37] text-[#07172C] font-cinzel font-bold text-[10px] tracking-wider uppercase shrink-0 shadow hover:scale-105 transition-all cursor-pointer"
          >
            Quick Demo
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="block text-xs font-cinzel font-bold text-[#F9D678] uppercase tracking-wider mb-1.5">
              Registered Email ID
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="founder@yourcompany.com"
                className="w-full py-2.5 sm:py-3 pl-10 pr-4 rounded-xl bg-[#020814] border border-[#D4AF37]/40 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F9D678] transition-colors"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-cinzel font-bold text-[#F9D678] uppercase tracking-wider">
                Password
              </label>
              <a href="#forgot" className="text-[11px] text-slate-400 hover:text-[#F9D678] transition-colors">
                Forgot Password?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full py-2.5 sm:py-3 pl-10 pr-4 rounded-xl bg-[#020814] border border-[#D4AF37]/40 text-white text-xs sm:text-sm focus:outline-none focus:border-[#F9D678] transition-colors"
              />
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-[#D4AF37] text-[#D4AF37] focus:ring-0 accent-[#D4AF37]"
              />
              <span>Remember this device</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#F9D678] via-[#E5BF55] to-[#D4AF37] hover:from-white hover:to-[#F9D678] text-[#07172C] font-cinzel font-bold text-xs uppercase tracking-wider shadow-xl transition-all transform hover:scale-102 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <span>Verifying Credentials...</span>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </form>

        {/* Footer info */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-400">
            Not an active BOC member yet?{' '}
            <Link to="/register" className="text-[#F9D678] font-bold hover:underline">
              Apply for Membership
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
}
