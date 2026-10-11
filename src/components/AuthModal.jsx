import React, { useState } from 'react';
import { X, Phone, Lock, User, CheckCircle2, ShieldCheck } from 'lucide-react';
import VeeduXLogo from './VeeduXLogo';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [mode, setMode] = useState('login'); // 'login' | 'signup' | 'otp'
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSendOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMode('otp');
    }, 800);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        onLoginSuccess?.({
          name: name || 'Kerala Property Buyer',
          phone: phone || '+91 98470 12345',
        });
        onClose();
        setSuccess(false);
        setMode('login');
      }, 1500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-[#FAF8F2] w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden border border-[#E2EBE5] relative p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-700"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <VeeduXLogo size="md" />
        </div>

        {success ? (
          <div className="text-center py-6 space-y-2">
            <CheckCircle2 size={40} className="text-[#145C3D] mx-auto animate-bounce" />
            <h2 className="text-base font-bold text-slate-900">Welcome to VeeduX!</h2>
            <p className="text-xs text-slate-500">You are successfully logged in.</p>
          </div>
        ) : mode === 'otp' ? (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="text-center">
              <h2 className="text-base font-bold text-slate-900">Enter Verification Code</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                OTP sent to {phone} (Use 1234 for testing)
              </p>
            </div>

            <div>
              <input
                type="text"
                required
                maxLength={4}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="1 2 3 4"
                className="w-full text-center tracking-widest text-lg font-bold p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#145C3D] text-white font-bold text-xs rounded-xl shadow-md hover:bg-[#0C3423] transition-all"
            >
              {loading ? 'Verifying...' : 'Verify OTP & Log In'}
            </button>

            <button
              type="button"
              onClick={() => setMode('login')}
              className="text-xs text-slate-500 hover:text-slate-700 w-full text-center"
            >
              Change Mobile Number
            </button>
          </form>
        ) : (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div className="text-center">
              <h2 className="text-base font-bold text-slate-900">
                {mode === 'login' ? 'Log in to VeeduX' : 'Create Free Account'}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Save properties, chat with owners & post listings
              </p>
            </div>

            {mode === 'signup' && (
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full text-xs p-3 pl-9 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
                  />
                  <User size={15} className="absolute left-3 top-3.5 text-slate-400" />
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Mobile Number (WhatsApp)
              </label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98470 XXXXX"
                  className="w-full text-xs p-3 pl-9 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
                />
                <Phone size={15} className="absolute left-3 top-3.5 text-slate-400" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#145C3D] hover:bg-[#0C3423] text-white font-bold text-xs rounded-xl shadow-md transition-all"
            >
              {loading ? 'Sending OTP...' : 'Get Instant WhatsApp OTP'}
            </button>

            <div className="text-center pt-2">
              {mode === 'login' ? (
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className="text-xs text-[#145C3D] font-bold hover:underline"
                >
                  Don't have an account? Sign Up Free
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className="text-xs text-[#145C3D] font-bold hover:underline"
                >
                  Already have an account? Log In
                </button>
              )}
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 pt-2 border-t border-slate-200">
              <ShieldCheck size={13} className="text-emerald-700" />
              <span>100% Privacy Protected • Zero Spam</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
