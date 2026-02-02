"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, User } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Registration failed");
        return;
      }

      // Store token
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to user dashboard
      router.push("/dashboard/user");
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-12 h-12 border-2 border-[#b91c1c] rounded-full flex items-center justify-center font-serif text-[#b91c1c] font-bold text-xl italic">
              A
            </div>
            <span className="text-white font-bold text-lg">ASPA</span>
          </Link>
        </div>

        {/* Form Card */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-xl">
          <h1 className="text-2xl font-bold text-white mb-2 text-center">
            S&apos;inscrire
          </h1>
          <p className="text-gray-400 text-center text-sm mb-8">
            Créez votre compte pour participer aux awards
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-500 mb-2">
                Prénom
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-3 text-gray-500"
                />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Jean"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#b91c1c] transition-colors"
                  required
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-500 mb-2">
                Nom
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-3 text-gray-500"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Dupont"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#b91c1c] transition-colors"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-500 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-3 text-gray-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#b91c1c] transition-colors"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-500 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-3 text-gray-500"
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#b91c1c] transition-colors"
                  required
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Min. 8 caractères, 1 majuscule, 1 chiffre, 1 caractère spécial
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#b91c1c] hover:bg-red-600 disabled:opacity-50 text-white font-bold py-3 rounded-lg transition-colors mt-6"
            >
              {loading ? "Inscription en cours..." : "S'inscrire"}
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Vous avez déjà un compte ?{" "}
            <Link
              href="/auth/login"
              className="text-[#b91c1c] hover:underline font-semibold"
            >
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
