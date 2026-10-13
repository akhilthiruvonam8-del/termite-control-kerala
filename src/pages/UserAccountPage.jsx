import React, { useState } from 'react';
import {
  User,
  Heart,
  Home,
  MessageSquare,
  Bell,
  Settings,
  Shield,
  PlusCircle,
  Phone,
  LogOut,
  CheckCircle2,
  Trash2,
  Eye,
  Send,
  Mail,
  ChevronRight,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import PropertyCard from '../components/PropertyCard';

export default function UserAccountPage() {
  const {
    user,
    setUser,
    properties,
    savedIds,
    toggleSave,
    enquiries,
    notifications,
    setNotifications,
    navigateTo,
    activeAccountTab,
    setActiveAccountTab,
  } = useApp();

  const activeTab = activeAccountTab || 'profile';
  const setActiveTab = (tab) => {
    setActiveAccountTab(tab);
    let target = '/account';
    if (tab === 'saved') target = '/saved';
    else if (tab === 'my-properties') target = '/my-listings';
    else if (tab === 'enquiries') target = '/enquiries';
    else if (tab === 'messages') target = '/messages';
    if (typeof window !== 'undefined' && window.location.pathname !== target) {
      window.history.pushState(null, '', target);
    }
  };

  // User's own properties
  const myProperties = properties.filter(
    (p) => p.seller?.name === user?.name || p.id === 'vx-101'
  );

  // Saved properties list
  const savedProperties = properties.filter((p) => savedIds.includes(p.id));

  // Chat conversation state simulation
  const [activeChat, setActiveChat] = useState({
    id: 'chat-01',
    name: 'Thomas K. Varghese (Alappuzha Villa Owner)',
    property: '4 BHK Waterfront Villa in Punnamada',
    messages: [
      { sender: 'them', text: 'Namaskaram! Yes, the waterfront villa is available for inspection.' },
      { sender: 'me', text: 'Great, can we visit this Sunday morning around 11:30 AM?' },
      { sender: 'them', text: 'Sure! I will send you the Google pin location on WhatsApp.' },
    ],
  });
  const [chatInput, setChatInput] = useState('');

  const handleSendChatMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setActiveChat((prev) => ({
      ...prev,
      messages: [...prev.messages, { sender: 'me', text: chatInput }],
    }));
    setChatInput('');
  };

  const navItems = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'my-properties', label: 'My Properties', count: myProperties.length, icon: Home },
    { id: 'saved', label: 'Saved Properties', count: savedProperties.length, icon: Heart },
    { id: 'enquiries', label: 'Enquiries', count: enquiries.length, icon: Mail },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'notifications', label: 'Notifications', count: notifications.filter((n) => !n.read).length, icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-full bg-[#FAF8F2] min-h-screen py-8 px-4 sm:px-6 pb-24 sm:pb-16 text-[#11291D]">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* User Welcome Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2EBE5] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'}
              alt={user?.name || 'User'}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#145C3D]"
            />
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                  {user?.name || 'Kerala Property Buyer'}
                </h1>
                <CheckCircle2 size={18} className="text-[#27865B]" />
              </div>
              <p className="text-xs text-slate-500">{user?.phone || '+91 98471 99220'}</p>
              <span className="inline-block mt-1 bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                Verified VeeduX Account
              </span>
            </div>
          </div>

          <button
            onClick={() => navigateTo('post')}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#145C3D] hover:bg-[#0C3423] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
          >
            <PlusCircle size={16} className="text-[#D6AD55]" />
            <span>Post New Listing</span>
          </button>
        </div>

        {/* Account Tabs & Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* Navigation Sidebar */}
          <aside className="lg:col-span-1 bg-white rounded-3xl p-4 border border-[#E2EBE5] shadow-xs space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#145C3D] text-white shadow-xs'
                      : 'text-slate-600 hover:bg-[#FAF8F2] hover:text-[#145C3D]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </div>
                  {item.count !== undefined && item.count > 0 && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                        isActive
                          ? 'bg-[#D6AD55] text-[#0C3423]'
                          : 'bg-emerald-50 text-emerald-800'
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </aside>

          {/* Tab Content Panel */}
          <main className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2EBE5] shadow-xs min-h-[480px]">
            {/* 1. Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-3">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#FAF8F2] p-4 rounded-2xl border border-[#E2EBE5]">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">
                      Full Name
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{user?.name}</p>
                  </div>
                  <div className="bg-[#FAF8F2] p-4 rounded-2xl border border-[#E2EBE5]">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">
                      Phone (WhatsApp)
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{user?.phone}</p>
                  </div>
                  <div className="bg-[#FAF8F2] p-4 rounded-2xl border border-[#E2EBE5]">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">
                      Email Address
                    </span>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{user?.email}</p>
                  </div>
                  <div className="bg-[#FAF8F2] p-4 rounded-2xl border border-[#E2EBE5]">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">
                      Account Role
                    </span>
                    <p className="text-sm font-bold text-emerald-800 capitalize mt-0.5">
                      {user?.role} (Verified)
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 2. My Properties Tab */}
            {activeTab === 'my-properties' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h2 className="text-lg font-black text-slate-900">
                    My Listed Properties ({myProperties.length})
                  </h2>
                  <button
                    onClick={() => navigateTo('post')}
                    className="text-xs font-bold text-[#145C3D] hover:underline"
                  >
                    + Add New Property
                  </button>
                </div>

                {myProperties.length === 0 ? (
                  <div className="py-12 text-center text-slate-400 text-xs">
                    You have not posted any properties yet.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {myProperties.map((p) => (
                      <div
                        key={p.id}
                        className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#E2EBE5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={p.images?.[0]}
                            alt={p.title}
                            className="w-16 h-16 rounded-xl object-cover"
                          />
                          <div>
                            <span className="font-black text-sm text-[#145C3D]">
                              {p.price}
                            </span>
                            <h4 className="font-bold text-xs text-slate-900">{p.title}</h4>
                            <p className="text-[11px] text-slate-500">{p.location}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                            {p.approvalStatus === 'approved' ? 'Live Online' : 'Under Review'}
                          </span>
                          <button
                            onClick={() => navigateTo('details', p.id)}
                            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#145C3D]"
                            title="View Property"
                          >
                            <Eye size={15} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 3. Saved Properties Tab */}
            {activeTab === 'saved' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h2 className="text-lg font-black text-slate-900">
                    Saved Properties ({savedProperties.length})
                  </h2>
                </div>

                {savedProperties.length === 0 ? (
                  <div className="py-12 text-center text-slate-400 text-xs">
                    No saved properties yet. Tap the heart on any property card to bookmark it.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {savedProperties.map((p) => (
                      <PropertyCard key={p.id} property={p} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 4. Enquiries Tab */}
            {activeTab === 'enquiries' && (
              <div className="space-y-6">
                <h2 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-3">
                  Buyer Enquiries Received ({enquiries.length})
                </h2>

                <div className="space-y-3">
                  {enquiries.map((enq) => (
                    <div
                      key={enq.id}
                      className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#E2EBE5] space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900">{enq.buyerName}</span>
                        <span className="text-slate-400 text-[10px]">{enq.date}</span>
                      </div>
                      <p className="text-xs text-slate-700 font-medium">{enq.message}</p>
                      <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                        <span className="text-[11px] text-slate-500">
                          For: {enq.propertyTitle}
                        </span>
                        <a
                          href={`tel:${enq.buyerPhone}`}
                          className="px-3 py-1 bg-[#145C3D] text-white text-[10px] font-bold rounded-lg flex items-center gap-1"
                        >
                          <Phone size={11} />
                          <span>Call Buyer</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Messages Tab */}
            {activeTab === 'messages' && (
              <div className="space-y-4">
                <h2 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-3">
                  Direct Messages & Chat
                </h2>

                <div className="border border-[#E2EBE5] rounded-2xl overflow-hidden bg-[#FAF8F2]">
                  <div className="p-3 bg-white border-b border-[#E2EBE5] flex items-center justify-between">
                    <div>
                      <p className="font-bold text-xs text-slate-900">{activeChat.name}</p>
                      <p className="text-[10px] text-slate-500">{activeChat.property}</p>
                    </div>
                  </div>

                  <div className="p-4 h-64 overflow-y-auto space-y-2.5 text-xs">
                    {activeChat.messages.map((m, i) => (
                      <div
                        key={i}
                        className={`flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[75%] p-3 rounded-2xl font-medium ${
                            m.sender === 'me'
                              ? 'bg-[#145C3D] text-white rounded-br-none'
                              : 'bg-white text-slate-800 rounded-bl-none shadow-xs'
                          }`}
                        >
                          {m.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  <form
                    onSubmit={handleSendChatMessage}
                    className="p-2.5 bg-white border-t border-[#E2EBE5] flex items-center gap-2"
                  >
                    <input
                      type="text"
                      placeholder="Type a message to the owner..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      className="flex-1 text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#145C3D]"
                    />
                    <button
                      type="submit"
                      className="p-2.5 bg-[#145C3D] text-white rounded-xl hover:bg-[#0C3423]"
                    >
                      <Send size={15} />
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* 6. Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="space-y-4">
                <h2 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-3">
                  Activity Notifications
                </h2>

                <div className="space-y-2.5">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className="p-3.5 rounded-2xl bg-[#FAF8F2] border border-[#E2EBE5] flex items-start justify-between gap-3"
                    >
                      <div>
                        <h4 className="font-bold text-xs text-slate-900">{n.title}</h4>
                        <p className="text-xs text-slate-600 mt-0.5">{n.message}</p>
                        <span className="text-[10px] text-slate-400 mt-1 block">{n.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-3">
                  Account Settings
                </h2>
                <div className="space-y-4 text-xs">
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF8F2] border border-[#E2EBE5]">
                    <div>
                      <span className="font-bold text-slate-900 block">WhatsApp Alerts</span>
                      <span className="text-slate-500 text-[11px]">
                        Receive instant buyer alerts directly on WhatsApp
                      </span>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#145C3D]" />
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF8F2] border border-[#E2EBE5]">
                    <div>
                      <span className="font-bold text-slate-900 block">Email Digest</span>
                      <span className="text-slate-500 text-[11px]">
                        Weekly new properties in chosen Kerala locations
                      </span>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#145C3D]" />
                  </div>

                  <button
                    onClick={() => setUser(null)}
                    className="w-full py-3 rounded-2xl border border-rose-200 text-rose-600 hover:bg-rose-50 font-bold text-xs flex items-center justify-center gap-2 transition-colors mt-6"
                  >
                    <LogOut size={16} />
                    <span>Sign Out from VeeduX</span>
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
