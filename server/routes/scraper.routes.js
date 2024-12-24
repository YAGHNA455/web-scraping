import express from 'express';
import { handleScrapeRequest } from '../controllers/scraper.controller.js';

const router = express.Router();

router.post('/scrape', handleScrapeRequest);

export default router;