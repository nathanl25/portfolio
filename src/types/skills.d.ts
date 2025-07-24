export type SkillCategory = 'all' | 'languages' | 'frameworks' | 'tools';

interface SkillData {
  name: string;
  icon: string;
  category: Exclude<SkillCategory, 'all'>;
}

export interface SkillsData {
  skills: SkillData[];
}

declare module '*.json' {
  const value: SkillsData;
  export default value;
}
