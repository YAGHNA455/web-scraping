import React from 'react';
import { ScrapedData } from '../types/types';
import { Clock, Globe } from 'lucide-react';

interface ScrapedContentProps {
  data: ScrapedData | null;
}

export function ScrapedContent({ data }: ScrapedContentProps) {
  if (!data) return null;

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
      
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <Globe size={16} />
          <a href={data.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            {data.url}
          </a>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>{data.timestamp}</span>
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="text-gray-700 whitespace-pre-wrap">{data.content}</p>
      </div>
    </div>
  );
}