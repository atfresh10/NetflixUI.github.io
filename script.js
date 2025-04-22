const trailers = [
  { title: "Show 1", description: "An epic sci-fi adventure.", video: "assets/trailer1.mp4" },
  { title: "Show 2", description: "A heartwarming rom-com.", video: "assets/trailer2.mp4" },
  { title: "Show 3", description: "A gripping crime thriller.", video: "assets/trailer3.mp4" }
];

const feed = document.getElementById('trailer-feed');
const watchList = [];

trailers.forEach((trailer, index) => {
  const div = document.createElement('div');
  div.classList.add('trailer');

  const video = document.createElement('video');
  video.src = trailer.video;
  video.controls = false;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  const title = document.createElement('h2');
  title.innerText = trailer.title;

  const description = document.createElement('p');
  description.innerText = trailer.description;

  overlay.appendChild(title);
  overlay.appendChild(description);

  const controls = document.createElement('div');
  controls.classList.add('controls');

  const skipButton = document.createElement('button');
  skipButton.innerText = '⏩ Skip';
  skipButton.addEventListener('click', () => {
    alert(`Skipped ${trailer.title}`);
    feed.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  });

  const saveButton = document.createElement('button');
  saveButton.innerText = '✅ Save';
  saveButton.addEventListener('click', () => {
    watchList.push(trailer.title);
    alert(`${trailer.title} added to Watch List`);
    feed.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  });

  controls.appendChild(skipButton);
  controls.appendChild(saveButton);

  const watchListBtn = document.createElement('button');
  watchListBtn.innerText = '📋 View Watch List';
  watchListBtn.classList.add('watch-list-btn');
  watchListBtn.addEventListener('click', () => {
    alert('Your Watch List:\n' + (watchList.length ? watchList.join('\n') : 'No shows saved.'));
  });

  overlay.appendChild(watchListBtn);

  div.appendChild(video);
  div.appendChild(overlay);
  div.appendChild(controls);
  feed.appendChild(div);

  video.play().catch(err => console.warn("Autoplay failed:", err));
});

console.log("Watch List:", watchList);
