import Script from 'next/script';
import './globals.css';
import { SiteChrome } from '../components/SiteChrome';

const siteUrl = 'https://hughdeeny.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hugh Deeny | Official Website',
    template: '%s | Hugh Deeny',
  },
  description: 'Official website of Hugh Deeny featuring music, videos, tour updates, and artist links.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hugh Deeny | Official Website',
    description: 'Official website of Hugh Deeny featuring music, videos, tour updates, and artist links.',
    url: siteUrl,
    siteName: 'Hugh Deeny',
    images: [{ url: '/favicon.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hugh Deeny | Official Website',
    description: 'Official website of Hugh Deeny featuring music, videos, tour updates, and artist links.',
    images: ['/favicon.png'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://hughdeeny.com/#website',
      url: 'https://hughdeeny.com/',
      name: 'Hugh Deeny',
      description: 'Official website of Hugh Deeny featuring music, videos, tour updates, and artist links.',
      inLanguage: 'en',
    },
    {
      '@type': 'MusicGroup',
      '@id': 'https://hughdeeny.com/#musicgroup',
      name: 'Hugh Deeny',
      url: 'https://hughdeeny.com/',
      image: 'https://hughdeeny.com/favicon.png',
      sameAs: [
        'https://www.instagram.com/hughs_kitchen/',
        'https://open.spotify.com/artist/5ulaX0GxfCoTD8VvFVUJfw',
        'https://www.youtube.com/@huge.events.presents',
        'https://www.facebook.com/profile.php?id=61581829224363',
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://hughdeeny.com/#breadcrumbs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hughdeeny.com/' },
        { '@type': 'ListItem', position: 2, name: 'Music', item: 'https://hughdeeny.com/music' },
        { '@type': 'ListItem', position: 3, name: 'Videos', item: 'https://hughdeeny.com/videos' },
        { '@type': 'ListItem', position: 4, name: 'Tour', item: 'https://hughdeeny.com/tour' },
        { '@type': 'ListItem', position: 5, name: 'About', item: 'https://hughdeeny.com/about' },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
        <Script
          id="mcjs"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html:
              '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/cf4a7b9b9415e23f68938af3a/b926248415e089300138a4a27.js");',
          }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
