const $activeElements = document.querySelectorAll('.rate');
const $buttonsRate = document.querySelectorAll('#rate');

function handleRate() {
  $buttonsRate.forEach((button) => {
    const rateValue = button.value;

    button.addEventListener('click', () => {
      window.localStorage.setItem('selectedRate', rateValue);

      console.log($activeElements);

      $activeElements.forEach((el) => {
        el.classList.remove('active');
      });
      button.classList.add('active');
    });
  });
}

handleRate();
