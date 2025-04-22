const trailers = [
  { title: "Show 1", video: "assets/trailer1.mp4" },
  { title: "Show 2", video: "assets/trailer2.mp4" },
  { title: "Show 3", video: "assets/trailer3.mp4" }
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
