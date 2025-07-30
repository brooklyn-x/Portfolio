/**
 * Component for injecting structured data (JSON-LD) for better SEO
 */

import {
  generatePersonStructuredData,
  generateWebsiteStructuredData,
  generateFAQStructuredData,
} from "@/lib/seo-ai";

interface StructuredDataProps {
  type?: "person" | "website" | "faq" | "all";
}

export default function StructuredData({ type = "all" }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "person":
        return generatePersonStructuredData();
      case "website":
        return generateWebsiteStructuredData();
      case "faq":
        return generateFAQStructuredData();
      case "all":
      default:
        return [
          generatePersonStructuredData(),
          generateWebsiteStructuredData(),
          generateFAQStructuredData(),
        ];
    }
  };

  const structuredData = getStructuredData();
  // const jsonLd = Array.isArray(structuredData)
  //   ? structuredData.map((data) => JSON.stringify(data)).join("\n")
  //   : JSON.stringify(structuredData);

  return (
    <>
      {Array.isArray(structuredData) ? (
        structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(data),
            }}
          />
        ))
      ) : (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </>
  );
}
