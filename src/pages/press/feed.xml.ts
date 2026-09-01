import type { APIRoute } from 'astro';
import { PRESS_RELEASES } from '../../data/press';
import { BUSINESS_INFO } from '../../data/business';

export const GET: APIRoute = async () => {
  const itemsXml = PRESS_RELEASES.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${BUSINESS_INFO.siteUrl}/press/${item.slug}/</link>
      <guid isPermaLink="true">${BUSINESS_INFO.siteUrl}/press/${item.slug}/</guid>
      <pubDate>${new Date(item.datePublished).toUTCString()}</pubDate>
      <description><![CDATA[${item.summary}]]></description>
      <category>${item.category}</category>
    </item>
  `).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>4WHEELS Rent a Car — Official Press Centre &amp; Advisories</title>
    <link>${BUSINESS_INFO.siteUrl}/press/</link>
    <description>Official press releases, customer advisories, brand verification notices, and company statements from 4WHEELS Rent a Car Lahore.</description>
    <language>en-pk</language>
    <atom:link href="${BUSINESS_INFO.siteUrl}/press/feed.xml" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
