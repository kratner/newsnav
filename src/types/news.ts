export interface NewsSource {
  name: string;
  percentage: number;
  category: 'television' | 'streaming' | 'social' | 'print' | 'other';
  platforms: {
    name: string;
    percentage: number;
  }[];
}

export const newsConsumptionData: NewsSource[] = [
  {
    name: 'Television Networks',
    percentage: 49,
    category: 'television',
    platforms: [
      { name: 'CNN', percentage: 25 },
      { name: 'Fox News', percentage: 27 },
      { name: 'MSNBC', percentage: 21 },
      { name: 'ABC', percentage: 18 },
      { name: 'CBS', percentage: 16 },
      { name: 'NBC', percentage: 15 },
    ],
  },
  {
    name: 'Streaming Platforms',
    percentage: 28,
    category: 'streaming',
    platforms: [
      { name: 'YouTube', percentage: 32 },
      { name: 'Netflix News', percentage: 12 },
      { name: 'Peacock', percentage: 8 },
      { name: 'Pluto TV', percentage: 6 },
    ],
  },
  {
    name: 'Social Media',
    percentage: 48,
    category: 'social',
    platforms: [
      { name: 'Facebook', percentage: 31 },
      { name: 'X (Twitter)', percentage: 23 },
      { name: 'TikTok', percentage: 21 },
      { name: 'Instagram', percentage: 19 },
      { name: 'LinkedIn', percentage: 12 },
    ],
  },
  {
    name: 'Print Media',
    percentage: 16,
    category: 'print',
    platforms: [
      { name: 'Newspapers', percentage: 45 },
      { name: 'Magazines', percentage: 30 },
      { name: 'Newsletters', percentage: 25 },
    ],
  },
  {
    name: 'Other Digital',
    percentage: 25,
    category: 'other',
    platforms: [
      { name: 'News Websites', percentage: 38 },
      { name: 'News Apps', percentage: 32 },
      { name: 'Podcasts', percentage: 18 },
      { name: 'Email Newsletters', percentage: 12 },
    ],
  },
];
