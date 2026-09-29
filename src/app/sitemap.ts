import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://epic.sh';

  return [{ url: `${baseUrl}/`, lastModified: new Date() }];
}
