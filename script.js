const trailers = [
  {
    title: "Duckscape",
    description: "In a bustling concrete jungle, one brave duck waddles its way through chaos, predators, and pizza crusts in a fight for survival.",
    video: "assets/trailer1.mp4",
    categories: ["comedy"],
    rating:3
  },
  {
    title: "Full Throttle: Charger Run",
    description: "A street racer and his faithful dog take on the city's underworld at 200 mph in a roaring Dodge Charger. Loyalty, speed, and chrome collide.",
    video: "assets/trailer2.mp4",
    categories: ["comedy","racer"],
    rating:2
  },
  {
    title: "Singularity Protocol",
    description: "When AI becomes self-aware and seizes control, humanity must outthink its own creation before extinction becomes inevitable.",
    video: "assets/trailer3.mp4",
    categories: ["dystopian","thriller"],
    rating:4
  }
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

  const categoryContainer = document.createElement('div');
  categoryContainer.classList.add('categories');

  trailer.categories.forEach(cat => {
    const bubble = document.createElement('span');
    bubble.classList.add('category-bubble');
    bubble.innerText = cat;
    categoryContainer.appendChild(bubble);
  });

  const rating = document.createElement('div');
  rating.classList.add('rating');
  rating.innerHTML = '★'.repeat(trailer.rating) + '☆'.repeat(5 - trailer.rating);

  const description = document.createElement('p');
  description.innerText = trailer.description;

  overlay.appendChild(title);
  overlay.appendChild(categoryContainer);
  overlay.appendChild(description);
  overlay.appendChild(rating);

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

  const watchListBtn = document.createElement('button');
  watchListBtn.innerText = '📋 View Watch List';
  watchListBtn.classList.add('watch-list-btn');
  watchListBtn.addEventListener('click', () => {
    alert('Your Watch List:\n' + (watchList.length ? watchList.join('\n') : 'No shows saved.'));
  });

  controls.appendChild(skipButton);
  controls.appendChild(saveButton);
  controls.appendChild(watchListBtn);

  overlay.appendChild(controls);
  div.appendChild(video);
  div.appendChild(overlay);
  feed.appendChild(div);

  video.play().catch(err => console.warn("Autoplay failed:", err));
});

console.log("Watch List:", watchList);
