const ATTRIBUTE_NAME = "reveal";
const DISTANCE_FROM_BOTTOM_TO_REVEAL = `200px`;

const revealHandler = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target.hasAttribute(ATTRIBUTE_NAME)) {
      entry.target.classList.add('revealed');
      // only reveal once
      entry.target.removeAttribute(ATTRIBUTE_NAME);
    }
  });
};

const revealObserver = new IntersectionObserver(revealHandler, {
  rootMargin: `0px 0px -${DISTANCE_FROM_BOTTOM_TO_REVEAL} 0px`
});

[...document.querySelectorAll(`[${ATTRIBUTE_NAME}]`)].forEach((el) => revealObserver.observe(el));
