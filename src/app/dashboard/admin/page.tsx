"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, Users, Award, BarChart3, Settings } from "lucide-react";

interface UserData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Check if user is authenticated as admin
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      router.push("/auth/login");
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      if (parsedUser.role !== "ADMIN") {
        router.push("/dashboard/user");
        return;
      }
      queueMicrotask(() => setUser(parsedUser));
    } catch {
      router.push("/auth/login");
    } finally {
      // defer loading state update
      queueMicrotask(() => setLoading(false));
    }
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

  const stats = [
    { label: "Utilisateurs", value: "0", icon: Users },
    { label: "Candidatures", value: "0", icon: Award },
    { label: "Votes", value: "0", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="bg-black/50 border-b border-white/10 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-[#b91c1c] rounded-full flex items-center justify-center font-serif text-[#b91c1c] text-sm font-bold">
              A
            </div>
            <span className="font-bold hidden md:block">ASPA Admin</span>
          </Link>

          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-400">
              Admin: {user.firstName} {user.lastName}
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
              <div className="pb-6 border-b border-white/10">
                <div className="inline-block px-3 py-1 bg-[#b91c1c]/20 text-[#b91c1c] text-xs font-bold rounded-full">
                  ADMINISTRATEUR
                </div>
              </div>

              <nav className="space-y-2">
                {[
                  { id: "overview", label: "Aperçu", icon: BarChart3 },
                  { id: "users", label: "Utilisateurs", icon: Users },
                  { id: "submissions", label: "Candidatures", icon: Award },
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
          <div className="lg:col-span-3 space-y-8">
            {activeTab === "overview" && (
              <>
                <h2 className="text-3xl font-bold">Tableau de Bord</h2>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6">
                  {stats.map(({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="bg-white/5 border border-white/10 rounded-lg p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-gray-400 text-sm">{label}</p>
                          <p className="text-3xl font-bold mt-2">{value}</p>
                        </div>
                        <div className="w-12 h-12 bg-[#b91c1c]/20 rounded-lg flex items-center justify-center text-[#b91c1c]">
                          <Icon size={24} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-6">Activité Récente</h3>
                  <div className="text-center py-12">
                    <p className="text-gray-400">Aucune activité récente</p>
                  </div>
                </div>
              </>
            )}

            {activeTab === "users" && (
              <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Gestion des Utilisateurs
                </h2>
                <div className="text-center py-12">
                  <Users size={48} className="mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-400">Aucun utilisateur</p>
                </div>
              </div>
            )}

            {activeTab === "submissions" && (
              <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Gestion des Candidatures
                </h2>
                <div className="text-center py-12">
                  <Award size={48} className="mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-400">Aucune candidature</p>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Paramètres Administrateur
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-4">
                      Catégories d&apos;Awards
                    </label>
                    <button className="px-6 py-3 bg-[#b91c1c]/20 border border-[#b91c1c]/50 text-[#b91c1c] rounded-lg hover:bg-[#b91c1c]/30 transition-colors font-semibold">
                      Gérer les catégories
                    </button>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <label className="block text-sm font-semibold text-gray-400 mb-4">
                      Calendrier
                    </label>
                    <button className="px-6 py-3 bg-[#b91c1c]/20 border border-[#b91c1c]/50 text-[#b91c1c] rounded-lg hover:bg-[#b91c1c]/30 transition-colors font-semibold">
                      Configurer les dates
                    </button>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <label className="block text-sm font-semibold text-gray-400 mb-4">
                      Rapports
                    </label>
                    <button className="px-6 py-3 bg-[#b91c1c]/20 border border-[#b91c1c]/50 text-[#b91c1c] rounded-lg hover:bg-[#b91c1c]/30 transition-colors font-semibold">
                      Exporter les données
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
