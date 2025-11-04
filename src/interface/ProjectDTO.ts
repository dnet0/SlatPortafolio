export interface ProjectDTO {
  title: string;
  subtitle: string;
  data: Datum[];
}

export interface Datum {
  title: string;
  description: string;
  image: string;
  stack: string[];
  github: string;
  demo: string;
}
