const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestionsBox");

let timer;

searchInput.addEventListener("keyup", () => {
  clearTimeout(timer);

  timer = setTimeout(async () => {
    const query = searchInput.value.trim();

    if (query === "") {
      suggestionsBox.innerHTML = "";
      return;
    }

    try {
      const res = await fetch(`/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();

      suggestionsBox.innerHTML = "";

      if (data.length === 0) {
        suggestionsBox.innerHTML = `<div class="suggestion-item">No results found</div>`;
        return;
      }

      data.forEach((item) => {
        suggestionsBox.innerHTML += `
          <div class="suggestion-item">
            <a href="/listings/${item._id}">
              <strong>${item.title}</strong><br>
              ${item.location}, ${item.country}
            </a>
          </div>
        `;
      });
    } catch (err) {
      console.log(err);
    }
  }, 300);
});

document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
    suggestionsBox.innerHTML = "";
  }
});
