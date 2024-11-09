export interface NewsSource {
  name: string;
  percentage: number;
  category: "television" | "streaming" | "social" | "print" | "other";
  platforms?: string[];
}

export const newsConsumptionData: NewsSource[] = [
  {
    name: "Television Networks",
    percentage: 49,
    category: "television",
    platforms: ["CNN", "Fox News", "MSNBC", "ABC", "CBS", "NBC"],
  },
  {
    name: "Streaming Platforms",
    percentage: 28,
    category: "streaming",
    platforms: ["YouTube", "Netflix News", "Peacock", "Pluto TV"],
  },
  {
    name: "Social Media",
    percentage: 48,
    category: "social",
    platforms: ["Facebook", "X (Twitter)", "TikTok", "Instagram", "LinkedIn"],
  },
  {
    name: "Print Media",
    percentage: 16,
    category: "print",
    platforms: ["Newspapers", "Magazines", "Newsletters"],
  },
  {
    name: "Other Digital",
    percentage: 25,
    category: "other",
    platforms: ["News Websites", "News Apps", "Podcasts", "Email Newsletters"],
  },
];
