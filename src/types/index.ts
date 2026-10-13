export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'seo' | 'strategy' | 'writing' | 'leadership' | 'energy' | 'agribusiness';
  categoryLabel: string;
  author: {
    name: string;
    role: string;
    avatarInitials: string;
    avatarColor?: string;
  };
  date: string;
  readTime: string;
  isLeadReport?: boolean;
  editionBadge?: string;
  coverImage: string;
  summary: string;
  tags: string[];
  content: string[];
  keyTakeaways: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  categoryTag: string;
  shortDescription: string;
  iconName: string;
  deliverables: string[];
  fullOverview: string;
  targetClients: string;
  capabilities: {
    title: string;
    description: string;
  }[];
}

export interface TeamMember {
  name: string;
  role: string;
  division: string;
  bio: string;
  initials: string;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
