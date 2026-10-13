import { useContext, useEffect } from 'react';
import { HeadContext } from '../lib/head';
import { OG_DEFAULT } from '../data/images';

interface SEOHeadProps {
  title: string;
  description: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  canonicalUrl?: string;
  publishedTime?: string;
  author?: string;
  keywords?: string[];
  schemaData?: object;
}

export const DEFAULT_OG_IMAGE = OG_DEFAULT;

export default function SEOHead({
  title,
  description,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  canonicalUrl,
  publishedTime,
  author = 'Pedaserve',
  keywords,
  schemaData
}: SEOHeadProps) {
  // Server render: hand the data to the prerender script.
  const head = useContext(HeadContext);
  if (head) {
    Object.assign(head, { title, description, ogType, ogImage, canonicalUrl, publishedTime, author, keywords, schemaData });
  }

  // Browser: keep document.head in sync on client-side navigation.
  useEffect(() => {
    document.title = title;

    const setMeta = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('name', 'author', author);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    const absImage = ogImage.startsWith('/') ? window.location.origin + ogImage : ogImage;
    setMeta('property', 'og:image', absImage);
    setMeta('property', 'og:site_name', 'Pedaserve');

    const fullUrl = canonicalUrl || window.location.origin + window.location.pathname;
    setMeta('property', 'og:url', fullUrl);

    if (publishedTime) {
      setMeta('property', 'article:published_time', publishedTime);
      setMeta('property', 'article:author', author);
    }

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', absImage);

    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', fullUrl);

    let dynamicSchemaTag = document.getElementById('pedaserve-dynamic-schema') as HTMLScriptElement | null;
    if (schemaData) {
      if (!dynamicSchemaTag) {
        dynamicSchemaTag = document.createElement('script');
        dynamicSchemaTag.id = 'pedaserve-dynamic-schema';
        dynamicSchemaTag.type = 'application/ld+json';
        document.head.appendChild(dynamicSchemaTag);
      }
      dynamicSchemaTag.textContent = JSON.stringify(schemaData);
    } else if (dynamicSchemaTag) {
      dynamicSchemaTag.remove();
    }
  }, [title, description, ogType, ogImage, canonicalUrl, publishedTime, author, keywords, schemaData]);

  return null;
}
