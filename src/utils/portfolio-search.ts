// Portfolio content for search functionality
export interface SearchResult {
  section: string;
  content: string;
  type: 'text' | 'skill' | 'project' | 'contact';
  relevance: number;
}

// Search function that works with translations
export const searchPortfolioContentWithLanguage = (
  keyword: string, 
  translations: any, 
  language: string
): SearchResult[] => {
  const results: SearchResult[] = [];
  const searchTerm = keyword.toLowerCase().trim();
  
  if (!searchTerm) {
    return [];
  }

  // Get search content for current language
  const searchContent = translations.search.content;
  
  // Search through each section
  Object.entries(searchContent).forEach(([section, content]: [string, any]) => {
    if (Array.isArray(content)) {
      content.forEach(item => {
        const itemLower = item.toLowerCase();
        if (itemLower.includes(searchTerm)) {
          // Calculate relevance based on how closely it matches
          const exactMatch = itemLower === searchTerm;
          const startsWithMatch = itemLower.startsWith(searchTerm);
          const wordMatch = itemLower.split(' ').includes(searchTerm);
          
          let relevance = 1;
          if (exactMatch) relevance = 5;
          else if (startsWithMatch) relevance = 4;
          else if (wordMatch) relevance = 3;
          else relevance = 2;

          let type: SearchResult['type'] = 'text';
          if (section === 'skills') type = 'skill';
          else if (section === 'projects') type = 'project';
          else if (section === 'contact') type = 'contact';

          results.push({
            section: translations.search.sections[section] || section,
            content: item,
            type,
            relevance
          });
        }
      });
    }
  });

  // Sort by relevance (highest first)
  return results.sort((a, b) => b.relevance - a.relevance);
};

// Legacy function for backward compatibility
const portfolioContent = {
  about: [
    "Junior Java Developer",
    "Marat Nurmukhametov",
    "Spain",
    "scalable systems",
    "backend engineer",
    "Java Backend Mastery",
    "House Construction",
    "Translation Empire",
    "University",
    "Migration",
    "product-minded developer",
    "engineer not coder",
    "flexible resilient employee",
    "bridge between departments",
    "Test-driven development",
    "Continuous learning",
    "Team collaboration", 
    "Performance optimization"
  ],
  skills: [
    "Java",
    "Spring Boot", 
    "Spring Security",
    "Spring Data",
    "Microservices",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "AWS",
    "REST API",
    "React",
    "Chart.js"
  ],
  projects: [
    "microservices-platform",
    "translation-management-system",
    "real-estate-analytics",
    "Spring Boot Docker platform",
    "CRM system translation business",
    "analytics real estate management"
  ],
  contact: [
    "maramarchelo@gmail.com",
    "+34 635 664 902",
    "LinkedIn marat-nurmukhametov",
    "GitHub MaraMarchello",
    "Spain remote work",
    "Full-time Contract Consulting",
    "resume download",
    "CV PDF",
    "curriculum vitae",
    "download resume",
    "wget resume"
  ]
};

// Search function
export const searchPortfolioContent = (keyword: string): SearchResult[] => {
  const results: SearchResult[] = [];
  const searchTerm = keyword.toLowerCase().trim();
  
  if (!searchTerm) {
    return [];
  }

  // Search through each section
  Object.entries(portfolioContent).forEach(([section, content]) => {
    content.forEach(item => {
      const itemLower = item.toLowerCase();
      if (itemLower.includes(searchTerm)) {
        // Calculate relevance based on how closely it matches
        const exactMatch = itemLower === searchTerm;
        const startsWithMatch = itemLower.startsWith(searchTerm);
        const wordMatch = itemLower.split(' ').includes(searchTerm);
        
        let relevance = 1;
        if (exactMatch) relevance = 5;
        else if (startsWithMatch) relevance = 4;
        else if (wordMatch) relevance = 3;
        else relevance = 2;

        let type: SearchResult['type'] = 'text';
        if (section === 'skills') type = 'skill';
        else if (section === 'projects') type = 'project';
        else if (section === 'contact') type = 'contact';

        results.push({
          section,
          content: item,
          type,
          relevance
        });
      }
    });
  });

  // Sort by relevance (highest first)
  return results.sort((a, b) => b.relevance - a.relevance);
};

// Tree structure for portfolio with translations
export const getPortfolioTreeWithLanguage = (translations: any): string => {
  return translations.search.tree;
};

// Legacy tree function for backward compatibility
export const getPortfolioTree = (): string => {
  return `
portfolio/
├── about.md
│   ├── personal-info
│   ├── experience
│   ├── philosophy
│   └── principles/
│       ├── test-driven-development
│       ├── continuous-learning
│       ├── team-collaboration
│       └── performance-optimization
├── timeline.log
│   ├── java-backend-mastery
│   ├── spain-migration
│   ├── house-construction-x3
│   ├── translation-empire
│   └── university-first-migration
├── skills.json
│   ├── backend/
│   │   ├── Java
│   │   ├── Spring Boot
│   │   ├── Spring Security
│   │   └── Spring Data
│   ├── databases/
│   │   ├── PostgreSQL
│   │   ├── MySQL
│   │   └── MongoDB
│   ├── devops/
│   │   ├── Docker
│   │   ├── Kubernetes
│   │   └── AWS
│   └── frontend/
│       ├── React
│       └── Chart.js
├── projects/
│   ├── microservices-platform/
│   │   ├── Spring Boot
│   │   ├── PostgreSQL
│   │   ├── Docker
│   │   └── Kubernetes
│   ├── translation-management-system/
│   │   ├── Spring Security
│   │   ├── React
│   │   ├── MySQL
│   │   └── REST API
│   └── real-estate-analytics/
│       ├── Spring Data
│       ├── MongoDB
│       ├── Chart.js
│       └── Docker
└── contact.md
    ├── email: maramarchelo@gmail.com
    ├── phone: +34-635-664-902
    ├── linkedin: /in/marat-nurmukhametov
    ├── github: MaraMarchello
    └── location: Spain (remote available)
  `;
};
