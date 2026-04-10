"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Building2,
  Award,
  Users,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  BookOpen,
  Landmark,
  MonitorPlay,
  Briefcase,
  ShieldCheck,
  Target,
  Eye,
  Rocket,
  GraduationCap,
  MapPin,
  FileText,
  Quote
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring, Variants } from "framer-motion"

// ==========================================
// 1. IMPORT NAVBAR & TOPBAR HERE
// ==========================================
import TopBar from "@/components/topbar";
import NavBar from "@/components/navbar";

export default function AboutBPTPIAExpanded() {
  const [isVisible, setIsVisible] = useState(false)
  
  // Refs for different scroll sections
  const heroRef = useRef<HTMLDivElement>(null)
  const visionRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const journeyRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  
  // InView Triggers
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.1 })
  const isVisionInView = useInView(visionRef, { once: false, amount: 0.2 })
  const isServicesInView = useInView(servicesRef, { once: false, amount: 0.1 })
  const isJourneyInView = useInView(journeyRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  // Parallax effect for decorative elements globally
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  // Data Objects
  const services = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      secondaryIcon: <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-brandGreen" />,
      title: "CET Initiative",
      description: "Organizing the BPTPIA Common Entrance Test for streamlined, merit-based admissions into Engineering (B.Tech) and Diploma programs across Bihar.",
      position: "left",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      secondaryIcon: <CheckCircle className="w-3 h-3 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Quality Benchmarking",
      description: "Ensuring member institutions maintain state-of-the-art laboratories, modern curricula, and highly qualified faculty for technical excellence.",
      position: "left",
    },
    {
      icon: <Landmark className="w-5 h-5" />,
      secondaryIcon: <Star className="w-3 h-3 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Policy Advocacy",
      description: "Acting as the vital link between private educators and government bodies like AICTE and DST Bihar to foster innovation.",
      position: "left",
    },
    {
      icon: <Award className="w-5 h-5" />,
      secondaryIcon: <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Triple Accreditation",
      description: "Every institution under BPTPIA is anchored by robust regulatory approvals—AICTE approved, State Validated, and University Affiliated.",
      position: "right",
    },
    {
      icon: <MonitorPlay className="w-5 h-5" />,
      secondaryIcon: <CheckCircle className="w-3 h-3 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Innovation-Driven",
      description: "Focusing on enhanced career value with industry-sync curricula covering emerging technologies like AI, Data Science, and Robotics.",
      position: "right",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      secondaryIcon: <Star className="w-3 h-3 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Strategic Placement",
      description: "Fostering a collaborative environment providing access to state-level Mega Job Fairs and a robust global alumni network.",
      position: "right",
    },
  ]

  const journeySteps = [
    { icon: <FileText className="w-5 h-5" />, title: "Online Registration", desc: "Students apply online for the BPTPIA Common Entrance Test (CET) through our unified portal." },
    { icon: <Target className="w-5 h-5" />, title: "Appear for CET", desc: "A transparent and standardized state-level examination testing aptitude and technical readiness." },
    { icon: <Award className="w-5 h-5" />, title: "Merit Declaration", desc: "Results are published with state ranks, ensuring complete transparency in evaluation." },
    { icon: <Building2 className="w-5 h-5" />, title: "Institute Allotment", desc: "Counseling sessions map students to top-tier private engineering and polytechnic colleges." },
  ]

  const stats = [
    { icon: <ShieldCheck />, value: 100, label: "Compliance Rate", suffix: "%" },
    { icon: <Users />, value: 15000, label: "Students Empowered", suffix: "+" },
    { icon: <Building2 />, value: 50, label: "Member Institutes", suffix: "+" },
    { icon: <BookOpen />, value: 1, label: "Unified Entrance Exam", suffix: "" },
  ]

  return (
    <main className="w-full bg-white text-textmain overflow-hidden relative">

      {/* STICKY HEADER */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-white shadow-sm">
        <TopBar />
        <NavBar />
      </div>

      {/* Global Decorative Backgrounds */}
      <motion.div className="fixed top-40 left-10 w-80 h-80 rounded-full bg-brandOrange/5 blur-3xl pointer-events-none z-0" style={{ y: y1, rotate: rotate1 }} />
      <motion.div className="fixed bottom-40 right-10 w-[400px] h-[400px] rounded-full bg-brandGreen/5 blur-3xl pointer-events-none z-0" style={{ y: y2 }} />

      {/* ========================================== */}
      {/* SECTION 1: HERO & INTRO */}
      {/* ========================================== */}
      <section ref={heroRef} className="w-full pt-[140px] md:pt-[160px] pb-6 px-4 relative z-10 bg-white">
        <motion.div className="container-custom" initial="hidden" animate={isHeroInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.div className="flex flex-col items-center mb-8" variants={itemVariants}>
            {/* Synced: Blue Subheading Element */}
            <motion.span className="text-brandGreen font-bold mb-2 flex items-center gap-2 tracking-widest text-sm md:text-base uppercase">
              <Zap className="w-4 h-4" /> DISCOVER BPTPIA
            </motion.span>
            
            {/* Synced: Red Heading from global CSS */}
            <h1 className="heading-xl">
              The Strategic Pillar
            </h1>
            
            <motion.div className="w-24 h-1.5 bg-brandOrange rounded-full mb-6" initial={{ width: 0 }} animate={{ width: 96 }} transition={{ duration: 1, delay: 0.5 }} />
          </motion.div>

          {/* FIX: Premium Attractive Card for the Paragraph instead of plain text */}
          <motion.div 
            variants={itemVariants} 
            className="max-w-4xl mx-auto bg-slate-50/80 backdrop-blur-md border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-6 md:p-10 relative overflow-hidden"
          >
            {/* Decorative Blue Left Border Line */}
            <div className="absolute top-0 left-0 w-2 h-full bg-brandGreen"></div>
            {/* Decorative Background Quote Icon */}
            <Quote className="absolute top-4 left-6 w-12 h-12 text-brandGreen/10 -z-0 rotate-180 pointer-events-none" />
            
            {/* Synced: Blue text-muted styling */}
            <p className="text-muted relative z-10 m-0">
              We act as the definitive bridge between aspiring students and the burgeoning landscape of technical excellence in Bihar. By unifying the state's private technical colleges, we ensure that the quality of education remains universally high, accessible, and transparent.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: VISION & MISSION */}
      {/* ========================================== */}
      <section ref={visionRef} className="w-full pt-10 pb-12 px-4 relative z-10 bg-white">
        <motion.div className="container-custom" initial="hidden" animate={isVisionInView ? "visible" : "hidden"} variants={containerVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision Card */}
            <motion.div variants={itemVariants} className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100 hover:border-brandOrange/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brandOrange/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110" />
              <div className="w-12 h-12 bg-brandOrange/10 text-brandOrange rounded-2xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black mb-2">Our Vision</h3>
              <p className="text-sm text-textmain/70 leading-relaxed">
                To transform Bihar into a premier national hub of technical and professional education, where private institutions are synonymous with global standards, ethical practices, and cutting-edge innovation.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div variants={itemVariants} className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100 hover:border-brandGreen/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brandGreen/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110" />
              <div className="w-12 h-12 bg-brandGreen/10 text-brandGreen rounded-2xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black mb-2">Our Mission</h3>
              <p className="text-sm text-textmain/70 leading-relaxed">
                To standardize educational and administrative practices across member colleges, conduct transparent entrance examinations, and foster deep industry-academia linkages to ensure 100% employability for our graduates.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: THE PILLARS (SERVICES GRID) */}
      {/* ========================================== */}
      <section ref={servicesRef} className="w-full py-12 md:py-16 px-4 relative z-10 bg-slate-50/30">
        <motion.div className="container-custom" initial="hidden" animate={isServicesInView ? "visible" : "hidden"} variants={containerVariants}>
          
          <motion.div className="text-center mb-12" variants={itemVariants}>
            {/* Synced: Red Heading & Blue Subheading */}
            <h2 className="heading-xl">Core Competencies</h2>
            <p className="text-muted">How BPTPIA elevates the standard of technical education.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-center">
            {/* Left Column */}
            <div className="space-y-8 md:space-y-10">
              {services.filter(s => s.position === "left").map((service, index) => (
                <ServiceItem key={`left-${index}`} {...service} variants={itemVariants} delay={index * 0.1} direction="left" />
              ))}
            </div>

            {/* Center Image Component */}
            <div className="flex justify-center order-first md:order-none mb-8 md:mb-0">
              <motion.div className="relative w-full max-w-[16rem]" variants={itemVariants}>
                <motion.div className="rounded-3xl overflow-hidden shadow-2xl" whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}>
                  <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop" alt="Campus" className="w-full h-full object-cover aspect-[3/4]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-textmain/90 via-transparent to-transparent flex items-end justify-center p-5">
                    <div className="text-center">
                      <ShieldCheck className="w-6 h-6 text-brandGreen mx-auto mb-1" />
                      <h4 className="text-white font-bold text-base">Guaranteed Excellence</h4>
                    </div>
                  </div>
                </motion.div>
                <div className="absolute inset-0 border-[3px] border-brandGreen/40 rounded-3xl -m-2.5 z-[-1]" />
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 md:space-y-10">
              {services.filter(s => s.position === "right").map((service, index) => (
                <ServiceItem key={`right-${index}`} {...service} variants={itemVariants} delay={index * 0.1} direction="right" />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========================================== */}
      {/* SECTION 4: THE JOURNEY (NEW HORIZONTAL GRID) */}
      {/* ========================================== */}
      <section ref={journeyRef} className="w-full py-12 md:py-16 px-4 bg-gradient-to-b from-slate-50 to-white text-textmain relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none overflow-hidden">
           <div className="absolute -top-24 -left-24 w-96 h-96 bg-brandOrange/5 rounded-full blur-3xl" />
           <div className="absolute top-1/2 right-0 w-80 h-80 bg-brandGreen/5 rounded-full blur-3xl translate-x-1/2" />
        </div>

        <motion.div className="container-custom relative z-10" initial="hidden" animate={isJourneyInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <span className="text-brandGreen font-bold tracking-widest uppercase text-xs mb-2 block">Simplified Process</span>
            
            {/* Synced: Red Heading */}
            <h2 className="heading-xl">Admission Journey</h2>
            
            <div className="w-16 h-1.5 bg-gradient-to-r from-brandOrange to-brandGreen mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brandOrange/20 via-brandGreen/30 to-brandOrange/20 z-0" />

            {journeySteps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="relative z-10 group"
              >
                <div className="bg-white h-full p-6 rounded-2xl border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-brandOrange/20 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col">
                  
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brandOrange to-brandGreen opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute -top-4 -right-2 text-[100px] font-black text-slate-50 leading-none group-hover:text-brandOrange/5 group-hover:scale-110 transition-all duration-500 pointer-events-none select-none">
                    {index + 1}
                  </div>

                  <div className="w-12 h-12 bg-white shadow-sm border border-slate-100 text-brandOrange rounded-xl flex items-center justify-center shrink-0 mb-4 group-hover:bg-brandOrange/10 group-hover:text-brandOrange transition-colors duration-300 relative z-10">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-textmain mb-2 relative z-10 group-hover:text-brandOrange transition-colors duration-300">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium relative z-10">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ========================================== */}
      {/* SECTION 5: STATS & AFFILIATIONS */}
      {/* ========================================== */}
      <section ref={statsRef} className="w-full py-12 md:py-16 px-4 relative z-10 bg-white">
        <motion.div className="container-custom" initial="hidden" animate={isStatsInView ? "visible" : "hidden"} variants={containerVariants}>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {stats.map((stat, index) => (
              <StatCounter key={index} icon={stat.icon} value={stat.value} label={stat.label} suffix={stat.suffix} delay={index * 0.1} />
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mb-10">
             {/* Synced: Red Heading & Blue Subheading */}
             <h2 className="heading-xl">Recognized & Approved By</h2>
             <p className="text-muted">Our member institutions operate under the strict guidelines of national and state bodies.</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 md:gap-6 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-lg font-bold text-sm md:text-base"><Landmark className="w-4 h-4 text-brandGreen"/> DST, Govt of Bihar</div>
             <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-lg font-bold text-sm md:text-base"><GraduationCap className="w-4 h-4 text-brandOrange"/> Aryabhatta Univ.</div>
             <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-lg font-bold text-sm md:text-base"><MapPin className="w-4 h-4 text-brandGreen"/> SBTE Bihar</div>
          </motion.div>

          {/* ========================================== */}
          {/* SECTION 6: CTA (LAMP BLUE - Original User Request) */}
          {/* ========================================== */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-[#0062ff] to-[#00b4d8] text-white p-6 md:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_-12px_rgba(0,98,255,0.4)] relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 h-full w-1/3 opacity-10 pointer-events-none flex items-center justify-end transform translate-x-12">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-[150%] text-white fill-current">
                 <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.1,-46.3C90.4,-33.5,96,-18,94.9,-3.1C93.8,11.8,86.1,26.1,76.5,38.5C66.9,50.9,55.4,61.4,42.1,69.5C28.8,77.6,14.4,83.3,-0.1,83.5C-14.6,83.7,-29.2,78.4,-41.8,70C-54.4,61.6,-65,50.1,-73.4,37C-81.8,23.9,-88,9.2,-87.5,-5.2C-87,-19.6,-79.8,-33.7,-70.5,-45.5C-61.2,-57.3,-49.8,-66.8,-37,-73.4C-24.2,-80,-12.1,-83.7,1.2,-85.7C14.5,-87.7,29,-88,44.7,-76.4Z" transform="translate(100 100)" />
               </svg>
            </div>
            
            <div className="flex-1 relative z-10 text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-[10px] font-semibold tracking-wider mb-3 border border-white/30 backdrop-blur-md">
                ADMISSIONS OPEN
              </span>
              {/* Keeping this text explicitly white for visibility on blue gradient */}
              <h3 className="text-2xl md:text-3xl font-black mb-2 leading-tight text-white">Ready to engineer your future?</h3>
              <p className="text-white/90 text-sm md:text-base max-w-2xl">Join the unified platform of premier technical institutions in Bihar. Register for the upcoming CET today.</p>
            </div>
            
            <div className="relative z-10 shrink-0">
              {/* Synced directly with Global CSS `.btn-primary` but applying Red BG explicitly for this CTA per user's screenshot request earlier */}
              <button className="bg-[#d9192b] hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold text-sm md:text-base transition-all duration-300 shadow-xl flex items-center gap-2 group">
                Apply for CET <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </motion.div>
      </section>
    </main>
  )
}

// ==========================================
// COMPONENT: SERVICE ITEM
// ==========================================
interface ServiceItemProps {
  icon: React.ReactNode; secondaryIcon?: React.ReactNode; title: string; description: string; variants: Variants; delay: number; direction: "left" | "right";
}
function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div className="flex flex-col group" variants={variants} transition={{ delay }} whileHover={{ y: -2 }}>
      <motion.div className="flex items-center gap-3 mb-1.5" initial={{ x: direction === "left" ? -15 : 15, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: delay }}>
        <motion.div className="text-brandOrange bg-brandOrange/10 p-2.5 rounded-xl transition-colors duration-300 group-hover:bg-brandOrange/20 relative shrink-0" whileHover={{ rotate: [0, -10, 10, -5, 0] }}>
          {icon}{secondaryIcon}
        </motion.div>
        <h3 className="text-lg font-bold text-textmain group-hover:text-brandOrange transition-colors duration-300">{title}</h3>
      </motion.div>
      <motion.p className="text-xs text-textmain/70 leading-relaxed pl-12 md:pl-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: delay + 0.1 }}>
        {description}
      </motion.p>
    </motion.div>
  )
}

// ==========================================
// COMPONENT: STAT COUNTER
// ==========================================
interface StatCounterProps { icon: React.ReactNode; value: number; label: string; suffix: string; delay: number; }
function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)
  const springValue = useSpring(0, { stiffness: 50, damping: 10 })

  useEffect(() => {
    if (isInView && !hasAnimated) { springValue.set(value); setHasAnimated(true) } 
    else if (!isInView && hasAnimated) { springValue.set(0); setHasAnimated(false) }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brandOrange/30" variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } } }}>
      <motion.div className="w-12 h-12 rounded-xl bg-brandGreen/10 flex items-center justify-center mb-4 text-brandGreen group-hover:bg-brandOrange/10 group-hover:text-brandOrange transition-colors duration-500" whileHover={{ rotate: 360, transition: { duration: 0.8 } }}>
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-3xl font-black text-textmain flex items-center mb-1">
        <motion.span>{displayValue}</motion.span><span>{suffix}</span>
      </motion.div>
      <p className="text-textmain/60 text-[10px] font-bold uppercase tracking-wider">{label}</p>
      <motion.div className="w-8 h-1 bg-brandGreen rounded-full mt-3 group-hover:w-16 group-hover:bg-brandOrange transition-all duration-500" />
    </motion.div>
  )
}