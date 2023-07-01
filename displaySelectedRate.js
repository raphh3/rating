function displaySelectedRate() {
  const selectedRate = window.localStorage.getItem('selectedRate');
  const $result = document.getElementById('resultat');

  $result.innerHTML = `You selected ${selectedRate} of 5`;
}

displaySelectedRate();
