import React, { useState, useEffect } from 'react';
import {
  X,
  Phone,
  Mail,
  Lock,
  User,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  Sparkles,
  RefreshCw,
  Info,
} from 'lucide-react';
import VeeduXLogo from './VeeduXLogo';
import { useApp } from '../context/AppContext';
import { isSupabaseConfigured } from '../lib/supabase';
import {
  signInWithPhoneOtp,
  verifyPhoneOtp,
  signInWithEmailPassword,
  signUpWithEmailPassword,
} from '../lib/supabaseService';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const { authMode, setAuthMode, setAuthNotice } = useApp();
  const [authMethod, setAuthMethod] = useState('phone'); // 'phone' | 'email'
  const [mode, setMode] = useState(authMode || 'login'); // 'login' | 'signup' | 'otp'

  // Form Fields
  const [phone, setPhone] = useState(''); // 10-digit number without country code
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [role, setRole] = useState('buyer'); // 'buyer' | 'owner' | 'agent'

  // Operational State
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [emailConfirmationSent, setEmailConfirmationSent] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  // Sync mode with parent if prop/context changes
  useEffect(() => {
    if (authMode && (authMode === 'login' || authMode === 'signup')) {
      setMode(authMode);
      setErrorMsg('');
      setEmailConfirmationSent(false);
    }
  }, [authMode, isOpen]);

  // Resend OTP countdown timer
  useEffect(() => {
    let timer;
    if (resendCooldown > 0) {
      timer = setInterval(() => {
        setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendCooldown]);

  if (!isOpen) return null;

  // --------------------------------------------------------------------------
  // Instant Demo Login (Explicitly marks user as demo session, not real Supabase)
  // --------------------------------------------------------------------------
  const handleDemoLogin = () => {
    setLoading(true);
    setErrorMsg('');
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        const demoUser = {
          id: 'usr-kerala-demo',
          name: name?.trim() || 'Akhil (Demo)',
          phone: phone ? `+91 ${phone}` : '+91 86060 24704',
          email: email?.trim() || 'akhil.demo@veedux.com',
          role: role || 'owner',
          avatar: null,
          memberSince: 'Member since 2024',
          isVerified: true,
          isDemo: true, // Flagged so AppContext knows this is not a Supabase auth session
        };

        onLoginSuccess?.(demoUser);
        setAuthNotice?.({
          type: 'success',
          message: 'Signed in as Akhil (Demo Session)',
        });
        onClose();
        setSuccess(false);
      }, 800);
    }, 300);
  };

  // --------------------------------------------------------------------------
  // Phone OTP Flow: Step 1 (Send OTP)
  // --------------------------------------------------------------------------
  const handleSendPhoneOtp = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const cleanDigits = phone.replace(/\D/g, '');
    if (cleanDigits.length !== 10) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setLoading(true);

    if (isSupabaseConfigured) {
      const res = await signInWithPhoneOtp(cleanDigits);
      setLoading(false);

      if (res.success) {
        setMode('otp');
        setResendCooldown(30);
        setErrorMsg('');
      } else {
        const errText = res.error?.message || '';
        const isProviderMissing =
          res.code === 'phone_provider_disabled' ||
          errText.toLowerCase().includes('unsupported phone provider') ||
          errText.toLowerCase().includes('provider is not enabled') ||
          errText.toLowerCase().includes('sms provider');

        if (isProviderMissing) {
          setErrorMsg(
            'SMS Provider Not Configured: Real SMS OTP requires an SMS provider (Twilio, MessageBird, or Vonage) configured in your Supabase Dashboard under Authentication -> Providers -> Phone. Real OTPs cannot be dispatched until configured. Please use Email / Password or Demo Login.'
          );
        } else {
          setErrorMsg(errText || 'Failed to send OTP code. Please check your connection and number.');
        }
      }
    } else {
      setLoading(false);
      setErrorMsg('Supabase is not configured. Please use Demo Login below or configure .env.local.');
    }
  };

  // --------------------------------------------------------------------------
  // Phone OTP Flow: Resend Code
  // --------------------------------------------------------------------------
  const handleResendPhoneOtp = async () => {
    if (resendCooldown > 0 || loading) return;
    setErrorMsg('');
    setLoading(true);

    const cleanDigits = phone.replace(/\D/g, '');
    const res = await signInWithPhoneOtp(cleanDigits);
    setLoading(false);

    if (res.success) {
      setResendCooldown(30);
      setAuthNotice?.({
        type: 'success',
        message: 'A new 6-digit verification code has been dispatched.',
      });
    } else {
      const errText = res.error?.message || '';
      const isProviderMissing =
        res.code === 'phone_provider_disabled' ||
        errText.toLowerCase().includes('unsupported phone provider') ||
        errText.toLowerCase().includes('provider is not enabled');

      if (isProviderMissing) {
        setErrorMsg(
          'SMS Provider is not enabled in your Supabase project. Please configure Twilio or MessageBird in Supabase.'
        );
      } else {
        setErrorMsg(errText || 'Failed to resend verification code.');
      }
    }
  };

  // --------------------------------------------------------------------------
  // Phone OTP Flow: Step 2 (Verify OTP)
  // --------------------------------------------------------------------------
  const handleVerifyPhoneOtp = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const cleanDigits = phone.replace(/\D/g, '');
    const cleanToken = otp.replace(/\D/g, '');

    if (cleanToken.length < 6) {
      setErrorMsg('Please enter the complete 6-digit verification code.');
      return;
    }

    setLoading(true);

    if (isSupabaseConfigured) {
      const res = await verifyPhoneOtp(cleanDigits, cleanToken);
      setLoading(false);

      if (res.success && res.data?.user) {
        setSuccess(true);
        setTimeout(() => {
          const authObj = {
            id: res.data.user.id,
            name: name?.trim() || res.data.user.user_metadata?.full_name || 'VeeduX Member',
            phone: res.data.user.phone || `+91 ${cleanDigits}`,
            email: res.data.user.email || '',
            role: res.data.user.user_metadata?.role || role || 'buyer',
            isVerified: true,
            isDemo: false,
          };
          onLoginSuccess?.(authObj);
          setAuthNotice?.({
            type: 'success',
            message: `Welcome to VeeduX, ${authObj.name}!`,
          });
          onClose();
          setSuccess(false);
        }, 1000);
      } else {
        const errText = res.error?.message || '';
        if (errText.toLowerCase().includes('expired')) {
          setErrorMsg('The verification code has expired. Please tap Resend OTP below.');
        } else {
          setErrorMsg('Invalid verification code. Please check your SMS and try again.');
        }
      }
    } else {
      setLoading(false);
      setErrorMsg('Supabase not configured for OTP verification.');
    }
  };

  // --------------------------------------------------------------------------
  // Email & Password Flow (Sign Up / Sign In)
  // --------------------------------------------------------------------------
  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedEmail = email?.trim()?.toLowerCase() || '';
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!password || password.length < 6) {
      setErrorMsg('Password must be at least 6 characters.');
      return;
    }

    if (mode === 'signup' && !name?.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    setLoading(true);

    if (isSupabaseConfigured) {
      if (mode === 'signup') {
        const cleanPhone = phone ? `+91${phone.replace(/\D/g, '')}` : null;
        const res = await signUpWithEmailPassword(trimmedEmail, password, {
          fullName: name?.trim(),
          phone: cleanPhone,
          role,
        });
        setLoading(false);

        if (res.success) {
          if (res.needsEmailConfirmation) {
            // Confirmation email dispatched by Supabase
            setEmailConfirmationSent(true);
            setErrorMsg('');
          } else if (res.data?.user) {
            // Instant session (auto-confirm enabled)
            setSuccess(true);
            setTimeout(() => {
              const authObj = {
                id: res.data.user.id,
                name: name?.trim() || 'VeeduX Member',
                email: res.data.user.email,
                phone: cleanPhone || '',
                role,
                isVerified: false,
                isDemo: false,
              };
              onLoginSuccess?.(authObj);
              setAuthNotice?.({
                type: 'success',
                message: `Account created! Welcome, ${authObj.name}.`,
              });
              onClose();
              setSuccess(false);
            }, 1000);
          }
        } else {
          const errText = res.error?.message || '';
          if (errText.toLowerCase().includes('already registered') || errText.toLowerCase().includes('already exists')) {
            setErrorMsg('An account with this email address already exists. Please log in instead.');
          } else {
            setErrorMsg(errText || 'Could not complete signup. Please verify details.');
          }
        }
      } else {
        // Sign In
        const res = await signInWithEmailPassword(trimmedEmail, password);
        setLoading(false);

        if (res.success && res.data?.user) {
          setSuccess(true);
          setTimeout(() => {
            const authObj = {
              id: res.data.user.id,
              name: res.data.user.user_metadata?.full_name || 'VeeduX Member',
              email: res.data.user.email,
              phone: res.data.user.phone || res.data.user.user_metadata?.phone || '',
              role: res.data.user.user_metadata?.role || 'buyer',
              isVerified: true,
              isDemo: false,
            };
            onLoginSuccess?.(authObj);
            setAuthNotice?.({
              type: 'success',
              message: `Welcome back, ${authObj.name}!`,
            });
            onClose();
            setSuccess(false);
          }, 1000);
        } else {
          const errText = res.error?.message || '';
          if (errText.toLowerCase().includes('invalid login credentials') || res.error?.code === 'invalid_credentials') {
            setErrorMsg('Invalid email or password. Please verify your credentials or create an account.');
          } else if (errText.toLowerCase().includes('email not confirmed')) {
            setErrorMsg('Your email is not verified yet. Please check your inbox for the confirmation link from Supabase.');
          } else {
            setErrorMsg(errText || 'Invalid email or password.');
          }
        }
      }
    } else {
      setLoading(false);
      setErrorMsg('Supabase is not configured. Please use Demo Login below.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF8F2] w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden border border-[#E2EBE5] relative p-6 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-700 transition-colors"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {/* Brand Logo */}
        <div className="flex justify-center mb-3">
          <VeeduXLogo size="md" />
        </div>

        {/* Supabase Connection Status Badge */}
        <div className="text-center mb-3">
          {isSupabaseConfigured ? (
            <span className="inline-flex items-center gap-1.5 text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Supabase Authentication
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-full font-semibold">
              <Sparkles size={11} className="text-amber-600" />
              Demo / Unconfigured Mode
            </span>
          )}
        </div>

        {/* 1. Success Splash */}
        {success ? (
          <div className="text-center py-8 space-y-2">
            <CheckCircle2 size={44} className="text-[#145C3D] mx-auto animate-bounce" />
            <h2 className="text-lg font-black text-slate-900">Welcome to VeeduX!</h2>
            <p className="text-xs text-slate-500">You are successfully logged in.</p>
          </div>
        ) : emailConfirmationSent ? (
          /* 2. Email Confirmation Notice Splash */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-[#145C3D] flex items-center justify-center mx-auto border border-emerald-300 shadow-xs">
              <Mail size={28} />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-base font-black text-slate-900">Check Your Email</h2>
              <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                We sent a confirmation link to <span className="font-bold text-slate-900">{email}</span>.
                Please open your inbox (or spam folder) and verify your account to start browsing.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setEmailConfirmationSent(false);
                setMode('login');
                setErrorMsg('');
              }}
              className="w-full py-2.5 bg-[#145C3D] text-white text-xs font-bold rounded-xl hover:bg-[#0C3423] transition-all shadow-xs"
            >
              Back to Log In
            </button>
          </div>
        ) : mode === 'otp' ? (
          /* 3. Phone OTP Verification Step */
          <form onSubmit={handleVerifyPhoneOtp} className="space-y-4">
            <div className="text-center">
              <h2 className="text-base font-black text-slate-900">Enter Verification Code</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                6-digit code sent to <span className="font-bold text-slate-900">+91 {phone}</span>
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2 leading-relaxed">
                <AlertCircle size={15} className="mt-0.5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div>
              <input
                type="text"
                required
                autoFocus
                maxLength={6}
                value={otp}
                onChange={(e) => {
                  const digits = e.target.value.replace(/\D/g, '').slice(0, 6);
                  setOtp(digits);
                  setErrorMsg('');
                }}
                placeholder="• • • • • •"
                className="w-full text-center tracking-[0.35em] text-xl font-black p-3.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D] shadow-2xs"
              />
              <p className="text-[10px] text-slate-400 text-center mt-1">Enter the 6-digit SMS verification code</p>
            </div>

            <button
              type="submit"
              disabled={loading || otp.length < 6}
              className="w-full py-3 bg-[#145C3D] text-white font-bold text-xs rounded-xl shadow-md hover:bg-[#0C3423] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? 'Verifying Code...' : 'Verify OTP & Log In'}
            </button>

            <div className="flex items-center justify-between text-xs pt-1 px-1">
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setOtp('');
                  setErrorMsg('');
                }}
                className="text-slate-500 hover:text-slate-800 font-medium text-[11px]"
              >
                Change Number
              </button>

              {resendCooldown > 0 ? (
                <span className="text-slate-400 font-semibold text-[11px]">
                  Resend in {resendCooldown}s
                </span>
              ) : (
                <button
                  type="button"
                  onClick={handleResendPhoneOtp}
                  disabled={loading}
                  className="text-[#145C3D] hover:underline font-bold text-[11px] flex items-center gap-1"
                >
                  <RefreshCw size={11} />
                  <span>Resend Code</span>
                </button>
              )}
            </div>
          </form>
        ) : (
          /* 4. Login / Sign Up Main Form */
          <div className="space-y-4">
            {/* Method Toggle: Phone / Email */}
            <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-600">
              <button
                type="button"
                onClick={() => {
                  setAuthMethod('phone');
                  setErrorMsg('');
                }}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  authMethod === 'phone' ? 'bg-white text-[#145C3D] shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                Phone (SMS / OTP)
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMethod('email');
                  setErrorMsg('');
                }}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  authMethod === 'email' ? 'bg-white text-[#145C3D] shadow-xs' : 'hover:text-slate-900'
                }`}
              >
                Email & Password
              </button>
            </div>

            <div className="text-center">
              <h2 className="text-base font-black text-slate-900">
                {mode === 'login' ? 'Log in to VeeduX' : 'Create Free VeeduX Account'}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Save properties, contact sellers directly & list homes
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2 leading-relaxed">
                <AlertCircle size={15} className="mt-0.5 shrink-0" />
                <span className="flex-1">{errorMsg}</span>
              </div>
            )}

            {/* A. Phone Auth Form */}
            {authMethod === 'phone' ? (
              <form onSubmit={handleSendPhoneOtp} className="space-y-3">
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
                        placeholder="Your Full Name"
                        className="w-full text-xs p-3 pl-9 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
                      />
                      <User size={15} className="absolute left-3 top-3.5 text-slate-400" />
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Mobile Number (Phone / WhatsApp)
                  </label>
                  <div className="flex items-center rounded-xl border border-slate-300 bg-white focus-within:border-[#145C3D] overflow-hidden transition-colors shadow-2xs">
                    <div className="flex items-center gap-1.5 px-3 py-3 bg-slate-100 border-r border-slate-200 text-slate-700 text-xs font-bold shrink-0 select-none">
                      <span aria-hidden="true">🇮🇳</span>
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={phone}
                      onChange={(e) => {
                        const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setPhone(digits);
                        setErrorMsg('');
                      }}
                      placeholder="98470 12345"
                      className="w-full text-xs p-3 font-semibold text-slate-900 bg-transparent focus:outline-none tracking-wider"
                    />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">Enter your 10-digit Indian mobile number</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#145C3D] hover:bg-[#0C3423] text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 disabled:opacity-60"
                >
                  {loading ? 'Sending OTP Code...' : 'Get Instant SMS / Phone OTP'}
                </button>
              </form>
            ) : (
              /* B. Email & Password Form */
              <form onSubmit={handleEmailAuth} className="space-y-3">
                {mode === 'signup' && (
                  <>
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
                          placeholder="Your Full Name"
                          className="w-full text-xs p-3 pl-9 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
                        />
                        <User size={15} className="absolute left-3 top-3.5 text-slate-400" />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Phone (Optional)
                      </label>
                      <div className="flex items-center rounded-xl border border-slate-300 bg-white focus-within:border-[#145C3D] overflow-hidden">
                        <div className="px-2.5 py-2.5 bg-slate-100 border-r border-slate-200 text-slate-700 text-xs font-bold shrink-0">
                          +91
                        </div>
                        <input
                          type="tel"
                          maxLength={10}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                          placeholder="98470 12345"
                          className="w-full text-xs p-2.5 font-semibold text-slate-900 bg-transparent focus:outline-none"
                        />
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full text-xs p-3 pl-9 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
                    />
                    <Mail size={15} className="absolute left-3 top-3.5 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      required
                      minLength={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="At least 6 characters"
                      className="w-full text-xs p-3 pl-9 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#145C3D]"
                    />
                    <Lock size={15} className="absolute left-3 top-3.5 text-slate-400" />
                  </div>
                </div>

                {mode === 'signup' && (
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Account Type:
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {['buyer', 'owner', 'agent'].map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRole(r)}
                          className={`py-2 rounded-xl border text-center font-bold capitalize transition-all ${
                            role === r
                              ? 'bg-emerald-50 border-[#145C3D] text-[#145C3D]'
                              : 'bg-white border-slate-200 text-slate-600'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#145C3D] hover:bg-[#0C3423] text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 disabled:opacity-60"
                >
                  {loading
                    ? 'Processing...'
                    : mode === 'signup'
                    ? 'Create Free Account'
                    : 'Log In'}
                </button>
              </form>
            )}

            {/* Toggle Mode: Login vs Signup */}
            <div className="text-center pt-1">
              {mode === 'login' ? (
                <button
                  type="button"
                  onClick={() => {
                    setMode('signup');
                    setAuthMode?.('signup');
                    setErrorMsg('');
                  }}
                  className="text-xs text-[#145C3D] font-bold hover:underline"
                >
                  Don't have an account? Sign Up Free
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setAuthMode?.('login');
                    setErrorMsg('');
                  }}
                  className="text-xs text-[#145C3D] font-bold hover:underline"
                >
                  Already registered? Log In
                </button>
              )}
            </div>

            {/* Demo Login Quick Access */}
            <div className="pt-2 border-t border-slate-200/80">
              <button
                type="button"
                onClick={handleDemoLogin}
                className="w-full py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 active:scale-98"
              >
                <Sparkles size={13} className="text-[#D6AD55]" />
                <span>Instant Demo Login (Guest Session)</span>
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-1">
                For evaluation without requiring SMS/email confirmation
              </p>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 pt-0.5">
              <ShieldCheck size={13} className="text-emerald-700" />
              <span>100% Privacy Protected • Powered by Supabase Auth</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
