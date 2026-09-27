"use client";

import React, { useState } from "react";
import Link from "next/link";
import SihDemoModal from "@/components/SihDemoModal";
import { Button, Tag, SectionHeader, Card } from "@/components/ui";
import {
  Rocket,
  BookOpen,
  Zap,
  Target,
  Building2,
  GraduationCap,
  BarChart3,
  Star,
  Map,
  Landmark,
  Bot,
  MapPin,
  TrendingUp,
  Repeat,
  RefreshCw,
  Radio,
  Microscope,
  Scale,
} from "lucide-react";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [showLoop, setShowLoop] = useState(false);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Hero */}
      <section className="relative text-center py-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[200px] bg-[var(--sb-halo)] blur-[100px] rounded-full pointer-events-none -z-10" />

<div className="inline-flex items-center gap-1.5 status-healthy px-3 py-1 rounded-full text-[11px] font-semibold mb-3">
           <span className="w-1.5 h-1.5 rounded-full bg-cta animate-pulse"></span>
           Live Intelligence Active
         </div>

         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-ink max-w-3xl mx-auto leading-[1.1] mb-3">
           Know Your{" "}
           <span className="text-ink">
             Career Readiness
           </span>
        </h1>

        <p className="text-sm text-ink-muted max-w-xl mx-auto mb-5">
          See how your skills match real employer demand — and exactly what to learn next.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button variant="primary" size="lg" href="/career-readiness">
            Check My Readiness
          </Button>
          <Button variant="default" size="lg" onClick={() => setIsDemoModalOpen(true)}>
            <Rocket className="w-4 h-4" /> Watch Demo
          </Button>
        </div>
      </section>

      {/* 3-Path Triage */}
      <section>
        <SectionHeader icon={<Target className="w-5 h-5" />} title="Choose Your Path" subtitle="Three ways to use SkillBridge" className="mb-3" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Card>
            <div className="p-5 space-y-3">
              <GraduationCap className="w-7 h-7 text-ink-muted" />
              <div>
                <h3 className="text-sm font-bold text-ink">For Students</h3>
                <p className="text-xs text-ink-muted mt-0.5">Check your job readiness and find the courses you need.</p>
              </div>
              <Button variant="primary" size="sm" href="/career-readiness">Check Readiness</Button>
            </div>
          </Card>
          <Card>
            <div className="p-5 space-y-3">
              <Landmark className="w-7 h-7 text-ink-muted" />
              <div>
                <h3 className="text-sm font-bold text-ink">For Government</h3>
                <p className="text-xs text-ink-muted mt-0.5">Track placement metrics and policy impact across districts.</p>
              </div>
              <Button variant="primary" size="sm" href="/dashboard">Open Dashboard</Button>
            </div>
          </Card>
          <Card>
            <div className="p-5 space-y-3">
              <Building2 className="w-7 h-7 text-ink-muted" />
              <div>
                <h3 className="text-sm font-bold text-ink">For Employers</h3>
                <p className="text-xs text-ink-muted mt-0.5">Find skilled candidates from our partner pool and validate curriculum.</p>
              </div>
              <Button variant="primary" size="sm" href="/employers">View Partners</Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Stats + Hot Skills inline */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {[
          { icon: BookOpen, value: "1,247", label: "Courses", color: "text-sun-strong" },
          { icon: Zap, value: "389", label: "Skill Gaps", color: "text-crimson" },
          { icon: Target, value: "67.4%", label: "Placement", color: "text-cta" },
          { icon: Building2, value: "856", label: "Partners", color: "text-ink" },
        ].map((s) => (
          <div key={s.label} className="glass-card px-3 py-3 flex items-center gap-3">
            <s.icon className="w-5 h-5 text-ink-muted shrink-0" />
            <div>
              <span className={`text-lg font-black ${s.color} block leading-tight`}>{s.value}</span>
              <span className="text-[10px] text-ink-faint">{s.label}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Hot Skills */}
      <section className="glass-card p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse"></span>
          <span className="text-[11px] font-bold text-ink uppercase tracking-wider">Hot Skills</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "GenAI & LLMs", growth: "+42%", hot: true },
            { name: "Cloud & DevOps", growth: "+34%", hot: true },
            { name: "Cybersecurity", growth: "+29%", hot: false },
            { name: "Full-Stack Dev", growth: "+22%", hot: false },
            { name: "Data Analysis", growth: "+18%", hot: false },
            { name: "IoT & Embedded", growth: "+15%", hot: false },
          ].map((s) => (
            <Tag key={s.name} tone={s.hot ? "rose" : "neutral"} label={s.name}>
              <span className={`font-mono ${s.hot ? "text-crimson" : "text-ink-faint"}`}>{s.growth}</span>
            </Tag>
          ))}
        </div>
      </section>

      {/* Student Modules */}
      <section>
        <SectionHeader icon={<GraduationCap className="w-5 h-5" />} title="For Students" className="mb-3" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {[
            { name: "My Readiness", desc: "Check readiness for your dream job", href: "/career-readiness", icon: Target, hot: true },
            { name: "My Dashboard", desc: "Track your progress", href: "/my-dashboard", icon: BarChart3 },
            { name: "Wishlist", desc: "Saved courses", href: "/wishlist", icon: Star },
            { name: "Career Paths", desc: "Learning roadmaps", href: "/career-pathways", icon: Map },
          ].map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className={`glass-card glass-card-interactive p-3.5 block group ${m.hot ? "ring-fit" : ""}`}
            >
              <m.icon className="w-5 h-5 block mb-1 text-ink-muted group-hover:text-neon transition-colors" />
              <h3 className={`text-xs font-bold transition-colors ${m.hot ? "text-cta" : "text-ink group-hover:text-neon"}`}>{m.name}</h3>
              <p className="text-[11px] text-ink-faint mt-0.5">{m.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Admin Modules */}
      <section>
        <SectionHeader icon={<Landmark className="w-5 h-5" />} title="For Administrators" className="mb-3" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {[
            { name: "Cockpit", href: "/dashboard", icon: BarChart3 },
            { name: "AI Advisor", href: "/curriculum-advisor", icon: Bot },
            { name: "Policy", href: "/policy-decisions", icon: Landmark },
            { name: "Simulator", href: "/skill-gaps", icon: Zap },
            { name: "Districts", href: "/district-plans", icon: MapPin },
            { name: "Placement", href: "/placement-analytics", icon: TrendingUp },
          ].map((m) => (
            <Link key={m.href} href={m.href} className="glass-card glass-card-interactive p-3 text-center group">
              <m.icon className="w-5 h-5 mx-auto block text-ink-muted group-hover:text-neon transition-colors" />
              <span className="text-[11px] font-bold text-ink-muted group-hover:text-neon transition-colors">{m.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="glass-card overflow-hidden">
        <button
          onClick={() => setShowLoop(!showLoop)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-line transition-colors"
        >
          <div className="flex items-center gap-2">
            <Repeat className="w-4 h-4 text-ink-muted" />
            <div>
              <span className="text-sm font-bold text-ink">How SkillBridge Works</span>
              <span className="text-[11px] text-ink-faint block">12-stage intelligence loop</span>
            </div>
          </div>
          <svg className={`w-4 h-4 text-ink-faint transition-transform ${showLoop ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showLoop && (
          <div className="border-t border-line p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {[
                { n: "01", t: "Demand Detection", i: Radio },
                { n: "02", t: "Skill Extraction", i: Microscope },
                { n: "03", t: "Gap Analysis", i: Scale },
                { n: "04", t: "Course Mapping", i: Map },
                { n: "05", t: "AI Recommendations", i: Bot },
                { n: "06", t: "Continuous Updates", i: RefreshCw },
              ].map((s) => (
                <div key={s.n} className="p-3 rounded-lg bg-raised border border-line text-center">
                  <s.i className="w-5 h-5 mx-auto block text-ink-muted" />
                  <span className="text-[10px] font-mono text-cta">{s.n}</span>
                  <p className="text-[11px] font-bold text-ink mt-0.5">{s.t}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <SihDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </main>
  );
}