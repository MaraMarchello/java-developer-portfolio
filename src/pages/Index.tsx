import React from 'react';
import TerminalHeader from '@/components/TerminalHeader';
import GitTimeline from '@/components/GitTimeline';
import PackageSkills from '@/components/PackageSkills';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Wrench, Target, Users, TestTube, GraduationCap, UsersRound, Zap } from 'lucide-react';
import { useLanguage } from '@/i18n';

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      {/* Terminal Header */}
      <TerminalHeader />
      
      {/* About Section - README.md style */}
      <section id="about" className="py-20 px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="text-muted-foreground text-sm ml-4">README.md</span>
            </div>
            
            <div className="p-8 space-y-6">
              <div>
                <h1 className="text-4xl font-bold gradient-text mb-4"># {t('portfolio.about.title')}</h1>
                <p className="text-lg text-muted-foreground">
                  {t('portfolio.about.subtitle')}
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">## {t('portfolio.about.aboutMe')}</h2>
                <div className="code-block">
                  <div className="space-y-2 font-mono text-sm">
                    <div><span className="text-accent">const</span> <span className="text-primary">developer</span> = {`{`}</div>
                    <div className="ml-4">name: <span className="text-primary">"{t('portfolio.name')}"</span>,</div>
                    <div className="ml-4">role: <span className="text-primary">"{t('portfolio.title')}"</span>,</div>
                    <div className="ml-4">location: <span className="text-primary">"{t('portfolio.location')}"</span>,</div>
                    <div className="ml-4">experience: <span className="text-accent">1</span>, <span className="text-muted-foreground">// years in Java</span></div>
                    <div className="ml-4">passion: <span className="text-primary">"Building scalable systems"</span>,</div>
                    <div className="ml-4">philosophy: <span className="text-primary">"Code is poetry, architecture is art"</span></div>
                    <div>{`};`}</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-primary">## {t('portfolio.about.whatYouGet')}</h2>
                <p className="text-lg text-muted-foreground font-medium mb-6">
                  {t('portfolio.about.whatYouGetSubtitle')}
                </p>
                
                <div className="grid gap-6">
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Lightbulb className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                          {t('portfolio.about.benefits.productMinded.title')}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('portfolio.about.benefits.productMinded.description')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Wrench className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                          {t('portfolio.about.benefits.engineer.title')}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('portfolio.about.benefits.engineer.description')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                          {t('portfolio.about.benefits.flexible.title')}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('portfolio.about.benefits.flexible.description')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                          {t('portfolio.about.benefits.bridge.title')}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t('portfolio.about.benefits.bridge.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Java', 'Spring Boot', 'Microservices', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
                    <Badge key={tech} variant="outline" className="skill-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6 mt-12">
                <h2 className="text-2xl font-semibold text-primary">## {t('portfolio.about.myGoal')}</h2>
                
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-lg text-foreground leading-relaxed flex-1">
                      {t('portfolio.about.goalText')}
                    </p>
                  </div>
                </Card>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-primary mb-4">{t('portfolio.about.principles.title')}</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <TestTube className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{t('portfolio.about.principles.tdd.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('portfolio.about.principles.tdd.description')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{t('portfolio.about.principles.learning.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('portfolio.about.principles.learning.description')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <UsersRound className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{t('portfolio.about.principles.collaboration.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('portfolio.about.principles.collaboration.description')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{t('portfolio.about.principles.performance.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('portfolio.about.principles.performance.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Git Timeline */}
      <GitTimeline />
      
      {/* Package Skills */}
      <PackageSkills />
      
      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">{t('portfolio.projects.title')}</h2>
            <p className="text-muted-foreground text-lg">{t('portfolio.projects.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: t('portfolio.projects.projectList.microservices.name'),
                description: t('portfolio.projects.projectList.microservices.description'),
                language: "Java",
                stars: "⭐ 45",
                tech: ["Spring Boot", "PostgreSQL", "Docker", "Kubernetes"]
              },
              {
                name: t('portfolio.projects.projectList.translation.name'),
                description: t('portfolio.projects.projectList.translation.description'),
                language: "Java",
                stars: "⭐ 32", 
                tech: ["Spring Security", "React", "MySQL", "REST API"]
              },
              {
                name: t('portfolio.projects.projectList.realEstate.name'),
                description: t('portfolio.projects.projectList.realEstate.description'),
                language: "Java",
                stars: "⭐ 28",
                tech: ["Spring Data", "MongoDB", "Chart.js", "Docker"]
              }
            ].map((project) => (
              <Card key={project.name} className="p-6 interactive-hover">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-lg font-semibold text-primary">
                      {project.name}
                    </h3>
                    <span className="text-sm text-muted-foreground">{project.stars}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <span className="font-mono">{t('portfolio.projects.buttons.gitClone')}</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      {t('portfolio.projects.buttons.liveDemo')}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="text-muted-foreground text-sm ml-4">CONTRIBUTING.md</span>
            </div>
            
            <div className="p-8 space-y-6">
              <h2 className="text-3xl font-bold gradient-text"># {t('portfolio.contact.title')}</h2>
              <p className="text-muted-foreground">
                {t('portfolio.contact.subtitle')}
              </p>
              
              <div className="code-block text-left">
                <div className="font-mono text-sm space-y-1">
                  <div><span className="text-muted-foreground"># {t('portfolio.contact.methods')}</span></div>
                  <div><span className="text-accent">git</span> contact --method email --to maramarchelo@gmail.com</div>
                  <div><span className="text-accent">git</span> contact --method linkedin --profile /in/marat-nurmukhametov</div>
                  <div><span className="text-accent">git</span> contact --method github --username MaraMarchello</div>
                  <div><span className="text-accent">git</span> contact --method phone --number +34-635-664-902</div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="default" 
                  className="interactive-hover"
                  onClick={() => window.open('https://www.linkedin.com/in/marat-nurmukhametov/', '_blank')}
                >
                  {t('portfolio.contact.buttons.linkedin')}
                </Button>
                <Button 
                  variant="outline" 
                  className="interactive-hover"
                  onClick={() => window.open('mailto:maramarchelo@gmail.com', '_blank')}
                >
                  {t('portfolio.contact.buttons.email')}
                </Button>
                <Button 
                  variant="outline" 
                  className="interactive-hover"
                  onClick={() => window.open('tel:+34635664902', '_blank')}
                >
                  {t('portfolio.contact.buttons.phone')}
                </Button>
                <Button 
                  variant="outline" 
                  className="interactive-hover"
                  onClick={() => window.open('https://github.com/MaraMarchello', '_blank')}
                >
                  {t('portfolio.contact.buttons.github')}
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>💡 {t('portfolio.contact.availability.openFor')}</p>
                <p>🌍 {t('portfolio.contact.availability.location')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;