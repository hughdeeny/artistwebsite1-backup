const socialLinks = {
  instagram: 'https://www.instagram.com/hughs_kitchen/',
  spotify: 'https://open.spotify.com/artist/5ulaX0GxfCoTD8VvFVUJfw',
  youtube: 'https://www.youtube.com/@huge.events.presents',
  facebook: 'https://www.facebook.com/profile.php?id=61581829224363',
};

export const siteContent = {
  copyrightHolder: 'Hugh Deeny',
  brandLogoUrl:
    '/images/Donni heat logo.png',
  homeHeroImageUrl: '/images/Hugh Deeny hero.png',
  homeHeroAlt: 'Artist promo photo',
  musicCoverImageUrl: '/images/Echoes from the fallout.png',
  musicCoverAlt: 'Echoes From The Fallout artwork',
  tourStatusText: 'No upcoming events.',
  tourEvents: [],
  socials: [
    { label: 'Instagram', href: socialLinks.instagram },
    { label: 'Spotify', href: socialLinks.spotify },
    { label: 'YouTube', href: socialLinks.youtube },
    { label: 'Facebook', href: socialLinks.facebook },
  ],
  tracks: [
    {
      title: 'Stream the latest release',
      href: 'https://open.spotify.com/album/2kS6jPrJH0J99ulbSUZBAa',
      linkLabel: 'LISTEN ON SPOTIFY',
      imageUrl: '/images/ACID single.png',
      imageAlt: 'Donni Heat ACID single artwork',
    },
    {
      title: 'Stream Mr Bean on Spotify',
      href: 'https://open.spotify.com/track/0udSaGjgkSiISuLL4MGSCJ',
      linkLabel: 'LISTEN ON SPOTIFY',
      imageUrl: '/images/hugh-deeny-mr-bean.png',
      imageAlt: 'Hugh Deeny Mr Bean artwork',
    },
  ],
  // For videos, you can use either full URLs or plain YouTube IDs.
  videos: [{ title: 'Watch "Mr Bean" Official Music Video', url: 'https://www.youtube.com/watch?v=QUDv88u0z7M' }],
};
