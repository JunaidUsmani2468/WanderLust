// Rating Stars:
let stars = document.querySelectorAll('.rating-star');
let inputField = document.getElementById('rating-value');

if (stars.length > 0) {
  updateFilledStars(3);

  stars.forEach((star) => {
    star.addEventListener('click', () => {
      let ratingValue = star.getAttribute('data-value');

      if (inputField) {
        inputField.value = ratingValue;
      }

      updateFilledStars(ratingValue);
    });
  });
}

function updateFilledStars(value) {
  stars.forEach((star) => {
    let starValue = star.getAttribute('data-value');

    if (starValue <= value) {
      star.classList.remove('fa-regular');
      star.classList.add('fa-solid');

    } else {
      star.classList.remove('fa-solid');
      star.classList.add('fa-regular');
    }
  });
}