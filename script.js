window.addEventListener("load", () => {
  const trailers = [
    { title: "Show 1", video: "NetflixUI.github.io/assets/trailer1.mp4" },
    { title: "Show 2", video: "NetflixUI.github.io/assets/trailer2.mp4" },
    { title: "Show 3", video: "NetflixUI.github.io/assets/trailer3.mp4" }
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

    video.addEventListener('loadeddata', () => {
      video.play().catch(err => console.warn("Autoplay failed:", err));
    });

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

    div.appendChild(video);
    div.appendChild(controls);
    feed.appendChild(div);
  });

  console.log("Watch List:", watchList);
});
