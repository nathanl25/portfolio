export interface ProjectData {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  githubLink: string;
  deployedLink?: string;
}
export interface ProjectsData {
  projects: ProjectData[];
}
declare module '*.json' {
  const value: ProjectsData;
  export default value;
}
