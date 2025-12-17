const filters = document.querySelectorAll('.filters');

filters.forEach((filter) => {
    filter.addEventListener('click', () => {
        const category = filter.dataset.category;
        window.location.href = `/listings?category=${category}`;
    });
});

// filter select logic
const activeFilter = document.querySelector(".active-filter");

if (activeFilter) {
  activeFilter.scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center"
  });
}