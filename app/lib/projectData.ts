// app/lib/projectData.ts

// 定义数据接口
export interface ProjectDetail {
  title: string;
  subtitle: string;
  year: string;
  role: string;
  heroImage: string; // 首页大图
  intro: string;     // 项目简介
  vimeoID?: string;
  
  // 叙事章节：每个项目可以有多个章节
  sections: {
    title: string;
    content: string;
    image?: string;   
    imageCaption?: string;
  }[];
  
  // 底部 "下一个项目" 的链接
  nextProject: {
    title: string;
    slug: string;
  };
}

// 项目数据字典
// 这里的 key (如 "simple-diabetic-life") 必须和你 DesignSection.tsx 里的 slug 一致
export const projectsData: Record<string, ProjectDetail> = {
  "simple-diabetic-life": {
    title: "Simple Diabetic Life",
    subtitle: "Product Service System Design",
    year: "2016",
    role: "Service Designer & Researcher",
    heroImage: "/images/diabetic-ui.jpg", 
    intro: "A digital ecosystem bridging the information gap between doctors and Type-2 diabetes patients, making chronic disease management proactive rather than reactive.",
    vimeoID: "365052203",
    sections: [
      {
        title: "The Context",
        content: "Type 2 diabetes is a chronic condition requiring constant self-management. However, our research revealed a critical disconnection: doctors lack direct channels to guide patients at home, while patients struggle to keep accurate records for their consultations. This 'black box' period between hospital visits leads to inefficient treatment.",
        image: "/images/diabetic-blueprint.jpg", 
        imageCaption: "Service Blueprint: Mapping the flow from home self-management to hospital diagnosis."
      },
      {
        title: "The System",
        content: "We designed a dual-terminal system. For patients, a mobile app simplifies the recording of glucose, nutrition, and activity through visual logs. For doctors, a desktop dashboard visualizes this patient data, allowing them to adjust treatment plans with precision rather than guesswork.",
        image: "/images/diabetic-system.jpg", 
        imageCaption: "System Map: Connecting patients, doctors, and data cloud."
      },
      {
        title: "Visualizing Data",
        content: "The core interaction challenge was transforming complex medical data into intuitive insights. We used color-coded graphs and 'plan circles' to give patients an immediate sense of control over their daily routine, while giving doctors a quick snapshot of the patient's long-term trends.",
        image: "/images/diabetic-interface.jpg", 
        imageCaption: "Interface Design: Visualizing health data for instant understanding."
      }
    ],
    nextProject: {
      title: "Service Design in Chinese Community",
      slug: "community-service-design"
    }
  },

  "community-service-design": {
    title: "Service Design in Chinese Community",
    subtitle: "Ethnographic Study & Research",
    year: "2019",
    role: "Ethnographic Designer",
    heroImage: "/images/community-photo.jpg", 
    intro: "An in-depth ethnographic study in Fengle Community, exploring how design can facilitate better collaboration among the government, service providers, and local residents.",
    sections: [
      {
        title: "The Field",
        content: "Fengle Community in Anhui is a microcosm of China's rapid urbanization. With 8,900 residents and a mix of state-owned and private institutions, it faces the challenge of transitioning from a 'managed' unit to a 'service-oriented' community. We spent weeks on-site, observing the unspoken dynamics between the community staff and residents.",
        image: "/images/community-field.jpg", 
        imageCaption: "Field Research: The community center and daily interactions."
      },
      {
        title: "The Conflict",
        content: "Our stakeholder mapping revealed a structural problem: The 'Service Facilitators' (community workers) were stuck in the middle. They lacked the capability to identify real resident needs and were passive in facilitating external service providers. This led to a mismatch between government-supplied services and what residents actually wanted.",
        image: "/images/community-stakeholder.jpg", 
        imageCaption: "Stakeholder Map: Analyzing the relationships and pain points."
      },
      {
        title: "The Insight",
        content: "The study concludes that service design in this context isn't just about optimizing flowchart. It's about empowering the community workers to become active 'Service Planners'. By introducing design tools, we can help them translate resident complaints into actionable service proposals.",
        image: "/images/community-diagram.jpg", 
        imageCaption: "Service Ecology: Proposing a new model for multi-participation."
      }
    ],
    nextProject: {
      title: "Simple Diabetic Life",
      slug: "simple-diabetic-life"
    }
  }
};