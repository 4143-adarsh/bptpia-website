"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Quote, GraduationCap, Network, Briefcase, Heart, Globe2, Lightbulb, Users, Compass, CheckCircle, ArrowRight,
  CheckCircle2
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring, Variants } from "framer-motion"

// ==========================================
// 1. IMPORT NAVBAR & TOPBAR HERE
// ==========================================
import TopBar from "@/components/topbar";
import NavBar from "@/components/navbar";

export default function SecretaryMessagePage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Parallax effects (Logic untouched as requested)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80])
  const rotateImg = useTransform(scrollYProgress, [0, 1], [-3, 3])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <main className="w-full bg-white text-textmain overflow-hidden relative">

      {/* ========================================== */}
      {/* 2. STICKY HEADER CONTAINER */}
      {/* ========================================== */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-white shadow-sm">
        <TopBar />
        <NavBar />
      </div>

      {/* 1. HERO SECTION (Added pt-40 to avoid hiding behind the fixed header) */}
      <section className="relative pt-40 pb-20 px-4 bg-slate-50 border-b border-slate-100 text-center">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brandOrange/10 border border-brandOrange/20 mb-6"
          >
            <Compass className="w-4 h-4 text-brandOrange" />
            <span className="text-brandOrange text-xs font-bold tracking-widest uppercase">Administrative Vision</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-black text-textmain mb-6 tracking-tight leading-tight">
            Secretary's <span className="text-[#0C508C]">Message</span>
          </h1>

          <p className="text-textmain/60 max-w-4xl mx-auto text-xl font-medium">
            "Aspiration to excel in technology and innovation is a step toward shaping a stronger and more progressive society."
          </p>
        </div>
      </section>

      {/* 2. SECRETARY PROFILE & INTRO (Single Composition) */}
      <section ref={sectionRef} className="py-20 bg-white relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Extended Text Block */}
            <motion.div
              className="space-y-8 md:pt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-textmain mb-2 leading-tight tracking-tight">Er. Awadhesh <br />Kumar</h2>
                <p className="text-brandOrange font-bold text-lg uppercase tracking-widest">Secretary, BPTPIA</p>
                <div className="w-20 h-1.5 bg-brandGreen rounded-full"></div>
              </div>

              <div className="space-y-6 text-textmain/80 text-lg leading-relaxed">
                <p>
                  At the very outset, I extend my heartfelt greetings to all the aspirants who carry the passion, determination, and vision to become successful engineers and professionals. We are deeply committed to providing a comprehensive and high-quality educational ecosystem.
                </p>
                <p>
                  Our objective is to ensure that students from our state receive opportunities and exposure equivalent to, or even better than, those offered by some of the most prestigious institutions across the country. We believe that talent exists everywhere, and with the right guidance, it can achieve extraordinary heights.
                </p>
              </div>
            </motion.div>

            {/* SINGLE IMAGE BOX COMPOSITION */}
            <motion.div
              className="relative pt-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Secretary Image */}
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white z-10 aspect-[4/5] bg-slate-100 hover:shadow-xl transition-shadow">
                <img
                  src="https://bihartechassociation.com/wp-content/uploads/2025/04/secre.jpg"
                  className="w-full h-full object-cover object-top"
                  alt="Er. Awadhesh Kumar"
                />
              </div>

              {/* Decorative Brand Circles */}
              <div className="absolute top-0 -left-10 w-32 h-32 bg-[#0C508C]/10 rounded-full blur-3xl z-0"></div>
              <div className="absolute bottom-20 -right-10 w-40 h-40 bg-brandOrange/10 rounded-full blur-3xl z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE PHILOSOPHY / QUOTE BLOCK */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Prominent Quote Card */}
            <div className="p-10 md:p-14 bg-white rounded-[3rem] border border-slate-200 relative overflow-hidden shadow-xl">
              <Quote className="absolute top-6 left-6 w-20 h-20 text-slate-50 -z-0 rotate-180" />
              <p className="text-2xl md:text-3xl text-textmain font-medium italic leading-relaxed relative z-10 border-l-8 border-brandOrange pl-8 py-2">
                "Our goal is to produce not just degree holders, but skilled professionals who are capable of contributing meaningfully to the global workforce."
              </p>
            </div>

            {/* Expansive Content Block */}
            <div className="space-y-6 text-textmain/70 text-lg leading-relaxed pl-4 md:pl-8">
              <p>
                In this journey, our association has taken a visionary step to integrate multiple dimensions of education under one unified platform. From Undergraduate to Postgraduate Programs in Engineering & Technology, Computer Applications, Management, and allied disciplines, we aim to bring all streams together under one umbrella.
              </p>
              <p>
                This integrated approach allows us to optimize educational initiatives in a structured, inclusive, and impactful manner—ensuring that no deserving student is left behind, regardless of their background or geographical location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRATEGIC PILLARS (Bento Box Grid) */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-textmain">A Framework for Excellence</h2>
            <p className="text-brandGreen font-bold tracking-widest uppercase text-sm">Empowering Students with Knowledge, Skills, and Values</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              icon={<Network />}
              title="Unified Platform"
              desc="Bringing UG to PG Programs together to optimize educational initiatives efficiently."
              color="brandOrange"
            />
            <ValueCard
              icon={<Briefcase />}
              title="Industry Readiness"
              desc="Aligning curriculum with current industry standards and technological advancements."
              color="#0C508C"
            />
            <ValueCard
              icon={<Heart />}
              title="Holistic Development"
              desc="Ensuring students grow not only intellectually but also ethically and socially."
              color="brandGreen"
            />
            <ValueCard
              icon={<Globe2 />}
              title="Nation Building"
              desc="Creating a strong academic base that contributes to the social and economic development."
              color="brandGreen"
            />
            <ValueCard
              icon={<Lightbulb />}
              title="Research Orientation"
              desc="Nurturing innovation, critical thinking, and creating opportunities for research."
              color="brandOrange"
            />
            <ValueCard
              icon={<Users />}
              title="Conscious Citizens"
              desc="Developing individuals who contribute positively to the community and society."
              color="#0C508C"
            />
          </div>
        </div>
      </section>

      {/* 5. STATS SECTION (Framer Motion Counters Fix Applied) */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8" ref={statsRef}>
          <StatItem icon={<CheckCircle2 />} val={100} label="Commitment" suffix="%" delay={0.1} color="brandGreen" />
          <StatItem icon={<Users />} val={5000} label="Aspirants" suffix="+" delay={0.2} color="brandOrange" />
          <StatItem icon={<GraduationCap />} val={360} label="Holistic Growth" suffix="°" delay={0.3} color="#0C508C" />
          <StatItem icon={<Network />} val={1} label="Unified Platform" suffix="" delay={0.4} color="brandGreen" />
        </div>
      </section>

      {/* 6. ROYAL BLUE (#0C508C) CTA SECTION */}
      <section className="pb-32 pt-24 bg-white">
        <div className="container-custom">
          <motion.div
            className="bg-[#0C508C] p-12 md:p-20 rounded-[4rem] text-white relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -mr-32 -mt-32 blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-8 border-white/20 overflow-hidden shrink-0 shadow-2xl">
                <img
                  src="https://bihartechassociation.com/wp-content/uploads/2025/04/secre.jpg"
                  alt="Secretary Er. Awadhesh Kumar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <Quote className="w-10 h-10 text-brandOrange mb-4 mx-auto md:mx-0" />
                <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
                  "Let’s Build Bihar into a <br className="hidden md:block" />Techno-Educational Hub!"
                </h3>
                <p className="text-2xl font-bold mb-1 italic tracking-tight">Er. Awadhesh Kumar</p>
                <p className="text-brandGreen font-bold uppercase tracking-[0.2em] text-sm">Secretary, BPTPIA</p>
              </div>
              <button className="bg-white text-[#0C508C] hover:bg-brandOrange hover:text-white px-8 py-5 rounded-full font-bold text-lg transition-all shadow-xl flex items-center gap-2 shrink-0">
                Join Our Mission <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}

// Subcomponents
function ValueCard({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
  return (
    <div className="bg-white p-10 rounded-3xl border border-slate-200 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
      <div className={`p-4 rounded-xl inline-flex mb-6 ${color === 'brandOrange' ? 'text-brandOrange bg-brandOrange/10' : color === 'brandGreen' ? 'text-brandGreen bg-brandGreen/10' : 'text-[#0C508C] bg-[#0C508C]/10'}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-textmain mb-3">{title}</h3>
      <p className="text-sm text-textmain/60 leading-relaxed font-medium">
        {desc}
      </p>
    </div>
  )
}

function StatItem({ icon, val, label, suffix, delay, color }: any) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const springValue = useSpring(0, { stiffness: 40, damping: 10 })

  useEffect(() => {
    if (isInView) springValue.set(val)
  }, [isInView, val, springValue])

  // Safe Motion Value rendering
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay } } }}
      className="text-center p-8 bg-white rounded-3xl shadow-sm border border-slate-100"
    >
      <div className="mb-4 flex justify-center" style={{ color: color.startsWith('#') ? color : `var(--color-${color})` }}>{icon}</div>
      <div ref={countRef} className="text-4xl font-black text-textmain flex items-center justify-center mb-1">
        <motion.span>{displayValue}</motion.span>{suffix}
      </div>
      <div className="text-[11px] text-textmain/50 font-bold uppercase tracking-widest">{label}</div>
    </motion.div>
  )
}