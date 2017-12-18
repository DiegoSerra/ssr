export interface Video {
  title: string;
  description: string;
  time: string;
  author: {
    _id: string,
    name: string,
  };
  uploadDate: Date;
  visualizations: Number;
}