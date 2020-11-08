const trigger = document.querySelector('#infinite-scroll-trigger');

const options = {
  root: null,
  threshold: 0.5
}

const intersectionCallback = (entries) => {
  for (entry of entries) {
    if (entry.intersectionRatio > 0) {
      console.log('Intersection Observer');
    }
  }
}

const observer = new IntersectionObserver(intersectionCallback, options);
observer.observe(trigger);