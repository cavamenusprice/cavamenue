'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const categories = [
  { label: 'Curated Bowls', href: '/menu/curated-bowls' },
  { label: 'Curated Pitas', href: '/menu/curated-pitas' },
  { label: 'Bases', href: '/menu/bases' },
  { label: 'Mains', href: '/menu/mains' },
  { label: 'Kids Meal', href: '/menu/kids-meal' },
  { label: 'Toppings', href: '/menu/toppings' },
  { label: 'Dips & Spreads', href: '/menu/dips-spreads' },
  { label: 'Dressings', href: '/menu/dressings' },
  { label: 'Sides', href: '/menu/sides' },
  { label: 'Desserts', href: '/menu/desserts' },
  { label: 'Drinks', href: '/menu/drinks' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMenuDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMenuDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMenuDropdownOpen(false);
    }, 150);
  };

  const isHomeActive = pathname === '';
  const isCategoryActive = pathname.startsWith('/menu/');

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group py-1" aria-label="CAVA Menu Home">
              <Image
                src="/images/cava-menu-logo.webp"
                alt="CAVA Menu"
                width={200}
                height={80}
                priority
                className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {/* 1. Home */}
            <Link
              href="/"
              className={`text-sm font-semibold tracking-wide transition-colors ${
                isHomeActive ? 'text-[#0A6847]' : 'text-[#1A1A2E] hover:text-[#0A6847]'
              }`}
            >
              Home
            </Link>

            {/* 2. Categories Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/#menu"
                onClick={() => setMenuDropdownOpen((prev) => !prev)}
                className={`text-sm font-semibold tracking-wide inline-flex items-center gap-1 transition-colors ${
                  isCategoryActive ? 'text-[#0A6847]' : 'text-[#1A1A2E] hover:text-[#0A6847]'
                }`}
              >
                <span>Categories</span>
                <span
                  className={`text-[9px] transition-transform duration-200 ${
                    menuDropdownOpen ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </Link>

              {/* Dropdown Menu */}
              {menuDropdownOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[460px] z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="pb-3 mb-3 border-b border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                          Menu Categories
                        </span>
                        <Link
                          href="/#menu"
                          onClick={() => setMenuDropdownOpen(false)}
                          className="text-sm font-bold text-[#0A6847] hover:underline"
                        >
                          Browse All On Home
                        </Link>
                      </div>
                      <span className="text-xs text-gray-400 font-semibold">
                        {categories.length} Categories
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {categories.map((cat) => {
                        const isCatActive = pathname === cat.href;
                        return (
                          <Link
                            key={cat.href}
                            href={cat.href}
                            onClick={() => setMenuDropdownOpen(false)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              isCatActive
                                ? 'bg-emerald-50 text-[#0A6847] font-semibold'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-[#0A6847]'
                            }`}
                          >
                            {cat.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Gluten-Free */}
            <Link
              href="/gluten-free"
              className={`text-sm font-semibold tracking-wide transition-colors ${
                pathname === '/gluten-free' ? 'text-[#0A6847]' : 'text-[#1A1A2E] hover:text-[#0A6847]'
              }`}
            >
              Gluten-Free
            </Link>

            {/* 4. Allergen Menu */}
            <Link
              href="/allergen-menu"
              className={`text-sm font-semibold tracking-wide transition-colors ${
                pathname === '/allergen-menu' ? 'text-[#0A6847]' : 'text-[#1A1A2E] hover:text-[#0A6847]'
              }`}
            >
              Allergen Menu
            </Link>

            {/* 5. Locations */}
            <Link
              href="/locations"
              className={`text-sm font-semibold tracking-wide transition-colors ${
                pathname === '/locations' ? 'text-[#0A6847]' : 'text-[#1A1A2E] hover:text-[#0A6847]'
              }`}
            >
              Locations
            </Link>

            {/* 6. Calculator */}
            <Link
              href="/calculator"
              className={`text-sm font-semibold tracking-wide transition-colors ${
                pathname === '/calculator' ? 'text-[#0A6847]' : 'text-[#1A1A2E] hover:text-[#0A6847]'
              }`}
            >
              Calculator
            </Link>

            {/* 4. About */}
            <Link
              href="/about"
              className={`text-sm font-semibold tracking-wide transition-colors ${
                pathname === '/about'
                  ? 'text-[#0A6847]'
                  : 'text-[#1A1A2E] hover:text-[#0A6847]'
              }`}
            >
              About
            </Link>

            {/* 5. Explore Menu CTA */}
            <a
              href="/#menu"
              className="px-6 py-2.5 rounded-full text-white text-sm font-bold tracking-wide hover:opacity-90 transition-opacity bg-[#0A6847] shadow-sm"
            >
              Explore Menu
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-3 py-2 text-sm font-bold uppercase tracking-wider text-[#1A1A2E] rounded-lg border border-gray-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-lg text-base font-semibold ${
                isHomeActive ? 'text-[#0A6847] bg-emerald-50' : 'text-[#1A1A2E]'
              }`}
            >
              Home
            </Link>

            {/* Categories Accordion */}
            <div>
              <div className="flex items-center justify-between px-3 py-3 border-b border-gray-50">
                <Link
                  href="/#menu"
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold ${
                    isCategoryActive ? 'text-[#0A6847]' : 'text-[#1A1A2E]'
                  }`}
                >
                  Categories
                </Link>
                <button
                  onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
                  className="text-xs uppercase font-bold text-gray-500 px-2 py-1 bg-gray-100 rounded"
                >
                  {mobileMenuExpanded ? 'Hide' : 'Show'}
                </button>
              </div>

              {mobileMenuExpanded && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50/60 rounded-xl my-1">
                  <a
                    href="/#menu"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm font-bold text-[#0A6847]"
                  >
                    View All Categories (Home)
                  </a>
                  {categories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                        pathname === cat.href
                          ? 'text-[#0A6847] font-semibold bg-white'
                          : 'text-gray-600 hover:text-[#0A6847]'
                      }`}
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Gluten-Free */}
            <Link
              href="/gluten-free"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-lg text-base font-semibold ${
                pathname === '/gluten-free' ? 'text-[#0A6847] bg-emerald-50' : 'text-[#1A1A2E]'
              }`}
            >
              Gluten-Free
            </Link>

            {/* Allergen Menu */}
            <Link
              href="/allergen-menu"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-lg text-base font-semibold ${
                pathname === '/allergen-menu' ? 'text-[#0A6847] bg-emerald-50' : 'text-[#1A1A2E]'
              }`}
            >
              Allergen Menu
            </Link>

            {/* Locations */}
            <Link
              href="/locations"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-lg text-base font-semibold ${
                pathname === '/locations' ? 'text-[#0A6847] bg-emerald-50' : 'text-[#1A1A2E]'
              }`}
            >
              Locations
            </Link>

            {/* Calculator */}
            <Link
              href="/calculator"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-lg text-base font-semibold ${
                pathname === '/calculator' ? 'text-[#0A6847] bg-emerald-50' : 'text-[#1A1A2E]'
              }`}
            >
              Calculator
            </Link>

            {/* About */}
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-semibold text-[#1A1A2E]"
            >
              About
            </Link>

            {/* CTA */}
            <div className="pt-2 pb-2">
              <a
                href="/#menu"
                onClick={() => setIsOpen(false)}
                className="block text-center px-4 py-3 rounded-full text-white text-sm font-bold tracking-wide bg-[#0A6847]"
              >
                Explore Full Menu
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
