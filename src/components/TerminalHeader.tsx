import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useTheme } from '@/components/theme-provider';
import { useLanguage } from '@/i18n';
import { searchPortfolioContent, getPortfolioTree, getPortfolioTreeWithLanguage, searchPortfolioContentWithLanguage, SearchResult } from '@/utils/portfolio-search';
import { MatrixAnimation, CowSay, TrainAnimation, HackingSimulation, getRandomFortune } from '@/utils/terminal-animations';

interface Command {
  command: string;
  output: string | React.ReactNode;
  delay?: number;
}

const TerminalHeader = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);
  const [commandHistory, setCommandHistory] = useState<Command[]>([]);
  const [showHireDialog, setShowHireDialog] = useState(false);
  const [showSudoHireDialog, setShowSudoHireDialog] = useState(false);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t, translations } = useLanguage();

  const initialCommands: Command[] = [
    {
      command: 'git log --oneline --graph --all',
      output: (
        <div className="git-log">
          <div className="text-accent">* a1b2c3d</div>
          <div className="text-primary ml-4">(HEAD -&gt; main) deploy: Java Backend Mastery</div>
        <div className="text-accent">* 7i8j9k0</div>
        <div className="text-primary ml-4">refactor: Spain Migration</div>
        <div className="text-accent">* e4f5g6h</div>
        <div className="text-primary ml-4">feat: House Construction x3</div>
        <div className="text-accent">* l1m2n3o</div>
        <div className="text-primary ml-4">feat: Build Translation Empire + Family</div>
          <div className="text-accent">* p4q5r6s</div>
          <div className="text-primary ml-4">init: University + First Migration</div>
        </div>
      ),
      delay: 2000
    },
    { 
      command: 'whoami', 
      output: 'software_engineer@developer-portfolio:~$',
      delay: 500
    }
  ];

  const availableCommands: Record<string, string | React.ReactNode | ((args?: string) => string | React.ReactNode)> = {
    'ls -la': (
      <div className="space-y-1">
        <div>total 6</div>
        <div className="text-accent">drwxr-xr-x  1 dev dev  512 Dec 20 15:30 .</div>
        <div className="text-accent">drwxr-xr-x  1 dev dev  512 Dec 20 15:30 ..</div>
        <div className="text-primary">-rw-r--r--  1 dev dev 1024 Dec 20 15:30 about.md</div>
        <div className="text-primary">-rw-r--r--  1 dev dev 2048 Dec 20 15:30 timeline.log</div>
        <div className="text-primary">-rw-r--r--  1 dev dev 1536 Dec 20 15:30 skills.json</div>
        <div className="text-primary">-rw-r--r--  1 dev dev  786 Dec 20 15:30 projects.md</div>
        <div className="text-primary">-rw-r--r--  1 dev dev  342 Dec 20 15:30 contact.md</div>
      </div>
    ),
    'whoami': 'Scrolling to About section...',
    'cat about.md': 'Scrolling to About section...',
    'cat timeline.log': 'Scrolling to Timeline section...',
    'cat skills.json': 'Scrolling to Skills section...',
    'cat projects.md': 'Scrolling to Projects section...',
    'cat contact.md': 'Scrolling to Contact section...',
    'hire me': 'Opening contact form...',
    'git log': 'Scrolling to Timeline section...',
    'clear': '',
    
    
    'theme dark': () => {
      setTheme('dark');
      return t('terminal.responses.themeChanged.dark');
    },
    'theme light': () => {
      setTheme('light');
      return t('terminal.responses.themeChanged.light');
    },
    'theme toggle': () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      const icon = newTheme === 'dark' ? '🌙' : '☀️';
      return t('terminal.responses.themeChanged.toggle', { mode: newTheme, icon });
    },
    'theme': () => {
      const icon = theme === 'dark' ? '🌙' : theme === 'light' ? '☀️' : '🖥️';
      return t('terminal.responses.currentTheme', { theme, icon });
    },
    
    
    'tema oscuro': () => {
      setTheme('dark');
      return t('terminal.responses.themeChanged.dark');
    },
    'tema claro': () => {
      setTheme('light');
      return t('terminal.responses.themeChanged.light');
    },
    'tema alternar': () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      const icon = newTheme === 'dark' ? '🌙' : '☀️';
      return t('terminal.responses.themeChanged.toggle', { mode: newTheme, icon });
    },
    'tema': () => {
      const icon = theme === 'dark' ? '🌙' : theme === 'light' ? '☀️' : '🖥️';
      return t('terminal.responses.currentTheme', { theme, icon });
    },

    
    'lang en': () => {
      setLanguage('en');
      return t('terminal.responses.languageChanged.en');
    },
    'lang es': () => {
      setLanguage('es');
      return t('terminal.responses.languageChanged.es');
    },
    'lang toggle': () => {
      const newLang = language === 'en' ? 'es' : 'en';
      setLanguage(newLang);
      const flag = newLang === 'en' ? '🇺🇸' : '🇪🇸';
      const langName = newLang === 'en' ? 'English' : 'Español';
      return t('terminal.responses.languageChanged.toggle', { language: langName, flag });
    },
    'lang': () => {
      const flag = language === 'en' ? '🇺🇸' : '🇪🇸';
      const langName = language === 'en' ? 'English' : 'Español';
      return t('terminal.responses.currentLanguage', { language: langName, flag });
    },
    
    
    'idioma en': () => {
      setLanguage('en');
      return t('terminal.responses.languageChanged.en');
    },
    'idioma es': () => {
      setLanguage('es');
      return t('terminal.responses.languageChanged.es');
    },
    'idioma alternar': () => {
      const newLang = language === 'en' ? 'es' : 'en';
      setLanguage(newLang);
      const flag = newLang === 'en' ? '🇺🇸' : '🇪🇸';
      const langName = newLang === 'en' ? 'English' : 'Español';
      return t('terminal.responses.languageChanged.toggle', { language: langName, flag });
    },
    'idioma': () => {
      const flag = language === 'en' ? '🇺🇸' : '🇪🇸';
      const langName = language === 'en' ? 'English' : 'Español';
      return t('terminal.responses.currentLanguage', { language: langName, flag });
    },
    
    
    'find': (keyword?: string) => {
      if (!keyword) {
        return t('terminal.responses.searchUsage');
      }
      const results = searchPortfolioContentWithLanguage(keyword, translations, language);
      if (results.length === 0) {
        return t('terminal.responses.searchNoResults', { keyword });
      }
      return (
        <div className="space-y-2">
          <div className="text-accent">{t('terminal.responses.searchResults', { count: results.length.toString(), keyword })}</div>
          {results.slice(0, 10).map((result, index) => (
            <div key={index} className="ml-4">
              <span className="text-primary">[{result.section}]</span> {result.content}
            </div>
          ))}
          {results.length > 10 && (
            <div className="text-muted-foreground ml-4">{t('terminal.responses.searchMoreResults', { count: (results.length - 10).toString() })}</div>
          )}
        </div>
      );
    },
    
    
    'buscar': (keyword?: string) => {
      if (!keyword) {
        return t('terminal.responses.searchUsage');
      }
      const results = searchPortfolioContentWithLanguage(keyword, translations, language);
      if (results.length === 0) {
        return t('terminal.responses.searchNoResults', { keyword });
      }
      return (
        <div className="space-y-2">
          <div className="text-accent">{t('terminal.responses.searchResults', { count: results.length.toString(), keyword })}</div>
          {results.slice(0, 10).map((result, index) => (
            <div key={index} className="ml-4">
              <span className="text-primary">[{result.section}]</span> {result.content}
            </div>
          ))}
          {results.length > 10 && (
            <div className="text-muted-foreground ml-4">{t('terminal.responses.searchMoreResults', { count: (results.length - 10).toString() })}</div>
          )}
        </div>
      );
    },
    
    
    'tree': () => (
      <pre className="text-sm font-mono whitespace-pre-wrap text-accent">
        {getPortfolioTreeWithLanguage(translations)}
      </pre>
    ),
    
    
    'árbol': () => (
      <pre className="text-sm font-mono whitespace-pre-wrap text-accent">
        {getPortfolioTreeWithLanguage(translations)}
      </pre>
    ),
    
    
    'date': () => {
      const now = new Date();
      return `${now.toDateString()} ${now.toLocaleTimeString()}`;
    },
    
    
    'ssh github': () => {
      window.open('https://github.com/MaraMarchello', '_blank');
      return 'Connecting to GitHub... 🐙';
    },
    'curl linkedin': () => {
      window.open('https://www.linkedin.com/in/marat-nurmukhametov/', '_blank');
      return 'Fetching LinkedIn profile... 💼';
    },
    
    
    'download resume': () => {
      downloadResume();
      return 'Downloading resume... 📄';
    },
    'wget resume': () => {
      downloadResume();
      return 'Downloading Marat_Nurmukhametov_Resume.pdf... 📄';
    },
    
    
    'sudo hire-me': 'Opening enhanced contact form with elevated privileges... 🔐',
    
    'matrix': () => <MatrixAnimation />,
    'cowsay': (message?: string) => <CowSay message={message || 'Hello! I am a Java developer!'} />,
    'fortune': () => (
      <div className="text-accent italic">
        💡 {getRandomFortune()}
      </div>
    ),
    'sl': () => <TrainAnimation />,
    'hack': () => <HackingSimulation />,
    'exit': 'Are you sure you want to leave? 🤔',
    
    
    'help': () => {
      const commands = translations.terminal.help.commands as Record<string, string>;
      const title = t('terminal.help.title');
      return (
        <div className="space-y-1">
          <div className="text-accent mb-2">{title}</div>
          {Object.entries(commands).map(([cmd, desc], index) => (
            <div key={index} className="flex">
              <span className="text-primary font-mono w-48 flex-shrink-0">{cmd}</span>
              <span className="text-muted-foreground ml-2">- {desc}</span>
            </div>
          ))}
        </div>
      );
    },
    
    
    'ayuda': () => {
      const commands = translations.terminal.help.commands as Record<string, string>;
      const title = t('terminal.help.title');
      return (
        <div className="space-y-1">
          <div className="text-accent mb-2">{title}</div>
          {Object.entries(commands).map(([cmd, desc], index) => (
            <div key={index} className="flex">
              <span className="text-primary font-mono w-48 flex-shrink-0">{cmd}</span>
              <span className="text-muted-foreground ml-2">- {desc}</span>
            </div>
          ))}
        </div>
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    const parts = trimmedCmd.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');
    const fullCommand = trimmedCmd.toLowerCase();
    
    if (command === 'clear') {
      setCommandHistory([]);
      return;
    }
    
    if (command === 'hire' && parts[1] === 'me') {
      setShowHireDialog(true);
      setCommandHistory(prev => [...prev, { command: cmd, output: 'Opening contact form...' }]);
      return;
    }
    
    if (command === 'sudo' && parts[1] === 'hire-me') {
      setShowSudoHireDialog(true);
      setCommandHistory(prev => [...prev, { command: cmd, output: 'Opening enhanced contact form with elevated privileges... 🔐' }]);
      return;
    }
    
    if (command === 'exit') {
      setShowExitDialog(true);
      setCommandHistory(prev => [...prev, { command: cmd, output: 'Are you sure you want to leave? 🤔' }]);
      return;
    }
    
    
    let output: string | React.ReactNode;
    
    if (command === 'find') {
      const findCmd = availableCommands['find'] as (keyword?: string) => string | React.ReactNode;
      output = findCmd(args);
    } else if (command === 'cowsay') {
      const cowsayCmd = availableCommands['cowsay'] as (message?: string) => React.ReactNode;
      output = cowsayCmd(args);
    } else if (fullCommand.startsWith('theme ')) {
      const themeMode = parts[1];
      if (themeMode === 'dark' || themeMode === 'light' || themeMode === 'toggle') {
        const themeCmd = availableCommands[`theme ${themeMode}`] as () => string;
        output = themeCmd();
      } else {
        output = 'Usage: theme [dark|light|toggle]';
      }
    } else {
      
      const exactMatch = availableCommands[fullCommand];
      if (exactMatch) {
        output = typeof exactMatch === 'function' ? exactMatch() : exactMatch;
      } else {
        
        const baseMatch = availableCommands[command];
        if (baseMatch) {
          output = typeof baseMatch === 'function' ? baseMatch(args) : baseMatch;
        } else {
          output = `Command not found: ${cmd}. Type 'help' for available commands.`;
        }
      }
    }
    
    setCommandHistory(prev => [...prev, { command: cmd, output }]);
    
    
    if (fullCommand.startsWith('cat ') || command === 'git' || command === 'whoami') {
      const section = fullCommand.includes('about') || command === 'whoami' ? 'about' :
                     fullCommand.includes('timeline') || fullCommand === 'git log' ? 'timeline' :
                     fullCommand.includes('skills') ? 'skills' :
                     fullCommand.includes('projects') ? 'projects' :
                     fullCommand.includes('contact') ? 'contact' : null;
      
      if (section) {
        setTimeout(() => {
          document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Job Opportunity Inquiry');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:maramarchelo@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setShowHireDialog(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const downloadResume = () => {
    
    const link = document.createElement('a');
    link.href = '/CV_Marat_Nurmukhametov_eng.pdf';
    link.download = 'Marat_Nurmukhametov_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(userInput);
      setUserInput('');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="terminal-window w-full max-w-4xl">
        
        <div className="terminal-header">
          <div className="terminal-dot red"></div>
          <div className="terminal-dot yellow"></div>
          <div className="terminal-dot green"></div>
          <span className="text-muted-foreground text-sm ml-4">developer-portfolio — bash — 120x40</span>
        </div>
        
        
        <div className="p-6 h-96 overflow-y-auto">
          <div className="space-y-2">
            
            {initialCommands.map((cmd, index) => (
              <div key={index} className="space-y-2">
                <div className="flex">
                  <span className="text-primary">developer@portfolio:~$ </span>
                  <span className="ml-2">{cmd.command}</span>
                </div>
                <div className="ml-6 text-sm">{cmd.output}</div>
              </div>
            ))}
            
            
            {commandHistory.map((cmd, index) => (
              <div key={index} className="space-y-2">
                <div className="flex">
                  <span className="text-primary">developer@portfolio:~$ </span>
                  <span className="ml-2">{cmd.command}</span>
                </div>
                <div className="ml-6 text-sm">{cmd.output}</div>
              </div>
            ))}
            
            
            {showPrompt && (
              <div className="flex">
                <span className="text-primary">developer@portfolio:~$ </span>
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="ml-2 bg-transparent border-none outline-none text-foreground flex-1"
                  placeholder={t('terminal.placeholder')}
                  autoFocus
                />
                <span className="terminal-cursor"></span>
              </div>
            )}
          </div>
        </div>
        
        
        <div className="text-center mt-6">
          <p className="text-muted-foreground text-sm animate-pulse">
{t('terminal.scrollHint')}
          </p>
        </div>
      </div>

            
      <Dialog open={showHireDialog} onOpenChange={setShowHireDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="gradient-text">{t('dialogs.hire.title')}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground">
              <p>📧 Email: maramarchelo@gmail.com</p>
              <p>📱 Phone: +34 635 664 902</p>
              <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/marat-nurmukhametov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">marat-nurmukhametov</a></p>
              <p>🐙 GitHub: <a href="https://github.com/MaraMarchello" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">MaraMarchello</a></p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  Send Message
                </Button>
                <Button type="button" variant="outline" onClick={downloadResume}>
                  Download Resume
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* Enhanced Sudo Hire Me Dialog */}
      <Dialog open={showSudoHireDialog} onOpenChange={setShowSudoHireDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="gradient-text flex items-center gap-2">
              🔐 Root Access Granted - Premium Contact
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="bg-card border border-primary/20 rounded-lg p-4">
              <div className="text-sm font-mono text-primary mb-2">
                $ sudo access --level=premium --user=employer
              </div>
              <div className="text-xs text-muted-foreground">
                ✅ Authentication successful<br/>
                ✅ Elevated privileges granted<br/>
                ✅ Premium contact information unlocked
              </div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400">📧</span>
                <span className="font-medium">Direct Email:</span>
                <a href="mailto:maramarchelo@gmail.com" className="text-primary hover:underline">
                  maramarchelo@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-green-400">📱</span>
                <span className="font-medium">WhatsApp/Telegram:</span>
                <a href="tel:+34635664902" className="text-primary hover:underline">
                  +34 635 664 902
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-green-400">💼</span>
                <span className="font-medium">LinkedIn Premium:</span>
                <a href="https://www.linkedin.com/in/marat-nurmukhametov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  marat-nurmukhametov
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-green-400">🐙</span>
                <span className="font-medium">GitHub Pro:</span>
                <a href="https://github.com/MaraMarchello" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  MaraMarchello
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-green-400">⚡</span>
                <span className="font-medium">Response Time:</span>
                <span className="text-accent">&lt; 2 hours (business hours)</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-green-400">🎯</span>
                <span className="font-medium">Availability:</span>
                <span className="text-accent">Immediate start available</span>
              </div>
            </div>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <Label htmlFor="sudo-name">Your Name *</Label>
                <Input
                  id="sudo-name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Company/Hiring Manager Name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="sudo-email">Your Email *</Label>
                <Input
                  id="sudo-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="company@domain.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="sudo-message">Project Details *</Label>
                <Textarea
                  id="sudo-message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your Java project, team size, tech stack, timeline, and budget range..."
                  rows={4}
                  required
                />
              </div>
              
              <div className="flex gap-2">
                <Button type="submit" className="flex-1 bg-gradient-to-r from-primary to-accent">
                  🚀 Send Priority Message
                </Button>
                <Button type="button" variant="outline" onClick={downloadResume}>
                  📄 Download CV
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* Exit Confirmation Dialog */}
      <AlertDialog open={showExitDialog} onOpenChange={setShowExitDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to leave?</AlertDialogTitle>
            <AlertDialogDescription>
              You're about to exit this amazing portfolio! Are you sure you don't want to:
              <br />
              • Check out my projects?
              • See my timeline?
              • Send me a message?
              <br /><br />
              <span className="text-accent">💡 Pro tip: Try typing 'hire me' or 'sudo hire-me' instead!</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Stay and Explore</AlertDialogCancel>
            <AlertDialogAction onClick={() => window.close()}>
              Yes, Leave
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default TerminalHeader;