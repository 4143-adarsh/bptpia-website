'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// =========================================================
// 1. DEFINE TYPES & MENU DATA
// =========================================================
export type IMenu = {
  id: number;
  title: string;
  url: string;
  dropdown?: boolean;
  items?: IMenu[];
  badge?: string;
};

const universityMenus: IMenu[] = [
  { id: 1, title: 'Home', url: '/', dropdown: false },
  {
    id: 2, title: 'Who We Are?', url: '/about', dropdown: true,
    items: [
      { id: 21, title: 'About BPTPIA', url: '/about/bptpia' },
      { id: 22, title: 'Mission & Vision', url: '/about/mission-vision' },
      { id: 23, title: 'Chairman Message', url: '/about/chairman-message' },
      { id: 24, title: 'Secretary Message', url: '/about/secretary-message' },
    ],
  },
  {
    id: 3, title: 'Government Letter', url: '/government-letter', dropdown: true,
    items: [
      { id: 31, title: 'Government Letter 1', url: '/government-letter/1' },
    ],
  },
  { id: 4, title: 'List of Colleges', url: '/colleges', dropdown: false },
  { id: 5, title: 'News & Events', url: '/news-events', dropdown: false },
  {
    id: 6, title: 'Media Gallery', url: '/media', dropdown: true,
    items: [
      { id: 61, title: 'Photo Gallery', url: '/media/photos' },
      { id: 62, title: 'Video Gallery', url: '/media/videos' },
    ],
  },
  { id: 7, title: 'Contact Us', url: '/contact', dropdown: false },
  { id: 8, title: 'Results', url: '/results', dropdown: false, badge: 'NEW' },
];

// =========================================================
// 2. MAIN NAVBAR COMPONENT
// =========================================================
export default function NavBar() {
  const [hovered, setHovered] = useState<number | null>(null);

  // CSS for the glowing top-edge shadow
  const customShadowStyle = `
    .top-glow-shadow {
      border-top: 2px solid #C8102E !important;
      box-shadow: 
        0px -6px 15px rgba(200, 16, 46, 0.25),   /* Outer top red glow */
        inset 0px 4px 8px rgba(200, 16, 46, 0.15), /* Inner top red glow */
        0px 10px 15px rgba(0, 0, 0, 0.05) !important; /* Subtle bottom shadow */
      background-color: white;
    }
  `;

  return (
    <header className="w-full z-50">
      {/* Injecting our custom shadow style */}
      <style dangerouslySetInnerHTML={{ __html: customShadowStyle }} />

      <MotionConfig transition={{ bounce: 0, type: 'tween' }}>
        <nav className={'relative flex min-h-[50px] items-center w-full justify-center bg-white border-b-[3px] border-teal-700 shadow-sm py-1.5'}>

          <ul className={'hidden md:flex w-full max-w-[1400px] items-center justify-evenly px-6'}>
            {universityMenus.map((item) => {
              return (
                <li key={item.id} className={'relative z-50'}>

                  {/* Navbar Menu Item */}
                  <Link
                    className={`
                      relative flex items-center justify-center rounded-md px-4 py-3 transition-all duration-300 text-[15px] font-bold tracking-wide
                      hover:text-[#C8102E] 
                      ${hovered === item?.id ? 'text-[#C8102E] top-glow-shadow' : 'text-black'}
                    `}
                    onMouseEnter={() => setHovered(item.id)}
                    onMouseLeave={() => setHovered(null)}
                    href={item?.url}
                  >
                    {item?.title}

                    {item.dropdown && (
                      <ChevronDown className="ml-1 h-4 w-4 stroke-[3px]" />
                    )}

                    {/* NEW Badge */}
                    {item.badge && (
                      <span className="ml-2 rounded-sm bg-[#ff6b00] px-1.5 py-0.5 text-[10px] font-extrabold text-yellow-100 shadow-sm border border-orange-800">
                        {item.badge}
                      </span>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item?.dropdown && hovered === item?.id && (
                    <div
                      className='absolute left-0 top-full pt-4'
                      onMouseEnter={() => setHovered(item.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <motion.div
                        layout
                        transition={{ bounce: 0 }}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                        style={{ borderRadius: '8px' }}
                        /* Dropdown uses top-glow-shadow. Reduced py to make it look like the screenshot */
                        className='flex flex-col w-64 top-glow-shadow py-2'
                        layoutId={'cursor'}
                      >
                        {item?.items?.map((nav) => {
                          return (
                            <Link
                              key={`link-${nav?.id}`}
                              href={`${nav?.url}`}
                              // CHANGES HERE: 
                              // 1. Padding inside each item is controlled tightly (px-5 py-2.5)
                              // 2. Font is slightly smaller and weight is adjusted to match the screenshot.
                              className={'block px-5 py-2.5 text-[14px] font-semibold text-gray-800 hover:text-[#C8102E] hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-none'}
                            >
                              {nav?.title}
                            </Link>
                          );
                        })}
                      </motion.div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </MotionConfig>
    </header>
  );
}