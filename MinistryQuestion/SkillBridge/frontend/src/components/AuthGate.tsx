"use client";

import { useAuth } from "@/lib/AuthContext";
import Link from "next/link";
import { Button } from "@/components/ui";

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-cta border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center space-y-4 max-w-sm">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-raised border border-line flex items-center justify-center">
            <svg className="w-8 h-8 text-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-ink">Sign in required</h2>
          <p className="text-sm text-ink-muted">You need an account to access this feature. It takes 30 seconds to create one.</p>
          <div className="flex items-center justify-center gap-3">
            <Button variant="primary" href="/login">
              Sign In
            </Button>
            <Button variant="default" href="/register">
              Create Account
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}