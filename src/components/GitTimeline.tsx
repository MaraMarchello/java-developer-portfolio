import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n';

interface Commit {
  hash: string;
  date: string;
  message: string;
  description: string;
  type: 'init' | 'feat' | 'refactor' | 'deploy';
  changes: string[];
  stats: {
    files: number;
    additions: number;
    deletions: number;
  };
}

const GitTimeline = () => {
  const { t } = useLanguage();
  const [selectedCommit, setSelectedCommit] = useState<string>('a1b2c3d');

  const commits: Commit[] = [
    {
      hash: 'a1b2c3d',
      date: '2024-12-01',
      message: `deploy: ${t('portfolio.timeline.entries.javaMastery')}`,
      description: t('portfolio.timeline.descriptions.javaMastery'),
      type: 'deploy',
      changes: (t('portfolio.timeline.changes.javaMastery') as unknown) as string[],
      stats: { files: 150, additions: 25000, deletions: 5000 }
    },
    {
      hash: '7i8j9k0',
      date: '2015-06-01',
      message: `refactor: ${t('portfolio.timeline.entries.spainMigration')}`,
      description: t('portfolio.timeline.descriptions.spainMigration'),
      type: 'refactor',
      changes: (t('portfolio.timeline.changes.spainMigration') as unknown) as string[],
      stats: { files: 1, additions: 1, deletions: 0 }
    },
    {
      hash: 'e4f5g6h',
      date: '2005-06-01',
      message: `feat: ${t('portfolio.timeline.entries.houseConstruction')}`,
      description: t('portfolio.timeline.descriptions.houseConstruction'),
      type: 'feat',
      changes: (t('portfolio.timeline.changes.houseConstruction') as unknown) as string[],
      stats: { files: 3, additions: 500, deletions: 0 }
    },
    {
      hash: 'l1m2n3o',
      date: '2009-08-01',
      message: `feat: ${t('portfolio.timeline.entries.translationEmpire')}`,
      description: t('portfolio.timeline.descriptions.translationEmpire'),
      type: 'feat',
      changes: (t('portfolio.timeline.changes.translationEmpire') as unknown) as string[],
      stats: { files: 62, additions: 10002, deletions: 200 }
    },
    {
      hash: 'p4q5r6s',
      date: '2004-12-01',
      message: `init: ${t('portfolio.timeline.entries.universityMigration')}`,
      description: t('portfolio.timeline.descriptions.universityMigration'),
      type: 'init',
      changes: (t('portfolio.timeline.changes.universityMigration') as unknown) as string[],
      stats: { files: 1, additions: 100, deletions: 0 }
    }
  ];

  const getCommitTypeColor = (type: string) => {
    switch (type) {
      case 'init': return 'text-accent';
      case 'feat': return 'text-git-add';
      case 'refactor': return 'text-git-modify';
      case 'deploy': return 'text-primary';
      default: return 'text-foreground';
    }
  };

  const selectedCommitData = commits.find(c => c.hash === selectedCommit);

  return (
    <section id="timeline" className="min-h-screen py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">{t('portfolio.timeline.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('portfolio.timeline.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Git Log Sidebar */}
          <div className="space-y-4">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-muted-foreground text-sm ml-4">git-log</span>
              </div>
              
              <div className="p-6">
                <div className="space-y-2">
                  {commits.map((commit, index) => (
                    <div
                      key={commit.hash}
                      className={`git-commit ${selectedCommit === commit.hash ? 'bg-card/50' : ''}`}
                      onClick={() => setSelectedCommit(commit.hash)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="text-accent">*</div>
                          <span className="git-hash">{commit.hash}</span>
                        </div>
                        <div className="flex-1">
                          <div className={`git-message ${getCommitTypeColor(commit.type)}`}>
                            {commit.message}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {new Date(commit.date).toLocaleDateString('ru')}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Commit Details */}
          <div className="space-y-6">
            {selectedCommitData && (
              <>
                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-primary">
                          {selectedCommitData.message}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span>commit {selectedCommitData.hash}</span>
                          <span>{new Date(selectedCommitData.date).toLocaleDateString('ru')}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className={getCommitTypeColor(selectedCommitData.type)}>
                        {selectedCommitData.type}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedCommitData.description}
                    </p>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold">{t('portfolio.timeline.stats.diffStat')}</h4>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">
                          {selectedCommitData.stats.files} {t('portfolio.timeline.stats.filesChanged')}
                        </span>
                        <span className="text-git-add">
                          +{selectedCommitData.stats.additions}
                        </span>
                        <span className="text-git-remove">
                          -{selectedCommitData.stats.deletions}
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {(Array.isArray(selectedCommitData.changes) ? selectedCommitData.changes : []).map((change, index) => (
                        <div
                          key={index}
                          className={`font-mono text-sm px-3 py-1 rounded ${
                            change.startsWith('+') ? 'bg-git-add/10 text-git-add' :
                            change.startsWith('-') ? 'bg-git-remove/10 text-git-remove' :
                            change.startsWith('~') ? 'bg-git-modify/10 text-git-modify' :
                            'bg-muted/50 text-muted-foreground'
                          }`}
                        >
                          {change}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    // Можно добавить дополнительную анимацию или действие
                    console.log(`Viewing full details for commit ${selectedCommitData.hash}`);
                  }}
                >
                  <span className="font-mono">git show {selectedCommitData.hash}</span>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitTimeline;