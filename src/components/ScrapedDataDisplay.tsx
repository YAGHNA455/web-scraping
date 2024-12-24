import React from 'react';
import { ScrapedData } from '../types';
import { Link, Image, Info } from 'lucide-react';

interface ScrapedDataDisplayProps {
  data: ScrapedData;
}

export function ScrapedDataDisplay({ data }: ScrapedDataDisplayProps) {
  return (
    <div className="w-full max-w-4xl space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
        <p className="text-gray-600 mb-4">{data.description}</p>
      </div>

      {data.links.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Link className="text-blue-600" />
            <h3 className="text-xl font-semibold">Links Found</h3>
          </div>
          <ul className="space-y-2">
            {data.links.map((link, index) => (
              <li key={index} className="text-blue-600 hover:underline">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {data.images.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Image className="text-blue-600" />
            <h3 className="text-xl font-semibold">Images Found</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Scraped image ${index + 1}`}
                className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
              />
            ))}
          </div>
        </div>
      )}

      {Object.keys(data.metadata).length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Info className="text-blue-600" />
            <h3 className="text-xl font-semibold">Metadata</h3>
          </div>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(data.metadata).map(([key, value]) => (
              <div key={key} className="border-b border-gray-200 pb-2">
                <dt className="text-sm font-medium text-gray-500">{key}</dt>
                <dd className="mt-1 text-sm text-gray-900">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}