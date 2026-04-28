import { siteContent } from '../lib/siteContent';

export default function HomePage() {
  return (
    <section className="hero-page">
      <h2 className="visually-hidden">Official Website of Hugh Deeny</h2>
      <img className="hero-image" src={siteContent.homeHeroImageUrl} alt={siteContent.homeHeroAlt} />
      <p className="home-intro">Official website of Hugh Deeny. Explore music, videos, tour updates, and artist links.</p>
    </section>
  );
}
