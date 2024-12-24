import { scrapeUrl } from '../services/scraper.service.js';

export async function handleScrapeRequest(req, res) {
  try {
    const { url } = req.body;
    const data = await scrapeUrl(url);
    res.json(data);
  } catch (error) {
    console.error('Scraping error:', error);
    res.status(500).json({ error: 'Failed to scrape website' });
  }
}