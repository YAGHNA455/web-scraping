import axios from 'axios';

const API_URL = 'http://localhost:3001/api/scrape';

export async function scrapeWebsite(url: string) {
  try {
    const response = await axios.post(API_URL, { url });
    return response.data;
  } catch (error) {
    throw new Error('Failed to scrape website');
  }
}