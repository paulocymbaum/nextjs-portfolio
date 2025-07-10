import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-20">
              <h1 className="text-4xl md:text-6xl font-bold font-heading text-text-primary mb-6">
                Building the Future with{" "}
                <span className="text-primary-600">Code</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Full-stack developer passionate about creating innovative solutions 
                that bridge technology and business needs. Let's build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                  View My Work
                </Button>
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-text-primary text-center mb-12">
              About Me
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-text-secondary text-lg leading-relaxed">
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  I love solving complex problems and building scalable applications that make a real difference.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community.
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-8">
                <h3 className="font-semibold text-text-primary mb-4">Quick Facts</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>🚀 5+ years of development experience</li>
                  <li>💻 Full-stack developer</li>
                  <li>🌟 Open source contributor</li>
                  <li>📚 Continuous learner</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-text-primary text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div key={project} className="bg-surface rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-muted/50 rounded-md mb-4"></div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Project {project}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Code
                    </Button>
                    <Button size="sm">
                      Live Demo
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-text-primary text-center mb-12">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Frontend", skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
                { title: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
                { title: "Tools", skills: ["Git", "Docker", "AWS", "Figma"] },
              ].map((category) => (
                <div key={category.title} className="text-center">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-heading text-text-primary mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
              Get in Touch
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
