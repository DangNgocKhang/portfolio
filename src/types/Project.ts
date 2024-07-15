export interface IProject {
  id: number;
  title: string;
  bg_color: string;
  font_color: string;
  overview: string;
  technology: string;
  link?: string;
}
export interface IProjectThumbnail {
  id: number;
  src: string;
}
