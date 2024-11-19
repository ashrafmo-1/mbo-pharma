const nav = () => {
  const header = document.getElementById("header");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      header.classList.add("pinned");
    } else {
      header.classList.remove("pinned");
    }
  };

  window.addEventListener("scroll", handleScroll);
};
nav();

// component fn
function loadSection(elementId, filePath) {
  fetch(filePath).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load ${filePath}`);
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById(elementId).innerHTML = html;
    })
    .catch((error) => console.error(error));
}

loadSection("navigation", "../constants/nav.html");
loadSection("hero", "../home/hero.html");
loadSection("about", "../home/aboutus.html");
loadSection("products", "../home/products.html");