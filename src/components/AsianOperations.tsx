import { useEffect, useRef, useState } from 'react';
import { Factory, MapPin, ShoppingBag, Star } from 'lucide-react';

interface OperationCard {
  id: string;
  icon: string;
  title: string;
  location: string;
  area: string;
  description: string;
  gradient: string;
  iconBg: string;
}

export function AsianOperations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const operations: OperationCard[] = [
    {
      id: 'cn',
      icon: '🇨🇳',
      title: 'Asia Sourcing & Buying Office',
      location: 'Shanghai, China',
      area: '(Founded Sep 2019)',
      description:
        'Founded in September 2019 and situated in the heart of Shanghai, specialises in sourcing and purchasing in Asia regions for sukigroup.',
      gradient: 'from-green-500 to-emerald-600',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
    },
    {
      id: 'factory',
      icon: 'factory',
      title: 'China Packing Factory',
      location: 'Kunshan City, Jiausu',
      area: '(8,000 m²)',
      description:
        'Established in December 2018, IS located in Haiyan county, Jaing city (China), an area with over 2000 fasteners factories nearby and close to hardware factories in Jiangsu and Zhejiang provinces.',
      gradient: 'from-orange-500 to-red-600',
      iconBg: 'bg-gradient-to-br from-orange-500 to-red-600',
    },
    {
      id: 'vn',
      icon: '🇻🇳',
      title: 'Vietnam Packing Factory',
      location: 'Ho Minh City',
      area: '(3,000 m²)',
      description:
        'Established in November 2011, is located in Bin Duang industrial zone, Ho chi Minh City (Vietnam), close to the main key local manufacturers of screws, bolts and washers.',
      gradient: 'from-teal-500 to-cyan-600',
      iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-teal-200/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-orange-200/20 to-transparent rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 px-4 py-2 rounded-full mb-6 shadow-sm border border-teal-200/50">
            <Star className="w-4 h-4 text-teal-600 animate-spin-slow" />
            <span className="text-sm font-bold text-slate-900">The FTV Asia Advantage</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
            Suki Group Excellence
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-red-600 to-rose-600">
              in Asian Markets
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Strategic Asian subsidiary bringing 70+ years of European excellence to retail
            logistics, product solutions, and supply chain management
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {operations.map((operation, index) => (
            <div
              key={operation.id}
              className={`operations-card group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative p-8">
                <div className="flex flex-col items-center text-center mb-6">
                  <div
                    className={`w-20 h-20 ${operation.iconBg} rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                  >
                    {operation.icon === 'factory' ? (
                      <Factory className="w-10 h-10 text-white" />
                    ) : (
                      <span className="text-4xl">{operation.icon}</span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-500">
                    {operation.title}
                  </h3>

                  <div className="space-y-1 mb-4">
                    <p className="text-base font-semibold text-gray-700 flex items-center justify-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>{operation.location}</span>
                    </p>
                    <p className="text-sm text-gray-500 font-medium">{operation.area}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-center">
                  {operation.description}
                </p>

                <div className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r ${operation.gradient} rounded-full mx-auto`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
