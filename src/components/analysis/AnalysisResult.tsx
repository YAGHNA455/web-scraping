import React from 'react';
import { ScrapedData } from '../../types/types';
import { MetadataSection } from './MetadataSection';
import { ContentSection } from './ContentSection';
import { Globe, Clock } from 'lucide-react';

interface AnalysisResultProps {
  data: ScrapedData;
}

export function AnalysisResult({ data }: AnalysisResultProps) {
  return (
    <div className="w-full space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
        <div className="flex items-center gap-4 text-sm text-gray-600">
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
        {data.description && (
          <p className="mt-4 text-gray-700">{data.description}</p>
        )}
      </div>

      <MetadataSection metadata={data.metadata} />
      <ContentSection content={data.content} />
    </div>
  );
}