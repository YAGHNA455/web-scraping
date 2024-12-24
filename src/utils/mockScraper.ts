import { ScrapedData } from '../types/types';

export async function mockScrapeWebsite(url: string): Promise<ScrapedData> {
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    title: "Sample Website Analysis",
    description: "This is a sample website analysis showing various extracted data points.",
    url: url,
    timestamp: new Date().toISOString(),
    metadata: {
      author: "John Doe",
      publishDate: "2024-03-15",
      keywords: ["web", "content", "analysis", "example"],
    },
    content: {
      text: "This is the main content of the webpage. In a real implementation, this would contain the actual text content scraped from the target website.",
      headings: [
        "Introduction",
        "Key Features",
        "About Us",
        "Contact Information"
      ],
      links: [
        { text: "Documentation", url: "https://example.com/docs" },
        { text: "Contact Us", url: "https://example.com/contact" }
      ],
      images: [
        { 
          alt: "Company Logo", 
          src: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=500&auto=format&fit=crop&q=60" 
        },
        { 
          alt: "Team Photo", 
          src: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=500&auto=format&fit=crop&q=60" 
        }
      ]
    }
  };
}