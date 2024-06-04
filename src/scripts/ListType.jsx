const ListItem = (category) => (
  <li class="filter__type-item">
    <button class="filter__type-button" type="button">
      {category}
    </button>
  </li>
);

export const ListType = (categories) => (
  <ul class="filter__type-list">{categories.map(ListItem)}</ul>
);
