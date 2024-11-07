const input = document.querySelector("#name");
const search = document.querySelector("#search");
const tableBody = document.querySelector("#table tbody");

function getApi() {
  const renspose = "https://restcountries.com/v3.1/all";
  fetch(renspose)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

search.addEventListener("click", getApi);

