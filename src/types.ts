export interface ScrapedData {
  title: string;
  description: string;
  links: string[];
  images: string[];
  metadata: {
    [key: string]: string;
  };
}

export interface ScrapingStatus {
  isLoading: boolean;
  error: string | null;
  data: ScrapedData | null;
}