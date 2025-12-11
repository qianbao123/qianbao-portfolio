// app/page.tsx
'use client'; 

import { useState, useEffect } from "react";
import DesignSection from '../components/DesignSection';

// 定义数据类型 (这是 TypeScript 特有的部分)
interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  vimeoId: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "My Nun Mom",
    category: "Documentary",
    year: "2025",
    image: "/work1.jpg", 
    vimeoId: "1119700042", 
    description: "When my mom decided to not being a mom anymore"
  },
  {
    id: 2,
    title: "Mapping the Hidden World",
    category: "Scientific Doc",
    year: "2025",
    image: "/work2.png",
    vimeoId: "", 
    description: "Exploring hidden world and marine co-existence"
  },
  {
    id: 3,
    title: "Fra øst til nord (断裂)",
    category: "Documentary",
    year: "2025",
    image: "/work3.jpg",
    vimeoId: "", 
    description: "The 6th year as an immigrant in Norway,"
  }
];

export default function Home() {
  // 状态管理：明确告诉 TS，这里存的是字符串或者 null
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeVideo]);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-red-900 selection:text-white">
      
      {/* 1. 顶部导航 - 更新版 */}
      <nav className="fixed w-full z-40 flex justify-between items-center p-8 mix-blend-difference text-white">
        {/* 左侧 LOGO - 新版：QIANBAO */}
        <div className="flex items-center gap-4 cursor-pointer group">
          {/* 图标：未完成的弧光 */}
          <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90 group-hover:opacity-100 transition-opacity duration-500">
            {/* 左下角的厚弧线 - 代表边缘/土壤 */}
            <path 
              d="M20 70 C 20 85, 35 95, 50 95 C 65 95, 75 85, 80 70" 
              stroke="#E5E5E5" 
              strokeWidth="3" 
              strokeLinecap="round"
              className="opacity-60"
            />
            
            {/* 右上角的细弧线 - 代表脆弱/微光/视线 */}
            {/* 注意这里用了 muted red (暗红色/陶土色) 代替正红 */}
            <path 
              d="M80 30 C 75 15, 60 5, 45 5 C 30 5, 20 15, 15 35" 
              stroke="#991b1b" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
            />
            
            {/* 中间游离的小点 - 象征个体 */}
            <circle cx="50" cy="50" r="2" fill="#E5E5E5" className="opacity-40" />
          </svg>
          
          {/* 文字部分 - 更加内敛的排版 */}
          <div className="flex flex-col justify-center">
            <span className="text-lg font-medium tracking-[0.25em] leading-none text-gray-200 uppercase font-serif">
              Storytelling
            </span>
            <span className="text-[9px] font-light tracking-[0.4em] leading-none text-gray-500 uppercase mt-1.5 ml-0.5">
              Documentary
            </span>
          </div>
        </div>
        {/* 右侧 导航链接 */}
        <div className="space-x-8 text-xs font-medium tracking-widest uppercase hidden md:block">
          {/* 指向作品列表 */}
          <a href="#work" className="hover:text-red-500 transition-colors duration-300">
            Work
          </a>
          
          {/* 指向底部页脚 (包含 About 和 Contact) */}
          <a href="#contact" className="hover:text-red-500 transition-colors duration-300">
            Info
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-[center_50%] opacity-80 scale-105 animate-slow-zoom"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-black/80"></div>
        <div className="relative z-10 text-center max-w-4xl px-6 mt-40">
          <p className="text-red-600 tracking-[0.4em] text-xs font-bold mb-6 uppercase animate-fade-in">
            Documentary Filmmaking
          </p>
          <h1 className="text-6xl md:text-8xl font-serif italic mb-8 leading-none tracking-wide text-white/90">
  Qianbao Tu
</h1>
          <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-12">
            “I do not intend to speak about; just speak nearby.” 
          </p>
        </div>
      </section>

      {/* 作品展示 (Video Works) */}
      <section id="work" className="py-24 px-4 md:px-12 bg-[#050505] relative z-20">
        
        {/* Filming as a narrative 标题区域 */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-wide mb-4 text-white">
            Filming as Narrative
          </h2>
          <div className="h-1 w-20 bg-red-600 mb-6"></div>
          
          {/* 👇 新增的这一段说明文字 */}
          <p className="text-gray-500 font-light text-lg leading-relaxed max-w-2xl">
            Through the lens of intimacy and observation, capturing the unspoken dialogue between people and their environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              onClick={() => setActiveVideo(project.vimeoId)}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm mb-6 bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-all duration-500">
                  <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-800 pt-4 flex justify-between items-start group-hover:border-red-900 transition-colors duration-500">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm font-light">{project.description}</p>
                </div>
                <div className="text-right">
                  <span className="block text-xs text-gray-400 font-mono mb-1">{project.year}</span>
                  <span className="block text-[10px] text-red-600 uppercase tracking-wider border border-red-900/30 px-2 py-0.5 rounded bg-red-900/10">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

<DesignSection />

      {/* 关于与联系 */}
     {/* 5. 导演简介与联系方式 (Combined Footer) */}
      <footer id="contact" className="bg-[#0a0a0a] pt-32 pb-12 px-6 md:px-20 border-t border-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-20">
          
          {/* 左侧：简介 */}
          <div>
            <h2 className="text-xs font-bold text-red-600 tracking-[0.2em] uppercase mb-8">Qianbao Tu</h2>
            <p className="text-xl md:text-2xl font-serif text-gray-300 leading-relaxed mb-4">
              "What matters is not to speak for, but to speak with."
            </p>
            <p className="text-gray-500 text-sm leading-7 max-w-md">
              Based in Norway and China, focusing on vulnerability and the ethics of seeing, listening, and being seen.
              <br />
              Available for freelance projects worldwide.
            </p>
          </div>

          {/* 右侧：联系列表 */}
          <div className="flex flex-col justify-between md:items-end">
            
            {/* 邮箱区域 */}
            <div className="mb-12 md:text-right">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Inquiries</p>
              <a 
                href="mailto:yourname@email.com" 
                className="text-xs md:text-xl font-light text-white hover:text-red-500 transition-colors border-b border-transparent hover:border-red-500 pb-1"
              >
                qianbao_tu@163.com
              </a>
            </div>

            {/* 社交媒体图标 */}
            <div className="flex gap-8 items-center mb-8">
              {/* Instagram */}
              <a href="https://www.instagram.com/qianbao_tu/" target="_blank" className="text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468.99c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* LinkedIn / Resume */}
              <a href="https://www.linkedin.com/in/qianbao-tu-6a1304152/" target="_blank" className="text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>

            </div>

            <p className="text-xs text-gray-700">© 2025 QIANBAOTU. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* 模态框 */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-50">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          
          <div className="w-full max-w-6xl aspect-video relative px-4" onClick={(e) => e.stopPropagation()}>
            <iframe 
              src={`https://player.vimeo.com/video/${activeVideo}?autoplay=1&title=0&byline=0&portrait=0`} 
              className="absolute top-0 left-0 w-full h-full rounded shadow-2xl shadow-red-900/20" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

       {/* 全局样式 */}
       <style jsx global>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate linear;
        }
      `}</style>
    </div>
  );
}