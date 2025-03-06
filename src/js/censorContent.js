const censorContent = () => {
  document.getElementById('censorship-button').onclick = () => {
    const swears = document.querySelectorAll('.swear');
    const isCensored = swears?.[0].classList.contains('censored');
    const censorSentence = document.querySelector('.censor-sentence');

    if (isCensored) {
      // Remove the censoring on click
      swears.forEach(swear => {
        swear.classList.remove('censored')
      })
      censorSentence.innerText = 'If you’d like the censored version you can '
    } else {
      // Add the censoring on click
      swears.forEach(swear => {
        swear.classList.add('censored')
      })
      censorSentence.innerText = 'If you\'re fine with a little swearing you can '
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  censorContent();
});
