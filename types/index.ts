export interface Gig {
  id: string;
  title: string;
  description: string;
  price: number;
  author: string;
  rating: number;
  category: string;
}

export interface Freelancer {
  id: string;
  name: string;
  title: string;
  bio: string;
  rating: number;
  completedJobs: number;
  category: string;
}
