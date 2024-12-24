export interface ScrapedData {
  title: string;
  description: string;
  url: string;
  timestamp: string;
  metadata: {
    author?: string;
    publishDate?: string;
    lastModified?: string;
    keywords: string[];
  };
  content: {
    text: string;
    headings: string[];
    links: Array<{ text: string; url: string }>;
    images: Array<{ alt: string; src: string }>;
  };
}