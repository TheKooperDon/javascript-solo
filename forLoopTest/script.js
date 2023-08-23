document.addEventListener("DOMContentLoaded", function () {
  // Get the ul element where items will be added
  const itemList = document.getElementById("item-list");

  // Example data for the loop
  const itemsData = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  // Loop through the itemsData array and create list items
  for (let i = 0; i < itemsData.length; i++) {
    const item = document.createElement("li");
    item.classList.add("item");
    item.textContent = itemsData[i];
    itemList.appendChild(item);
  }
});
