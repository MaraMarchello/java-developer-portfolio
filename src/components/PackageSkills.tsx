import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/i18n';

interface Skill {
  name: string;
  level: number;
  description: string;
  years: number;
}

interface SkillCategory {
  [key: string]: Skill[];
}

const PackageSkills = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('languages');

  const packageData = {
    name: "junior-java-developer",
    version: "3.2.1",
    description: "Junior Backend Developer specializing in Java & Spring Boot ecosystem",
    author: "Marat Nurmukhametov <maramarchel@gmail.com>",
    keywords: ["java", "spring-boot", "microservices", "postgresql", "docker"],
    license: "MIT",
    scripts: {
      start: "solveBusinessProblem --with-code",
      test: "junit --coverage=95%",
      deploy: "docker-compose up -d --build",
      migrate: "flyway migrate --config=production",
      monitor: "prometheus --alerts-enabled"
    }
  };

  const skills: SkillCategory = {
    languages: [
      { name: "Java", level: 95, description: "Spring Boot, Spring Security, JPA/Hibernate", years: 1 },
      { name: "SQL", level: 90, description: "PostgreSQL, MySQL, query optimization", years: 1 },
      { name: "JavaScript", level: 80, description: "ES6+, Node.js, React basics", years: 1 },
      { name: "Python", level: 70, description: "Scripting, data processing, Django basics", years: 1 }
    ],
    frameworks: [
      { name: "Spring Boot", level: 95, description: "REST APIs, Security, Data, Cloud", years: 1 },
      { name: "Spring Security", level: 85, description: "JWT, OAuth2, method-level security", years: 1 },
      { name: "Hibernate/JPA", level: 90, description: "Complex mappings, performance tuning", years: 1 },
      { name: "Docker", level: 85, description: "Containerization, multi-stage builds", years: 1 }
    ],
    databases: [
      { name: "PostgreSQL", level: 90, description: "Advanced queries, indexing, partitioning", years: 1 },
      { name: "MongoDB", level: 75, description: "Document design, aggregation pipelines", years: 1 },
      { name: "Redis", level: 80, description: "Caching, sessions, pub/sub", years: 1 },
      { name: "Elasticsearch", level: 70, description: "Search, analytics, log aggregation", years: 1 }
    ],
    tools: [
      { name: "Git", level: 95, description: "Advanced workflows, rebasing, hooks", years: 1 },
      { name: "Maven/Gradle", level: 85, description: "Build automation, dependency management", years: 1 },
      { name: "Jenkins", level: 80, description: "CI/CD pipelines, automated testing", years: 1 },
      { name: "Kubernetes", level: 70, description: "Container orchestration, scaling", years: 1 }
    ],
    architecture: [
      { name: "Microservices", level: 85, description: "Design patterns, service communication", years: 1 },
      { name: "REST APIs", level: 95, description: "Design, documentation, versioning", years: 1 },
      { name: "Event-Driven", level: 80, description: "Message queues, async processing", years: 1 },
      { name: "Clean Architecture", level: 85, description: "SOLID principles, DDD concepts", years: 1 }
    ]
  };

  const devDependencies = [
    "Kubernetes", "AWS", "Advanced System Design", "GraphQL", "React Native"
  ];

  const categories = Object.keys(skills);

  const getLevelColor = (level: number) => {
    if (level >= 90) return "text-git-add";
    if (level >= 80) return "text-git-modify";
    if (level >= 70) return "text-accent";
    return "text-muted-foreground";
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">{t('portfolio.skills.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('portfolio.skills.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Package.json Display */}
          <div className="package-json">
            <pre className="text-sm overflow-x-auto">
{`{
  "name": "${packageData.name}",
  "version": "${packageData.version}",
  "description": "${packageData.description}",
  "author": "${packageData.author}",
  "keywords": [${packageData.keywords.map(k => `"${k}"`).join(', ')}],
  "license": "${packageData.license}",
  
  "scripts": {`}
              {Object.entries(packageData.scripts).map(([key, value]) => (
                <div key={key} className="ml-4">
                  <span className="text-accent">"{key}"</span>: <span className="text-primary">"{value}"</span>{Object.keys(packageData.scripts).indexOf(key) < Object.keys(packageData.scripts).length - 1 ? ',' : ''}
                </div>
              ))}
{`  },
  
  "dependencies": {
    "core-skills": "latest"
  },
  
  "devDependencies": {`}
              {devDependencies.map((dep, index) => (
                <div key={dep} className="ml-4">
                  <span className="text-accent">"{dep.toLowerCase().replace(/\s+/g, '-')}"</span>: <span className="text-muted-foreground">"^learning"</span>{index < devDependencies.length - 1 ? ',' : ''}
                </div>
              ))}
{`  }
}`}
            </pre>
          </div>

          {/* Skills Detail View */}
          <div className="space-y-6">
            {/* Category Selector */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer interactive-hover capitalize"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Skills List */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 capitalize text-primary">
                {selectedCategory.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              
              <div className="space-y-4">
                {skills[selectedCategory]?.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="outline" className={`text-xs ${getLevelColor(skill.level)}`}>
                          {getLevelText(skill.level)}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {skill.years} лет
                        </span>
                      </div>
                      <span className={`text-sm font-mono ${getLevelColor(skill.level)}`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <Progress value={skill.level} className="h-2" />
                    
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Version Info */}
            <Card className="p-4">
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current Version:</span>
                  <span className="font-mono text-primary">{packageData.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Updated:</span>
                  <span className="font-mono">2024-12-20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dependencies:</span>
                  <span className="font-mono text-git-add">{categories.length} categories</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSkills;