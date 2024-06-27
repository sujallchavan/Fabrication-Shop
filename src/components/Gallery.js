import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  const images = [
    { id: 1, src: "/img/img1.jpg", title: "Image 1" },
    { id: 2, src: "/img/img2.jpg", title: "Image 2" },
    { id: 3, src: "/img/img3.jpg", title: "Image 3" },
    { id: 4, src: "/img/img4.jpg", title: "Image 4" },
    { id: 5, src: "/img/img5.jpg", title: "Image 5" },
    { id: 6, src: "/img/img6.jpg", title: "Image 6" },
    { id: 7, src: "/img/img7.jpg", title: "Image 7" },
    { id: 8, src: "/img/img8.jpg", title: "Image 8" },
    { id: 9, src: "/img/img4.jpg", title: "Image 9" },
    { id: 10, src: "/img/img8.jpg", title: "Image 10" },
  ];

  const showMoreImages = () => {
    setVisibleImages(images.length);
    setIsExpanded(true);
  };

  const showLessImages = () => {
    setVisibleImages(6);
    setIsExpanded(false);
  };

  return (
    <div className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-container">
        {images.slice(0, visibleImages).map((image) => (
          <div className="gallery-item" key={image.id}>
            <img src={image.src} alt={image.title} />
          </div>
        ))}
      </div>
      {!isExpanded && visibleImages < images.length && (
        <button className="view-more-button" onClick={showMoreImages}>
          View More
        </button>
      )}
      {isExpanded && (
        <button className="view-more-button" onClick={showLessImages}>
          Show Less
        </button>
      )}
    </div>
  );
};

export default Gallery;
