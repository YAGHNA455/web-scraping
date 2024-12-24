import React from 'react';
import { Link, Image, Type } from 'lucide-react';

interface ContentSectionProps {
  content: {
    text: string;
    headings: string[];
    links: Array<{ text: string; url: string }>;
    images: Array<{ alt: string; src: string }>;
  };
}

export function ContentSection({ content }: ContentSectionProps) {
  return (
    <div className="space-y-6">
      {content.headings.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <Type size={16} className="text-blue-600" />
            <h3 className="text-lg font-semibold">Headings Structure</h3>
          </div>
          <ul className="space-y-2">
            {content.headings.map((heading, index) => (
              <li key={index} className="text-gray-700">{heading}</li>
            ))}
          </ul>
        </div>
      )}

      {content.links.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <Link size={16} className="text-blue-600" />
            <h3 className="text-lg font-semibold">Links Found</h3>
          </div>
          <ul className="space-y-2">
            {content.links.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {content.images.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <Image size={16} className="text-blue-600" />
            <h3 className="text-lg font-semibold">Images</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {content.images.map((image, index) => (
              <div key={index} className="space-y-2">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="rounded-lg w-full h-48 object-cover"
                />
                <p className="text-sm text-gray-600">{image.alt}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-semibold mb-3">Main Content</h3>
        <p className="text-gray-700 whitespace-pre-wrap">{content.text}</p>
      </div>
    </div>
  );
}