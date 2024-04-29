const toggleMenu = () => {
  const barsIcon = document.querySelector(".bars-icon");
  const closeIcon = document.querySelector(".xmark-icon");
  const navMenu = document.querySelector(".nav-menu");

  barsIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  navMenu.style.opacity = navMenu.style.opacity === "0" ? "1" : "0";
};
