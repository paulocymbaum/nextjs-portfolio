import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Button } from "./components/ui/button";
import { SkillsGrid } from "./components/skills-grid";
import { HeroSection } from "./components/hero-section";

const skillsData = [
  // AI & Machine Learning
  { name: "LLM Optimization", level: 95, category: "AI/ML" as const, icon: "🤖", description: "Fine-tuning and optimizing large language models for production", yearsOfExperience: 5 },
  { name: "RAG Architecture", level: 90, category: "AI/ML" as const, icon: "🔍", description: "Building Retrieval-Augmented Generation systems", yearsOfExperience: 4 },
  { name: "AI Agents", level: 88, category: "AI/ML" as const, icon: "🎯", description: "Creating intelligent agents with CrewAI and LangChain", yearsOfExperience: 3 },
  { name: "Prompt Engineering", level: 92, category: "AI/ML" as const, icon: "�", description: "Crafting optimized prompts for AI models", yearsOfExperience: 4 },
  { name: "Model Fine-tuning", level: 85, category: "AI/ML" as const, icon: "⚡", description: "Custom training and fine-tuning of AI models", yearsOfExperience: 3 },
  { name: "Multimodal AI", level: 80, category: "AI/ML" as const, icon: "🎨", description: "Working with text, image, and audio AI models", yearsOfExperience: 2 },
  
  // Programming Languages
  { name: "Python", level: 95, category: "Languages" as const, icon: "�", description: "Primary language for AI/ML development and automation", yearsOfExperience: 8 },
  { name: "TypeScript", level: 90, category: "Languages" as const, icon: "🟦", description: "Full-stack development with type safety", yearsOfExperience: 6 },
  { name: "JavaScript", level: 88, category: "Languages" as const, icon: "💛", description: "Frontend and backend development", yearsOfExperience: 7 },
  { name: "Dart", level: 85, category: "Languages" as const, icon: "🎯", description: "Mobile app development with Flutter", yearsOfExperience: 4 },
  
  // AI Frameworks & Tools
  { name: "LangChain", level: 90, category: "AI Tools" as const, icon: "�", description: "Building LLM applications and workflows", yearsOfExperience: 3 },
  { name: "CrewAI", level: 85, category: "AI Tools" as const, icon: "�", description: "Multi-agent AI systems development", yearsOfExperience: 2 },
  { name: "Langflow", level: 80, category: "AI Tools" as const, icon: "🌊", description: "Visual AI workflow builder", yearsOfExperience: 2 },
  { name: "Hugging Face", level: 88, category: "AI Tools" as const, icon: "🤗", description: "Model deployment and fine-tuning", yearsOfExperience: 4 },
  { name: "OpenAI API", level: 92, category: "AI Tools" as const, icon: "🔮", description: "Integration with GPT models and embeddings", yearsOfExperience: 3 },
  { name: "Anthropic Claude", level: 85, category: "AI Tools" as const, icon: "🧠", description: "Advanced reasoning and analysis tasks", yearsOfExperience: 2 },
  
  // Backend & Infrastructure
  { name: "PostgreSQL", level: 90, category: "Backend" as const, icon: "🐘", description: "Database design and optimization", yearsOfExperience: 6 },
  { name: "Supabase", level: 88, category: "Backend" as const, icon: "⚡", description: "Real-time applications and edge functions", yearsOfExperience: 3 },
  { name: "Edge Functions", level: 85, category: "Backend" as const, icon: "🌐", description: "Serverless computing at the edge", yearsOfExperience: 2 },
  { name: "Docker", level: 82, category: "Backend" as const, icon: "🐳", description: "Containerization for AI applications", yearsOfExperience: 4 },
  
  // Frontend & Mobile
  { name: "React", level: 88, category: "Frontend" as const, icon: "⚛️", description: "Building AI-powered user interfaces", yearsOfExperience: 6 },
  { name: "Next.js", level: 85, category: "Frontend" as const, icon: "▲", description: "Full-stack React applications", yearsOfExperience: 4 },
  { name: "Flutter", level: 88, category: "Frontend" as const, icon: "�", description: "Cross-platform mobile development", yearsOfExperience: 4 },
  { name: "Tailwind CSS", level: 90, category: "Frontend" as const, icon: "🎨", description: "Rapid UI development and design systems", yearsOfExperience: 3 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-heading text-text-primary mb-4">
                About Me
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Transforming AI research into production-ready solutions that drive real business impact
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Left Column - Story */}
              <div className="lg:col-span-2 space-y-8">
                <div className="about-card bg-background rounded-xl p-8 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary text-xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary">My Mission</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    I'm an AI Engineer with over a decade of experience bridging the gap between cutting-edge AI technology and real-world business solutions. My passion lies in optimizing large language models (LLMs), developing Retrieval-Augmented Generation (RAG) architectures, and integrating AI-driven automation into scalable applications.
                  </p>
                </div>

                <div className="about-card bg-background rounded-xl p-8 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 text-xl">🚀</span>
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary">Proven Impact</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    As one of the Founders of Yapper, an AI-powered EdTech SaaS platform, I've experienced firsthand the transformative power of AI in education. I developed AI-driven lesson creation pipelines that reduced production time from hours to seconds, demonstrating how optimized AI workflows can revolutionize industries.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="stats-card stat-gradient-green rounded-lg p-4 border border-green-200 dark:border-green-800">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">Hours → Seconds</div>
                      <div className="text-sm text-green-700 dark:text-green-300">Content Creation Time</div>
                    </div>
                    <div className="stats-card stat-gradient-blue rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50% Reduction</div>
                      <div className="text-sm text-blue-700 dark:text-blue-300">User Churn Rate</div>
                    </div>
                  </div>
                </div>

                <div className="about-card bg-background rounded-xl p-8 border border-border shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 text-xl">💡</span>
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary">Technical Philosophy</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    My expertise spans from fine-tuning models and inference optimization to building robust AI workflows that solve complex challenges. I'm particularly passionate about multimodal AI systems, prompt engineering, and creating AI applications that have meaningful real-world impact.
                  </p>
                </div>
              </div>

              {/* Right Column - Expertise & Stats */}
              <div className="space-y-6">
                {/* Core Expertise */}
                <div className="about-card bg-background rounded-xl p-6 border border-border shadow-sm">
                  <h3 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Core Expertise
                  </h3>
                  <div className="space-y-3">
                    {[
                      { icon: "🤖", title: "LLM Optimization", desc: "Fine-tuning & deployment" },
                      { icon: "🔍", title: "RAG Architecture", desc: "Knowledge retrieval systems" },
                      { icon: "🎯", title: "AI Agents", desc: "Multi-agent workflows" },
                      { icon: "⚡", title: "AI Automation", desc: "Intelligent process optimization" },
                      { icon: "📊", title: "EdTech Solutions", desc: "AI-powered learning platforms" },
                      { icon: "💼", title: "Business Strategy", desc: "AI-driven market research" }
                    ].map((item, index) => (
                      <div key={index} className="expertise-item flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <span className="text-lg">{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-text-primary text-sm">{item.title}</div>
                          <div className="text-text-secondary text-xs">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="about-card bg-background rounded-xl p-6 border border-border shadow-sm">
                  <h3 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Quick Stats
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Experience</span>
                      <span className="font-semibold text-text-primary">10+ Years</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">AI Projects</span>
                      <span className="font-semibold text-text-primary">25+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Companies Founded</span>
                      <span className="font-semibold text-text-primary">2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Technologies</span>
                      <span className="font-semibold text-text-primary">20+</span>
                    </div>
                  </div>
                </div>

                {/* Current Focus */}
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Current Focus
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <span className="w-1.5 h-1.5 bg-primary/60 rounded-full"></span>
                      Advanced RAG implementations
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <span className="w-1.5 h-1.5 bg-primary/60 rounded-full"></span>
                      Multimodal AI systems
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <span className="w-1.5 h-1.5 bg-primary/60 rounded-full"></span>
                      LLM optimization techniques
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <span className="w-1.5 h-1.5 bg-primary/60 rounded-full"></span>
                      AI workflow automation
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Journey Timeline */}
            <div className="about-card bg-background rounded-xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary">My AI Journey</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-text-primary">Education Pioneer</h4>
                      <p className="text-text-secondary text-sm">10+ years in education & business development</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-text-primary">AI Transformation</h4>
                      <p className="text-text-secondary text-sm">Specialized in LLMs, RAG, and AI automation</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-text-primary">Innovation Leader</h4>
                      <p className="text-text-secondary text-sm">Founded Yapper, revolutionizing EdTech with AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-text-primary text-center mb-12">
              Featured AI Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-surface rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-4xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Yapper AI EdTech Platform
                </h3>
                <p className="text-text-secondary mb-4">
                  AI-powered lesson creation pipeline that reduced production time from hours to seconds using LLMs and RAG architecture.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Case Study
                  </Button>
                  <Button size="sm">
                    Live Demo
                  </Button>
                </div>
              </div>
              
              <div className="bg-surface rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-4xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Multi-Agent RAG System
                </h3>
                <p className="text-text-secondary mb-4">
                  Intelligent knowledge retrieval system using CrewAI and LangChain for complex document analysis and question answering.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Code
                  </Button>
                  <Button size="sm">
                    Documentation
                  </Button>
                </div>
              </div>
              
              <div className="bg-surface rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  LLM Fine-tuning Framework
                </h3>
                <p className="text-text-secondary mb-4">
                  Custom framework for fine-tuning and optimizing language models for domain-specific applications with automated evaluation.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    GitHub Repo
                  </Button>
                  <Button size="sm">
                    Research Paper
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <SkillsGrid skills={skillsData} title="AI Engineering & Technical Expertise" />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-heading text-text-primary mb-6">
              Let's Shape the Future of AI Together
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              I'm actively seeking opportunities as an AI Engineer to work on cutting-edge projects involving LLMs, 
              RAG architectures, and AI automation. Let's collaborate on building intelligent solutions that drive real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                Connect on LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                View My AI Projects
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
