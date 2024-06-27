// src/components/Videos.js
import React from "react";
import "./Videos.css";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Types of Welding",
      src: "https://www.youtube.com/embed/EEZoYX-9fuU", // YouTube embed URL
    },
    {
      id: 2,
      title: "What is MIG Welding?",
      src: "https://www.youtube.com/embed/RWTEnqIjHZ0", // YouTube embed URL
    },
    {
      id: 3,
      title: "Types of Welding 2",
      src: "https://www.youtube.com/embed/3Px8nsCI8aU", // YouTube embed URL
    },
    {
      id: 4,
      title: "Types of Welding 3",
      src: "https://www.youtube.com/embed/3Px8nsCI8aU", // YouTube embed URL
    },
    // Add more videos as needed
  ];

  return (
    <div className="videos-section">
      <h2>Videos</h2>
      <div className="videos-container">
        {videos.map((video) => (
          <div className="video-item" key={video.id}>
            {video.src.includes("youtube.com") ? (
              <iframe
                width="100%"
                height="315"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video controls>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
