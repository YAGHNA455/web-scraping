import React from 'react';
import { CalendarDays, User, Hash } from 'lucide-react';

interface MetadataSectionProps {
  metadata: {
    author?: string;
    publishDate?: string;
    lastModified?: string;
    keywords: string[];
  };
}

export function MetadataSection({ metadata }: MetadataSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 space-y-3">
      <h3 className="text-lg font-semibold">Metadata</h3>
      
      {metadata.author && (
        <div className="flex items-center gap-2 text-gray-600">
          <User size={16} />
          <span>Author: {metadata.author}</span>
        </div>
      )}
      
      {metadata.publishDate && (
        <div className="flex items-center gap-2 text-gray-600">
          <CalendarDays size={16} />
          <span>Published: {metadata.publishDate}</span>
        </div>
      )}
      
      {metadata.keywords.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <Hash size={16} className="text-gray-600" />
          {metadata.keywords.map((keyword, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
              {keyword}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}