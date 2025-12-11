import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '@/app/lib/projectData'; 

// 1. 接口定义
interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 2. 静态参数生成 (解决 export 报错)
export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }));
}

// 3. 主页面组件
export default async function ProjectDetail({ params }: ProjectPageProps) {
  // 等待 params 解析 (Next.js 15 要求)
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return notFound();
  }

  return (
    <article className="min-h-screen bg-[#050505] text-gray-200 selection:bg-red-900 selection:text-white font-sans">
      
      {/* 1. 顶部导航 */}
      <nav className="fixed top-0 left-0 z-50 w-full p-8 flex justify-between items-center mix-blend-difference text-white">
        <Link href="/" className="group flex items-center gap-2 text-sm uppercase tracking-widest hover:text-red-500 transition-colors">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform"/>
          Back
        </Link>
        <div className="text-xs font-serif italic text-gray-400 hidden md:block">
          Qianbao Tu / Design Narrative
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="relative w-full h-[70vh] md:h-[85vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.heroImage} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-20">
          <span className="block text-red-600 text-xs font-bold tracking-[0.4em] uppercase mb-4 animate-fade-in">
            {project.subtitle}
          </span>
          <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-tight italic">
            {project.title}
          </h1>
          <div className="flex gap-12 text-xs font-mono text-gray-400 uppercase tracking-wider border-t border-gray-800 pt-6">
            <div>
              <span className="block text-gray-600 mb-1">Year</span>
              {project.year}
            </div>
            <div>
              <span className="block text-gray-600 mb-1">Role</span>
              {project.role}
            </div>
          </div>
        </div>
      </header>

      {/* 3. Intro */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center">
        <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
          {project.intro}
        </p>
        <div className="h-20 w-[1px] bg-gradient-to-b from-red-600 to-transparent mx-auto mt-16"></div>
      </section>

      {/* 4. Narrative Sections */}
      <div className="max-w-6xl mx-auto px-6 pb-32 space-y-32">
        {project.sections.map((section, index) => (
          <section key={index} className={`flex flex-col gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-start`}>
            
            <div className="flex-1 space-y-6 pt-4 sticky top-20">
              <h2 className="text-3xl font-serif text-white flex flex-col gap-2">
                <span className="text-red-600 text-xs font-sans font-bold tracking-widest uppercase">Chapter 0{index + 1}</span>
                {section.title}
              </h2>
              <p className="text-gray-400 leading-8 font-light text-lg">
                {section.content}
              </p>
            </div>

            <div className="flex-1 w-full">
              <div className="relative bg-gray-900 rounded-sm overflow-hidden border border-gray-800 group hover:border-red-900/30 transition-colors duration-500">
                {section.image && (
                   <img 
                   src={section.image} 
                   alt={section.title}
                   className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                 />
                )}
              </div>
              {section.imageCaption && (
                <p className="mt-4 text-[10px] text-gray-600 uppercase tracking-widest border-l border-red-600 pl-3">
                  fig. {index + 1} — {section.imageCaption}
                </p>
              )}
            </div>

          </section>
        ))}
      </div>

      {/* 5. Footer / Next Project */}
      <footer className="border-t border-gray-900">
        <Link href={`/work/${project.nextProject.slug}`} className="block group relative overflow-hidden py-40 text-center">
          <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/5 transition-colors duration-500"></div>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-6 group-hover:text-red-500 transition-colors">Next Narrative</p>
          <h2 className="text-5xl md:text-7xl font-serif text-white group-hover:scale-105 transition-transform duration-700 italic">
            {project.nextProject.title}
          </h2>
        </Link>
      </footer>

    </article>
  );
}