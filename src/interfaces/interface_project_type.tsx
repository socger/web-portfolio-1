export interface ProjectType {
  id: number;
  title: string;
  image: string;
  description: string;
  skills: { 
    id: number; 
    name: string; 
    image: string;
  }[];
  source_code: string;
  demo: string;
}
  