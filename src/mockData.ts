export const getMockScrapedData = (url: string) => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "Example Website Title",
        description: "This is a sample description of the scraped website. In a real implementation, this would contain actual content from the target URL.",
        links: [
          "https://example.com/page1",
          "https://example.com/page2",
          "https://example.com/page3",
        ],
        images: [
          "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
          "https://images.unsplash.com/photo-1682687221038-404670f19d6e",
        ],
        metadata: {
          "Author": "John Doe",
          "Published Date": "2024-03-15",
          "Last Modified": "2024-03-20",
          "Keywords": "web scraping, example, demo",
        }
      });
    }, 1500);
  });
};