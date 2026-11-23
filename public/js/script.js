// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });
})();

// WanderStay Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("wanderstay-theme") || "light";

document.documentElement.setAttribute("data-theme", savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    if (themeToggle) {
      themeToggle.innerHTML =
        savedTheme === "dark"
          ? '<i class="fa-solid fa-sun"></i>'
          : '<i class="fa-solid fa-moon"></i>';
    }
    localStorage.setItem("wanderstay-theme", newTheme);
    themeToggle.innerHTML =
      newTheme === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
  });
}

// WanderStay - Recently Viewed Properties
(() => {
  const listing = document.getElementById("recently-viewed-listing");

  if (!listing) return;

  const property = {
    id: listing.dataset.id,
    title: listing.dataset.title,
    image: listing.dataset.image,
    price: Number(listing.dataset.price),
    url: listing.dataset.url,
    viewedAt: Date.now(),
  };

  let recentlyViewed = JSON.parse(
    localStorage.getItem("wanderstay-recently-viewed") || "[]",
  );

  // Remove duplicate entries
  recentlyViewed = recentlyViewed.filter((item) => item.id !== property.id);

  // Add the current property to the beginning
  recentlyViewed.unshift(property);

  // Keep only the latest 8 properties
  recentlyViewed = recentlyViewed.slice(0, 8);

  localStorage.setItem(
    "wanderstay-recently-viewed",
    JSON.stringify(recentlyViewed),
  );
})();
