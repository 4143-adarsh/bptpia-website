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
  Star
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
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  // Mission & Vision Specific Content
  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Youth Empowerment",
      description:
        "Arming students with a sophisticated blend of advanced technical knowledge, rigorous practical expertise, and a resilient spirit of innovation.",
      position: "left",
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Democratizing Education",
      description:
        "Creating a high-speed pathway for students from every corner of Bihar to reach the global stage through standardized, merit-driven admissions.",
      position: "left",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Bridging the Gap",
      description:
        "Aggressively connecting traditional academia with the modern industrial landscape, ensuring our students are the visionary architects of tomorrow.",
      position: "left",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Breeding Visionaries",
      description:
        "Serving as the ultimate breeding ground for competent, ethical professionals who will be the primary driving force behind India’s economic progress.",
      position: "right",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Industry Synergy",
      description:
        "Constructing an ecosystem where industry and academia exist in friction-less synergy, applying laboratory breakthroughs directly to the global market.",
      position: "right",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-brandGreen" />,
      title: "Global R&D Hubs",
      description:
        "Aspiring to create global hubs of research and development, contributing to the world’s repository of knowledge through breakthrough patents.",
      position: "right",
    },
  ]

  // Core Values Stats
  const stats = [
    { icon: <ShieldCheck />, value: 100, label: "Absolute Integrity", suffix: "%" },
    { icon: <Zap />, value: 4, label: "Industry 4.0 Focus", suffix: ".0" },
    { icon: <Target />, value: 1, label: "Unified Vision", suffix: "" },
    { icon: <Users />, value: 100, label: "Universal Empowerment", suffix: "%" },
  ]

  return (
    <main className="w-full bg-white text-textmain overflow-hidden relative">

      {/* ========================================== */}
      {/* 2. STICKY HEADER CONTAINER */}
      {/* ========================================== */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-white shadow-sm">
        <TopBar />
        <NavBar />
      </div>

      <section
        id="mission-vision-section"
        ref={sectionRef}
        // Changed py-24 to pt-40 pb-24 to prevent hiding behind the fixed header
        className="w-full pt-40 pb-24 px-4 bg-white text-textmain overflow-hidden relative"
      >
        {/* Decorative background elements using brand colors */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brandGreen/5 blur-3xl"
          style={{ y: y1, rotate: rotate1 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-brandOrange/5 blur-3xl"
          style={{ y: y2, rotate: rotate2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-brandGreen/30"
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-brandOrange/30"
          animate={{
            y: [0, 20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="container-custom relative z-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
            <motion.span
              className="text-brandGreen font-bold mb-2 flex items-center gap-2 tracking-widest text-sm uppercase"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Compass className="w-4 h-4" />
              OUR PURPOSE
            </motion.span>
            <h2 className="heading-xl mb-4">The Grand Mission</h2>
            <motion.div
              className="w-24 h-1.5 bg-brandGreen rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
          </motion.div>

          <motion.p className="text-muted mb-16" variants={itemVariants}>
            Driven by a profound commitment to social, intellectual, and economic transformation, our mission is a living, breathing blueprint for a resurgent Bihar. We are dedicated to providing the nation with a new generation of high-caliber technocrats.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Left Column */}
            <div className="space-y-16">
              {services
                .filter((service) => service.position === "left")
                .map((service, index) => (
                  <ServiceItem
                    key={`left-${index}`}
                    icon={service.icon}
                    secondaryIcon={service.secondaryIcon}
                    title={service.title}
                    description={service.description}
                    variants={itemVariants}
                    delay={index * 0.2}
                    direction="left"
                  />
                ))}
            </div>

            {/* Center Image */}
            <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
              <motion.div className="relative w-full max-w-sm" variants={itemVariants}>
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                    alt="Engineering the Future"
                    className="w-full h-full object-cover aspect-[4/5]"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-textmain/90 via-textmain/20 to-transparent flex items-end justify-center p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    <motion.div className="text-center text-white">
                      <Target className="w-8 h-8 mx-auto mb-2 text-brandOrange" />
                      <p className="font-bold tracking-wide">Architectural Vision</p>
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute inset-0 border-4 border-brandOrange/40 rounded-2xl -m-4 z-[-1]"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                ></motion.div>

                {/* Floating accent elements */}
                <motion.div
                  className="absolute -top-6 -right-8 w-20 h-20 rounded-full bg-brandGreen/15 blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  style={{ y: y1 }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-8 -left-10 w-24 h-24 rounded-full bg-brandOrange/20 blur-sm"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  style={{ y: y2 }}
                ></motion.div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-16">
              {services
                .filter((service) => service.position === "right")
                .map((service, index) => (
                  <ServiceItem
                    key={`right-${index}`}
                    icon={service.icon}
                    secondaryIcon={service.secondaryIcon}
                    title={service.title}
                    description={service.description}
                    variants={itemVariants}
                    delay={index * 0.2}
                    direction="right"
                  />
                ))}
            </div>
          </div>

          {/* Stats Section (Core Values) */}
          <motion.div
            ref={statsRef}
            className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-24 bg-textmain text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <Eye className="w-64 h-64 transform translate-x-1/4 -translate-y-1/4 text-brandGreen" />
            </div>
            <div className="flex-1 relative z-10 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-3">Be Part of the Vision</h3>
              <p className="text-white/80 text-lg">Join us in transforming Bihar into a global hub of professional excellence.</p>
            </div>
            <div className="relative z-10">
              <button className="btn-primary" style={{ backgroundColor: 'var(--color-brandGreen)' }}>
                Join The Revolution <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}

interface ServiceItemProps {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  variants: Variants
  delay: number
  direction: "left" | "right"
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-4 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-brandGreen bg-brandGreen/10 p-4 rounded-xl transition-colors duration-300 group-hover:bg-brandGreen/20 relative shrink-0"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-bold text-textmain group-hover:text-brandGreen transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-textmain/70 leading-relaxed pl-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-3 pl-16 flex items-center text-brandOrange font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1">
          Explore Vision <ArrowRight className="w-4 h-4 ml-1" />
        </span>
      </motion.div>
    </motion.div>
  )
}

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300 hover:border-brandGreen/30"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="w-16 h-16 rounded-2xl bg-brandOrange/10 flex items-center justify-center mb-6 text-brandOrange group-hover:bg-brandGreen/10 group-hover:text-brandGreen transition-colors duration-500"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-4xl font-black text-textmain flex items-center mb-2">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-textmain/60 text-sm font-bold uppercase tracking-wider">{label}</p>
      <motion.div className="w-10 h-1.5 bg-brandOrange rounded-full mt-4 group-hover:w-20 group-hover:bg-brandGreen transition-all duration-500" />
    </motion.div>
  )
}