export interface Video {
  title: string;
  description: string;
  time: string;
  path: string;
  author: {
    _id: string,
    name: string,
  };
  uploadDate: Date;
  visualizations: Number;
}