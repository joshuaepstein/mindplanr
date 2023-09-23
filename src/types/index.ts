export interface ProjectProps {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  createdAt?: Date;
  updatedAt?: Date;

  users?: {
    role: 'owner' | 'member';
  }[];
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  image?: string;
  createdAt: Date;
  role: 'owner' | 'member';
  projects?: { projectId: string }[];
}
