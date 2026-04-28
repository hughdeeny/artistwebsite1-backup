import { siteContent } from '../../lib/siteContent';

export const metadata = {
  title: 'Tour',
  description: 'Find upcoming Hugh Deeny live shows and tour updates.',
};

export default function TourPage() {
  return (
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
  );
}
