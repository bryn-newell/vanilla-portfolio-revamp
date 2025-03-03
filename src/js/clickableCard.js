// Code inspiration and concept from https://inclusive-components.design/cards/
const clickableCard = () => {
  const cards = document.querySelectorAll('.card__clickable')

  cards.forEach(card => {
    let down;
    let up;
    const link = card.querySelector('a');
    card.onmousedown = () => { down = +new Date() };
    card.onmouseup = () => {
      up = +new Date();
      if ((up - down) < 200) {
        link.click();
      }
    }
    // adding styles with JS because they're not necessary if the JS doesn't load
    card.style.cursor = 'pointer';
  });


};

document.addEventListener("DOMContentLoaded", () => {
  clickableCard();
});

