import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';
import scraperRoutes from './routes/scraper.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', scraperRoutes);

app.listen(PORT, () => {
  console.log(`Scraping server running on port ${PORT}`);
});