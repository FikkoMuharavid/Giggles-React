import { useParams } from "react-router-dom";
import { GaleryJson } from "../api/galeryApi";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Carousel from "../components/Carousel";
import "../styles/gallery-detail.css";
import Navbar from "../components/NavbarGuest";
import Footer from "../components/Footer";

const GalleryDetail = () => {
  const params = useParams();
  const id = params.id;
  const [loading, setLoading] = useState(true);
  const [galery, setGalery] = useState({});
  const [galeries, setGaleries] = useState([]);

  useEffect(() => {
    setGaleries(GaleryJson.getAllData());
  }, []);

  const reviews = [
    {
      name: "Fikko Muharavid",
      rating: 5,
      review:
        "I will design a beautiful website for your business, I will help you.",
    },
    // Add more reviews as needed
  ];

  useEffect(() => {
    const galeryDetail = GaleryJson.getById(id);
    setGalery(galeryDetail);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Loading . . .</div>;
  }

  return (
    <section>
      <Navbar />
      <div className="gallery-detail">
        <div className="gallery-profile">
          <div className="profile-header">
            <img
              alt="profile"
              className="profile-picture"
              src="/images/profile.png"
            />
            <h3 className="profile-name">Kylie Jenner - Designer</h3>
            <button className="collaborate-button">Let's Collaborate</button>
          </div>

          <div className="gallery-main-image">
            <img
              alt="main"
              className="main-image"
              src="/images/category/detail.png"
            />
          </div>

          <div className="gallery-header">
            <h2 className="gallery-title">{galery.name}</h2>
            <div className="gallery-icons">
              <img
                src="/images/category/Collection.png"
                className="gallery-icon"
                alt="share"
              />
              <img
                src="/images/category/Share.png"
                className="gallery-icon"
                alt="share"
              />
              <img
                src="/images/category/Edite.png"
                className="gallery-icon"
                alt="share"
              />
            </div>
          </div>

          <p className="gallery-description">
            By creating a visual guide along the way, the designer or developer
            can get input from the other people involved in the website such as
            the customer, their manager, and other members of the team.
          </p>
        </div>
      </div>

      <div className="reviews-section">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-content">
              <img
                alt="profile"
                className="review-profile-picture"
                src="/images/profile.png"
              />
              <div className="review-details">
                <h4 className="reviewer-name">{review.name}</h4>
                {Array.from({ length: review.rating }, (_, i) => (
                  <FaStar key={i} className="review-star" />
                ))}
                <p className="review-text">{review.review}</p>
              </div>
              <p className="review-date">June 15, 11:30 AM</p>
            </div>
          </div>
        ))}
      </div>

      <div className="more-designs-section">
        <h1 className="more-designs-title">See more design by Kylie</h1>
      </div>

      <div className="carousel-section">
        <Carousel
          items={[
            { text: "Mobile App", image: "/images/recents/image.png" },
            { text: "Desktop App", image: "/images/recents/image-1.png" },
            { text: "Web App", image: "/images/recents/image-2.png" },
          ]}
        />
      </div>

      <Footer />
    </section>
  );
};

export default GalleryDetail;
