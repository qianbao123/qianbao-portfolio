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

  "uro-film-note": {
    title: "URO Notes",
    subtitle: "Docuemntary Film Working in progress",
    year: "2026",
    role: "Director & Writor",
    heroImage: "/images/uro-hungry.png", 
    intro: "URO — Norwegian for unrest — follows a daughter caught between two women who cannot speak the same language: Tu Huiqun, the steel-factory worker who in 2004 wrote in her diary that she would become an economic giant of the future, and Yandao, the Buddhist nun she became in 2022.",
    vimeoID: "1190137955",
    sections: [
      {
        title: "Film Synopsis",
        content: "URO—Norwegian for unrest —follows Qianbao as she returns to China after a decade in Europe to confront her mother, Tu Huiqun, who has ordained as a Buddhist nun. Renouncing her maternal identity, Tu now demands to be called Master. Armed with a camera and her mother’s secret diaries from the collapse of the state-owned steel industry, Qianbao attempts to bridge a decade of silence. As they clash over the camera’s lens, the film becomes a raw, self-shot meditation on trauma, failed dreams, and the search for clarity between two women who no longer share a common language or name.",
        image: "/images/uro-indoor.png", 
        imageCaption: "Yandao Master is praying in the temple hall"
      },
      {
        title: "On Master ( 师父 / shīfu) and the Severance",
        content: "A Chinese Buddhist nun is addressed as shīfu — literally teacher-father. The term carries simultaneous tones of religious authority and parental relationship. Here, Yandao is performing a specific Buddhist convention —ordained monastics formally renounce family ties — but she is also performing a personal severance. The English word Master cannot fully capture the weight of this moment. This is why the daughter's later asked Master… a hug?, which carries such conflict.",
        image: "/images/uro-kitchen.png", 
        imageCaption: "In temple kitchen, Qianbao and Yandao master with other master nuns."
      },
      {
        title: "On Hungry Ghosts (饿鬼) and the Yoga Flaming Mouth Ritual (放焰口 / yánkǒu)",
        content: "In Chinese Buddhist cosmology, hungry ghosts are the spirits of the dead whose throats are too narrow to swallow food, condemned to eternal hunger. The Yoga Flaming Mouth ritual is performed to feed them. In the context of this film, the ritual carries an unspoken political weight: in modern China, there are many forms of unmourned death —workers killed in industrial accidents, and victims of unacknowledged disastersThe Buddhist ritual provides a container for grief that the state and society have not officially provided.",
        image: "/images/uro-hungry2.png", 
        imageCaption: "Yoga Flaming Mouth Ritual with master nuns"
      },
      {
        title: "On Work Unit (单位 / dānwèi)",
        content: "The work unit was the foundational social and economic structure of socialist-era China (roughly 1950s–1990s). It was not just a workplace — it provided housing, healthcare, schooling for workers' children, food rations, marriage permits, even funerals. To belong to a work unit was to have an identity. To lose one was to fall outside the social order. When Yandao's father stole steel from his work unit, he was stealing from a structure that was simultaneously his employer, his community, his state, and his collective family. The work unit was later reformed, privatized, sold. This means the original entity to which Yandao owes the debt no longer exists. Her dilemma is not just moral —it is ontological. She is trying to repay a gost.",
        image: "/images/uro-bishi3.png", 
        imageCaption: "The work unit park"
      },
      {
        title: "On Reform (改制 / gǎizhì)",
        content: "The privatization and dismantling of state-owned enterprises in China during the late 1990s and early 2000s. Tens of millions of workers were bought out — given a one-time payment based on years of service (typically around 2,000 RMB per year worked) and released into the new market economy. This was, statistically, one of the largest forced labor transitions in human history. Yandao's diary entries from 2004–2005 document her experience watching this happen in real time at her steel factory.",
        image: "/images/uro-bishi2.png", 
        imageCaption: "The work unit park"
      },
      {
        title: "On Life Release (放生 / fàngshēng)",
        content: "A Buddhist ritual in which captive animals — usually fish, or turtles — are released into the wild to generate merit. In contemporary China, this practice has been industrialized: temples and middlemen breed animals specifically to be sold for ritual release, often in conditions where the animals cannot survive once released. The Old Monk in this scene acknowledges this corruption (It's a commercial pond. They're just doing it for the money).",
        image: "/images/uro-ezhou2.png", 
        imageCaption: "Yandao asks advice from her master monk."
      },
      {
        title: "On Xiamen bus fire Reference (June 7, 2013)",
        content: "On June 7, 2013, a man named Chen Shuizong, despondent over disputes about his retirement benefits, set fire to a Bus Rapid Transit (BRT) vehicle in Xiamen, Fujian Province. 47 people died,34 injured. Coverage in mainland Chinese media was tightly controlled and quickly faded; there was no national mourning event, limited public memorial and discussion on the warfare system.",
        image: "/images/uro-fire.png", 
        imageCaption: "Golden paper burning ceremony in the temple"
      },
      {
        title: "Fraud Village Witches (神婆shénpó)",
        content: "神婆 refers to rural folk shamans, almost always women, who claim spiritual powers and are seen as both fearsome and fraudulent — a deeply gendered, classed insult drawn from Chinese village life. Living as a Buddhism Nun, they will need to fight against misunderstandings that their own ordination might be perceived from outside as performance, charlatanism, or self-delusion.",
        image: "/images/uro-ezhou.png", 
        imageCaption: "Community Buddhist Chanting Hall"
      },
      {
        title: "On Mary Kay (玫琳凯) and Chen Anzhi (陈安之)",
        content: "The American direct-sales cosmetics company entered China in 1995 and became a major recruitment system for working-class women in the late 1990s and early 2000s, especially in interior cities. Like other multi-level marketing schemes of that era — and like the success-coaching figure Chen Anzhi, whose seminars the mother attended — it offered women a fantasy of upward mobility through personal transformation, while functioning as a pyramid system in which most participants lost money. The mother's diary captures the entire arc: the manic optimism of joining, the shame of failure, the inability to disengage. For her generation of female factory workers facing layoffs from collapsing state enterprises, these schemes were one of the only available exits.",
        image: "/images/uro-bishi1.png", 
        imageCaption: "Work Unit's park"
      }
      
    ],
    nextProject: {
      title: "Service Design in Chinese Community",
      slug: "community-service-design"
    }
  },

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
      title: "URO Enthnographic Notes",
      slug: "uro-film-note"
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