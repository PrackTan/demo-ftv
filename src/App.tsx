import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  ArrowUpRight,
  Building2,
  Globe2,
  Package,
  Search,
  TestTube,
  TrendingUp,
  Shield,
  Zap,
  Users,
  CheckCircle2,
  MapPin,
  Factory,
  Truck,
  Award,
  Container,
  Target,
  Star,
  Sparkles,
} from 'lucide-react';

// SukiGroup Color Palette
// Primary: Slate Gray #475569
// Secondary: Steel Blue #5b7a9d
// Accent: Coral Red #dc4e5a
// Supporting: Sage Green #7a9e84

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-900 shadow-2xl' : 'bg-slate-900/90 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-blue-500 blur-lg opacity-50"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-slate-600 to-blue-700 rounded-lg flex items-center justify-center transform rotate-12">
                  <Building2 className="w-7 h-7 text-white transform -rotate-12" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-black text-white tracking-tight">FTV Asia</h1>
                <p className="text-xs text-blue-300 font-medium">Suki Group Company</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {['About', 'Services', 'Solutions', 'Network', 'Operations', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-semibold transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative overflow-hidden bg-gradient-to-r from-slate-600 to-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              {['About', 'Services', 'Solutions', 'Network', 'Operations', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-blue-400 rounded-lg transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-red-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-500/20 to-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-bold text-blue-400">70+ Years of Excellence</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-black text-white leading-none">
                  Asian Supply
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-blue-400 to-red-500">
                    Chain Gateway
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Connecting Asian manufacturing excellence to European markets through integrated sourcing, packaging, and logistics solutions backed by Suki Group heritage.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group relative overflow-hidden bg-gradient-to-r from-slate-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Start Partnership</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-blue-400/50 text-blue-400 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-400/10 transition-all duration-300"
                >
                  Explore More
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent rounded-2xl blur group-hover:blur-xl transition-all"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-400 to-blue-400">70+</div>
                    <div className="text-xs text-gray-400 font-medium mt-1">Years Heritage</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl blur group-hover:blur-xl transition-all"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-slate-400">5K m²</div>
                    <div className="text-xs text-gray-400 font-medium mt-1">Facility Size</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl blur group-hover:blur-xl transition-all"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-red-400">30+</div>
                    <div className="text-xs text-gray-400 font-medium mt-1">Containers/Mo</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-slate-600 to-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="relative space-y-6">
                <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Globe2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white mb-2">Global Network</div>
                      <div className="text-sm text-gray-400">Asia-Europe supply chain integration</div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 translate-x-12">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white mb-2">ISO Certified</div>
                      <div className="text-sm text-gray-400">BSCI & CBAM compliant quality</div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white mb-2">Fast Logistics</div>
                      <div className="text-sm text-gray-400">X-Dock & Fast Track models</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section id="about" className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-100 to-blue-100 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-bold text-slate-900">The FTV Asia Advantage</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Suki Group Excellence
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-red-600">
                in Asian Markets
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic Asian subsidiary bringing 70+ years of European excellence to retail logistics, product solutions, and supply chain management
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Package,
                title: 'Retail Logistics',
                desc: 'Comprehensive logistics optimized for European retail supply chains',
                color: 'from-slate-500 to-blue-600',
              },
              {
                icon: Target,
                title: 'Product Solutions',
                desc: 'Innovative sourcing and customization tailored to market demands',
                color: 'from-red-500 to-rose-600',
              },
              {
                icon: TrendingUp,
                title: 'Supply Chain',
                desc: 'End-to-end orchestration with transparency and reliability',
                color: 'from-blue-500 to-slate-600',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all"></div>
                <div className={`relative w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-black text-white mb-8">Strategic Asian Presence</h3>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: 'Hong Kong HQ', desc: 'Strategic hub connecting East and West', color: 'teal' },
                    { icon: Search, title: 'Shanghai Sourcing', desc: 'Market intelligence for fasteners, tools, adhesives', color: 'orange' },
                    { icon: Factory, title: 'Packing Centers', desc: 'Jiaxing 5,000m² & Ho Chi Minh 30 containers/mo', color: 'cyan' },
                  ].map((loc, idx) => (
                    <div key={idx} className="flex items-start space-x-4 group">
                      <div className={`w-12 h-12 bg-${loc.color}-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <loc.icon className={`w-6 h-6 text-${loc.color}-400`} />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white mb-1">{loc.title}</div>
                        <p className="text-gray-400 text-sm">{loc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: 'ISO Certified', color: 'teal' },
                  { icon: Shield, label: 'BSCI', color: 'orange' },
                  { icon: Globe2, label: 'Pan-European', color: 'cyan' },
                  { icon: TrendingUp, label: 'Financial Stability', color: 'teal' },
                ].map((cert, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all group">
                    <cert.icon className={`w-10 h-10 text-${cert.color}-400 mb-4 group-hover:scale-110 transition-transform`} />
                    <div className="text-lg font-bold text-white">{cert.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-100 to-slate-100 px-4 py-2 rounded-full mb-6">
              <Container className="w-4 h-4 text-red-600" />
              <span className="text-sm font-bold text-red-900">Our Services</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Integrated Asian
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-teal-600">
                Expertise
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                icon: Search,
                title: 'Strategic Sourcing & Procurement',
                desc: 'Access audited, socially compliant manufacturers',
                items: [
                  'Audited manufacturers in China & Vietnam',
                  'Shanghai market intelligence teams',
                  'MOQ flexibility through consolidation',
                ],
                gradient: 'from-slate-500 to-blue-600',
              },
              {
                icon: Package,
                title: 'Flexible Packaging & VAS',
                desc: 'Custom packaging with low MOQs',
                items: [
                  'Polybags, PET blisters, eco-friendly materials',
                  'Private labeling with low MOQs',
                  'Semi-automated packing lines',
                ],
                gradient: 'from-red-500 to-rose-600',
              },
              {
                icon: Truck,
                title: 'Global Supply Chain Management',
                desc: 'Optimized Asia-to-Europe logistics',
                items: [
                  'FOB services & consolidation',
                  'Freight optimization strategies',
                  'X-Dock & Fast Track models',
                ],
                gradient: 'from-blue-500 to-slate-600',
              },
              {
                icon: TestTube,
                title: 'Quality Assurance Coordination',
                desc: 'Comprehensive testing and inspections',
                items: [
                  'Lab testing: Rockwell, drilling, CBAM',
                  '4-stage inspections process',
                  'Full source-to-shelf traceability',
                ],
                gradient: 'from-purple-500 to-pink-600',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl"></div>
                <div className="relative p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-bold text-blue-400">Solutions</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Problems We Solve
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Turning supply chain challenges into competitive advantages
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {[
              {
                problem: 'High MOQs for Niche Items',
                solution: 'We consolidate across suppliers to make small-volume sourcing viable',
              },
              {
                problem: 'Lack of Local Market Insight',
                solution: 'Shanghai sourcing teams provide category-specific intelligence',
              },
              {
                problem: 'Inflexible Packaging Options',
                solution: 'Low-MOQ packaging, eco materials, private labeling, semi-automation',
              },
              {
                problem: 'Complex Asia-Europe Logistics',
                solution: 'FOB, consolidation, X-Dock, Fast Track = simplified + faster',
              },
              {
                problem: 'Quality Assurance Gaps',
                solution: 'Lab testing + 4-stage inspections + source-to-shelf traceability',
              },
              {
                problem: 'Fragmented Supplier Management',
                solution: 'We coordinate suppliers, production, and logistics under one partner',
              },
            ].map((item, idx) => (
              <div key={idx} className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white mb-1">{item.problem}</div>
                    <p className="text-gray-400 text-sm">Traditional challenge</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-green-500/10 rounded-2xl p-4 border border-green-500/20">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-green-200 font-medium">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="network" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-100 to-blue-100 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-bold text-slate-900">Suki Group Synergies</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Powered by
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-red-600">
                Suki Group Excellence
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: Globe2, title: 'Pan-European Integration', desc: 'Distribution hubs across Europe', gradient: 'from-slate-500 to-blue-600' },
              { icon: Users, title: 'Shared Supplier Ecosystem', desc: 'Audited, compliant suppliers', gradient: 'from-red-500 to-rose-600' },
              { icon: Factory, title: 'Regional Strength', desc: 'Facilities in China & Vietnam', gradient: 'from-blue-500 to-slate-600' },
              { icon: Truck, title: 'Logistics Optimization', desc: 'Consolidation + hybrid models', gradient: 'from-purple-500 to-pink-600' },
              { icon: Award, title: 'Proven Reliability', desc: '70+ years of excellence', gradient: 'from-slate-600 to-red-600' },
            ].map((synergy, idx) => (
              <div
                key={idx}
                className={`group relative bg-gradient-to-br ${synergy.gradient} rounded-3xl p-8 text-white hover:scale-105 transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative">
                  <synergy.icon className="w-12 h-12 mb-6 opacity-90 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-black mb-3">{synergy.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{synergy.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="operations" className="py-32 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Europe & Asia
              <br />
              Operations
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-[#0d1d35] border-2 border-slate-700/50 rounded-3xl p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Globe2 className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-black text-white tracking-wide">EUROPE</h3>
                      <p className="text-2xl text-gray-300 font-light">Operations</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'Sourcing & Procurement',
                      'Logistics & Distribution',
                      'Sales & Marketing',
                      'Legal & Sustainability',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-xl text-white font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 mx-auto">
                      <img
                        src="/3.png"
                        alt="Team member"
                        className="w-36 h-36 object-cover"
                      />
                    </div>
                    <div>
                      <img
                        src="/4.png"
                        alt="Team member"
                        className="w-32 h-32 object-cover"
                      />
                    </div>
                    <div>
                      <img
                        src="/5.png"
                        alt="Team member"
                        className="w-32 h-32 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1d35] border-2 border-slate-700/50 rounded-3xl p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-black text-white tracking-wide">ASIA</h3>
                      <p className="text-2xl text-gray-300 font-light">Operations</p>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'Role',
                      'Regional Sourcing',
                      'Local Manufacturing',
                      'Market Expansion',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-xl text-white font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 mx-auto">
                      <img
                        src="/3.png"
                        alt="Team member"
                        className="w-36 h-36 object-cover"
                      />
                    </div>
                    <div>
                      <img
                        src="/4.png"
                        alt="Team member"
                        className="w-32 h-32 object-cover"
                      />
                    </div>
                    <div>
                      <img
                        src="/5.png"
                        alt="Team member"
                        className="w-32 h-32 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-teal-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
            Ready to Transform
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-red-500">
              Your Supply Chain?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with FTV Asia to unify your Asian sourcing under the Suki Group's legacy of excellence. Let's build smarter, faster, and more reliable supply chains together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <a
              href="mailto:contact@ftvasia.com"
              className="group relative overflow-hidden bg-gradient-to-r from-slate-600 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-3"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <button
              onClick={() => scrollToSection('about')}
              className="border-2 border-teal-400/50 text-blue-400 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-teal-400/10 transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: 'Headquarters', desc: 'Hong Kong', color: 'teal' },
              { icon: Building2, title: 'Facilities', desc: 'China & Vietnam', color: 'orange' },
              { icon: Globe2, title: 'Network', desc: 'Asia to Europe', color: 'cyan' },
            ].map((loc, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <div className={`w-14 h-14 bg-${loc.color}-500/20 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <loc.icon className={`w-7 h-7 text-${loc.color}-400`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{loc.title}</h3>
                <p className="text-gray-400">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-gray-400 py-16 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-red-500 blur-lg opacity-50"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-br from-teal-500 to-orange-600 rounded-lg flex items-center justify-center transform rotate-12">
                    <Building2 className="w-6 h-6 text-white transform -rotate-12" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-black text-lg">FTV Asia</h3>
                  <p className="text-xs text-blue-400">Suki Group Company</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Your trusted gateway to integrated Asian supply chain solutions.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Strategic Sourcing</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Packaging Solutions</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Supply Chain Management</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Quality Assurance</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Locations</h4>
              <ul className="space-y-2 text-sm">
                <li>Hong Kong (HQ)</li>
                <li>Shanghai, China</li>
                <li>Jiaxing, China</li>
                <li>Ho Chi Minh City, Vietnam</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Certifications</h4>
              <ul className="space-y-2 text-sm">
                <li>ISO Certified</li>
                <li>BSCI Compliant</li>
                <li>BEPI Standards</li>
                <li>CBAM Compliant</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 FTV Asia. All rights reserved.</p>
            <p className="mt-4 md:mt-0 text-blue-400 font-semibold">Part of the Suki Group - 70+ Years of Excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
