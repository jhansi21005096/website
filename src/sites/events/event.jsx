import './event.css';
import event1 from '/Users/jhansi/pages/react/src/sites/events/event1.jpeg'
import event2 from '/Users/jhansi/pages/react/src/sites/events/event2.jpg'
import event3 from '/Users/jhansi/pages/react/src/sites/events/event3.jpeg'
import event4 from '/Users/jhansi/pages/react/src/sites/events/event4.jpg'
import event5 from '/Users/jhansi/pages/react/src/sites/events/event5.jpeg'
const events =  [
    { name: 'Sports Day', image: event1, description: 'An exciting day of sports activities and competitions.' },
    { name: 'Art Exhibition', image: event2, description: 'A display of the finest art from upcoming artists.' },
    { name: 'Music Fest', image: event3, description: 'A weekend filled with music from top bands and artists.' },
    { name: 'Science Fair 2024', image: event4, description: 'A showcase of the latest scientific discoveries and projects by students.' },
    { name: 'Tech Conference 2024', image: event5, description: 'An annual tech conference with the latest in technology and innovation.' },
  ];
  
const Events = () => {
  return (
    <div>
      <h1>Events</h1>
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.name} />
            <h2>{event.name}</h2>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;