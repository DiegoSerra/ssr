export interface Video {
  title: string;
  description: string;
  time: string;
  path: string;
  image: string;
  author: {
    _id: string,
    name: string,
  };
  uploadDate: Date;
  visualizations: Number;
}