/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Mail, ArrowRight, Instagram, Facebook, Twitter } from "lucide-react";
import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-sans selection:bg-zinc-200">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100/50" />
      </div>

      {/* Header / Nav */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          {/* Logo Recreation (Small) */}
          <div className="relative h-8 w-8 flex items-center justify-center border border-zinc-900 font-serif text-lg font-light italic">
             L
          </div>
          <span className="text-[11px] font-semibold tracking-[0.4em] uppercase text-zinc-900">
            Lunovia
          </span>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-8"
        >
          <div className="hidden gap-8 text-[11px] font-medium tracking-[0.2em] uppercase lg:flex text-zinc-400">
            <a href="#" className="hover:text-zinc-900 transition-colors">Our Story</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Science</a>
          </div>
          <button className="text-[11px] font-semibold tracking-[0.2em] uppercase border-b border-zinc-900 pb-0.5 hover:text-zinc-500 transition-all text-zinc-900">
            Login
          </button>
        </motion.nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex min-h-[calc(100vh-100px)] flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Main Logo Container */}
          <div className="mb-16 relative flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <span className="font-serif text-[180px] leading-none text-zinc-900 md:text-[240px] font-extralight italic tracking-tighter">
                L
              </span>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="h-[1px] bg-zinc-300 my-4" 
              />
              <h1 className="font-serif text-5xl tracking-[0.2em] uppercase text-zinc-900 md:text-7xl mb-2">
                Lunovia
              </h1>
              <p className="text-[10px] font-medium tracking-[0.4em] uppercase text-zinc-400">
                Crafted for Deep Restoration
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mb-16"
          >
            <h2 className="font-serif text-3xl italic text-zinc-800 md:text-5xl tracking-wide font-light">
              Coming Soon
            </h2>
            <p className="mt-6 mx-auto max-w-md text-sm leading-relaxed tracking-wider text-zinc-500 font-light italic">
              We are perfecting the art of restoration. <br />
              The ultimate sleep experience is arriving soon.
            </p>
          </motion.div>

          {/* Tagline from Image 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mb-12"
          >
             <p className="text-[10px] font-medium tracking-[0.6em] uppercase text-zinc-400">
                Better sleep. Better you.
             </p>
          </motion.div>

          {/* Subscription / Notify Me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="mx-auto w-full max-w-md"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 sm:flex-row"
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-b border-zinc-300 bg-transparent py-3 pl-10 pr-4 text-sm outline-none focus:border-zinc-900 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-zinc-900 px-8 py-3 text-[10px] font-bold tracking-widest uppercase text-white transition-all hover:bg-zinc-800 active:scale-[0.98]"
                  >
                    Notify Me
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-zinc-900/5 p-6 backdrop-blur-sm"
                >
                  <p className="font-serif text-xl italic text-zinc-800">
                    We'll let you know when we're ready.
                  </p>
                  <p className="mt-2 text-xs tracking-wider text-zinc-500">
                    Thank you for joining our inner circle.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer / Social */}
      <footer className="relative z-10 p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-zinc-200/50 bg-white/20 backdrop-blur-sm">
        <div className="flex gap-6 text-zinc-400">
          <a href="#" className="hover:text-zinc-900 transition-colors"><Instagram className="h-4 w-4" /></a>
          <a href="#" className="hover:text-zinc-900 transition-colors"><Facebook className="h-4 w-4" /></a>
          <a href="#" className="hover:text-zinc-900 transition-colors"><Twitter className="h-4 w-4" /></a>
        </div>
        
        <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-400">
          © 2026 Lunovia. Store coming late 2026.
        </p>

        <div className="flex gap-4 text-[9px] font-medium tracking-[0.1em] uppercase text-zinc-400">
          <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Terms</a>
        </div>
      </footer>

      {/* Decorative Elements */}
      <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-zinc-300/10 blur-[120px] pointer-events-none" />
      <div className="absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-zinc-400/10 blur-[120px] pointer-events-none" />
    </div>
  );
}
