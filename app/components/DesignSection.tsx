import React from 'react';
import Link from 'next/link';
import { ArrowRight, Activity, Map } from 'lucide-react';

// 定义项目数据的类型结构
interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  color: string;
  slug: string;           // 用于生成详情页 URL，例如 /work/simple-diabetic-life
  imageSrc?: string;      // 可选属性：真实图片的路径 (放在 public 文件夹)
  imagePlaceholder: string; // 暂时显示的文字描述
}

const projects: Project[] = [
  {
    id: 2,
    title: "Simple Diabetic Life",
    subtitle: "Product Service System | 2016",
    description: "A digital management system designed for Type 2 diabetes. It bridges the information gap between doctors and patients through data visualization, providing a productive tool for professionals and an easy control method for patients.",
    tags: ["Service Blueprint", "Data Visualization", "Doctor-Patient", "Health Tech"],
    icon: <Activity className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-50/50", 
    slug: "simple-diabetic-life",
    // 待你上传图片后，取消下面这行的注释并填入正确路径
    imageSrc: "/images/diabetic-ui.jpg", 
    imagePlaceholder: "Suggested: UI Mockups perspective view (PDF p.27)"
  },
  {
    id: 3,
    title: "Service Design in Chinese Community",
    subtitle: "Ethnographic Study & Research| 2019",
    description: "An ethnographic study conducted in Fengle Community, Anhui. It explores the emerging relationships among the government, service providers, and local residents to optimize the multi-participation mechanism in public services.",
    tags: ["Ethnography", "Stakeholder Map", "Social Impact", "Research"],
    icon: <Map className="w-8 h-8 text-orange-600" />,
    color: "bg-orange-50/50", 
    slug: "community-service-design",
    // 待你上传图片后，取消下面这行的注释并填入正确路径
    imageSrc: "/images/community-photo.jpg",
    imagePlaceholder: "Suggested: Field research photo (PDF p.33)"
  }
];

const DesignSection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white text-gray-900 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header: Design as Narrative */}
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-wide mb-4 text-gray-900">
              Design as Narrative
            </h2>
            <div className="h-1 w-20 bg-gray-900 mb-6"></div>
            <p className="text-gray-500 font-light text-lg leading-relaxed">
              It is not just about solving problems, but telling stories about systems, environments, and people.
              <br />
              Translating research data into plots, and building service flows into scripts.
            </p>
          </div>
          
          {/* Desktop View All Button */}
          <Link href="/work" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:opacity-60 transition-opacity mt-6 md:mt-0">
            View All Cases <ArrowRight size={16} />
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative flex flex-col md:flex-row gap-8 items-stretch border-b border-gray-100 pb-12 last:border-0 hover:bg-gray-50/30 transition-colors duration-500 rounded-xl p-4 -mx-4"
            >
              
              {/* Left: Visual Cover */}
              <div className={`w-full md:w-5/12 aspect-[4/3] ${project.color} rounded-lg overflow-hidden relative flex items-center justify-center group-hover:shadow-lg transition-all duration-500`}>
                
                {/* 图片逻辑：如果有 imageSrc 就显示图片，否则显示占位符 */}
                {project.imageSrc ? (
                  <img 
                    src={project.imageSrc} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="text-center p-6">
                    <div className="mb-4 flex justify-center opacity-80">{project.icon}</div>
                    <span className="text-xs text-gray-400 uppercase tracking-widest border border-gray-200 px-2 py-1 rounded">
                      Project Snapshot
                    </span>
                    <p className="text-xs text-gray-400 mt-2 opacity-60 px-4">
                      {project.imagePlaceholder}
                    </p>
                  </div>
                )}
                
                {/* Hover Overlay */}
                <Link href={`/work/${project.slug}`} className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300">
                  <span className="sr-only">Read more about {project.title}</span>
                </Link>
              </div>

              {/* Right: Narrative Content */}
              <div className="w-full md:w-7/12 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
                    {project.subtitle}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4 group-hover:text-black transition-colors">
                  <Link href={`/work/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 font-light leading-relaxed mb-6 w-full md:w-10/12">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-[10px] uppercase tracking-wider px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-auto">
                  <Link href={`/work/${project.slug}`}>
                    <button className="flex items-center gap-2 text-sm font-medium border-b border-gray-300 pb-1 hover:border-black transition-colors group-hover:translate-x-2 duration-300">
                      Read the Story <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden text-center">
           <Link href="/work" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest">
            View All Cases <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default DesignSection;