$(document).ready(function () {
  const flavor1 = "Vanilla";
  const flavor2 = "Chocolate";
  const flavor3 = "Strawberry";
  const flavor4 = "RockyRoad";
  let flavorArray = [flavor1, flavor2, flavor3, flavor4];
  flavorArray.forEach(function (element) {
    $("ul#flavor-list").append('<li>' + element + '</li>');
  });
});