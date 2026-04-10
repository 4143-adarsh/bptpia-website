"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Users,
  Globe2,
  Rocket,
  Lightbulb,
  ArrowRight,
  Compass,
  CheckCircle,
  Sparkles,
  Star,
  Quote,
  History,
  Leaf,
  Cpu,
  Network
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring, Variants } from "framer-motion"

// ==========================================
// 1. IMPORT NAVBAR & TOPBAR HERE
// ==========================================
import TopBar from "@/components/topbar";
import NavBar from "@/components/navbar";

export default function MissionVisionPage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.2 })

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  // Mission & Vision Specific Content (Expanded Descriptions)
  const services = [
    {
      icon: <Users className="w-5 h-5" />,
      secondaryIcon: <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Youth Empowerment",
      description: "Arming students with a sophisticated blend of advanced technical knowledge, rigorous practical expertise, and a resilient spirit of innovation to tackle global challenges.",
      position: "left",
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      secondaryIcon: <CheckCircle className="w-3 h-3 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Democratizing Education",
      description: "Creating a high-speed, transparent pathway for students from every corner of Bihar to reach the global stage through standardized, merit-driven admission processes.",
      position: "left",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      secondaryIcon: <Star className="w-3 h-3 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Bridging the Gap",
      description: "Aggressively connecting traditional academia with the modern industrial landscape, ensuring our students transition smoothly from classrooms to corporate boardrooms.",
      position: "left",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      secondaryIcon: <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Breeding Visionaries",
      description: "Serving as the ultimate incubator for competent, ethical professionals who will become the primary driving force behind India’s rapid economic and technological progress.",
      position: "right",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      secondaryIcon: <CheckCircle className="w-3 h-3 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Industry Synergy",
      description: "Constructing an ecosystem where industry and academia exist in friction-less synergy, applying laboratory breakthroughs directly to solve complex real-world market demands.",
      position: "right",
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      secondaryIcon: <Star className="w-3 h-3 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Global R&D Hubs",
      description: "Aspiring to elevate local institutions into global hubs of research and development, actively contributing to the world’s repository of knowledge through breakthrough patents.",
      position: "right",
    },
  ]

  // Core Values Stats
  const stats = [
    { icon: <ShieldCheck className="w-6 h-6" />, value: 100, label: "Absolute Integrity", suffix: "%" },
    { icon: <Zap className="w-6 h-6" />, value: 4, label: "Industry 4.0 Focus", suffix: ".0" },
    { icon: <Target className="w-6 h-6" />, value: 1, label: "Unified Vision", suffix: "" },
    { icon: <Users className="w-6 h-6" />, value: 100, label: "Universal Empowerment", suffix: "%" },
  ]

  return (
    <main className="w-full bg-[#fafcff] text-textmain overflow-hidden relative selection:bg-brandGreen/20">

      {/* ========================================== */}
      {/* 2. STICKY HEADER CONTAINER */}
      {/* ========================================== */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/50 supports-[backdrop-filter]:bg-white/60">
        <TopBar />
        <NavBar />
      </div>

      <section
        id="mission-vision-section"
        ref={sectionRef}
        className="w-full pt-[140px] md:pt-[160px] pb-16 px-4 bg-transparent text-textmain relative"
      >
        {/* Subtle Background Pattern & Soft Blurs */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <motion.div
          className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full bg-brandGreen/5 blur-[80px] -z-10"
          style={{ y: y1, rotate: rotate1 }}
        />
        <motion.div
          className="absolute bottom-20 right-0 w-[500px] h-[500px] rounded-full bg-brandOrange/5 blur-[80px] -z-10"
          style={{ y: y2, rotate: rotate2 }}
        />

        <motion.div
          className="container-custom relative z-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Hero Heading (Expanded Content) */}
          <motion.div className="flex flex-col items-center mb-16 text-center" variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm mb-5">
              <div className="w-4 h-4 rounded-full bg-brandGreen/10 flex items-center justify-center">
                <Compass className="w-2.5 h-2.5 text-brandGreen" />
              </div>
              <span className="text-brandGreen text-[10px] font-bold tracking-[0.2em] uppercase">Our Purpose & Trajectory</span>
            </div>
            
            {/* Synced with Global CSS (.heading-xl -> Red) */}
            <h1 className="heading-xl mb-8">
              Architecting the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGreen to-[#0C508C]">Future of Bihar</span>
            </h1>
            
            {/* FIX: Premium Attractive Card for the Paragraph instead of open text */}
            <motion.div 
              variants={itemVariants} 
              className="max-w-4xl mx-auto bg-slate-50/80 backdrop-blur-md border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-6 md:p-10 relative overflow-hidden text-left md:text-center"
            >
              {/* Decorative Blue Left Border Line */}
              <div className="absolute top-0 left-0 w-2 h-full bg-brandGreen"></div>
              {/* Decorative Background Target Icon */}
              <Target className="absolute top-4 left-6 w-12 h-12 text-brandGreen/10 -z-0 pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                {/* Synced with Global CSS (.text-muted -> Blue) */}
                <p className="text-muted m-0">
                  Driven by a profound commitment to social, intellectual, and economic transformation, our mission is a living, breathing blueprint for a resurgent Bihar. We are dedicated to providing the nation with a new generation of high-caliber, ethically grounded technocrats.
                </p>
                <p className="text-muted m-0">
                  At BPTPIA, we don't just build colleges; we build ecosystems. Ecosystems where curiosity meets technology, where local talent is polished to meet global standards, and where every student is empowered to rewrite their destiny.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ========================================== */}
          {/* NEW SECTION: THE GENESIS (Long Form Text + Image) */}
          {/* ========================================== */}
          <motion.div 
            className="mb-24 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brandOrange/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
              
              {/* Left Column (Sticky Title + Image instead of empty space) */}
              <div className="w-full md:w-2/5 shrink-0">
                <div className="sticky top-[160px] space-y-6">
                  <div>
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-4 text-[#0C508C]">
                      <History className="w-6 h-6" />
                    </div>
                    {/* Synced with Global CSS but kept left-aligned */}
                    <h2 className="heading-xl !text-left !mb-2">The Genesis &<br/>Evolution</h2>
                    <p className="text-brandGreen font-bold tracking-widest uppercase text-[10px]">A Decade of Impact</p>
                  </div>
                  
                  {/* Added Image to fill the empty space */}
                  <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border-[4px] border-white aspect-[4/3] bg-slate-100">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                    <img 
                      src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
                      alt="Students collaborating" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <p className="text-white font-bold text-sm">Building Foundations</p>
                      <p className="text-white/80 text-[10px] uppercase tracking-wider">Since 2014</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column (Text Content) */}
              <div className="w-full md:w-3/5 prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed">
                <p className="text-xl text-textmain font-medium leading-snug mb-6">
                  Founded in 2014, the Bihar Private Technical & Professional Institutions Association emerged not merely as an organization, but as a critical response to a pressing statewide need.
                </p>
                <p className="mb-6">
                  For decades, brilliant minds from Bihar migrated to other states seeking quality technical education. A consortium of visionary educators, led by our esteemed Chairman Er. Ravi Shankar Prasad Singh, recognized that the only way to reverse this brain drain was to establish a gold standard of technical infrastructure right here in our homeland. 
                </p>
                <p className="mb-6">
                  What started as a collective of a few pioneering institutions has now grown into a massive unified front. Today, BPTPIA stands as the apex body ensuring that private engineering, polytechnic, and management colleges in Bihar operate with impeccable transparency, uncompromising academic rigor, and a student-first philosophy.
                </p>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 mt-8">
                  <p className="font-medium text-textmain italic m-0">
                    "Our history is written by the thousands of engineers, innovators, and leaders who graduated from our member institutions and are now shaping the global economy."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3-Column Layout: Services & Image */}
          <div className="text-center mb-12">
            {/* Synced: Red Heading & Blue Subheading */}
            <h2 className="heading-xl">Core Competencies</h2>
            <p className="text-muted">The fundamental pillars that define our operational philosophy and educational approach.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative mb-24">
            
            {/* Left Column (3 items) */}
            <div className="lg:col-span-4 space-y-4 md:space-y-6">
              {services.filter((s) => s.position === "left").map((service, index) => (
                <ServiceItem key={`left-${index}`} icon={service.icon} secondaryIcon={service.secondaryIcon} title={service.title} description={service.description} variants={itemVariants} delay={index * 0.1} />
              ))}
            </div>

            {/* Center Column (Premium Image) */}
            <div className="lg:col-span-4 flex justify-center order-first lg:order-none mb-8 lg:mb-0 relative">
              <motion.div className="relative w-full max-w-[320px] mx-auto" variants={itemVariants}>
                <motion.div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border-[6px] border-white aspect-[4/5] bg-slate-100 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Engineering the Future" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Overlay Text */}
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-center">
                    <Target className="w-8 h-8 mx-auto mb-3 text-brandOrange drop-shadow-md" />
                    <h3 className="text-white font-bold text-lg tracking-wide mb-1">Architectural Vision</h3>
                    <p className="text-white/80 text-xs font-medium">Building a legacy of excellence</p>
                  </div>
                </motion.div>

                {/* Floating Glassmorphism Badges */}
                <motion.div style={{ y: y1 }} className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-xl z-20 border border-slate-100">
                  <Quote className="w-4 h-4 text-brandGreen mb-1 opacity-60" />
                  <p className="font-bold text-textmain text-xs">Innovation</p>
                  <p className="text-[8px] uppercase font-bold text-slate-400">At Core</p>
                </motion.div>
                
                <motion.div style={{ y: y2 }} className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-xl z-20 border border-slate-100">
                  <Rocket className="w-4 h-4 text-brandOrange mb-1 opacity-60" />
                  <p className="font-bold text-textmain text-xs">Empowerment</p>
                  <p className="text-[8px] uppercase font-bold text-slate-400">Since 2014</p>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column (3 items) */}
            <div className="lg:col-span-4 space-y-4 md:space-y-6">
              {services.filter((s) => s.position === "right").map((service, index) => (
                <ServiceItem key={`right-${index}`} icon={service.icon} secondaryIcon={service.secondaryIcon} title={service.title} description={service.description} variants={itemVariants} delay={index * 0.1} />
              ))}
            </div>
          </div>

          {/* NEW SECTION: STRATEGIC MANDATES 2030 (Bento Grid) */}
          <motion.div 
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <div className="text-center mb-12">
              {/* Synced: Red Heading & Blue Subheading */}
              <h2 className="heading-xl">Strategic Mandates 2030</h2>
              <p className="text-muted">Beyond the horizon. Our definitive roadmap for the next decade of technological education.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300">
                <Cpu className="w-10 h-10 text-[#0C508C] mb-6" />
                <h3 className="text-2xl font-bold text-textmain mb-3">Cognitive Infrastructure</h3>
                <p className="text-slate-600 leading-relaxed">
                  Upgrading all member campuses with state-of-the-art Artificial Intelligence and Machine Learning laboratories. We aim to make AI fluency a mandatory competency for every engineering graduate.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300">
                <Network className="w-10 h-10 text-brandOrange mb-6" />
                <h3 className="text-2xl font-bold text-textmain mb-3">Global Faculty Exchange</h3>
                <p className="text-slate-600 leading-relaxed">
                  Establishing robust MOUs with international universities to facilitate global exposure. Our students and faculty will regularly participate in cross-border research and development programs.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300">
                <Leaf className="w-10 h-10 text-brandGreen mb-6" />
                <h3 className="text-2xl font-bold text-textmain mb-3">Zero-Carbon Campuses</h3>
                <p className="text-slate-600 leading-relaxed">
                  Commitment to sustainability by transforming our technical institutions into green, energy-efficient campuses powered heavily by solar technology and robust waste-management protocols.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300">
                <Lightbulb className="w-10 h-10 text-yellow-500 mb-6" />
                <h3 className="text-2xl font-bold text-textmain mb-3">Incubation & Entrepreneurship</h3>
                <p className="text-slate-600 leading-relaxed">
                  Moving from 'job-seekers' to 'job-creators'. Every campus will house a dedicated incubation center, providing seed funding, legal guidance, and technical mentorship to student startups.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Section (Core Values) */}
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <StatCounter key={index} icon={stat.icon} value={stat.value} label={stat.label} suffix={stat.suffix} delay={index * 0.1} />
            ))}
          </motion.div>

        </motion.div>
      </section>

      {/* ========================================== */}
      {/* 5. IMAGE-BASED CTA SECTION (LAMP BLUE) */}
      {/* Replaced old CTA with the requested LAMP BLUE design */}
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
            {/* Background Decorative Logo/Shape overlaying right side */}
            <div className="absolute top-0 right-0 h-full w-1/3 opacity-10 pointer-events-none flex items-center justify-end transform translate-x-12">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-[150%] text-white fill-current">
                 <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.1,-46.3C90.4,-33.5,96,-18,94.9,-3.1C93.8,11.8,86.1,26.1,76.5,38.5C66.9,50.9,55.4,61.4,42.1,69.5C28.8,77.6,14.4,83.3,-0.1,83.5C-14.6,83.7,-29.2,78.4,-41.8,70C-54.4,61.6,-65,50.1,-73.4,37C-81.8,23.9,-88,9.2,-87.5,-5.2C-87,-19.6,-79.8,-33.7,-70.5,-45.5C-61.2,-57.3,-49.8,-66.8,-37,-73.4C-24.2,-80,-12.1,-83.7,1.2,-85.7C14.5,-87.7,29,-88,44.7,-76.4Z" transform="translate(100 100)" />
               </svg>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
              
              <div className="flex-1 text-center md:text-left">
                {/* Admissions Open Pill */}
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

              {/* Red Apply Button */}
              <div className="shrink-0">
                <button className="bg-[#d9192b] hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold text-sm md:text-base transition-all duration-300 shadow-xl flex items-center gap-2 group">
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

