"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, Heart, Award, User, Settings } from "lucide-react";

interface UserData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export default function UserDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("nominations");

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      router.push("/auth/login");
      return;
    }

    try {
      // defer state update to avoid cascading renders
      queueMicrotask(() => setUser(JSON.parse(userData)));
    } catch {
      router.push("/auth/login");
    } finally {
      // defer loading state update
      queueMicrotask(() => setLoading(false));
    }

    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="bg-black/50 border-b border-white/10 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-[#b91c1c] rounded-full flex items-center justify-center font-serif text-[#b91c1c] text-sm">
              A
            </div>
            <span className="font-bold hidden md:block">ASPA Dashboard</span>
          </Link>

          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-400">
              {user.firstName} {user.lastName}
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#b91c1c]/30 hover:border-[#b91c1c] text-[#b91c1c] transition-colors"
            >
              <LogOut size={18} />
              <span className="hidden sm:inline">Déconnexion</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="w-12 h-12 bg-linear-to-br from-[#b91c1c] to-red-600 rounded-lg flex items-center justify-center">
                  <User size={24} />
                </div>
                <div>
                  <p className="font-semibold text-sm">{user.firstName}</p>
                  <p className="text-gray-400 text-xs">{user.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                {[
                  { id: "nominations", label: "Mes Nominations", icon: Heart },
                  { id: "submissions", label: "Candidatures", icon: Award },
                  { id: "profile", label: "Profil", icon: User },
                  { id: "settings", label: "Paramètres", icon: Settings },
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === id
                        ? "bg-[#b91c1c]/20 border border-[#b91c1c]/50 text-[#b91c1c]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm">{label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "nominations" && (
              <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Mes Nominations</h2>
                <div className="text-center py-12">
                  <Heart size={48} className="mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-400">
                    Vous n&apos;avez pas encore nominé de candidats.
                  </p>
                  <Link
                    href="/#awards"
                    className="inline-block mt-6 px-6 py-2 bg-[#b91c1c] text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Explorer les catégories
                  </Link>
                </div>
              </div>
            )}

            {activeTab === "submissions" && (
              <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Candidatures</h2>
                <div className="text-center py-12">
                  <Award size={48} className="mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-400">
                    Vous n&apos;avez pas encore soumis de candidature.
                  </p>
                  <button className="inline-block mt-6 px-6 py-2 bg-[#b91c1c] text-white font-bold rounded-lg hover:bg-red-600 transition-colors">
                    Soumettre une candidature
                  </button>
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Mon Profil</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      value={user.firstName}
                      disabled
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      value={user.lastName}
                      disabled
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      disabled
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Paramètres</h2>
                <div className="space-y-4">
                  <button className="w-full bg-red-500/10 border border-red-500/50 hover:bg-red-500/20 text-red-400 px-6 py-3 rounded-lg font-semibold transition-colors">
                    Changer le mot de passe
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-500/10 border border-red-500/50 hover:bg-red-500/20 text-red-400 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Supprimer le compte
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
