"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Target, Eye, Shield, Zap, Users, Globe2, Rocket,
  Lightbulb, ArrowRight, Compass, Sparkles, Star, GraduationCap,
  Heart, Monitor, Library, Bus, Quote, UserCheck, CheckCircle2,
  Award, BookOpen, PenTool, Trophy, ShieldCheck, Server, Activity, Network, Briefcase
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring, Variants, useMotionValue } from "framer-motion"

// ==========================================
// 1. IMPORT NAVBAR & TOPBAR HERE
// ==========================================
import TopBar from "@/components/topbar";
import NavBar from "@/components/navbar";

export default function SecretaryMessagePage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -60])
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -30])
  const rotateImg = useTransform(scrollYProgress, [0, 1], [-3, 3])
  const y1 = useMotionValue(0)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  }

  return (
    <main className="w-full bg-[#fafcff] text-[#050505] overflow-hidden relative selection:bg-[#cc0000]/20">

      {/* ========================================== */}
      {/* 2. STICKY HEADER CONTAINER */}
      {/* ========================================== */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/50 supports-[backdrop-filter]:bg-white/60">
        <TopBar />
        <NavBar />
      </div>

      {/* ========================================== */}
      {/* 1 & 2. HEADER, PHOTO & PROFILE SECTION */}
      {/* ========================================== */}
      <section ref={sectionRef} className="pt-[130px] md:pt-[150px] pb-12 md:pb-16 px-2 md:px-4 relative bg-white border-b border-slate-100 overflow-hidden">
        {/* Soft Background Pattern & Glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#cc0000]/5 to-[#0C508C]/5 rounded-full blur-[80px] -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#004d80]/5 to-[#cc0000]/5 rounded-full blur-[60px] -z-10 -translate-x-1/3 translate-y-1/3" />

        <div className="container-custom max-w-7xl mx-auto relative z-10 flex flex-col gap-6 md:gap-8">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="w-full">
            <motion.div variants={itemVariants} className="w-full flex flex-col md:flex-row items-center justify-between bg-white border border-slate-200/80 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] rounded-[1.5rem] p-4 md:px-8">
              
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-[#cc0000]" />
                <span className="font-bold text-slate-600 uppercase tracking-widest text-[10px] md:text-xs">Since 2014: A Decade of Trust</span>
              </div>
              
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-200"></span>
              
              <div className="flex items-center gap-2.5">
                <UserCheck className="w-4 h-4 text-[#004d80]" />
                <span className="font-bold text-[#004d80] uppercase tracking-widest text-[10px] md:text-xs">From The Desk of Leadership</span>
              </div>
              
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-200"></span>
              
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#cc0000]" />
                <h1 className="heading-xl !text-base md:!text-lg lg:!text-xl !m-0" style={{ color: '#cc0000' }}>
                  A Vision for Tomorrow's Innovators
                </h1>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* LEFT COLUMN: PHOTO & EXCELLENCE CARD */}
            <motion.div className="lg:col-span-5 relative sticky top-[140px]" variants={itemVariants}>
              <motion.div style={{ rotate: rotateImg }} className="relative rounded-[1.5rem] overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] border-[6px] border-white z-10 aspect-[3/4] bg-slate-100 group max-w-[360px] mx-auto lg:max-w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <img
                  src="https://bihartechassociation.com/wp-content/uploads/2025/04/secre.jpg"
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  alt="Er. Awadhesh Kumar"
                />
              </motion.div>
              
              <motion.div style={{ y: y1 }} className="absolute -bottom-4 -right-2 md:-right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-xl shadow-lg z-20 border border-slate-100/50 max-w-[130px]">
                <Quote className="w-4 h-4 text-[#cc0000] mb-1 opacity-60" />
                <p className="font-bold text-[#050505] text-xs leading-tight mb-0.5">Visionary</p>
                <p className="text-[8px] uppercase font-bold text-[#004d80] tracking-wider">Administration</p>
              </motion.div>

              {/* NEW PREMIUM CARD TO FILL THE BLANK SPACE BELOW PHOTO */}
              <div className="mt-10 bg-slate-50 border border-slate-100 rounded-2xl p-5 shadow-sm max-w-[360px] mx-auto lg:max-w-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    <Award className="w-5 h-5 text-[#cc0000]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#050505] text-sm">Administrative Excellence</h4>
                    <p className="text-[10px] text-[#004d80] uppercase tracking-wider font-bold">State Recognized</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  Committed to maintaining the highest standards of technical education, operational transparency, and student welfare across Bihar.
                </p>
              </div>

            </motion.div>

            {/* RIGHT COLUMN: MESSAGE CONTENT */}
            <motion.div className="lg:col-span-7 space-y-6" variants={itemVariants}>
              
              <div className="space-y-3 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/60 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)]">
                  <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center">
                    <Compass className="w-2.5 h-2.5 text-[#004d80]" />
                  </div>
                  <span className="text-[#004d80] text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">Administrative Desk</span>
                </div>
                
                <h1 className="heading-xl !text-left" style={{ color: '#cc0000' }}>
                  Secretary's Perspective
                </h1>
              </div>

              <div className="flex flex-col gap-1 pb-4 border-b border-slate-100">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#050505] leading-tight">Er. Awadhesh Kumar</h2>
                <div className="flex items-center gap-2 mt-2">
                  <div className="h-px w-8 bg-[#cc0000]"></div>
                  <p className="text-[#004d80] font-bold text-xs uppercase tracking-widest">Secretary, BPTPIA</p>
                </div>
              </div>

              <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-5">
                <p className="text-lg font-medium text-[#050505] leading-snug">
                  "Aspiration to excel in technology and innovation is the definitive first step toward shaping a stronger, economically independent, and highly progressive society."
                </p>
                <p>
                  At the very outset, I extend my heartfelt greetings to all the aspirants who carry the passion, determination, and vision to become successful engineers and professionals. We at BPTPIA are deeply committed to providing a comprehensive, transparent, and high-quality educational ecosystem.
                </p>
                <div className="p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200/60 my-4 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.04)] border-l-4 border-l-[#004d80]">
                  <h3 className="text-sm font-bold text-[#050505] mb-1.5 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#004d80]" /> Fostering an Ecosystem of Growth
                  </h3>
                  <p className="text-[11px] md:text-xs m-0 text-slate-600 leading-relaxed">
                    A successful institution is built on robust administrative frameworks. My role is to bridge the gap between academic intent and operational execution. From maintaining strict zero-ragging policies to ensuring seamless examination schedules, our administration works 24/7 to create a friction-free environment.
                  </p>
                </div>
                <p>
                  Furthermore, we are heavily investing in digital campus initiatives. By unifying all streams under one coordinated platform, we are optimizing our resources to deliver maximum value. We are building a legacy of excellence for the youth of Bihar.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <div className="w-10 h-[2px] bg-[#cc0000]/50"></div>
                <p className="font-medium italic text-slate-500 text-sm">Looking forward to welcoming you to our campuses.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. STRATEGIC PHILOSOPHY */}
      {/* ========================================== */}
      <section className="py-10 md:py-14 bg-white text-[#050505] rounded-[2rem] mx-2 md:mx-4 lg:mx-6 my-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#004d80]/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="container-custom max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h2 className="heading-xl" style={{ color: '#cc0000' }}>A Framework for Excellence</h2>
            <p className="text-muted" style={{ color: '#004d80' }}>Empowering Students with Knowledge, Administrative Efficiency, and Core Values</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* LEFT COLUMN: UNIFIED PLATFORM + NEW TALL IMAGE TO FILL SPACE */}
            <div className="md:col-span-1 flex flex-col gap-5">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 flex flex-col justify-between group hover:bg-white hover:shadow-lg hover:border-slate-200 transition-all duration-300">
                <div>
                  <div className="w-12 h-12 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Network className="w-6 h-6 text-[#004d80]" />
                  </div>
                  <h3 className="text-xl font-black mb-3 text-[#004d80]">Unified<br/>Platform</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Bringing UG to PG Programs together to optimize educational initiatives efficiently across all member colleges.
                  </p>
                </div>
              </div>

              {/* NEW TALL IMAGE WIDGET TO FILL THE BLANK SPACE */}
              <div className="flex-1 relative rounded-2xl overflow-hidden shadow-sm border-[4px] border-white group min-h-[250px] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Campus Integrity" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004d80]/90 via-[#004d80]/40 to-transparent flex flex-col justify-end p-5">
                   <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-3">
                     <ShieldCheck className="w-5 h-5" />
                   </div>
                   <h3 className="text-white font-bold text-lg mb-1">Administrative Integrity</h3>
                   <p className="text-white/80 text-xs font-medium">Ensuring a transparent and secure educational ecosystem for all.</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: 5 GRID ITEMS */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Briefcase, title: "Industry Readiness", desc: "Aligning curricula strictly with current industry standards.", color: "#004d80", bgIcon: "bg-blue-50" },
                { icon: Heart, title: "Holistic Development", desc: "Ensuring growth ethically and socially in a safe environment.", color: "#004d80", bgIcon: "bg-blue-50" },
                { icon: Globe2, title: "Nation Building", desc: "Contributing to the social and economic development of India.", color: "#004d80", bgIcon: "bg-blue-50" },
                { icon: Lightbulb, title: "Research Orientation", desc: "Nurturing innovation, critical thinking, and R&D.", color: "#cc0000", bgIcon: "bg-red-50" },
                { icon: Users, title: "Conscious Citizens", desc: "Developing individuals who contribute positively to society.", color: "#004d80", bgIcon: "bg-blue-50" }
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white hover:bg-slate-50 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 rounded-2xl border border-slate-100 group">
                  <div className={`w-10 h-10 ${item.bgIcon} rounded-lg flex items-center justify-center mb-3 group-hover:-translate-y-1 transition-transform`}>
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <h4 className="font-bold text-base mb-1.5 text-[#050505]">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. EXTENDED READING: THE ROADMAP */}
      {/* ========================================== */}
      <section className="py-10 md:py-14 bg-[#fafcff] relative border-y border-slate-100 px-2 md:px-4">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5">
              <div className="inline-flex items-center gap-1.5 text-[#004d80] font-bold uppercase tracking-widest text-[9px] bg-white border border-slate-200 shadow-sm px-3 py-1 rounded-full">
                <Target className="w-2.5 h-2.5" /> Roadmap 2025
              </div>
              <h2 className="heading-xl !text-left" style={{ color: '#cc0000' }}>
                Modernizing Campus Administration
              </h2>
              <div className="space-y-3 text-muted !text-left !mx-0" style={{ color: '#004d80' }}>
                <p>
                  To deliver world-class education, the underlying operational machinery must be equally sophisticated.
                </p>
                <ul className="space-y-2.5 mt-4 pr-0 md:pr-4 list-none">
                  {[
                    { title: "Digital Governance", desc: "Implementing ERP solutions for paperless admissions." },
                    { title: "Student Welfare Cells", desc: "Establishing dedicated 24/7 counseling and support." },
                    { title: "Infrastructural Audits", desc: "Routine technical audits to maintain highest quality." }
                  ].map((list, i) => (
                    <li key={i} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-100 shadow-sm text-slate-600">
                      <Server className="w-4 h-4 text-[#004d80] shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm"><strong>{list.title}:</strong> {list.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div style={{ y: yParallaxSlow }} className="relative rounded-[1.5rem] bg-white p-6 border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] w-full">
              <Shield className="w-10 h-10 text-[#004d80]/10 absolute top-4 left-4" />
              <div className="relative z-10 space-y-4 pt-4">
                <p className="text-base md:text-lg font-medium text-[#050505] italic leading-relaxed">
                  "Efficiency in administration translates directly to excellence in academics. We give our students the gift of time—time they can invest in innovation."
                </p>
                <div className="pt-3 border-t border-slate-100">
                  <h4 className="font-bold text-sm text-[#050505]">Secretary's Directive</h4>
                  <p className="text-[#004d80] font-medium text-[10px] uppercase tracking-wider mt-0.5">BPTPIA Foundation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. ANIMATED STATS SECTION */}
      {/* ========================================== */}
      <section className="py-10 bg-white relative px-2 md:px-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container-custom max-w-7xl mx-auto relative z-10" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <StatItem icon={<CheckCircle2 className="w-5 h-5" />} val={100} label="Commitment" suffix="%" delay={0.1} color="#004d80" />
            <StatItem icon={<Users className="w-5 h-5" />} val={5000} label="Aspirants" suffix="+" delay={0.2} color="#050505" />
            <StatItem icon={<GraduationCap className="w-5 h-5" />} val={360} label="Holistic Growth" suffix="°" delay={0.3} color="#004d80" />
            <StatItem icon={<Network className="w-5 h-5" />} val={1} label="Unified Platform" suffix="" delay={0.4} color="#004d80" />
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 6. IMAGE-BASED CTA SECTION (LAMP BLUE) */}
      {/* ========================================== */}
      <section className="py-12 md:py-16 bg-[#fafcff] px-2 md:px-4">
        <div className="container-custom max-w-[1400px] mx-auto w-full">
          <motion.div
            className="bg-gradient-to-r from-[#0062ff] to-[#00b4d8] p-8 md:p-14 rounded-[1.5rem] text-white relative overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,98,255,0.4)] w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 h-full w-1/3 opacity-10 pointer-events-none flex items-center justify-end transform translate-x-12">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-[150%] text-white fill-current">
                 <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.1,-46.3C90.4,-33.5,96,-18,94.9,-3.1C93.8,11.8,86.1,26.1,76.5,38.5C66.9,50.9,55.4,61.4,42.1,69.5C28.8,77.6,14.4,83.3,-0.1,83.5C-14.6,83.7,-29.2,78.4,-41.8,70C-54.4,61.6,-65,50.1,-73.4,37C-81.8,23.9,-88,9.2,-87.5,-5.2C-87,-19.6,-79.8,-33.7,-70.5,-45.5C-61.2,-57.3,-49.8,-66.8,-37,-73.4C-24.2,-80,-12.1,-83.7,1.2,-85.7C14.5,-87.7,29,-88,44.7,-76.4Z" transform="translate(100 100)" />
               </svg>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5 text-[10px] md:text-xs font-bold tracking-widest uppercase">
                  ADMISSIONS OPEN
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight text-white">
                  Ready to engineer your future?
                </h3>
                <p className="text-white/90 text-sm md:text-base max-w-3xl mx-auto md:mx-0 leading-relaxed font-medium">
                  Join the unified platform of premier technical institutions in Bihar. Register for the upcoming CET today.
                </p>
              </div>
              <div className="shrink-0">
                <button className="btn-primary">
                  Apply for CET <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
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
      className="text-center p-4 md:p-5 bg-white rounded-2xl shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 group w-full"
    >
      <div className="mb-3 flex justify-center transform group-hover:-translate-y-1 transition-transform duration-300" style={{ color: color === 'black' ? '#1e293b' : color.startsWith('#') ? color : `var(--color-${color})` }}>
        <div className="p-2.5 bg-slate-50 rounded-xl group-hover:bg-opacity-80 transition-colors">
          {icon}
        </div>
      </div>
      <div ref={countRef} className="text-2xl md:text-3xl font-black text-textmain flex items-center justify-center mb-0.5">
        <motion.span>{displayValue}</motion.span>
        <span style={{ color: color === 'black' ? '#1e293b' : color.startsWith('#') ? color : `var(--color-${color})` }}>{suffix}</span>
      </div>
      <div className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider">{label}</div>
    </motion.div>
  )
}