
// 'use client';

// import React, { useState } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';


// const videoData = [
//   {
//     type: 'youtube',
//     url: 'https://www.youtube.com/embed/TNoydh6wszw',
//     videoId: 'TNoydh6wszw',
//     text: 'CurePlus Hospitals: Bringing Quality Healthcare to Rural Communities.',
//   },
//   {
//     type: 'youtube',
//     url: 'https://www.youtube.com/embed/9kKsxSGWYDM',
//     videoId: '9kKsxSGWYDM',
//     text: 'Showcasing our state-of-the-art medical equipment and facilities.',
//   },
// ];

// const VideoCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     const isFirstVideo = currentIndex === 0;
//     const newIndex = isFirstVideo ? videoData.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = () => {
//     const isLastVideo = currentIndex === videoData.length - 1;
//     const newIndex = isLastVideo ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToVideo = (videoIndex: number) => {
//     setCurrentIndex(videoIndex);
//   }

//   const currentVideo = videoData[currentIndex];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-4xl mx-auto px-6 text-center">
//         <h2 className="text-4xl font-extrabold text-purple-800 mb-4">
//           Patient Stories & Highlights
//         </h2>
//         {/* <p className="text-lg text-gray-600 mb-10">
//           See the impact we make every day through the eyes of our patients and staff.
//         </p> */}

//         {/* Video Player Area */}
//         <div className="relative w-full aspect-video rounded-2xl shadow-xl overflow-hidden bg-black">
//           <AnimatePresence initial={false}>
//             {/* Conditional rendering for YouTube vs. Native Video */}
//             {currentVideo.type === 'youtube' ? (
//               <motion.iframe
//                 key={currentIndex}
//                 src={`${currentVideo.url}?autoplay=1&mute=1&loop=1&playlist=${currentVideo.url.split('/').pop()}`}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full h-full"
//                 title="YouTube video player"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             ) : (
//               <motion.video
//                 key={currentIndex}
//                 src={currentVideo.url}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full h-full object-cover"
//                 controls={false} // controls are hidden for a cleaner look
//                 autoPlay
//                 muted
//                 loop
//               />
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Text Below Video */}
//         <div className="mt-6 min-h-[50px]">
//             <AnimatePresence mode="wait">
//                  <motion.p
//                     key={currentIndex}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.3 }}
//                     className="text-xl text-gray-700 font-medium"
//                 >
//                     {currentVideo.text}
//                 </motion.p>
//             </AnimatePresence>
//         </div>

//         {/* Navigation Controls */}
//         <div className="flex justify-center items-center gap-3 mt-8">
//             <button
//                 onClick={goToPrevious}
//                 className="bg-purple-100 hover:bg-purple-200 text-purple-700 p-3 rounded-lg transition"
//                 aria-label="Previous video"
//             >
//                 <FaChevronLeft size={16} />
//             </button>
//             <div className="flex items-center gap-2">
//                 {videoData.map((_, videoIndex) => (
//                     <button
//                         key={videoIndex}
//                         onClick={() => goToVideo(videoIndex)}
//                         className={`w-3 h-3 rounded-full transition ${currentIndex === videoIndex ? 'bg-purple-600' : 'bg-purple-200 hover:bg-purple-300'}`}
//                         aria-label={`Go to video ${videoIndex + 1}`}
//                     />
//                 ))}
//             </div>
//             <button
//                 onClick={goToNext}
//                 className="bg-purple-100 hover:bg-purple-200 text-purple-700 p-3 rounded-lg transition"
//                 aria-label="Next video"
//             >
//                 <FaChevronRight size={16} />
//             </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoCarousel;
'use client';

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// The unique text content is now part of the data for each video
const videoData = [
  {
    type: 'youtube',
    url: 'https://www.youtube.com/embed/TNoydh6wszw',
    videoId: 'TNoydh6wszw',
    title: 'CurePlus Hospitals – Stories of Healing & Hope',
    subheading: 'Delivering Expert, Affordable Healthcare Across Karnataka',
    description: 'CurePlus Hospitals is transforming rural healthcare in Karnataka with accessible, quality care that changes lives.',
  },
  {
    type: 'youtube',
    url: 'https://www.youtube.com/embed/9kKsxSGWYDM',
    videoId: '9kKsxSGWYDM',
    title: 'A New Chapter for CurePlus Hospitals',
    subheading: 'Continuing the Legacy of Care for Generations.',
    description: 'Construction of our new CurePlus Hospital has begun, reinforcing our commitment to advanced, compassionate healthcare for generations to come.',
  },
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videoData.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === videoData.length - 1 ? 0 : prevIndex + 1));
  };

  const goToVideo = (videoIndex: number) => {
    setCurrentIndex(videoIndex);
  };

  const currentVideo = videoData[currentIndex];

  return (
    <section id="video" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main Section Title (This remains the same) */}
        <h2 className="text-4xl font-extrabold text-purple-800 mb-12">
          Patient Stories & Highlights
        </h2>

        {/* Video Player Area */}
        <div className="relative w-full aspect-video rounded-2xl shadow-xl overflow-hidden bg-black">
          <AnimatePresence initial={false}>
            <motion.iframe
              key={currentIndex}
              src={`${currentVideo.url}?autoplay=1&mute=1&loop=1&playlist=${currentVideo.videoId}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AnimatePresence>
        </div>

        {/* DYNAMIC TEXT AREA BENEATH VIDEO */}
        <div className="mt-8 min-h-[150px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-purple-800">
                {currentVideo.title}
              </h3>
              <h4 className="text-lg font-semibold text-purple-600 mt-1">
                {currentVideo.subheading}
              </h4>
              <p className="text-md text-gray-600 mt-3 max-w-2xl mx-auto">
                {currentVideo.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-3 mt-8">
          <button
            onClick={goToPrevious}
            className="bg-purple-100 hover:bg-purple-200 text-purple-700 p-3 rounded-lg transition"
            aria-label="Previous video"
          >
            <FaChevronLeft size={16} />
          </button>
          <div className="flex items-center gap-2">
            {videoData.map((_, videoIndex) => (
              <button
                key={videoIndex}
                onClick={() => goToVideo(videoIndex)}
                className={`w-3 h-3 rounded-full transition ${currentIndex === videoIndex ? 'bg-purple-600' : 'bg-purple-200 hover:bg-purple-300'}`}
                aria-label={`Go to video ${videoIndex + 1}`}
              />
            ))}
          </div>
          <button
            onClick={goToNext}
            className="bg-purple-100 hover:bg-purple-200 text-purple-700 p-3 rounded-lg transition"
            aria-label="Next video"
          >
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
