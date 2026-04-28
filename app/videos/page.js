import { siteContent } from '../../lib/siteContent';

export const metadata = {
  title: 'Videos',
  description: 'Watch official Hugh Deeny videos and latest visual releases.',
};

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

export default function VideosPage() {
  const videos = siteContent.videos
    .map((video) => {
      const videoId = getYouTubeId(video.url || video.id);
      if (!videoId) {
        return null;
      }
      return {
        ...video,
        id: videoId,
        watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
        thumbUrl: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
      };
    })
    .filter(Boolean);

  return (
    <section className="content-page">
      <h2 className="page-title">Videos</h2>
      <ul className="video-grid">
        {videos.map((video) => (
          <li key={video.id} className="video-card">
            <a className="video-thumb-link" href={video.watchUrl} target="_blank" rel="noreferrer">
              <img className="video-thumb" src={video.thumbUrl} alt={`${video.title} thumbnail`} width={1280} height={720} loading="lazy" />
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
  );
}
