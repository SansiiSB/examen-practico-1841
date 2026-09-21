export default (() => {
  const buttonSidebarClose = document.querySelector(".sidebar-header-title button");
  const sidebar = document.querySelector(".sidebar");

  buttonSidebarClose.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
  });
})();
