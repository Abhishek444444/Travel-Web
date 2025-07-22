import React from 'react';
import TourCard from '../shared/TourCard';
import { Col } from 'reactstrap';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

// Static featured tours data
const featuredTours = [
  {
    _id: '1',
    title: 'Santorini, Greece',
    city: 'Santorini',
    photo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    price: 120,
    featured: true,
    description: 'Experience the breathtaking sunsets, white-washed buildings, and crystal-clear waters of Santorini. Perfect for romantic getaways and unforgettable memories.',
    reviews: [
      { rating: 5, comment: 'Amazing!' },
      { rating: 4, comment: 'Beautiful place.' }
    ]
  },
  {
    _id: '2',
    title: 'Westminster Bridge',
    city: 'London',
    photo: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    price: 99,
    featured: true,
    description: 'Discover the iconic sights of London from Westminster Bridge, with stunning views of Big Ben and the River Thames. Ideal for history lovers and city explorers.',
    reviews: [
      { rating: 4, comment: 'Nice view.' }
    ]
  },
  {
    _id: '3',
    title: 'Bali, Indonesia',
    city: 'Bali',
    photo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
    price: 110,
    featured: true,
    description: 'Relax on the beautiful beaches of Bali, enjoy vibrant culture, and explore lush jungles. A paradise for surfers, adventurers, and those seeking tranquility.',
    reviews: [
      { rating: 5, comment: 'Paradise!' }
    ]
  },
  {
    _id: '4',
    title: 'Snowy Mountains',
    city: 'Switzerland',
    photo: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    price: 150,
    featured: true,
    description: 'Explore the majestic Swiss Alps, famous for their snowy peaks, scenic trails, and world-class skiing. Perfect for winter sports and nature enthusiasts.',
    reviews: [
      { rating: 5, comment: 'Breathtaking!' }
    ]
  },
  {
    _id: '5',
    title: 'Cherry Blossoms Spring',
    city: 'Tokyo',
    photo: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    price: 130,
    featured: true,
    description: 'Witness the magical cherry blossom season in Tokyo, where parks and streets are transformed into a sea of pink. A must-see for photographers and nature lovers.',
    reviews: [
      { rating: 4, comment: 'So pretty!' }
    ]
  },
  {
    _id: '6',
    title: 'Holmen Lofoten',
    city: 'Norway',
    photo: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80',
    price: 140,
    featured: true,
    description: 'Journey to the dramatic landscapes of Lofoten, Norway, with its rugged mountains, deep fjords, and charming fishing villages. Ideal for adventure seekers and photographers.',
    reviews: [
      { rating: 5, comment: 'Unique experience.' }
    ]
  }
];

const FeaturedTourList = ({ useBackend = false }) => {
  // Fetch from backend if useBackend is true
  const { data, loading, error } = useFetch(`${BASE_URL}/tours/featured`);
  const tours = useBackend ? data : featuredTours;

  return (
    <>
      {useBackend && loading && <h4>Loading...</h4>}
      {useBackend && error && <h4 className="text-danger">{error}</h4>}
      {tours && tours.map((tour) => (
        <Col
          lg="3"
          md="6"
          sm="6"
          className="mb-4"
          key={tour._id}
        >
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;