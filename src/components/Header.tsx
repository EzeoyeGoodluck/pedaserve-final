import React, { useState } from 'react';
import { Mail, MapPin, ChevronDown, Menu, X, ArrowRight, Sparkles, Building2 } from 'lucide-react';
import { COMPANY } from '../data/company';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string, articleId?: string) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleLinkClick = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => {
    if (path === 'home' && (currentPath === 'home' || currentPath === '')) return true;
    return currentPath === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Main Nav Bar */}
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={(e) => handleLinkClick('home', e)}
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none text-left cursor-pointer"
          aria-label="Pedaserve Strategic Enterprise Homepage"
        >
          <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-secondary-container shadow-sm group-hover:scale-105 transition-transform shrink-0">
            <span className="material-symbols-outlined text-[24px]">spa</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-lg sm:text-headline-sm font-bold tracking-tight text-on-surface leading-none">
              Pedaserve
            </span>
            <span className="font-body-sm text-[12px] sm:text-[13px] text-on-surface-variant mt-1">
              Strategy, writing and SEO
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          <button
            onClick={(e) => handleLinkClick('home', e)}
            className={`font-label-button text-label-button transition-colors py-2 ${
              isActive('home') ? 'text-on-surface font-bold border-b-2 border-secondary-container' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Home
          </button>

          <button
            onClick={(e) => handleLinkClick('about-us', e)}
            className={`font-label-button text-label-button transition-colors py-2 ${
              isActive('about-us') ? 'text-on-surface font-bold border-b-2 border-secondary-container' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            About Us
          </button>

          {/* Services Mega Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={(e) => handleLinkClick('services', e)}
              className={`font-label-button text-label-button transition-colors flex items-center gap-1 ${
                isActive('services') ||
                currentPath.includes('writing') ||
                currentPath.includes('seo') ||
                currentPath.includes('training') ||
                currentPath.includes('agri') ||
                currentPath.includes('energy') ||
                currentPath.includes('blog-management') ||
                currentPath.includes('charity') ||
                currentPath.includes('scientific') ||
                currentPath.includes('creative') ||
                currentPath.includes('economics') ||
                currentPath.includes('finance')
                  ? 'text-on-surface font-bold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span>Services</span>
              <span
                className={`material-symbols-outlined text-[18px] text-on-surface-variant transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>

            {/* Dropdown Menu Container: 3-Column Enterprise Board */}
            <div
              className={`absolute top-full -left-20 w-[840px] pt-2 transition-all duration-200 z-50 ${
                servicesDropdownOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 translate-y-2 pointer-events-none'
              }`}
            >
              <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.15)] border border-outline-variant/30 grid grid-cols-3 gap-5">
                {/* Column 1: Editorial & Creative */}
                <div className="flex flex-col gap-1">
                  <span className="font-label-caps text-[11px] text-secondary font-bold uppercase tracking-wider px-2 py-1">
                    Editorial &amp; Creative
                  </span>

                  <button
                    onClick={(e) => handleLinkClick('the-writing-hub', e)}
                    className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-surface-container-low transition-colors text-left"
                  >
                    <div className="p-1 rounded bg-surface-container text-primary-container mt-0.5 shrink-0">
                      <span className="material-symbols-outlined text-[15px]">edit_note</span>
                    </div>
                    <div>
                      <div className="font-label-button text-[13px] font-semibold text-on-surface">The Writing Hub</div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant">Biographies, memoirs &amp; monographs</div>
                    </div>
                  </button>

                  <button
                    onClick={(e) => handleLinkClick('blog-management', e)}
                    className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-surface-container-low transition-colors text-left"
                  >
                    <div className="p-1 rounded bg-surface-container text-primary-container mt-0.5 shrink-0">
                      <span className="material-symbols-outlined text-[15px]">post_add</span>
                    </div>
                    <div>
                      <div className="font-label-button text-[13px] font-semibold text-on-surface">Blog Management</div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant">Daily editorial &amp; content ops</div>
                    </div>
                  </button>

                  <button
                    onClick={(e) => handleLinkClick('creative-direction', e)}
                    className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-surface-container-low transition-colors text-left"
                  >
                    <div className="p-1 rounded bg-surface-container text-primary-container mt-0.5 shrink-0">
                      <span className="material-symbols-outlined text-[15px]">palette</span>
                    </div>
                    <div>
                      <div className="font-label-button text-[13px] font-semibold text-on-surface">Creative Direction</div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant">Brand storytelling &amp; documentaries</div>
                    </div>
                  </button>

                  <button
                    onClick={(e) => handleLinkClick('website-design-and-branding', e)}
                    className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-surface-container-low transition-colors text-left"
                  >
                    <div className="p-1 rounded bg-surface-container text-primary-container mt-0.5 shrink-0">
                      <span className="material-symbols-outlined text-[15px]">devices</span>
                    </div>
                    <div>
                      <div className="font-label-button text-[13px] font-semibold text-on-surface">Web &amp; Identity</div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant">Corporate web portals &amp; branding</div>
                    </div>
                  </button>
                </div>

                {/* Column 2: Strategy, Capital & Economics */}
                <div className="flex flex-col gap-1">
                  <span className="font-label-caps text-[11px] text-secondary font-bold uppercase tracking-wider px-2 py-1">
                    Strategy &amp; Growth
                  </span>

                  <button
                    onClick={(e) => handleLinkClick('seo-and-digital-marketing', e)}
                    className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-surface-container-low transition-colors text-left"
                  >
                    <div className="p-1 rounded bg-surface-container text-primary-container mt-0.5 shrink-0">
                      <span className="material-symbols-outlined text-[15px]">query_stats</span>
                    </div>
                    <div>
                      <div className="font-label-button text-[13px] font-semibold text-on-surface">SEO &amp; Growth</div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant">Programmatic search architecture</div>
                    </div>
                  </button>

                  <button
                    onClick={(e) => handleLinkClick('economics-and-policy', e)}
                    className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-surface-container-low transition-colors text-left"
                  >
                    <div className="p-1 rounded bg-surface-container text-primary-container mt-0.5 shrink-0">
                      <span className="material-symbols-outlined text-[15px]">analytics</span>
                    </div>
                    <div>
                      <div className="font-label-button text-[13px] font-semibold text-on-surface">Economics &amp; Policy</div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant">Macro intelligence &amp; trade memos</div>
                    </div>
                  </button>

                  <button
                    onClick={(e) => handleLinkClick('strategy-business-development', e)}
                    className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-surface-container-low transition-colors text-left"
                  >
                    <div className="p-1 rounded bg-surface-container text-primary-container mt-0.5 shrink-0">
                      <span className="material-symbols-outlined text-[15px]">hub</span>
                    </div>
                    <div>
                      <div className="font-label-button text-[13px] font-semibold text-on-surface">Corporate Strategy</div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant">Market entry &amp; pipeline growth</div>
                    </div>
                  </button>
                </div>

                {/* Column 3: People, Science & Industry */}
                <div className="flex flex-col gap-1">
                  <span className="font-label-caps text-[11px] text-secondary font-bold uppercase tracking-wider px-2 py-1">
                    Industry, People &amp; Impact
                  </span>

                  <button
                    onClick={(e) => handleLinkClick('training-and-leadership', e)}
                    className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-surface-container-low transition-colors text-left"
                  >
                    <div className="p-1 rounded bg-surface-container text-primary-container mt-0.5 shrink-0">
                      <span className="material-symbols-outlined text-[15px]">school</span>
                    </div>
                    <div>
                      <div className="font-label-button text-[13px] font-semibold text-on-surface">Training &amp; Leadership</div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant">Workforce LMS &amp; mentoring</div>
                    </div>
                  </button>

                  <button
                    onClick={(e) => handleLinkClick('charity-and-foundation', e)}
                    className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-surface-container-low transition-colors text-left"
                  >
                    <div className="p-1 rounded bg-surface-container text-primary-container mt-0.5 shrink-0">
                      <span className="material-symbols-outlined text-[15px]">volunteer_activism</span>
                    </div>
                    <div>
                      <div className="font-label-button text-[13px] font-semibold text-on-surface">Charity</div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant">Charity partnerships &amp; grants</div>
                    </div>
                  </button>

                  <button
                    onClick={(e) => handleLinkClick('scientific-documentation', e)}
                    className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-surface-container-low transition-colors text-left"
                  >
                    <div className="p-1 rounded bg-surface-container text-primary-container mt-0.5 shrink-0">
                      <span className="material-symbols-outlined text-[15px]">biotech</span>
                    </div>
                    <div>
                      <div className="font-label-button text-[13px] font-semibold text-on-surface">Scientific Research</div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant">Peer review, EIA &amp; patents</div>
                    </div>
                  </button>
                </div>

                {/* Bottom Bar: Catalog Link */}
                <div className="col-span-3 pt-3 border-t border-surface-container-high flex items-center justify-between">
                  <span className="font-body-sm text-[12px] text-on-surface-variant font-medium">
                    14 Specialized Enterprise Practice Areas
                  </span>
                  <button
                    onClick={(e) => handleLinkClick('services', e)}
                    className="font-label-button text-[13px] text-secondary font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Browse Full Practice Catalog</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => handleLinkClick('daily-insights-and-blog', e)}
            className={`font-label-button text-label-button transition-colors py-2 flex items-center gap-2 ${
              isActive('daily-insights-and-blog') || isActive('blog-daily-insights')
                ? 'text-on-surface font-bold border-b-2 border-secondary-container'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span>Daily Insights &amp; Blog</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
          </button>

          <button
            onClick={(e) => handleLinkClick('contact-us', e)}
            className={`font-label-button text-label-button transition-colors py-2 ${
              isActive('contact-us') ? 'text-on-surface font-bold border-b-2 border-secondary-container' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* Action Buttons Right */}
        <div className="flex items-center gap-space-md">
          <button
            onClick={(e) => handleLinkClick('contact-us', e)}
            className="hidden sm:inline-flex items-center justify-center h-11 px-6 rounded-lg bg-secondary-container hover:bg-secondary text-primary font-label-button text-label-button font-bold shadow-sm hover:shadow transition-all duration-200"
          >
            Get Started
          </button>

          <button
            onClick={(e) => handleLinkClick('about-us', e)}
            className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 hover:bg-primary-container transition-colors"
            title="Executive Directory & Partners"
            aria-label="Executive Directory"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="lg:hidden text-on-surface p-2 focus:outline-none rounded-lg hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-surface-container-high px-6 py-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2 border-b border-surface-container-high pb-4">
            <button
              onClick={(e) => handleLinkClick('home', e)}
              className={`text-left py-2 font-headline-sm text-[17px] font-bold ${
                isActive('home') ? 'text-secondary' : 'text-on-surface'
              }`}
            >
              Home
            </button>
            <button
              onClick={(e) => handleLinkClick('about-us', e)}
              className={`text-left py-2 font-headline-sm text-[17px] font-bold ${
                isActive('about-us') ? 'text-secondary' : 'text-on-surface'
              }`}
            >
              About Us
            </button>
            <button
              onClick={(e) => handleLinkClick('services', e)}
              className={`text-left py-2 font-headline-sm text-[17px] font-bold ${
                isActive('services') ? 'text-secondary' : 'text-on-surface'
              }`}
            >
              All Practice Areas
            </button>
            <div className="pl-2 grid grid-cols-1 gap-1.5 py-1 text-on-surface-variant font-body-sm text-[13px]">
              <button
                onClick={(e) => handleLinkClick('the-writing-hub', e)}
                className="text-left py-1 px-2 rounded hover:bg-surface-container flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[15px] text-secondary">edit_note</span>
                <span>The Writing Hub</span>
              </button>
              <button
                onClick={(e) => handleLinkClick('blog-management', e)}
                className="text-left py-1 px-2 rounded hover:bg-surface-container flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[15px] text-secondary">post_add</span>
                <span>Blog Management</span>
              </button>
              <button
                onClick={(e) => handleLinkClick('creative-direction', e)}
                className="text-left py-1 px-2 rounded hover:bg-surface-container flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[15px] text-secondary">palette</span>
                <span>Creative Direction</span>
              </button>
              <button
                onClick={(e) => handleLinkClick('seo-and-digital-marketing', e)}
                className="text-left py-1 px-2 rounded hover:bg-surface-container flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[15px] text-secondary">query_stats</span>
                <span>SEO &amp; Digital Marketing</span>
              </button>
              <button
                onClick={(e) => handleLinkClick('economics-and-policy', e)}
                className="text-left py-1 px-2 rounded hover:bg-surface-container flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[15px] text-secondary">analytics</span>
                <span>Economics &amp; Policy</span>
              </button>
              <button
                onClick={(e) => handleLinkClick('charity-and-foundation', e)}
                className="text-left py-1 px-2 rounded hover:bg-surface-container flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[15px] text-secondary">volunteer_activism</span>
                <span>Charity</span>
              </button>
              <button
                onClick={(e) => handleLinkClick('scientific-documentation', e)}
                className="text-left py-1 px-2 rounded hover:bg-surface-container flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[15px] text-secondary">biotech</span>
                <span>Scientific Documentation</span>
              </button>
              <button
                onClick={(e) => handleLinkClick('training-and-leadership', e)}
                className="text-left py-1 px-2 rounded hover:bg-surface-container flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[15px] text-secondary">groups</span>
                <span>Training &amp; Leadership</span>
              </button>
            </div>
            <button
              onClick={(e) => handleLinkClick('daily-insights-and-blog', e)}
              className={`text-left py-2 font-headline-sm text-[17px] font-bold flex items-center justify-between ${
                isActive('daily-insights-and-blog') ? 'text-secondary' : 'text-on-surface'
              }`}
            >
              <span>Daily Insights &amp; Blog</span>
              <span className="px-2 py-0.5 rounded bg-secondary-container text-primary font-label-caps text-[10px] uppercase font-bold">
                Daily 7 AM
              </span>
            </button>
            <button
              onClick={(e) => handleLinkClick('contact-us', e)}
              className={`text-left py-2 font-headline-sm text-[17px] font-bold ${
                isActive('contact-us') ? 'text-secondary' : 'text-on-surface'
              }`}
            >
              Contact Us &amp; Consultations
            </button>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={(e) => handleLinkClick('contact-us', e)}
              className="w-full h-12 rounded-lg bg-secondary-container hover:bg-secondary text-primary font-label-button text-[16px] font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Talk to us</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <div className="flex flex-col gap-2 text-[13px] text-on-surface-variant font-body-sm pt-2 border-t border-surface-container-high">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:info@pedaserve.com" className="font-bold text-on-surface hover:text-amber-600">info@pedaserve.com</a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-xs">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-on-surface font-medium leading-relaxed">
                  {COMPANY.addressOneLine}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
