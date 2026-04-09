"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Target, Eye, Shield, Zap, Users, Globe2, Rocket,
  Lightbulb, ArrowRight, Compass, Sparkles, Star, GraduationCap,
  Heart, Monitor, Library, Bus, Quote, UserCheck, CheckCircle2,
  Award, BookOpen, PenTool, Trophy
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring, Variants } from "framer-motion"

// ==========================================
// 1. IMPORT NAVBAR & TOPBAR HERE
// ==========================================
import TopBar from "@/components/topbar";
import NavBar from "@/components/navbar";

export default function ChairmanMessagePage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -60])
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -30])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  }

  return (
    <main className="w-full bg-[#fafcff] text-textmain overflow-hidden relative selection:bg-brandOrange/20">

      {/* ========================================== */}
      {/* 2. STICKY HEADER CONTAINER */}
      {/* ========================================== */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/50 supports-[backdrop-filter]:bg-white/60">
        <TopBar />
        <NavBar />
      </div>

      {/* ========================================== */}
      {/* 1. COMBINED HERO & PROFILE SECTION (Side-by-Side Layout) */}
      {/* ========================================== */}
      <section ref={sectionRef} className="pt-[140px] md:pt-[160px] pb-12 md:pb-16 px-4 relative bg-white border-b border-slate-100 overflow-hidden">
        {/* Soft Background Pattern & Glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-brandOrange/5 to-[#0C508C]/5 rounded-full blur-[80px] -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#0C508C]/5 to-brandOrange/5 rounded-full blur-[60px] -z-10 -translate-x-1/3 translate-y-1/3" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* LEFT COLUMN: CHAIRMAN'S PHOTO (Always visible on load) */}
            <motion.div className="lg:col-span-5 relative sticky top-[140px]" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] border-[6px] border-white z-10 aspect-[3/4] bg-slate-100 group max-w-[360px] mx-auto lg:max-w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <img
                  src="https://bihartechassociation.com/wp-content/uploads/2025/05/chairman.jpeg"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  alt="Chairman Er. Ravi Shankar"
                />
              </div>
              
              <motion.div style={{ y: yParallax }} className="absolute -bottom-4 -right-2 md:-right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg z-20 border border-slate-100/50 max-w-[140px]">
                <Quote className="w-5 h-5 text-brandOrange mb-1.5 opacity-60" />
                <p className="font-bold text-textmain text-sm leading-tight mb-0.5">Since 2014</p>
                <p className="text-[9px] uppercase font-bold text-[#0C508C] tracking-wider">A Decade of Trust</p>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: HERO TEXT + MESSAGE */}
            <motion.div className="lg:col-span-7 space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
              
              {/* Main Heading Content */}
              <motion.div variants={itemVariants} className="space-y-4 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/60 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)]">
                  <div className="w-4 h-4 rounded-full bg-brandOrange/10 flex items-center justify-center">
                    <UserCheck className="w-2.5 h-2.5 text-brandOrange" />
                  </div>
                  <span className="text-[#0C508C] text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">From The Desk of Leadership</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-textmain tracking-tight leading-[1.15]">
                  A Vision for <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0C508C] to-brandOrange">Tomorrow's Innovators</span>
                </h1>
              </motion.div>

              {/* Name & Designation */}
              <motion.div variants={itemVariants} className="flex flex-col gap-1 pt-4 border-t border-slate-100">
                <h2 className="text-2xl md:text-3xl font-black text-textmain leading-tight">Er. Ravi Shankar Prasad Singh</h2>
                <div className="flex items-center gap-2">
                  <div className="h-px w-6 bg-brandOrange"></div>
                  <p className="text-[#0C508C] font-bold text-xs uppercase tracking-widest">Honorable Chairman, BPTPIA</p>
                </div>
              </motion.div>

              {/* Message Paragraphs */}
              <motion.div variants={itemVariants} className="text-slate-600 text-sm leading-relaxed space-y-4">
                <p className="text-base font-medium text-textmain leading-snug">
                  Welcome to the Bihar Private Technical & Professional Institutions Association (BPTPIA). It gives me immense pride to address the future leaders, innovators, and architects of our nation.
                </p>
                
                <p>
                  When we established BPTPIA in 2014, our vision was crystal clear: to create an educational ecosystem that doesn't just produce degree holders, but molds highly skilled, ethically grounded, and globally competitive professionals. In today’s era of rapid technological disruption, the definition of education has fundamentally changed.
                </p>

                <div className="p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200/60 my-4 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.04)]">
                  <h3 className="text-sm md:text-base font-bold text-textmain mb-2 flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-brandOrange" /> Bridging the Industry-Academia Gap
                  </h3>
                  <p className="text-xs md:text-sm m-0 text-slate-600 leading-relaxed">
                    One of the greatest challenges of our time is the widening gap between what is taught in academic institutions and what the industry demands. At BPTPIA, our curriculum methodology is heavily tilted towards experiential learning. We continuously upgrade our laboratories, partner with tech giants, and encourage our students to work on real-world problem statements. 
                  </p>
                </div>

                <p>
                  We understand that parents send their children to our institutions with dreams in their eyes and hope in their hearts. Let me assure you, we treat this trust as our highest responsibility. From maintaining a ragging-free, disciplined campus to providing modern hostels and world-class digital libraries, we ensure every student feels at home.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-2 flex items-center gap-3">
                <div className="w-8 h-[2px] bg-brandOrange/50"></div>
                <p className="font-medium italic text-slate-500 text-xs md:text-sm">Wishing you a transformative journey ahead.</p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. STRATEGIC PHILOSOPHY */}
      {/* ========================================== */}
      <section className="py-10 md:py-14 bg-white text-textmain rounded-[2rem] mx-4 md:mx-6 my-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0C508C]/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brandOrange/5 rounded-full blur-[60px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Pillars of Excellence</h2>
            <p className="text-slate-500 text-xs md:text-sm">Our strategic approach to holistic development ensures that every student is equipped for global success.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="md:col-span-1 p-6 bg-slate-50 rounded-2xl border border-slate-200/60 flex flex-col justify-between group hover:bg-white hover:shadow-lg hover:border-slate-200 transition-all duration-300">
              <div>
                <div className="w-12 h-12 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Globe2 className="w-6 h-6 text-brandOrange" />
                </div>
                <h3 className="text-xl font-black mb-3 text-[#0C508C]">Global<br/>Perspective</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  We prepare our students not just for local markets, but to be global citizens. Our training modules include cross-cultural communication and modern leadership ethics.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Shield, title: "Safe Environment", desc: "A nurturing, ragging-free campus that prioritizes student well-being.", color: "text-brandGreen", bgIcon: "bg-brandGreen/10" },
                { icon: Monitor, title: "Tech-Driven", desc: "Smart classrooms and IoT-enabled infrastructure for modern learning.", color: "text-[#4ea0ea]", bgIcon: "bg-[#4ea0ea]/10" },
                { icon: BookOpen, title: "Advanced Research", desc: "Access to digital libraries, journals, and dedicated innovation labs.", color: "text-brandOrange", bgIcon: "bg-brandOrange/10" },
                { icon: Trophy, title: "Holistic Growth", desc: "Investment in sports, cultural fests, and technical symposiums.", color: "text-yellow-500", bgIcon: "bg-yellow-500/10" }
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white hover:bg-slate-50 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 rounded-2xl border border-slate-100 group">
                  <div className={`w-10 h-10 ${item.bgIcon} rounded-lg flex items-center justify-center mb-3 group-hover:-translate-y-1 transition-transform`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h4 className="font-bold text-base mb-1.5 text-textmain">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. EXTENDED READING: THE ROADMAP */}
      {/* ========================================== */}
      <section className="py-10 md:py-14 bg-[#fafcff] relative">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
              <div className="inline-flex items-center gap-1.5 text-[#0C508C] font-bold uppercase tracking-widest text-[9px] bg-white border border-slate-200 shadow-sm px-3 py-1 rounded-full">
                <Target className="w-2.5 h-2.5" /> The Future Roadmap
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-textmain leading-tight">
                Empowering Youth for a <span className="text-brandOrange">Digital Era</span>
              </h2>
              <div className="space-y-3 text-slate-600 text-xs md:text-sm">
                <p>
                  Historically, Bihar has been the cradle of knowledge. It is our solemn duty to revive that glorious academic heritage through modern technical education.
                </p>
                <ul className="space-y-2.5 mt-4">
                  {[
                    { title: "100% Placement Assistance", desc: "Dedicated training for interviews." },
                    { title: "Incubation Centers", desc: "Supporting student startups." },
                    { title: "Alumni Network", desc: "Strong community for mentorship." }
                  ].map((list, i) => (
                    <li key={i} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-100 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-brandGreen shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm"><strong>{list.title}:</strong> {list.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div style={{ y: yParallaxSlow }} className="relative rounded-[1.5rem] bg-white p-6 border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]">
              <Quote className="w-10 h-10 text-brandOrange/10 absolute top-4 left-4" />
              <div className="relative z-10 space-y-4 pt-4">
                <p className="text-base md:text-lg font-medium text-textmain italic leading-relaxed">
                  "We do not just build engineers and managers; we build the nation's future. Every single student holds the potential to change the world."
                </p>
                <div className="pt-3 border-t border-slate-100">
                  <h4 className="font-bold text-sm text-textmain">Chairman's Note</h4>
                  <p className="text-[#0C508C] font-medium text-[10px] uppercase tracking-wider mt-0.5">BPTPIA Foundation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. ANIMATED STATS SECTION */}
      {/* ========================================== */}
      <section className="py-10 bg-white border-y border-slate-100 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container-custom relative z-10" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatItem icon={<CheckCircle2 className="w-5 h-5" />} val={2014} label="Established" suffix="" delay={0.1} color="#0C508C" />
            <StatItem icon={<GraduationCap className="w-5 h-5" />} val={15000} label="Alumni Worldwide" suffix="+" delay={0.2} color="brandOrange" />
            <StatItem icon={<Award className="w-5 h-5" />} val={95} label="Placement Record" suffix="%" delay={0.3} color="brandGreen" />
            <StatItem icon={<Users className="w-5 h-5" />} val={50} label="Expert Faculties" suffix="+" delay={0.4} color="#0C508C" />
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. GRAND CTA / SIGNATURE */}
      {/* ========================================== */}
      <section className="py-12 md:py-16 bg-[#fafcff]">
        <div className="container-custom">
          <motion.div
            className="bg-gradient-to-br from-[#0C508C] to-[#073661] p-8 md:p-12 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[60px]"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brandOrange/20 rounded-full blur-[60px]"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-10">
              
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-[3px] border-white/20 overflow-hidden shrink-0 shadow-2xl relative">
                <img src="https://bihartechassociation.com/wp-content/uploads/2025/05/chairman.jpeg" className="w-full h-full object-cover" alt="Chairman" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1.5 mb-3 text-brandOrange font-bold tracking-widest uppercase text-[10px]">
                  <Sparkles className="w-3 h-3" /> Join The Legacy
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-6 leading-tight">
                  "Learn, Grow, and Lead—<br />
                  <span className="text-white/80">The Future Belongs to You."</span>
                </h3>
                
                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
                  <div className="space-y-0.5 text-center sm:text-left">
                    <p className="text-lg font-bold tracking-tight">Er. Ravi Shankar</p>
                    <p className="text-brandOrange font-bold uppercase tracking-widest text-[9px]">Chairman, BPTPIA</p>
                  </div>
                  
                  <div className="hidden sm:block w-px h-10 bg-white/20"></div>

                  <button className="bg-white text-[#0C508C] hover:bg-brandOrange hover:text-white px-6 py-3 rounded-full font-bold text-xs md:text-sm transition-all duration-300 shadow-xl flex items-center gap-2 group">
                    Apply Now 
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}

function StatItem({ icon, val, label, suffix, delay, color }: any) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: true, margin: "-30px" })
  const springValue = useSpring(0, { stiffness: 50, damping: 20 })
  
  useEffect(() => { 
    if (isInView) springValue.set(val) 
  }, [isInView, val, springValue])
  
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { delay, duration: 0.4 } } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center p-4 md:p-5 bg-white rounded-2xl shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 group"
    >
      <div className="mb-3 flex justify-center transform group-hover:-translate-y-1 transition-transform duration-300" style={{ color: color.startsWith('#') ? color : `var(--color-${color})` }}>
        <div className="p-2.5 bg-slate-50 rounded-xl group-hover:bg-opacity-80 transition-colors">
          {icon}
        </div>
      </div>
      <div ref={countRef} className="text-2xl md:text-3xl font-black text-textmain flex items-center justify-center mb-0.5">
        <motion.span>{displayValue}</motion.span>
        <span className="text-brandOrange">{suffix}</span>
      </div>
      <div className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider">{label}</div>
    </motion.div>
  )
}