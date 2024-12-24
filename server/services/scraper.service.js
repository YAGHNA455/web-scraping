import axios from 'axios';
import cheerio from 'cheerio';
import * as extractors from '../utils/extractors.js';

export async function scrapeUrl(url) {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  return {
    title: extractors.extractTitle($),
    description: extractors.extractDescription($),
    links: extractors.extractLinks($),
    images: extractors.extractImages($),
    metadata: extractors.extractMetadata($)
  };
}