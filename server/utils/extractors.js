import cheerio from 'cheerio';

export function extractTitle($) {
  return $('title').text();
}

export function extractDescription($) {
  return $('meta[name="description"]').attr('content') || 
         $('meta[property="og:description"]').attr('content') || 
         '';
}

export function extractLinks($) {
  const links = [];
  $('a').each((_, element) => {
    const href = $(element).attr('href');
    if (href && href.startsWith('http')) {
      links.push(href);
    }
  });
  return [...new Set(links)];
}

export function extractImages($) {
  const images = [];
  $('img').each((_, element) => {
    const src = $(element).attr('src');
    if (src && src.startsWith('http')) {
      images.push(src);
    }
  });
  return [...new Set(images)];
}

export function extractMetadata($) {
  const metadata = {};
  $('meta').each((_, element) => {
    const name = $(element).attr('name') || $(element).attr('property');
    const content = $(element).attr('content');
    if (name && content) {
      metadata[name] = content;
    }
  });
  return metadata;
}