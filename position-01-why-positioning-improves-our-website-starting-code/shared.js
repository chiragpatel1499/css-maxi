var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modalNoButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block"
    // modal.className='open'; this will overwrite previous class
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

backdrop.addEventListener("click", function () {
  // backdrop.style.display='none';
  // modal.style.display = 'none';
  // mobileNav.style.display='none'
  closeModal();
  mobileNav.classList.remove("open");
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}
toggleButton.addEventListener("click", function () {
  // mobileNav.style.display='block';
  // backdrop.style.display='block';
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
