const year = document.querySelector("#year");

document.addEventListener("DOMContentLoaded", () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  year.textContent = "2025";
});
