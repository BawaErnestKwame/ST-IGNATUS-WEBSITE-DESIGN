import React from "react";
import image from "../../assets/whoweareimg1.webp";
import media from "../../assets/whoweareimage2.jpg";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const WhoWeAre = () => {
  return (
    <div className="px-4 md:px-8 lg:px-24 bg-white">
      {/* Text Section */}
      <div className="max-w-4xl mb-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-10">
          Let's Know Short Story About Medilink Central Hospital.
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc
          iquam class bibendum non mattis fusccut perspiciatis undelustque.
          Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam
          class bibendum mattis fusceut persecenas. Quisque. Maecenas. Eros mus.
          Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis
          fusccut perspiciatis undelustque.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Left small image */}
        <img
          src={image}
          alt="Our Team"
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
        />

        {/* Right image with overlay play icon */}
        <div className="relative w-full md:w-2/3 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={media}
            alt="Hospital Video"
            className="w-full object-cover rounded-2xl"
          />

          {/* Play Icon Overlay */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <button className="text-white hover:scale-110 transition-transform">
              <PlayCircleIcon sx={{ fontSize: 80 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
