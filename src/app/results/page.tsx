"use client"

import type React from "react"
import { useState, useRef, useMemo } from "react"
import {
  CalendarDays,
  Download,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Search,
  BookOpenText,
  BookmarkCheck,
  FileText,
  PhoneCall,
  SearchX,
  TrendingUp,
  Award,
  Map,
  CheckCircle2,
  FileKey,
  Users
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, Variants, AnimatePresence } from "framer-motion"

// ==========================================
// 1. IMPORT NAVBAR & TOPBAR
// ==========================================
import TopBar from "@/components/topbar";
import NavBar from "@/components/navbar";

// ==========================================
// 2. DATA ARRAY (Enhanced with Images & Mock Stats)
// ==========================================
const initialResultData = [
  {
    id: "phase3",
    dateStr: "2025-09-08",
    phaseNum: 3,
    date: "08",
    monthYear: "Sep, 2025",
    examName: "CET Phase III Entrance Examination",
    badge: "New Declared",
    // ADDED: Realistic Exam Image for Phase III
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop", 
    stats: { appeared: "12,450+", passRate: "89.2%", topScore: "98.5 PR" },
    links: [
      { id: "p3-poly", course: "Polytechnic", type: "Regular/Entrance Result", icon: <BookOpenText />, url: "#" },
      { id: "p3-poly-le", course: "Polytechnic LE", type: "Lateral Entry Result", icon: <BookOpenText />, url: "#" },
      { id: "p3-btech", course: "B.Tech", type: "UG Entrance Result", icon: <GraduationCap />, url: "#" },
      { id: "p3-btech-le", course: "B.Tech LE", type: "Lateral Entry Result", icon: <GraduationCap />, url: "#" },
    ]
  },
  {
    id: "phase2",
    dateStr: "2025-08-06",
    phaseNum: 2,
    date: "06",
    monthYear: "Aug, 2025",
    examName: "CET Phase II Entrance Examination",
    badge: "Declared",
    // ADDED: Students studying image for Phase II
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop", 
    stats: { appeared: "15,200+", passRate: "86.4%", topScore: "99.1 PR" },
    links: [
      { id: "p2-poly", course: "Polytechnic", type: "Regular Result", icon: <BookOpenText />, url: "#" },
      { id: "p2-poly-le", course: "Polytechnic LE", type: "Lateral Entry Result", icon: <BookOpenText />, url: "#" },
      { id: "p2-btech", course: "B.Tech", type: "Regular Result", icon: <GraduationCap />, url: "#" },
      { id: "p2-btech-le", course: "B.Tech LE", type: "Lateral Entry Result", icon: <GraduationCap />, url: "#" },
    ]
  },
  {
    id: "phase1",
    dateStr: "2025-06-25",
    phaseNum: 1,
    date: "25",
    monthYear: "Jun, 2025",
    examName: "CET Phase I Entrance Examination",
    badge: "Declared",
    // ADDED: Graduation celebration image for Phase I
    imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600&auto=format&fit=crop", 
    stats: { appeared: "18,900+", passRate: "84.8%", topScore: "99.8 PR" },
    links: [
      { id: "p1-poly", course: "Polytechnic", type: "Regular Result", icon: <BookOpenText />, url: "#" },
      { id: "p1-poly-le", course: "Polytechnic LE", type: "Lateral Entry Result", icon: <BookOpenText />, url: "#" },
      { id: "p1-btech", course: "B.Tech", type: "Regular Result", icon: <GraduationCap />, url: "#" },
      { id: "p1-btech-le", course: "B.Tech LE", type: "Lateral Entry Result", icon: <GraduationCap />, url: "#" },
    ]
  }
]

