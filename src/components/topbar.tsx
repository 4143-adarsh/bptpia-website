'use client';

import Link from 'next/link';
import { FileText, Library } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TopBar() {

  return (
    <div className="w-full bg-white relative z-50 shadow-sm border-b border-gray-300">
      <div className="max-w-[1400px] mx-auto py-2 flex flex-col md:flex-row items-center justify-between gap-6 relative">

        {/* ========================================= */}
        {/* LEFT SIDE: EXACT SCREENSHOT MATCH LOGO    */}
        {/* ========================================= */}
        {/* FORCEFUL LEFT MARGIN: style={{ marginLeft: '8%' }} se ye humesha andar ki taraf rahega */}
        <Link href="/" className="flex-shrink-0 relative" style={{ marginLeft: '3%' }}>
          <img
            src="https://bihartechassociation.com/wp-content/uploads/2025/04/logo.png"
            alt="Bihar Private Technical & Professional Institutions Association"
            className="h-[60px] md:h-[75px] w-auto object-contain"
            loading="eager"
          />
        </Link>

        {/* ========================================= */}
        {/* RIGHT SIDE: ANIMATED BUTTONS (GLOW + SHINE)*/}
        {/* ========================================= */}
        {/* RIGHT MARGIN: Buttons ko right edge se thoda dur rakhne ke liye marginRight */}
        <div className="flex flex-col sm:flex-row items-center gap-6" style={{ marginRight: '4%' }}>

          {/* Button 1: Admission Form */}
          <Button asChild className="group relative overflow-hidden bg-[#050505] text-white border border-white/10 min-w-[200px] font-semibold tracking-wide rounded-xl py-5 hover:bg-[#050505]" size="sm">
            <Link href="/admission">
              <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
                Admission Form
              </span>
              <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-white/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-white">
                <FileText size={18} strokeWidth={2} aria-hidden="true" />
              </i>
            </Link>
          </Button>

          {/* Button 2: List of Colleges */}
          <Button asChild className="group relative overflow-hidden bg-[#050505] text-white border border-white/10 min-w-[200px] font-semibold tracking-wide rounded-xl py-5 hover:bg-[#050505]" size="sm">
            <Link href="/colleges">
              <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
                List of Colleges
              </span>
              <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-white/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-white">
                <Library size={18} strokeWidth={2} aria-hidden="true" />
              </i>
            </Link>
          </Button>

        </div>
      </div>
    </div>
  );
}