fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    let daily = document.getElementById("daily");
    let weekly = document.getElementById("weekly");
    let monthly = document.getElementById("monthly");
    let currentElements = document.querySelectorAll("#current");
    let previousElements = document.querySelectorAll("#previous");

    daily.addEventListener("click", () => {
      currentElements.forEach((element, index) => {
        element.innerHTML = data[index].timeframes.daily.current;
      });

      previousElements.forEach((element, index) => {
        element.innerHTML = data[index].timeframes.daily.previous;
      });
    });

    weekly.addEventListener("click", () => {
      currentElements.forEach((element, index) => {
        element.innerHTML = data[index].timeframes.weekly.current;
      });

      previousElements.forEach((element, index) => {
        element.innerHTML = data[index].timeframes.weekly.previous;
      });
    });

    monthly.addEventListener("click", () => {
      currentElements.forEach((element, index) => {
        element.innerHTML = data[index].timeframes.monthly.current;
      });

      previousElements.forEach((element, index) => {
        element.innerHTML = data[index].timeframes.monthly.previous;
      });
    });
  })
  .catch((error) => console.error(error));
