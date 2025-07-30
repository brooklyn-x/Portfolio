/**
 * SEO Dashboard component for monitoring and optimizing search performance
 * This component can be used in development to track SEO metrics
 */

"use client";

import { useState } from "react";
import { useSEOAnalytics, useKeywordOptimization } from "@/hooks/useSEO";

interface SEODashboardProps {
  content?: string;
  isVisible?: boolean;
}

export default function SEODashboard({
  content = "",
  isVisible = false,
}: SEODashboardProps) {
  const metrics = useSEOAnalytics();
  const { suggestions, density } = useKeywordOptimization(content);
  const [isOpen, setIsOpen] = useState(isVisible);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors z-50"
        style={{
          display: process.env.NODE_ENV === "development" ? "block" : "none",
        }}
      >
        SEO Dashboard
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-6 max-w-md z-50"
      style={{
        display: process.env.NODE_ENV === "development" ? "block" : "none",
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          SEO Dashboard
        </h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          ✕
        </button>
      </div>

      {/* SEO Metrics */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
          Performance Metrics
        </h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
            <div className="text-gray-600 dark:text-gray-400">Page Views</div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {metrics.pageViews.toLocaleString()}
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
            <div className="text-gray-600 dark:text-gray-400">Impressions</div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {metrics.searchImpressions.toLocaleString()}
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
            <div className="text-gray-600 dark:text-gray-400">CTR</div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {metrics.clickThroughRate.toFixed(1)}%
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
            <div className="text-gray-600 dark:text-gray-400">Avg Position</div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {metrics.averagePosition.toFixed(1)}
            </div>
          </div>
        </div>
      </div>

      {/* Keyword Suggestions */}
      {suggestions.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
            Keyword Opportunities
          </h4>
          <div className="flex flex-wrap gap-1">
            {suggestions.slice(0, 5).map((keyword) => (
              <span
                key={keyword}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Top Keywords by Density */}
      <div>
        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
          Keyword Density
        </h4>
        <div className="space-y-1">
          {Object.entries(density)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5)
            .map(([keyword, densityValue]) => (
              <div key={keyword} className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400 capitalize">
                  {keyword}
                </span>
                <span className="text-gray-900 dark:text-white">
                  {densityValue.toFixed(1)}%
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* SEO Health Score */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            SEO Health Score
          </span>
          <span className="text-lg font-bold text-green-600 dark:text-green-400">
            {Math.min(95, Math.max(60, 85 + suggestions.length * 2))}%
          </span>
        </div>
      </div>
    </div>
  );
}
