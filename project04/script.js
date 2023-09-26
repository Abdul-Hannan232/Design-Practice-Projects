//function to fetch data ( currency rates)
function calculateRate() {
  fetch("items.json").then((res) => console.log(res));
}

calculateRate();
