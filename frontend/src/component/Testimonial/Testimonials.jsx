import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const testimonialsData = [
  {
    img: ava01,
    name: "John Doe",
    role: "Customer",
    text: "Our trip to Santorini was absolutely magical! The views were stunning and the service was top-notch. Highly recommended for couples and families alike."
  },
  {
    img: ava02,
    name: "Jane Smith",
    role: "Customer",
    text: "London's Westminster Bridge tour was a wonderful experience. The guide was knowledgeable and made the history come alive. Will definitely book again!"
  },
  {
    img: ava03,
    name: "Alex Johnson",
    role: "Customer",
    text: "Bali exceeded all my expectations. The beaches, culture, and food were incredible. Thank you for making my vacation unforgettable!"
  },
  {
    img: ava02,
    name: "Emily Wilson",
    role: "Customer",
    text: "The cherry blossom season in Tokyo was breathtaking. Everything was perfectly organized and the local experiences were unique."
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {testimonialsData.map((item, index) => (
        <div className="testimonial py-4 px-3" key={index}>
          <p>{item.text}</p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img
              src={item.img}
              className="w-25 h-25 rounded-2"
              alt={`testimonial-${item.name}`}
            />
            <div>
              <h6 className="mb-0 mt-3">{item.name}</h6>
              <p>{item.role}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials;