export default function ResultsPage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 })

  const [searchQuery, setSearchQuery] = useState("")
  const [sortMode, setSortMode] = useState<"latest" | "phase">("latest")

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const filteredAndSortedData = useMemo(() => {
    let processedData = initialResultData.map(session => {
      const isSessionMatch = session.examName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchedLinks = session.links.filter(link => 
        link.course.toLowerCase().includes(searchQuery.toLowerCase()) || 
        link.type.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (isSessionMatch) return session;
      if (matchedLinks.length > 0) return { ...session, links: matchedLinks };
      return null;
    }).filter(Boolean) as typeof initialResultData;

    processedData.sort((a, b) => {
      if (sortMode === "latest") return new Date(b.dateStr).getTime() - new Date(a.dateStr).getTime();
      return a.phaseNum - b.phaseNum;
    });

    return processedData;
  }, [searchQuery, sortMode]);

  return (
    <main className="w-full bg-[#fafcff] text-[#050505] min-h-screen overflow-hidden relative selection:bg-[#004d80]/20">

      {/* FIXED HEADER */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/50">
        <TopBar />
        <NavBar />
      </div>

      <section ref={sectionRef} className="w-full pt-[140px] md:pt-[170px] pb-16 px-4 md:px-8 relative z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <motion.div className="absolute top-20 left-0 w-[600px] h-[600px] rounded-full bg-[#cc0000]/5 blur-[120px] -z-10" style={{ y: y1 }} />
        <motion.div className="absolute top-[40%] right-0 w-[700px] h-[700px] rounded-full bg-[#004d80]/5 blur-[120px] -z-10" style={{ y: y2 }} />

        <div className="container-custom max-w-7xl mx-auto relative z-10">
          
          {/* FLASH NEWS TICKER */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto mb-10 bg-white border border-slate-200 rounded-full p-1.5 pr-5 flex items-center gap-3 shadow-sm overflow-hidden"
          >
            <div className="bg-[#cc0000] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Live Update
            </div>
            <p className="text-xs md:text-sm font-medium text-slate-600 truncate whitespace-nowrap">
              <span style={{ color: '#004d80' }} className="font-bold">Attention Candidates:</span> Phase III Entrance Results are now officially live. Please keep your roll numbers ready.
            </p>
          </motion.div>

          {/* GRAND HERO HEADING */}
          <motion.div className="flex flex-col items-center mb-16 text-center" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
            <h1 className="heading-xl text-[2.5rem] md:text-[4rem] tracking-tighter leading-tight" style={{ color: '#cc0000' }}>
              Central <span style={{ color: '#004d80' }}>Result Portal</span>
            </h1>
            <p className="text-lg md:text-xl font-medium mt-4 max-w-3xl mx-auto leading-relaxed" style={{ color: '#004d80' }}>
              The gateway to your future. Access official merit lists, download secure scorecards, and prepare for the upcoming technical counseling phases.
            </p>
          </motion.div>

          {/* INTERACTIVE SEARCH & SORT DESK */}
          <motion.div 
            className="mb-12 p-3 bg-white/60 backdrop-blur-xl rounded-full border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row gap-3 items-center justify-between max-w-5xl mx-auto relative z-20"
            initial="hidden" animate={isInView ? "visible" : "hidden"} variants={itemVariants}
          >
            <div className="relative w-full md:w-2/3">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search your course (e.g. B.Tech, Polytechnic)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-full py-3.5 pl-12 pr-6 text-sm font-medium placeholder:text-slate-400 outline-none shadow-inner transition-all" 
                style={{ outlineColor: '#004d8040' }}
              />
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto px-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sort By</span>
                <div className="flex bg-slate-100 p-1 rounded-full">
                    <button onClick={() => setSortMode("latest")} className={`px-5 py-2 rounded-full font-bold text-xs transition-all duration-300 ${sortMode === "latest" ? "bg-white shadow text-[#050505]" : "text-slate-500 hover:text-[#004d80]"}`}>Latest First</button>
                    <button onClick={() => setSortMode("phase")} className={`px-5 py-2 rounded-full font-bold text-xs transition-all duration-300 ${sortMode === "phase" ? "bg-white shadow text-[#050505]" : "text-slate-500 hover:text-[#004d80]"}`}>Phasewise</button>
                </div>
            </div>
          </motion.div>

          {/* RESULTS LISTING */}
          <div className="space-y-8 mb-20 max-w-5xl mx-auto relative z-10">
            <AnimatePresence mode="popLayout">
              {filteredAndSortedData.length > 0 ? (
                filteredAndSortedData.map((session) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={session.id} 
                    // parent group
                    className="bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-[0_20px_50px_rgba(0,77,128,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row overflow-hidden relative group/card"
                  >
                    {session.badge === "New Declared" && (
                      <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-[#cc0000] to-[#004d80] z-20"></div>
                    )}

                    {/* Left Block: Date Tag with Image Background */}
                    <div className="md:w-1/3 p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-slate-100 relative overflow-hidden shrink-0">
                        {/* THE ADDED IMAGE BACKGROUND */}
                        <img 
                          src={session.imageUrl} 
                          alt={session.examName} 
                          // group-hover/card triggers scale
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                        />
                        {/* Dark Overlay for Text Readability - Matching the Blue Theme */}
                        <div className="absolute inset-0 bg-[#004d80]/85 backdrop-blur-[1px]"></div>
                        
                        {/* Relative content z-10 to stay above image */}
                        <div className="relative z-10">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-1.5 shadow-md ${session.badge === "New Declared" ? "bg-[#cc0000] text-white" : "bg-white border border-slate-200 text-[#004d80]"}`}>
                            {session.badge === "New Declared" && <Sparkles className="w-3 h-3" />}
                            {session.badge}
                          </span>
                          
                          {/* Changed text color to white for better contrast against image */}
                          <h2 className="text-6xl font-black text-white tracking-tighter leading-none mb-1 group-hover/card:scale-105 transition-transform duration-500">{session.date}</h2>
                          {/* Changed year text color to white with slightly lower opacity */}
                          <p className="font-bold uppercase text-xs tracking-[0.2em] mt-2 text-white/90">{session.monthYear}</p>
                        </div>
                    </div>

                    {/* Right Block: Content & Links */}
                    <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center bg-white">
                        <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
                            <div>
                              <h3 className="text-xl md:text-2xl font-black text-[#050505] leading-tight mb-2 group-hover/card:text-[#004d80] transition-colors">{session.examName}</h3>
                              
                              {/* Quick Stats Bar */}
                              <div className="flex flex-wrap items-center gap-3 md:gap-5">
                                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                                  <Users className="w-3.5 h-3.5" style={{ color: '#cc0000' }}/> {session.stats.appeared} Appeared
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                                  <TrendingUp className="w-3.5 h-3.5" style={{ color: '#004d80' }}/> {session.stats.passRate} Pass
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                                  <Award className="w-3.5 h-3.5 text-amber-500"/> Top: {session.stats.topScore}
                                </div>
                              </div>
                            </div>
                        </div>
                        
                        {/* Download Links Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {session.links.map((link) => (
                                <ResultItem key={link.id} {...link} exam={session.examName} />
                            ))}
                        </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-16 text-center">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                    <SearchX className="w-10 h-10 text-slate-300" />
                  </div>
                  <h3 className="text-2xl font-black text-[#050505] mb-2">No Matches Found</h3>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">We couldn't find any results matching "{searchQuery}". Please check your spelling.</p>
                  <button onClick={() => setSearchQuery("")} className="px-6 py-2.5 bg-[#004d80] hover:bg-[#050505] text-white rounded-full font-bold text-sm transition-colors">Clear Search</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* POST-RESULT ROADMAP */}
          <motion.div className="mb-24 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <div className="text-center mb-10">
              <h2 className="heading-xl" style={{ color: '#cc0000' }}>Post-Result Workflow</h2>
              <p className="font-bold text-sm" style={{ color: '#004d80' }}>Follow these official steps to secure your admission after merit declaration.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <RoadmapStep step="01" title="Download Scorecard" desc="Save the secure PDF of your merit rank." icon={<Download/>} color="#004d80" delay={0.1} />
              <RoadmapStep step="02" title="Document Verify" desc="Bring original admit cards to the nodal center." icon={<CheckCircle2/>} color="#cc0000" delay={0.2} />
              <RoadmapStep step="03" title="Choice Filling" desc="Select your preferred colleges from our portal." icon={<Map/>} color="#004d80" delay={0.3} />
              <RoadmapStep step="04" title="Final Allotment" desc="Receive admission letter and join the campus." icon={<FileKey/>} color="#050505" delay={0.4} />
            </div>
          </motion.div>

          {/* LAMP BLUE CTA */}
          <motion.div className="bg-gradient-to-r from-[#0062ff] to-[#00b4d8] p-8 md:p-14 rounded-[2.5rem] text-white relative overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,98,255,0.4)] max-w-5xl mx-auto">
            <div className="absolute top-0 right-0 h-full w-1/3 opacity-10 pointer-events-none flex items-center justify-end transform translate-x-12">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-[150%] text-white fill-current"><path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.1,-46.3C90.4,-33.5,96,-18,94.9,-3.1C93.8,11.8,86.1,26.1,76.5,38.5C66.9,50.9,55.4,61.4,42.1,69.5C28.8,77.6,14.4,83.3,-0.1,83.5C-14.6,83.7,-29.2,78.4,-41.8,70C-54.4,61.6,-65,50.1,-73.4,37C-81.8,23.9,-88,9.2,-87.5,-5.2C-87,-19.6,-79.8,-33.7,-70.5,-45.5C-61.2,-57.3,-49.8,-66.8,-37,-73.4C-24.2,-80,-12.1,-83.7,1.2,-85.7C14.5,-87.7,29,-88,44.7,-76.4Z" transform="translate(100 100)" /></svg>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="text-center md:text-left flex-1">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-md mb-4 text-[10px] font-bold uppercase tracking-widest">NEXT STEPS</div>
                <h3 className="text-3xl md:text-5xl font-black mb-3 leading-tight">Proceed to Counseling?</h3>
                <p className="text-white/90 text-sm md:text-base max-w-lg leading-relaxed font-medium mx-auto md:mx-0">Have your documents ready? Visit the central admission desk to complete your enrollment.</p>
              </div>
              <button className="btn-primary shrink-0 px-8 py-4 text-lg">
                Admission Portal <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  )
}

// ==========================================
// COMPONENT: RESULT DOWNLOAD LINK
// ==========================================
function ResultItem({ course, type, icon, exam }: any) {
  const handleDownload = () => alert(`Authenticating Session...\nDownloading Result PDF for: ${course} (${exam})`);

  return (
    <div 
      onClick={handleDownload}
      // Isolated named group
      className="flex items-center gap-3 py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all cursor-pointer group/btn"
    >
      <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover/btn:text-white group-hover/btn:border-transparent transition-all relative overflow-hidden shrink-0">
        <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity" style={{ backgroundColor: '#004d80' }}></div>
        {/* Alignment fixed */}
        <div className="relative z-10 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5">{icon}</div>
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-sm text-[#050505] group-hover/btn:text-[#004d80] transition-colors">{course}</h4>
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{type}</p>
      </div>
      <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center bg-slate-100 text-slate-400 group-hover/btn:bg-[#cc0000] group-hover/btn:text-white transition-all">
        <Download className="w-4 h-4" />
      </div>
    </div>
  )
}

// ==========================================
// COMPONENT: ROADMAP TIMELINE CARD
// ==========================================
function RoadmapStep({ step, title, desc, icon, color, delay }: any) {
  return (
    <motion.div 
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay, duration: 0.5 } } }}
      className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="absolute -right-4 -top-6 text-7xl font-black text-slate-50 group-hover:text-slate-100 transition-colors select-none pointer-events-none">{step}</div>
      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 relative z-10 group-hover:scale-110 transition-transform" style={{ color }}>
        {icon}
      </div>
      <h4 className="font-bold text-lg text-[#050505] mb-2 relative z-10">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed font-medium relative z-10">{desc}</p>
    </motion.div>
  )
}