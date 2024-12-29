import React, { useState, useEffect } from 'react';

export default function Home() {
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({
    date: '',
    category: '',
  });
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    visibility: 'Public',
  });

  // Retrieve events from localStorage when the component mounts
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(savedEvents);
  }, []);

  // Save events to localStorage whenever the events state changes
  useEffect(() => {
    if (events.length > 0) {
      localStorage.setItem('events', JSON.stringify(events));
    }
  }, [events]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEventCreate = (e) => {
    e.preventDefault();

    const newEventWithId = {
      ...newEvent,
      id: events.length + 1, // Assuming the ID is the next available number
    };

    setEvents((prevEvents) => [...prevEvents, newEventWithId]);

    // Clear the form after submission
    setNewEvent({
      title: '',
      description: '',
      date: '',
      location: '',
      visibility: 'Public',
    });
  };

  const filteredEvents = events.filter((event) => {
    const matchesDate = filters.date ? event.date === filters.date : true;
    const matchesCategory = filters.category ? event.category === filters.category : true;
    return matchesDate && matchesCategory;
  });

  return (
    <div>
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={headerStyle}>Upcoming Events</h2>

          {/* Image Section after Header */}
          <div style={imageContainerStyle}>
            <img
              src="https://www.grindingsolutions.com/wp-content/uploads/2018/01/Portugal-Seminar-1200-x-400.jpg"
              alt="Event Showcase"
              style={imageStyle}
            />
          </div>

          {/* Filters Section */}
          <div style={filtersSectionStyle}>
            <input
              type="date"
              name="date"
              value={filters.date}
              onChange={handleFilterChange}
              style={filterInputStyle}
            />
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              style={filterInputStyle}
            >
              <option value="">Select Category</option>
              <option value="Tech">Tech</option>
              <option value="Music">Music</option>
              <option value="Sports">Sports</option>
            </select>
          </div>

          {/* Event Cards */}
          <div style={eventsContainerStyle}>
            {filteredEvents.map((event) => (
              <div key={event.id} style={eventCardStyle}>
                <div style={eventImageContainerStyle}>
                  <img
                    src="https://via.placeholder.com/400x250"
                    alt={event.title}
                    style={eventImageStyle}
                  />
                </div>
                <h3 style={eventTitleStyle}>{event.title}</h3>
                <p style={eventDescriptionStyle}>{event.description}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <button
                  style={eventButtonStyle}
                  onClick={() => alert(`More about ${event.title}`)}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Event Creation Section */}
          <div style={createEventSectionStyle}>
            <h3>Create a New Event</h3>
            <form style={eventFormStyle} onSubmit={handleEventCreate}>
              <input
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleEventChange}
                placeholder="Event Title"
                style={eventInputStyle}
              />
              <textarea
                name="description"
                value={newEvent.description}
                onChange={handleEventChange}
                placeholder="Event Description"
                style={eventInputStyle}
              ></textarea>
              <input
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleEventChange}
                style={eventInputStyle}
              />
              <input
                type="text"
                name="location"
                value={newEvent.location}
                onChange={handleEventChange}
                placeholder="Location"
                style={eventInputStyle}
              />
              <select
                name="visibility"
                value={newEvent.visibility}
                onChange={handleEventChange}
                style={eventInputStyle}
              >
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
              <button type="submit" style={createEventButtonStyle}>Create Event</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// Styles for the page
const sectionStyle = {
  padding: '3rem 1rem',
  background: '#f4f4f4',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const headerStyle = {
  textAlign: 'center',
  fontSize: '2.5rem',
  marginBottom: '2rem',
};

const imageContainerStyle = {
  marginBottom: '2rem',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
};

const filtersSectionStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2rem',
};

const filterInputStyle = {
  padding: '0.75rem',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  margin: '0 1rem',
};

const eventsContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '1rem',
};

const eventCardStyle = {
  background: '#fff',
  padding: '1rem',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const eventImageContainerStyle = {
  overflow: 'hidden', // Ensures that the image doesn't overflow the container
  borderRadius: '8px',
  height: '200px', // Fixed height for the image container
  width: '100%', // Ensure it takes up the full width of the card
};

const eventImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Ensures the image covers the container area
};

const eventTitleStyle = {
  marginTop: '1rem',
  fontSize: '1.5rem',
};

const eventDescriptionStyle = {
  color: '#777',
};

const eventButtonStyle = {
  marginTop: '1rem',
  padding: '0.75rem',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const createEventSectionStyle = {
  marginTop: '3rem',
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const eventFormStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const eventInputStyle = {
  padding: '0.75rem',
  margin: '0.5rem 0',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const createEventButtonStyle = {
  padding: '0.75rem',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: '1rem',
};
