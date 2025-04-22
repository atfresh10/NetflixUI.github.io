const trailers = [
  {
    title: "Cyber Drift",
    genre: "Sci-Fi",
    video: "https://cdn.pixabay.com/video/2023/03/13/156041-809124616_large.mp4"
  },
  {
    title: "Love on the Move",
    genre: "Romantic Comedy",
    video: "https://cdn.pixabay.com/video/2023/03/15/156192-809385196_large.mp4"
  },
  {
    title: "Deadline",
    genre: "Thriller",
    video: "https://cdn.pixabay.com/video/2023/04/24/158486-818049842_large.mp4"
  },
  {
    title: "Tiny Planet",
    genre: "Nature Doc",
    video: "https://cdn.pixabay.com/video/2022/10/31/135984-763797062_large.mp4"
  },
  {
    title: "Pixel Raiders",
    genre: "Animated Action",
    video: "https://cdn.pixabay.com/video/2022/11/02/136065-764061088_large.mp4"
  },
  {
    title: "Neon Knights",
    genre: "Cyberpunk",
    video: "https://cdn.pixabay.com/video/2023/04/02/157570-816348446_large.mp4"
  }
];


const feed = document.getElementById('trailer-feed');
const watchList = [];

trailers.forEach((trailer, index) => {
  const div = document.createElement('div');
  div.classList.add('trailer');

  const video = document.createElement('video');
  video.src = trailer.video;
  video.controls = true;
  video.autoplay = false;
  video.loop = true;

  // Add swipe detection
  let startX = 0;
  video.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });

  video.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    
    if (diff > 75) {
      // Swipe Right = Save
      watchList.push(trailer.title);
      alert(`${trailer.title} added to Watch List`);
    } else if (diff < -75) {
      // Swipe Left = Skip
      alert(`Skipped ${trailer.title}`);
    }
  });

  div.appendChild(video);
  feed.appendChild(div);
});

console.log("Watch List:", watchList);
