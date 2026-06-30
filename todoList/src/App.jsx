import React, { useState } from "react";
import {
  Waves,
  ShieldCheck,
  TrendingUp,
  Box,
  Code2,
  Layers,
  Globe,
  CircleDot,
  Circle,
  Menu,
  X,
} from "lucide-react";

/**
 * Focus — Deep Work Sanctuary landing page (fully responsive)
 *
 * Color tokens (light theme, "Emerald Forest" palette):
 *   primary:            #006c49
 *   primary-container:  #b0f0d6
 *   on-surface:          #191c1a
 *   on-surface-variant:  #444945
 *   surface:             #f8faf9
 *   surface-container-low: #f0f4f1
 *   surface-variant:     #dee5df
 *
 * Fonts: Manrope (display/headline), Inter (body), JetBrains Mono (labels)
 * Load via <link> in index.html:
 *   https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap
 *
 * Breakpoints used (Tailwind defaults): sm 640px, md 768px, lg 1024px, xl 1280px
 */

const colors = {
  primary: "#006c49",
  primaryContainer: "#b0f0d6",
  onPrimary: "#ffffff",
  onSurface: "#191c1a",
  onSurfaceVariant: "#444945",
  surface: "#f8faf9",
  surfaceContainerLow: "#f0f4f1",
  surfaceVariant: "#dee5df",
  tertiary: "#006c49",
};

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl sm:rounded-3xl border ${className}`}
      style={{
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderColor: "rgba(0,108,73,0.1)",
      }}
    >
      {children}
    </div>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderColor: "rgba(222,229,223,0.3)",
      }}
    >
      <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-16 py-3 sm:py-4 max-w-[1440px] mx-auto">
        <div
          className="flex items-center gap-2 font-bold tracking-tight"
          style={{
            fontFamily: "Manrope, sans-serif",
            color: colors.primary,
            fontSize: 20,
          }}
        >
          <Box size={24} strokeWidth={2.2} />
          Focus
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <a
            href="#"
            className="font-bold pb-1 border-b-2 text-sm"
            style={{
              color: colors.primary,
              borderColor: colors.primary,
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            Features
          </a>
          <a
            href="#"
            className="text-sm hover:opacity-80 transition-colors"
            style={{
              color: colors.onSurfaceVariant,
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-sm hover:opacity-80 transition-colors"
            style={{
              color: colors.onSurfaceVariant,
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            About
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="hidden sm:inline-flex font-bold px-5 md:px-6 py-2 md:py-2.5 rounded-full transition-transform active:scale-95 text-sm"
            style={{
              background: colors.primary,
              color: colors.onPrimary,
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            Get Started
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: colors.primary }}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          className="md:hidden border-t px-4 py-4 flex flex-col gap-4"
          style={{
            borderColor: "rgba(222,229,223,0.3)",
            background: colors.surface,
          }}
        >
          <a
            href="#"
            className="font-bold text-sm"
            style={{
              color: colors.primary,
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            Features
          </a>
          <a
            href="#"
            className="text-sm"
            style={{
              color: colors.onSurfaceVariant,
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-sm"
            style={{
              color: colors.onSurfaceVariant,
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            About
          </a>
          <button
            className="font-bold px-5 py-2.5 rounded-full text-sm w-full"
            style={{
              background: colors.primary,
              color: colors.onPrimary,
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

function HeroMockup() {
  return (
    <div className="relative">
      <div
        className="absolute -top-8 sm:-top-12 -right-8 sm:-right-12 w-48 sm:w-64 h-48 sm:h-64 rounded-full pointer-events-none"
        style={{
          background: colors.primary,
          opacity: 0.05,
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute -bottom-8 sm:-bottom-12 -left-8 sm:-left-12 w-60 sm:w-80 h-60 sm:h-80 rounded-full pointer-events-none"
        style={{
          background: colors.tertiary,
          opacity: 0.05,
          filter: "blur(120px)",
        }}
      />
      <GlassCard className="p-3 sm:p-4 relative z-10 shadow-xl">
        <div
          className="flex items-center justify-between mb-4 sm:mb-6 border-b pb-3"
          style={{ borderColor: "rgba(222,229,223,0.4)" }}
        >
          <div className="flex gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "rgba(186,26,26,0.4)" }}
            />
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "rgba(76,99,88,0.4)" }}
            />
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: "rgba(0,108,73,0.4)" }}
            />
          </div>
          <div
            className="text-[10px] sm:text-xs opacity-60 text-right"
            style={{
              color: colors.onSurfaceVariant,
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            Session: Deep Flow #04
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-3">
            <div
              className="p-4 rounded-xl bg-white border"
              style={{ borderColor: "rgba(222,229,223,0.4)" }}
            >
              <p
                className="text-xs mb-1 tracking-wide"
                style={{
                  color: "#4c6358",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                TIMER
              </p>
              <div
                className="font-semibold text-xl sm:text-2xl"
                style={{
                  color: colors.primary,
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                24:58
              </div>
              <div
                className="w-full h-1 rounded-full mt-3 overflow-hidden"
                style={{ background: "#edf1ef" }}
              >
                <div
                  className="w-2/3 h-full"
                  style={{ background: colors.primary }}
                />
              </div>
            </div>
            <div
              className="p-4 rounded-xl bg-white border"
              style={{ borderColor: "rgba(222,229,223,0.4)" }}
            >
              <p
                className="text-xs mb-1 tracking-wide"
                style={{
                  color: "#4c6358",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                FOCUS TASK
              </p>
              <p
                className="text-sm sm:text-base"
                style={{
                  color: colors.onSurface,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Architectural System Design
              </p>
            </div>
          </div>

          <div
            className="p-4 rounded-xl flex flex-col justify-between border"
            style={{
              background: "rgba(176,240,214,0.2)",
              borderColor: "rgba(0,108,73,0.1)",
            }}
          >
            <div>
              <p
                className="text-xs mb-2 tracking-wide"
                style={{
                  color: colors.primary,
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                UPCOMING
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CircleDot
                    size={16}
                    style={{ color: colors.primary, flexShrink: 0 }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: colors.onSurface }}
                  >
                    Component Logic Review
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Circle
                    size={16}
                    style={{ color: "rgba(68,73,69,0.4)", flexShrink: 0 }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: colors.onSurfaceVariant }}
                  >
                    Stakeholder Sync
                  </span>
                </div>
              </div>
            </div>
            <button
              className="mt-4 w-full py-2 rounded-lg font-bold text-sm transition-colors"
              style={{ background: colors.primary, color: colors.onPrimary }}
            >
              Enter Sanctuary
            </button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

function Hero() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 mb-12 sm:mb-16 md:mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
        <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border"
            style={{
              background: "rgba(176,240,214,0.3)",
              borderColor: "rgba(0,108,73,0.2)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse flex-shrink-0"
              style={{ background: colors.primary }}
            />
            <span
              className="text-[10px] sm:text-xs font-semibold tracking-wide"
              style={{
                color: colors.primary,
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              The Digital Sanctuary for Deep Work
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl leading-tight"
            style={{
              color: colors.onSurface,
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Achieve absolute{" "}
            <span style={{ color: colors.primary, fontStyle: "italic" }}>
              flow
            </span>{" "}
            within the forest of noise.
          </h1>

          <p
            className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0"
            style={{
              color: colors.onSurfaceVariant,
              fontFamily: "Inter, sans-serif",
            }}
          >
            A minimalist productivity engine designed to eliminate digital
            friction. Immerse yourself in a workspace that breathes with your
            rhythm.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 pt-2 sm:pt-4">
            <button
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform shadow-lg w-full sm:w-auto"
              style={{
                background: colors.primary,
                color: colors.onPrimary,
                boxShadow: "0 10px 40px -10px rgba(0,108,73,0.15)",
              }}
            >
              Start Free Trial
            </button>
            <button
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold border-2 transition-colors w-full sm:w-auto"
              style={{
                borderColor: "rgba(0,108,73,0.2)",
                color: colors.primary,
              }}
            >
              Watch Demo
            </button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function BentoGrid() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-20">
      <div className="mb-8 sm:mb-10 text-center lg:text-left">
        <h2
          className="text-xl sm:text-2xl mb-2"
          style={{
            color: colors.onSurface,
            fontFamily: "Manrope, sans-serif",
            fontWeight: 600,
          }}
        >
          Designed for the Deep Worker
        </h2>
        <p
          className="text-sm sm:text-base max-w-2xl mx-auto lg:mx-0"
          style={{
            color: colors.onSurfaceVariant,
            fontFamily: "Inter, sans-serif",
          }}
        >
          Precision tools to protect your most valuable asset: your attention.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 sm:gap-6 h-auto md:h-[600px]">
        {/* Atmospheric Audio */}
        <GlassCard className="sm:col-span-2 p-6 sm:p-8 flex flex-col justify-end relative overflow-hidden group hover:border-[rgba(0,108,73,0.3)] transition-all min-h-[180px]">
          <div className="absolute top-6 sm:top-8 right-6 sm:right-8 opacity-20 group-hover:opacity-100 transition-opacity">
            <Waves
              size={32}
              className="sm:w-9 sm:h-9"
              style={{ color: colors.primary }}
            />
          </div>
          <h3
            className="text-lg sm:text-xl mb-2"
            style={{
              color: colors.onSurface,
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
            }}
          >
            Atmospheric Audio
          </h3>
          <p
            style={{
              color: colors.onSurfaceVariant,
              fontFamily: "Inter, sans-serif",
            }}
            className="text-sm sm:text-base"
          >
            Generative soundscapes of pine forests, midnight storms, and
            rhythmic white noise.
          </p>
        </GlassCard>

        {/* The Shield */}
        <GlassCard className="sm:col-span-1 p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-3 sm:gap-4 hover:bg-[rgba(176,240,214,0.1)] transition-colors min-h-[180px]">
          <ShieldCheck
            size={40}
            className="sm:w-12 sm:h-12"
            style={{ color: colors.primary }}
          />
          <h3
            className="text-[11px] sm:text-xs tracking-widest uppercase font-bold"
            style={{
              color: colors.primary,
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            The Shield
          </h3>
          <p
            className="text-sm sm:text-base"
            style={{ color: colors.onSurface, fontFamily: "Inter, sans-serif" }}
          >
            Hard-blocks notifications and non-essential apps during sessions.
          </p>
        </GlassCard>

        {/* Flow Analytics */}
        <GlassCard className="sm:col-span-1 p-6 sm:p-8 flex flex-col justify-between hover:bg-[#edf1ef] transition-colors min-h-[160px]">
          <div className="flex items-center gap-2">
            <TrendingUp
              size={18}
              className="sm:w-5 sm:h-5"
              style={{ color: colors.primary }}
            />
            <span
              className="text-[11px] sm:text-xs font-bold tracking-wide"
              style={{
                color: colors.primary,
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              FLOW ANALYTICS
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <div
              className="text-3xl sm:text-4xl font-bold"
              style={{
                color: colors.onSurface,
                fontFamily: "Manrope, sans-serif",
              }}
            >
              142h
            </div>
            <p
              className="text-xs font-medium"
              style={{ color: colors.onSurfaceVariant }}
            >
              Total Deep Work this month
            </p>
          </div>
        </GlassCard>

        {/* Zen UI */}
        <GlassCard className="sm:col-span-2 p-6 sm:p-8 relative overflow-hidden group hover:border-[rgba(0,108,73,0.3)] transition-all min-h-[180px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-center">
            <div>
              <h3
                className="text-lg sm:text-xl mb-2"
                style={{
                  color: colors.onSurface,
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 600,
                }}
              >
                Zen UI
              </h3>
              <p
                className="text-sm sm:text-base"
                style={{
                  color: colors.onSurfaceVariant,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                An interface so light it disappears when you start working.
              </p>
            </div>
            <div className="relative h-28 sm:h-40 hidden sm:block">
              <div
                className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 rounded-full group-hover:scale-150 transition-transform duration-700"
                style={{
                  background: "rgba(0,108,73,0.1)",
                  filter: "blur(24px)",
                }}
              />
              <div
                className="absolute bottom-0 right-4 w-10 sm:w-12 h-10 sm:h-12 border-2 rounded-lg rotate-12"
                style={{ borderColor: "rgba(0,108,73,0.2)" }}
              />
              <div
                className="absolute top-4 right-14 sm:right-16 w-7 sm:w-8 h-7 sm:h-8 border-2 rounded-full"
                style={{ borderColor: "rgba(0,108,73,0.2)" }}
              />
            </div>
          </div>
        </GlassCard>

        {/* Integrated Ecosystem */}
        <GlassCard className="sm:col-span-2 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 hover:bg-[#edf1ef] transition-colors min-h-[160px]">
          <div className="space-y-2 text-center sm:text-left">
            <h3
              className="text-lg sm:text-xl"
              style={{
                color: colors.onSurface,
                fontFamily: "Manrope, sans-serif",
                fontWeight: 600,
              }}
            >
              Integrated Ecosystem
            </h3>
            <p
              className="text-sm sm:text-base"
              style={{
                color: colors.onSurfaceVariant,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Connect with Notion, Slack, and Github.
            </p>
          </div>
          <div className="flex -space-x-4 flex-shrink-0">
            {[Box, Code2, Layers].map((Icon, i) => (
              <div
                key={i}
                className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white border-2 flex items-center justify-center shadow-sm"
                style={{ borderColor: "#dee5df" }}
              >
                <Icon
                  size={18}
                  className="sm:w-5 sm:h-5"
                  style={{ color: colors.primary }}
                />
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-20">
      <div
        className="relative rounded-[28px] sm:rounded-[40px] p-8 sm:p-12 md:p-20 overflow-hidden text-center border"
        style={{
          background: "rgba(176,240,214,0.2)",
          borderColor: "rgba(0,108,73,0.1)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full pointer-events-none"
          style={{ background: "rgba(0,108,73,0.1)", filter: "blur(100px)" }}
        />
        <div className="relative z-10 max-w-2xl mx-auto space-y-5 sm:space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl"
            style={{
              color: colors.onSurface,
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Ready to find your edge?
          </h2>
          <p
            className="text-base sm:text-lg"
            style={{
              color: colors.onSurfaceVariant,
              fontFamily: "Inter, sans-serif",
            }}
          >
            Join 20,000+ creators, designers, and engineers who have mastered
            their attention with Focus.
          </p>
          <div className="pt-2 sm:pt-4">
            <button
              className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:scale-[1.05] transition-all"
              style={{
                background: colors.primary,
                color: colors.onPrimary,
                boxShadow: "0 10px 40px -10px rgba(0,108,73,0.15)",
              }}
            >
              Get Focus for Desktop
            </button>
            <p
              className="mt-3 text-[11px] sm:text-xs opacity-60"
              style={{
                color: colors.onSurfaceVariant,
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              Available on macOS, Windows, and Linux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: colors.surfaceContainerLow,
        borderColor: "rgba(222,229,223,0.3)",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 sm:px-6 md:px-16 py-8 sm:py-10 max-w-[1440px] mx-auto gap-6 md:gap-4">
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <div
            className="flex items-center gap-2 font-bold text-sm"
            style={{
              color: colors.onSurface,
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            <Box size={18} style={{ color: colors.primary }} />
            Focus Productivity Inc.
          </div>
          <p
            className="text-xs sm:text-sm"
            style={{
              color: colors.onSurfaceVariant,
              fontFamily: "Inter, sans-serif",
            }}
          >
            © 2024 Focus Productivity Inc. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            "Privacy Policy",
            "Terms of Service",
            "Help Center",
            "Contact Support",
          ].map((label) => (
            <a
              key={label}
              href="#"
              className="text-[11px] sm:text-xs hover:underline transition-all"
              style={{
                color: colors.onSurfaceVariant,
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex gap-3">
          <div
            className="w-9 sm:w-10 h-9 sm:h-10 rounded-full flex items-center justify-center border cursor-pointer transition-colors"
            style={{
              borderColor: "rgba(222,229,223,0.3)",
              background: "rgba(255,255,255,0.7)",
            }}
          >
            <Globe
              size={16}
              className="sm:w-[18px] sm:h-[18px]"
              style={{ color: colors.onSurface }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function FocusLandingPage() {
  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{
        background: colors.surface,
        color: colors.onSurface,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <NavBar />
      <main className="pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-10">
        <Hero />
        <BentoGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
