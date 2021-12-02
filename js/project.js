let coronavirus = new getCoronavirusData();
let newConfirmedElement = document.querySelector(".new-confirmed span");
let totalConfirmedElement = document.querySelector(".total-confirmed span");
let newDeathsElement = document.querySelector(".new-deaths span");
let totalDeathsElement = document.querySelector(".total-deaths span");
let newRecoveredElement = document.querySelector(".new-recovered span");
let totalRecoveredElement = document.querySelector(".total-recovered span");

coronavirus
  .getNewConfirmed()
  .then((data) => (newConfirmedElement.innerHTML = data))
  .catch((err) => console.error(new Error(err)));

coronavirus
  .getTotalConfirmed()
  .then((data) => (totalConfirmedElement.innerHTML = data))
  .catch((err) => console.error(new Error(err)));

coronavirus
  .getnewDeaths()
  .then((data) => (newDeathsElement.innerHTML = data))
  .catch((err) => console.error(new Error(err)));

coronavirus
  .getTotalDeaths()
  .then((data) => (totalDeathsElement.innerHTML = data))
  .catch((err) => console.error(new Error(err)));

coronavirus
  .getnewRecovered()
  .then((data) => (newRecoveredElement.innerHTML = data))
  .catch((err) => console.error(new Error(err)));

coronavirus
  .getTotalRecovered()
  .then((data) => (totalRecoveredElement.innerHTML = data))
  .catch((err) => console.error(new Error(err)));
f