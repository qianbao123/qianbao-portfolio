import React from 'react';
import Link from 'next/link';
import { ArrowRight, Activity, Map } from 'lucide-react';

// 1. 定义接口
interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  color: string;
  slug: string;
  imageSrc?: string;
  imagePlaceholder: string;
}

// 2. 定义数据 (顺序已交换)
const projects: Project[] = [
  {
    id: 3,
    title: "Service Design in Chinese Community | 2019",
    subtitle: "Ethnographic Study & Research",
    description: "An ethnographic study conducted in Fengle Community, Anhui. It explores the emerging relationships among the government, service providers, and local residents.",
    tags: ["Ethnography", "Stakeholder Map", "Research"],
    icon: <Map className="w-8 h-8 text-red-600" />,
    color: "bg-gray-900", 
    slug: "community-service-design",
    imageSrc: "/images/community-photo.jpg",
    imagePlaceholder: "Suggested: Field photo (PDF p.33)"
  },
  {
    id: 2,
    title: "Simple Diabetic Life",
    subtitle: "Product Service System | 2015",
    description: "A digital management system designed for Type 2 diabetes. It bridges the information gap between doctors and patients through data visualization.",
    tags: ["Service Blueprint", "Data Viz", "Health Tech"],
    icon: <Activity className="w-8 h-8 text-red-600" />,
    color: "bg-gray-900", 
    slug: "simple-diabetic-life",
    imageSrc: "/images/diabetic-ui.jpg", 
    imagePlaceholder: "Suggested: UI Mockups (PDF p.27)"
  }
];

// 3. 定义组件
const DesignSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#050505] text-gray-200 border-t border-gray-900 relative z-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-wide mb-4 text-white">
              Design as Narrative
            </h2>
            <div className="h-1 w-20 bg-red-600 mb-6"></div>
            <p className="text-gray-500 font-light text-lg leading-relaxed">
              It is not just about solving problems, but telling stories about systems, environments, and people.
            </p>
          </div>
          
          <Link href="/work" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-white text-gray-500 transition-colors mt-6 md:mt-0">
            View All Cases <ArrowRight size={16} />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group relative flex flex-col md:flex-row gap-8 items-stretch border-b border-gray-900 pb-12 last:border-0 hover:bg-white/5 transition-colors duration-500 rounded-xl p-4 -mx-4">
              
              {/* Image Side */}
              <div className={`w-full md:w-5/12 aspect-[4/3] ${project.color} rounded-sm overflow-hidden relative flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-500`}>
                {project.imageSrc ? (
                  <img src={project.imageSrc} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                ) : (
                  <div className="text-center p-6">
                    <div className="mb-4 flex justify-center opacity-80">{project.icon}</div>
                    <p className="text-xs text-gray-500">{project.imagePlaceholder}</p>
                  </div>
                )}
                <Link href={`/work/${project.slug}`} className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"><span className="sr-only">View</span></Link>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-7/12 flex flex-col justify-center">
                <span className="text-xs font-bold tracking-[0.2em] text-red-600 uppercase mb-2">{project.subtitle}</span>
                <h3 className="text-2xl md:text-3xl font-serif text-gray-200 mb-4 group-hover:text-red-500 transition-colors">
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h3>
                <p className="text-gray-500 font-light leading-relaxed mb-6 w-full md:w-10/12">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider px-3 py-1 bg-gray-900 border border-gray-800 text-gray-400 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Link href={`/work/${project.slug}`}>
                    <button className="flex items-center gap-2 text-sm font-medium border-b border-gray-700 pb-1 text-gray-400 hover:text-white hover:border-red-600 transition-colors group-hover:translate-x-2 duration-300">
                      Read the Story <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignSection;