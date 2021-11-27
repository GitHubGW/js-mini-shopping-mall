const handleFetch = async () => {
  const { items } = await (await fetch("./data/data.json")).json();
  handleDisplayItems(items);
  handleSetEventListeners(items);
};

const handleDisplayItems = (items) => {
  const itemsContainer = document.querySelector(".items");
  const itemArray = items.map((item) => handleCreateHTMLString(item));
  itemsContainer.innerHTML = itemArray.join();
};

const handleCreateHTMLString = (item) => {
  return `
    <li class="item">
      <img src="${item.imageUrl}" alt="${item.type}" class="item__thumbnail" />
      <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
  `;
};

const handleButtons = (event, items) => {
  const {
    target: {
      dataset: { key, value },
    },
  } = event;
  if (key === undefined || value === undefined) {
    return;
  }

  const filteredItems = items.filter((item) => item.type === value || item.color === value);
  handleDisplayItems(filteredItems);
};

const handleSetEventListeners = (items) => {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => handleDisplayItems(items));
  buttons.addEventListener("click", (event) => handleButtons(event, items));
};

handleFetch();
