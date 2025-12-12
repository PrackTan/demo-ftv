import { Globe2, MapPin } from 'lucide-react';

export function OperationsCards() {
  return (
    <div className="grid md:grid-cols-2 gap-5 mt-8">
      <div className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
            <Globe2 className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">EUROPE</h3>
            <p className="text-xs text-teal-600 font-medium mt-1">Operations Division</p>
          </div>
        </div>
        <ul className="space-y-2.5">
          {[
            'Sourcing & Procurement',
            'Logistics & Distribution',
            'Sales & Marketing',
            'Legal & Sustainability',
          ].map((item, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm text-gray-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-sky-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
            <MapPin className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">ASIA</h3>
            <p className="text-xs text-blue-600 font-medium mt-1">Operations Division</p>
          </div>
        </div>
        <ul className="space-y-2.5">
          {[
            'Role',
            'Regional Sourcing',
            'Local Manufacturing',
            'Market Expansion',
          ].map((item, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm text-gray-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
