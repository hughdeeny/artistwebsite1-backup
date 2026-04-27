import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { siteContent } from './hughdeeny2';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Music', to: '/music' },
  { label: 'Videos', to: '/videos' },
  { label: 'Tour', to: '/tour' },
  { label: 'About', to: '/about' },
];

function getYouTubeId(value) {
  if (!value) {
    return null;
  }

  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) {
    return value;
  }

  try {
    const url = new URL(value);
    if (url.hostname.includes('youtu.be')) {
      return url.pathname.replace('/', '') || null;
    }
    return url.searchParams.get('v');
  } catch {
    return null;
  }
}

function App() {
  const videos = siteContent.videos
    .map((video) => {
      const videoId = getYouTubeId(video.url || video.id);
      if (!videoId) {
        return null;
      }

      // Prefer WebP maxres, then JPG maxres, then SD (640-wide) before HQ — avoids
      // jumping straight to low-res hqdefault when maxres is missing or errors.
      const thumbUrlList = [
        `https://i.ytimg.com/vi_webp/${videoId}/maxresdefault.webp`,
        `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
        `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`,
        `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      ];

      return {
        ...video,
        id: videoId,
        watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
        thumbUrlList,
      };
    })
    .filter(Boolean);

  return (
    <BrowserRouter>
      <div className="site">
        <header className="top-nav">
          <h1 className="brand-wordmark">HUGH DEENY</h1>
          <nav aria-label="Primary">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className={({ isActive }) => (isActive ? 'active' : undefined)} end={item.to === '/'}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="page-wrap">
          <Routes>
            <Route
              path="/"
              element={
                <section className="hero-page">
                  <img className="hero-image" src={siteContent.homeHeroImageUrl} alt={siteContent.homeHeroAlt} />
                </section>
              }
            />
            <Route
              path="/about"
              element={
                <section className="content-page">
                  <h2 className="page-title">About</h2>
                  <p>Hugh Deeny is an artist, producer, and performer.</p>
                </section>
              }
            />
            <Route
              path="/music"
              element={
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
              }
            />
            <Route
              path="/videos"
              element={
                <section className="content-page">
                  <h2 className="page-title">Videos</h2>
                  <ul className="video-grid">
                    {videos.map((video) => (
                      <li key={video.id} className="video-card">
                        <a className="video-thumb-link" href={video.watchUrl} target="_blank" rel="noreferrer">
                          <img
                            className="video-thumb"
                            src={video.thumbUrlList[0]}
                            alt={`${video.title} thumbnail`}
                            width={1280}
                            height={720}
                            loading="lazy"
                            decoding="async"
                            data-thumb-idx="0"
                            data-thumb-urls={JSON.stringify(video.thumbUrlList)}
                            onError={(event) => {
                              const img = event.currentTarget;
                              const urls = JSON.parse(img.dataset.thumbUrls || '[]');
                              const nextIdx = Number(img.dataset.thumbIdx || 0) + 1;
                              if (nextIdx < urls.length) {
                                img.dataset.thumbIdx = String(nextIdx);
                                img.src = urls[nextIdx];
                              } else {
                                img.onerror = null;
                              }
                            }}
                          />
                          <span className="video-play-pill">Watch</span>
                        </a>
                        <h3>{video.title}</h3>
                        <a className="action-button" href={video.watchUrl} target="_blank" rel="noreferrer">
                          Watch on YouTube
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              }
            />
            <Route
              path="/tour"
              element={
                <section className="content-page">
                  <h2 className="page-title">Tour</h2>
                  {siteContent.tourEvents && siteContent.tourEvents.length > 0 ? (
                    <ul className="tour-list">
                      {siteContent.tourEvents.map((event) => (
                        <li key={`${event.date}-${event.city}-${event.venue}`} className="tour-item">
                          {event.imageUrl ? (
                            <img className="tour-item-image" src={event.imageUrl} alt={event.imageAlt || `${event.venue} poster`} />
                          ) : null}
                          <div className="tour-item-bottom">
                            <div className="tour-item-details">
                              <h3>{`${event.date} - ${event.city} - ${event.venue}`}</h3>
                            </div>
                            <a className="action-button" href={event.href} target="_blank" rel="noreferrer">
                              {event.linkLabel || 'Tickets'}
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <h3>{siteContent.tourStatusText}</h3>
                  )}
                </section>
              }
            />
          </Routes>
        </main>

        <ul className="social-list">
          {siteContent.socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <footer className="site-footer">
          Copyright © {siteContent.copyrightHolder}
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
