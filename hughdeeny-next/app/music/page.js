import { siteContent } from '../../lib/siteContent';

export const metadata = {
  title: 'Music',
  description: 'Stream Hugh Deeny music and latest releases on Spotify.',
};

export default function MusicPage() {
  return (
    <section className="content-page">
      <h2 className="page-title">Music</h2>
      <ul className="music-list">
        {siteContent.tracks.map((track) => (
          <li key={track.title} className="music-item">
            <img
              className="music-item-image"
              src={track.imageUrl || siteContent.musicCoverImageUrl}
              alt={track.imageAlt || siteContent.musicCoverAlt}
              loading="lazy"
            />
            <div className="music-item-content">
              <h3>{track.title}</h3>
              <a className="action-button" href={track.href} target="_blank" rel="noreferrer">
                {track.linkLabel || 'LISTEN'}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