// ==========================================
// COMPONENT: SERVICE ITEM (Premium Card Look)
// ==========================================
interface ServiceItemProps {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  variants: Variants
  delay: number
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay }: ServiceItemProps) {
  return (
    <motion.div
      className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-slate-200 transition-all duration-300 group flex flex-col relative overflow-hidden"
      variants={variants}
      transition={{ delay }}
    >
      {/* Subtle top border hover effect */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brandGreen to-brandOrange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="flex items-center gap-5 mb-4">
        <div className="w-14 h-14 bg-slate-50 border border-slate-100 text-brandGreen rounded-2xl flex items-center justify-center relative shrink-0 group-hover:bg-brandGreen/10 group-hover:scale-105 transition-all duration-300">
          {icon}
          {secondaryIcon}
        </div>
        <h3 className="text-xl font-bold text-textmain group-hover:text-brandGreen transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-sm text-slate-500 leading-relaxed font-medium">
        {description}
      </p>
    </motion.div>
  )
}

// ==========================================
// COMPONENT: STAT COUNTER (Compact & Sleek)
// ==========================================
interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: true, margin: "-30px" })
  const springValue = useSpring(0, { stiffness: 50, damping: 20 })

  useEffect(() => {
    if (isInView) springValue.set(value)
  }, [isInView, value, springValue])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] flex flex-col items-center text-center group hover:shadow-lg hover:border-slate-200 transition-all duration-300"
      variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } } }}
    >
      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 text-brandOrange group-hover:bg-brandOrange/10 group-hover:-translate-y-1 transition-all duration-300">
        {icon}
      </div>
      <div ref={countRef} className="text-4xl md:text-5xl font-black text-textmain flex items-center mb-2">
        <motion.span>{displayValue}</motion.span>
        <span className="text-brandGreen">{suffix}</span>
      </div>
      <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">{label}</p>
    </motion.div>
  )
}