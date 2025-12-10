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
          scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="relative w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900 tracking-tight">FTV Asia</h1>
                <p className="text-xs text-gray-600 font-medium">Suki Group Company</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {['About', 'Services', 'Solutions', 'Network', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-semibold transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </div>

            <button
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {['About', 'Services', 'Solutions', 'Network', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-white overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 px-4 py-2 rounded-full shadow-sm">
                <Sparkles className="w-4 h-4 text-green-600" />
                <span className="text-sm font-bold text-green-800">70+ Years of Excellence</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-none">
                  Asian Supply
                  <br />
                  <span className="text-gray-600">
                    Chain Gateway
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Connecting Asian manufacturing excellence to European markets through integrated sourcing, packaging, and logistics solutions backed by Suki Group heritage.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Start Partnership</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-green-500 text-green-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-50 transition-all duration-300"
                >
                  Explore More
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="relative group">
                  <div className="relative bg-white border border-gray-200 shadow-sm rounded-2xl p-4 hover:shadow-md transition-all">
                    <div className="text-4xl font-black text-gray-900">70+</div>
                    <div className="text-xs text-gray-500 font-medium mt-1">Years Heritage</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="relative bg-white border border-gray-200 shadow-sm rounded-2xl p-4 hover:shadow-md transition-all">
                    <div className="text-4xl font-black text-gray-900">5K m²</div>
                    <div className="text-xs text-gray-500 font-medium mt-1">Facility Size</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="relative bg-white border border-gray-200 shadow-sm rounded-2xl p-4 hover:shadow-md transition-all">
                    <div className="text-4xl font-black text-gray-900">30+</div>
                    <div className="text-xs text-gray-500 font-medium mt-1">Containers/Mo</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>

                <div className="relative grid grid-cols-2 gap-6">
                  {[
                    { icon: Users, color: 'from-green-500 to-emerald-600', position: 'col-start-1' },
                    { icon: Globe2, color: 'from-blue-500 to-sky-600', position: 'col-start-2' },
                    { icon: Package, color: 'from-orange-500 to-red-600', position: 'col-start-1' },
                    { icon: Factory, color: 'from-green-600 to-teal-700', position: 'col-start-2' },
                    { icon: Truck, color: 'from-blue-600 to-indigo-700', position: 'col-start-1' },
                    { icon: Award, color: 'from-orange-600 to-amber-700', position: 'col-start-2' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`${item.position} transform hover:scale-110 transition-all duration-300`}
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    >
                      <div className={`w-32 h-32 bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl`}>
                        <item.icon className="w-14 h-14 text-white" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 shadow-xl rounded-2xl px-6 py-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-white"
                        />
                      ))}
                    </div>
                    <div className="text-sm">
                      <div className="font-bold text-gray-900">50+ Team</div>
                      <div className="text-xs text-gray-500">Across Asia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg mb-6">
              <Star className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-500">The FTV Asia Advantage</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Suki Group Excellence
              <br />
              in Asian Markets
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Strategic Asian subsidiary bringing 70+ years of excellence to retail logistics, product solutions, and supply chain management
            </p>
          </div>

          <div className="mb-24">
            <h3 className="text-4xl lg:text-5xl font-black text-white mb-12">Europe & Asia Operations</h3>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Globe2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-white mb-2">EUROPE</h4>
                    <p className="text-lg text-gray-400">Operations</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    'Sourcing & Procurement',
                    'Logistics & Distribution',
                    'Sales & Marketing',
                    'Legal & Sustainability'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-white">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-white mb-2">ASIA</h4>
                    <p className="text-lg text-gray-400">Operations</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    'Role',
                    'Regional Sourcing',
                    'Local Manufacturing',
                    'Market Expansion'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-white">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Globe2,
                  title: 'Global Network',
                  desc: 'Asia-Europe supply chain integration',
                  color: 'from-gray-700 to-gray-800'
                },
                {
                  icon: Shield,
                  title: 'ISO Certified',
                  desc: 'BSCI & CBAM compliant quality',
                  color: 'from-gray-700 to-gray-800'
                },
                {
                  icon: Zap,
                  title: 'Fast Logistics',
                  desc: 'X-Dock & Fast Track models',
                  color: 'from-gray-700 to-gray-800'
                }
              ].map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${item.color} border border-gray-600 rounded-2xl p-8 hover:border-gray-500 transition-all`}>
                  <div className="w-14 h-14 bg-gray-600 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-black text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-blue-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                flag: '🇨🇳',
                title: 'Asia Sourcing & Buying Office',
                location: 'Shanghai, China (Founded Sep 2019)',
                desc: 'Sourcing, Purchasing và Quản lý Nhà cung ứng cho khu vực Châu Á. Hỗ trợ phát triển sản phẩm và xử lý tất cả Hoàn thuế xuất xưỡm.',
                bgColor: 'from-green-50 to-emerald-50',
                iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600'
              },
              {
                flag: '🇨🇳',
                title: 'China Packing Factory',
                location: 'Kunshan City, Jiaxing (8,000 m²)',
                desc: 'Nhà máy đóng gói 60+ chuyên cho Hardware and Fasteners. Vận hành Vận hành wich chuẩn ISO 9001, BSCI để đảm bảo chương hạo.',
                bgColor: 'from-orange-50 to-red-50',
                iconBg: 'bg-gradient-to-br from-orange-500 to-red-600'
              },
              {
                flag: '🇻🇳',
                title: 'Vietnam Packing Factory',
                location: 'Ho Minh City (3,000 m²)',
                desc: 'Nhà máy tại KCN Bình Dương, chuyên sản xuất Screws, Bolts, Washers. Hiện khẳn khận với thông phá địa (anti ct- dumping duties).',
                bgColor: 'from-blue-50 to-sky-50',
                iconBg: 'bg-gradient-to-br from-blue-500 to-sky-600'
              },
            ].map((loc, idx) => (
              <div key={idx} className={`relative bg-gradient-to-br ${loc.bgColor} border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300`}>
                <div className={`w-16 h-16 ${loc.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg text-3xl`}>
                  {loc.flag}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight">{loc.title}</h3>
                <p className="text-sm font-semibold text-gray-700 mb-4">{loc.location}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 px-4 py-2 rounded-full mb-6 shadow-sm">
              <Container className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold text-blue-800">Our Services</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Integrated Asian
              <br />
              <span className="text-gray-600">
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
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-gray-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200"
              >
                <div className="relative p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-all`}>
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
                        <CheckCircle2 className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
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

      <section id="solutions" className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 px-4 py-2 rounded-full mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-bold text-green-800">Solutions</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Problems We Solve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <div key={idx} className="group bg-white border border-gray-200 shadow-md rounded-3xl p-8 hover:shadow-xl transition-all">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <X className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900 mb-1">{item.problem}</div>
                    <p className="text-gray-500 text-sm">Traditional challenge</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-gray-100 rounded-2xl p-4 border border-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800 font-medium">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="network" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 px-4 py-2 rounded-full mb-6 shadow-sm">
              <Award className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-bold text-orange-800">Suki Group Synergies</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Powered by
              <br />
              <span className="text-gray-600">
                Suki Group Excellence
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: Globe2, title: 'Pan-European Integration', desc: 'Distribution hubs across Europe' },
              { icon: Users, title: 'Shared Supplier Ecosystem', desc: 'Audited, compliant suppliers' },
              { icon: Factory, title: 'Regional Strength', desc: 'Facilities in China & Vietnam' },
              { icon: Truck, title: 'Logistics Optimization', desc: 'Consolidation + hybrid models' },
              { icon: Award, title: 'Proven Reliability', desc: '70+ years of excellence' },
            ].map((synergy, idx) => (
              <div
                key={idx}
                className={`group relative bg-gray-800 rounded-3xl p-8 text-white hover:scale-105 transition-all duration-300 overflow-hidden shadow-lg`}
              >
                <div className="relative">
                  <synergy.icon className="w-12 h-12 mb-6 opacity-90 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-black mb-3">{synergy.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{synergy.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">
            Ready to Transform
            <br />
            <span className="text-gray-600">
              Your Supply Chain?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with FTV Asia to unify your Asian sourcing under the Suki Group's legacy of excellence. Let's build smarter, faster, and more reliable supply chains together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <a
              href="mailto:contact@ftvasia.com"
              className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-3"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <button
              onClick={() => scrollToSection('about')}
              className="border-2 border-green-500 text-green-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-green-50 transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: 'Headquarters', desc: 'Hong Kong' },
              { icon: Building2, title: 'Facilities', desc: 'China & Vietnam' },
              { icon: Globe2, title: 'Network', desc: 'Asia to Europe' },
            ].map((loc, idx) => (
              <div key={idx} className="bg-white border border-gray-200 shadow-md rounded-2xl p-6">
                <div className={`w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <loc.icon className={`w-7 h-7 text-gray-700`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{loc.title}</h3>
                <p className="text-gray-600">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-300 py-16 px-4 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="relative w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-black text-lg">FTV Asia</h3>
                  <p className="text-xs text-gray-400">Suki Group Company</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Your trusted gateway to integrated Asian supply chain solutions.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Strategic Sourcing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Packaging Solutions</li>
                <li className="hover:text-white transition-colors cursor-pointer">Supply Chain Management</li>
                <li className="hover:text-white transition-colors cursor-pointer">Quality Assurance</li>
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

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 FTV Asia. All rights reserved.</p>
            <p className="mt-4 md:mt-0 text-gray-400 font-semibold">Part of the Suki Group - 70+ Years of Excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
